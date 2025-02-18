import React, { useEffect, useState } from "react";
import Image from "next/image";
import StepProgress from "../../../../../Common/Steps/Index";
import RegisterForm from "../RegisterFrom/Index";
import EmailVerify from "../EmailVerify/Index";
import CreatorForm from "../CreatorForm/Index";
import IduploadForm from "../IduploadsForm/Index";
// import thumb from "../../../../../../assets/About/member1.png";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuthApi from "../../../../../../api/useAuthApi";
import { useDispatch, useSelector } from "react-redux";
import { registerInfo } from "../../../../../../store/auth";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
function Index(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [Currentb2bType, setCurrentb2bType] = useState("individual");
  const [Selectedb2bType, setSelectedb2bType] = useState(null);
  const [formNext, setFormNext] = useState(1);
  const [UrlDocOpen, setUrlDocOpen] = useState(false);
  const [steps, setSteps] = useState({ current: 1, total: 2, progress: 50 });
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.auth);
  const router = useRouter();
  const [formTile, setFormTitle] = useState({
    creator: "Content Creator Registration",
    individual: "B2B Individual Registration",
    company: "B2B Company Registration",
  });

  // api
  const { PostRegister, PostUploadId, PostVerifyOTP } = useAuthApi();

  //# Register User
  let initData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    vrify_password: "",
    role: "",
  };
  const [RegisterformData, setRegisterFormData] = useState({ ...initData });
  const [isRegisterSending, setIsRegisterSending] = useState(false);
  const [RegisterComplete, setRegisterComplete] = useState(false);
  // userResponse for id
  const [RegUserResp, setRegUserResp] = useState();

  const handleRegisterChange = (e) => {
    setRegisterFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    let UpdatedData = { ...RegisterformData };

    if (Currentb2bType == "creator") {
      UpdatedData.role = "B2B-Influencer";
    } else if (Currentb2bType == "individual") {
      UpdatedData.role = "B2B-Individual";
    } else if (Currentb2bType == "company") {
      UpdatedData.role = "B2B-company";
    }

    setIsRegisterSending(true);
    e.preventDefault();

    //! validation
    if (!UpdatedData.first_name) {
      setIsRegisterSending(false);
      toast.error("Please Enter First Name");
      return;
    }
    if (!UpdatedData.last_name) {
      setIsRegisterSending(false);
      toast.error("Please Enter Last Name");
      return;
    }
    if (!UpdatedData.email) {
      setIsRegisterSending(false);
      toast.error("Please Enter Email Address");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(UpdatedData?.email)) {
      setIsRegisterSending(false);
      toast.error("Email is Invalid");
      return;
    }
    if (!UpdatedData.phone) {
      setIsRegisterSending(false);
      toast.error("Please Enter Phone No");
      return;
    }
    if (!UpdatedData.password) {
      setIsRegisterSending(false);
      toast.error("Please Enter A Valid Password");
      return;
    }
    if (UpdatedData.password !== UpdatedData?.vrify_password) {
      setIsRegisterSending(false);
      toast.error("Please Enter Matching Password");
      return;
    }

    const response = await PostRegister(UpdatedData);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Registration Successfull, Pending Approval ");
      setRegisterComplete(true);
      // dispatch(registerInfo(response?.data));
      setRegUserResp(response?.data);
      // setRegisterFormData({ ...initData });
      setIsRegisterSending(false);

      if (formNext == 2) {
        if (Currentb2bType == "creator") {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 50,
            total: 3,
          }));
          return;
        } else {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 100,
            total: 2,
          }));
        }
      }
      setFormNext(formNext + 1);
    } else {
      setIsRegisterSending(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };

  // #Verify TOP
  const [OPTFormData, setOPTFormData] = useState({
    email: "",
    enteredOtp: "",
  });
  const [isOTPSending, setIsOTPSending] = useState(false);
  const [isOTPComplete, setisOTPComplete] = useState(false);

  const handleOTPChange = async (e) => {
    setOPTFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOTPSubmit = async (e) => {
    let UpdatedPayload = { ...OPTFormData };
    e.preventDefault();
    setIsOTPSending(true);

    UpdatedPayload.email = RegUserResp?.user?.email;
    //! validation
    if (!UpdatedPayload?.enteredOtp) {
      setIsOTPSending(false);
      toast.error("Please Enter a valid OTP");
      return;
    }
    if (!UpdatedPayload?.email) {
      setIsOTPSending(false);
      toast.error("Invalid Email, Please Try again later");
      return;
    }

    const response = await PostVerifyOTP(UpdatedPayload);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Email Varified");
      setIsOTPSending(false);
      setisOTPComplete(true);
      if (formNext == 2) {
        if (Currentb2bType == "creator") {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 50,
            total: 3,
          }));
          return;
        } else {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 100,
            total: 2,
          }));
        }
      }
      setFormNext(formNext + 1);
    } else {
      setIsOTPSending(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };

  //# upload ID
  // sending to backend APi
  const [UserIdsUpload, setUserIdsUpload] = useState({});
  // for read only
  const [UserIdsUploadForRead, setUserIdsUploadForRead] = useState({});
  // cloudinary imgs
  const [UploadedUrls, setUploadedUrls] = useState("");
  const [currentFile, setCurrentFile] = useState("");
  const [TotalUploads, setTotalUploads] = useState({
    trade_lic: "",
    trn_cert: "",
    visa_id: "",
    passport_id: "",
    emt_id: "",
  });

  const [UploadTermsAgree, setUploadTermsAgree] = useState(false);
  const [isIdUploading, setIsIdUploading] = useState(false);
  const [IdUploadComplete, setIdUploadComplete] = useState(false);

  const handleIDupload = (e) => {
    setUserIdsUpload((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
    // for Read Only
    setUserIdsUploadForRead((prev) => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const submitDataDOcs = async (payload) => {
    const response = await PostUploadId(payload);
    // debugger;
    // setIsIdUploading(false);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Documents Uploaded, Please wait for Verification");
      setUserIdsUpload({});
      setUserIdsUploadForRead({});
      setIsIdUploading(false);
      {
        UrlDocOpen && router.push(`/${lang}/b2b`);
      }
      props?.onhide();
    } else {
      setIsIdUploading(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };
  const handleIDUploadsSubmit = async (e) => {
    e.preventDefault();
    setIsIdUploading(true);

    let UserID = searchParams.get("user");
    let CompayID = searchParams.get("company");

    // setTimeout(function () {
    //   toast.success("Documents Uploaded, Please wait for varification");
    //   setIsIdUploading(false);
    //   router.push(`/${lang}/b2b`);
    //   props?.onhide();
    // }, 4000);

    let payload = {};

    if (UserID) {
      payload.userId = UserID;
      payload.emt_id = TotalUploads.emt_id;
      payload.passport_id = TotalUploads.passport_id;
    } else if (CompayID) {
      payload.userId = CompayID;
      payload.emt_id = TotalUploads.emt_id;
      payload.passport_id = TotalUploads.passport_id;
      payload.trade_license = TotalUploads.trade_lic;
      payload.trn_certificate = TotalUploads.trn_cert;
      payload.owner_passport = TotalUploads.passport_id;
      payload.visa_copy = TotalUploads.visa_id;
    } else {
      payload.userId = RegUserResp?.user?.id;
      payload.emt_id = TotalUploads.emt_id;
      payload.passport_id = TotalUploads.passport_id;
      payload.trade_license = TotalUploads.trade_lic;
      payload.trn_certificate = TotalUploads.trn_cert;
      payload.owner_passport = TotalUploads.passport_id;
      payload.visa_copy = TotalUploads.visa_id;
    }
    console.log("payload: ", payload);

    //! validation

    if (UserID || Currentb2bType !== "company") {
      if (UserID && !payload?.emt_id) {
        setIsIdUploading(false);
        toast.error("Please Upload Your Emirates ID / National ID");
        return;
      }
      if (UserID && !payload?.passport_id) {
        setIsIdUploading(false);
        toast.error("Please Upload Passport ID");
        return;
      }

      if (!UploadTermsAgree) {
        setIsIdUploading(false);
        toast.error("Please Accept to our Terms");

        return;
      }

      submitDataDOcs(payload);
      //# User End
    } else if (CompayID || Currentb2bType == "company") {
      //@ Company Validation

      if (CompayID && !payload?.trade_license) {
        setIsIdUploading(false);
        toast.error("Please Upload Trade License");
        return;
      }
      if (CompayID && !payload?.trn_certificate) {
        setIsIdUploading(false);
        toast.error("Please Upload TRN Certificate");
        return;
      }
      // if (CompayID && !payload?.visa_copy) {
      //   setIsIdUploading(false);
      //   toast.error("Please Upload VISA Copy");
      //   return;
      // }
      // if (CompayID && !payload?.owner_passport) {
      //   setIsIdUploading(false);
      //   toast.error("Please Upload Owner Passport ID");
      //   return;
      // }
      if (CompayID && !payload?.emt_id) {
        setIsIdUploading(false);
        toast.error("Please Upload Your Emirates ID / National ID");
        return;
      }
      if (!UploadTermsAgree) {
        setIsIdUploading(false);
        toast.error("Please Accept to our Terms");
        return;
      }

      submitDataDOcs(payload);
      //# Company End
    }

    // const formData = new FormData();

    // debugger;
    // formData.append("userId", payload?.user?.id);

    // console form data
    // const formProps = Object.fromEntries(formData);

    // let header = { headers: { "Content-Type": "multipart/form-data" } };
    // debugger;
  };
  // cretor form
  const [socailLinks, setSoicalLinks] = useState({});

  const searchParams = useSearchParams();

  useEffect(() => {
    let authQueryUser = searchParams.get("user");
    let authQueryCompany = searchParams.get("company");
    if (authQueryUser) {
      setSelectedb2bType("individual");
      setSteps({ current: 2, total: 2, progress: 100 });
      setUrlDocOpen(true);
    } else if (authQueryCompany) {
      setSelectedb2bType("company");
      setCurrentb2bType("company");
      setSteps({ current: 2, total: 2, progress: 100 });
      setUrlDocOpen(true);
    }
  }, []);

  return (
    <div className="generalB2BForm323d">
      <Container>
        {Selectedb2bType ? (
          <div className="FormsWrappper">
            <div className="progSteps mb-3">
              <StepProgress Step={steps?.progress} />
              <div className="currentStep">
                Step{steps?.current}/{steps?.total}
              </div>
            </div>
            {/* step 1 */}
            {steps?.current == 1 ? (
              <>
                {formNext == 1 ? (
                  <RegisterForm
                    Currentb2bType={Currentb2bType}
                    title={formTile?.[Currentb2bType]}
                    setFormNext={setFormNext}
                    formData={RegisterformData}
                    setFormData={setRegisterFormData}
                    handleChange={handleRegisterChange}
                    RegisterComplete={RegisterComplete}
                  />
                ) : formNext == 2 ? (
                  <EmailVerify
                    setFormNext={setFormNext}
                    title={"Email Verification"}
                    handleOTPChange={handleOTPChange}
                  />
                ) : null}

                <div className="BtnWrapper mt-4">
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      if (formNext == 1) {
                        setSelectedb2bType(null);
                        return;
                      }
                      setFormNext(formNext - 1);
                    }}
                  >
                    Back
                  </button>
                  {formNext == 2 ? (
                    <>
                      {isOTPComplete ? (
                        <button
                          className="btnNl btnNl-primary"
                          onClick={async (e) => {
                            if (formNext == 2) {
                              if (Currentb2bType == "creator") {
                                setSteps((prev) => ({
                                  ...prev,
                                  current: 2,
                                  progress: 50,
                                  total: 3,
                                }));
                                return;
                              } else {
                                setSteps((prev) => ({
                                  ...prev,
                                  current: 2,
                                  progress: 100,
                                  total: 2,
                                }));
                              }
                            }
                            setFormNext(formNext + 1);
                          }}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          className="btnNl btnNl-primary"
                          disabled={isOTPSending}
                          onClick={async (e) => {
                            await handleOTPSubmit(e);
                          }}
                        >
                          {isOTPSending ? "Verifying..." : "Verify"}
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {RegisterComplete ? (
                        <button
                          className="btnNl btnNl-primary"
                          onClick={async (e) => {
                            if (formNext == 2) {
                              if (Currentb2bType == "creator") {
                                setSteps((prev) => ({
                                  ...prev,
                                  current: 2,
                                  progress: 50,
                                  total: 3,
                                }));
                                return;
                              } else {
                                setSteps((prev) => ({
                                  ...prev,
                                  current: 2,
                                  progress: 100,
                                  total: 2,
                                }));
                              }
                            }
                            setFormNext(formNext + 1);
                          }}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          className="btnNl btnNl-primary"
                          disabled={isRegisterSending}
                          onClick={async (e) => {
                            await handleRegisterSubmit(e);
                          }}
                        >
                          {isRegisterSending ? "Sending..." : "Register"}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </>
            ) : steps?.total == 3 && steps?.current == 2 ? (
              <>
                <div className="Step2FOrms">
                  <CreatorForm
                    title={formTile?.[Currentb2bType]}
                    socailLinks={socailLinks}
                    setSoicalLinks={setSoicalLinks}
                  />
                </div>
                <div className="BtnWrapper mt-4">
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      //   if (formNext == 1) {
                      // setSelectedb2bType(null);
                      setFormNext(2);
                      setSteps((prev) => ({
                        ...prev,
                        current: 1,
                        progress: 33,
                      }));
                      return;
                      //   }
                      //   setFormNext(formNext - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="btnNl btnNl-primary"
                    onClick={() => {
                      if (
                        !socailLinks ||
                        Object.values(socailLinks)?.length < 4
                      ) {
                        toast.error(
                          "Please Enter atleast 4 Soical account links"
                        );
                        return;
                      }
                      setSteps((prev) => ({
                        ...prev,
                        current: 3,
                        progress: 100,
                      }));
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : steps?.total == 2 && steps?.current == 2 ? (
              <>
                <IduploadForm
                  currentStep={steps?.current}
                  title={formTile?.[Currentb2bType]}
                  Currentb2bType={Currentb2bType}
                  handleChange={handleIDupload}
                  UserIdsUploadForRead={UserIdsUploadForRead}
                  UploadTermsAgree={UploadTermsAgree}
                  setUploadTermsAgree={setUploadTermsAgree}
                  setUploadedUrls={setUploadedUrls}
                  UploadedUrls={UploadedUrls}
                  currentFile={currentFile}
                  setCurrentFile={setCurrentFile}
                  setTotalUploads={setTotalUploads}
                  TotalUploads={TotalUploads}
                  UrlDocOpen={UrlDocOpen}
                />
                <div className="BtnWrapper mt-4">
                  {UrlDocOpen ? null : (
                    <button
                      className="btnNl btnNl-secondary"
                      onClick={() => {
                        //   if (formNext == 1) {
                        // setSelectedb2bType(null);
                        if (isOTPComplete) {
                          return;
                        }

                        setFormNext(2);
                        setSteps((prev) => ({
                          ...prev,
                          current: 1,
                          progress: 33,
                        }));
                        return;
                        //   }
                        //   setFormNext(formNext - 1);
                      }}
                    >
                      Back
                    </button>
                  )}

                  <button
                    className="btnNl btnNl-primary"
                    onClick={(e) => {
                      //   DOne;
                      handleIDUploadsSubmit(e);
                    }}
                  >
                    {UrlDocOpen ? (
                      <>{isIdUploading ? "Uploading..." : "Upload"}</>
                    ) : (
                      <>{isIdUploading ? "Uploading..." : "Create Account"}</>
                    )}
                  </button>
                </div>
              </>
            ) : steps?.current == 3 ? (
              <>
                <IduploadForm
                  title={formTile?.[Currentb2bType]}
                  handleChange={handleIDupload}
                  UserIdsUploadForRead={UserIdsUploadForRead}
                  UploadTermsAgree={UploadTermsAgree}
                  setUploadTermsAgree={setUploadTermsAgree}
                />
                <div className="BtnWrapper mt-4">
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      //   if (formNext == 1) {
                      // setSelectedb2bType(null);
                      setFormNext(2);
                      setSteps((prev) => ({
                        ...prev,
                        current: 2,
                        progress: 66,
                      }));
                      return;
                      //   }
                      //   setFormNext(formNext - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="btnNl btnNl-primary"
                    onClick={(e) => {
                      //   DOne;
                      handleIDUploadsSubmit(e);
                    }}
                  >
                    {isIdUploading ? "Uploading..." : "Create Account"}
                  </button>
                </div>
              </>
            ) : null}

            {/*  */}
          </div>
        ) : (
          <Row className="gy-3">
            <Col lg={6}>
              <div className="FormWrapperB2b">
                <div className="form-title mb-3">
                  Welcome to Maha Balloon Adventures Dubai!
                </div>
                <p className="para mb-3">
                  Please sign in to your account to get fantastic offers,
                  discounts, and other benefits. You can make residual income by
                  signing up to the best referral and affiliate marketing
                  program with the best hot air balloon adventure company in
                  the Middle East.
                </p>

                <div className="typeOption">
                  <button
                    className={
                      Currentb2bType == "company"
                        ? "OptonBtn active"
                        : "OptonBtn"
                    }
                    onClick={() => {
                      setSteps({ current: 1, total: 2, progress: 50 });
                      setCurrentb2bType("company");
                    }}
                  >
                    B2B Company
                  </button>
                  <button
                    className={
                      Currentb2bType == "creator"
                        ? "OptonBtn active"
                        : "OptonBtn"
                    }
                    onClick={() => {
                      setSteps({ current: 1, total: 3, progress: 33 });
                      setCurrentb2bType("creator");
                    }}
                  >
                    Content Creator / Influencer
                  </button>
                  <button
                    className={
                      Currentb2bType == "individual"
                        ? "OptonBtn active"
                        : "OptonBtn"
                    }
                    onClick={() => {
                      setSteps({ current: 1, total: 2, progress: 50 });
                      setCurrentb2bType("individual");
                    }}
                  >
                    B2B Individual
                  </button>
                  <div className="BtnWrapper mt-4">
                    <button
                      className="btnNl btnNl-secondary"
                      onClick={() => {
                        props?.setlogIn(true);
                      }}
                    >
                      Back
                    </button>
                    <button
                      className="btnNl btnNl-primary"
                      onClick={() => {
                        setSelectedb2bType(Currentb2bType);
                        // TODO: Remove this state...
                        // setSteps({ current: 2, total: 2, progress: 100 });
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="imgWrapper">
                {/* <img src={thumb} alt="" /> */}
                <Image
                  src="/assets/About/member1.png"
                  alt="User"
                  width={500}
                  height={500}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Index;
