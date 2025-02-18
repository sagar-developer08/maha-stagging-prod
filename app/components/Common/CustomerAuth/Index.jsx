import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LoginComp from "../../Common/CustomerAuth/Login/Index";
import RegisterComp from "../../Common/CustomerAuth/Register/Index";
import ForgotPassForm from "../../Common/CustomerAuth/ForgetPassForm/Index";
import "./styles.scss";
import { toast } from "react-toastify";
import useAuthApi from "../../../api/useAuthApi";
import { useDispatch } from "react-redux";
import { LoginUser, registerInfo } from "../../../store/auth";
import useZohoAPIs from "../../../api/Zoho/useZohoAPIs";
import { useRouter } from "next/navigation";
function Index(props) {
  const [logIn, setlogIn] = useState(true);
  const [ForgotPassword, setForgotPassword] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  // api
  const { PostRegister, PostLogin } = useAuthApi();
  const { PostZohoCustomer } = useZohoAPIs();

  const backGO = () => {
    setlogIn(true);
    setForgotPassword(false);
    router.push("/");
  };
  // Register User
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

  const handleRegisterChange = (e) => {
    setRegisterFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    let UpdatedData = { ...RegisterformData };

    UpdatedData.role = "Customer";

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
    console.log("🚀 ~ handleRegisterSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Registration Successfull, Pending Approval ");

      setIsRegisterSending(false);

      // const payload = {
      //   first_name: response?.data?.user.first_name,
      //   last_name: response?.data?.user.last_name,
      //   email: response?.data?.user.email,
      //   phone: response?.data?.user.phone,
      //   role: UpdatedData.role,
      // };
      // const zohoResponse = await PostZohoCustomer(payload);
      // console.log("🚀 ~ handleRegisterSubmit ~ zohoResponse:", zohoResponse);

      setRegisterFormData({ ...initData });
      setlogIn(true);
    } else {
      setIsRegisterSending(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };

  // Login User

  const [LogFormData, setLogFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsloadng] = useState(false);

  const handleChange = (e) => {
    setLogFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsloadng(true);
    //! validation
    if (!LogFormData?.email) {
      setIsloadng(false);
      toast.error("Please Enter Valid Email");
      return;
    }
    if (!LogFormData?.password) {
      setIsloadng(false);
      toast.error("Please Enter Valid Password");
      return;
    }

    const response = await PostLogin(LogFormData);
    console.log("🚀 ~ handleSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      let payload = {
        userData: response?.data?.user,
        token: response?.data?.token,
      };

      dispatch(LoginUser(payload));
      setIsloadng(false);
      toast.success("Logged In  Successfull");
      setLogFormData({ email: "", password: "" });
      props?.onHide();
    } else {
      setIsloadng(false);
      toast.error(response?.data?.error || "Invalid Credentials");
    }
  };

  return (
    <div className="CustomerRegister3929">
      <Modal
        {...props}
        size="lg"
        fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ItemWrapperCust">
            {ForgotPassword ? (
              <ForgotPassForm
                onhide={props?.onHide}
                ForgotPassword={ForgotPassword}
                setForgotPassword={setForgotPassword}
                backGO={backGO}
              />
            ) : logIn ? (
              <LoginComp
                setlogIn={setlogIn}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                setForgotPassword={setForgotPassword}
              />
            ) : (
              <RegisterComp
                setlogIn={setlogIn}
                formData={RegisterformData}
                setFormData={setRegisterFormData}
                handleChange={handleRegisterChange}
                handleRegisterSubmit={handleRegisterSubmit}
                isRegisterSending={isRegisterSending}
              />
            )}
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
    <Button onClick={props.onHide}>Close</Button>
  </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Index;
