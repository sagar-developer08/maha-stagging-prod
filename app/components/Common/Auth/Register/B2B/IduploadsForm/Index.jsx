import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import UploadWidget from "../../../../../Upload/Index";
import Details from "../../../../../Terms/Details/Index";
import "./styles.scss";
import Head from "next/head";
function Index(props) {
  const {
    handleChange,
    UserIdsUploadForRead,
    setUploadTermsAgree,
    UploadTermsAgree,
    Currentb2bType,
    setUploadedUrls,
    UploadedUrls,
    currentFile,
    setCurrentFile,
    setTotalUploads,
    TotalUploads,
    UrlDocOpen,
    currentStep,
  } = props;

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isViewTerms, setIsViewTerms] = useState(false);

  const handleCloseTerms = () => {
    setIsViewTerms(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js"; // Replace with your script URL
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const widgetRef = useRef();

  useEffect(() => {
    if (currentFile) {
      widgetRef.current.open();
    }
  }, [currentFile, isScriptLoaded]);

  useEffect(() => {
    if (UploadedUrls) {
      setTotalUploads((prev) => ({ ...prev, [currentFile]: UploadedUrls }));
    }
  }, [UploadedUrls]);

  if (!isScriptLoaded) {
    return <>Loading...</>;
  }
  return (
    <>
      <Head>
        <script
          fetchpriority="high"
          async
          defer
          src="https://upload-widget.cloudinary.com/latest/global/all.js"
          type="text/javascript"
        ></script>
      </Head>
      <div className="IdUploadForm390L" id="Upload_Form0s0">
        {UrlDocOpen ? (
          <>
            <div className="form-title mb-3">
              Please Proceed with Documentation Upload
            </div>
          </>
        ) : (
          <>
            <div className="form-title mb-3">{props?.title}</div>
            {/* <p className="para mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p> */}
          </>
        )}
        <div className="IdUploadsWrapper">
          <UploadWidget
            widgetRef={widgetRef}
            currentFile={currentFile}
            setUploadedUrls={setUploadedUrls}
          />
          {Currentb2bType == "company" ? (
            <Row>
              <Col xs={12}>
                <label htmlFor="trade_lic" className="form_group mt-4">
                  <label htmlFor="trade_lic">Trade License</label>
                  <Row className="w-100 gy-3">
                    <Col md={7}>
                      {TotalUploads?.trade_lic ? (
                        <img src={TotalUploads?.trade_lic} width={120} />
                      ) : (
                        <input
                          className="inputField"
                          name="trade_lic"
                          type="text"
                          placeholder=""
                          disabled
                        />
                      )}
                    </Col>
                    <Col md={5}>
                      <label
                        htmlFor="trade_lic"
                        className="FileUPloadWrapper"
                        onClick={async () => {
                          setCurrentFile("trade_lic");
                        }}
                      >
                        <label htmlFor="trade_lic">Upload(Image)</label>
                        {/* <input
                        // type="file"
                        id="trade_lic"
                        name="trade_lic"
                        // accept="image/*"
                        // onChange={handleChange}1
                      /> */}
                        <BsUpload />
                      </label>
                    </Col>
                  </Row>
                </label>
              </Col>
              <Col xs={12}>
                <div className="form_group mt-4">
                  <label htmlFor="trn_cert">TRN Certificate</label>
                  <Row className="w-100 gy-3">
                    <Col md={7}>
                      {TotalUploads?.trn_cert ? (
                        <img src={TotalUploads?.trn_cert} width={120} />
                      ) : (
                        <input
                          className="inputField"
                          name="trn_cert"
                          type="text"
                          placeholder=""
                          disabled
                        />
                      )}
                    </Col>
                    <Col md={5}>
                      <label
                        htmlFor="trn_cert"
                        className="FileUPloadWrapper"
                        onClick={async () => {
                          setCurrentFile("trn_cert");
                        }}
                      >
                        <label htmlFor="trn_cert">Upload(Image)</label>
                        {/* 
                      <input
                        type="file"
                        id="trn_cert"
                        name="trn_cert"
                        accept="image/*"
                        onChange={handleChange}
                      /> */}
                        <BsUpload />
                      </label>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12}>
                <div className="form_group mt-4">
                  <label htmlFor="visa_id">Visa Copy of Owner</label>
                  <Row className="w-100 gy-3">
                    <Col md={7}>
                      {TotalUploads?.visa_id ? (
                        <img src={TotalUploads?.visa_id} width={120} />
                      ) : (
                        <input
                          className="inputField"
                          name="visa_id"
                          type="text"
                          placeholder=""
                          disabled
                        />
                      )}
                    </Col>
                    <Col md={5}>
                      <label
                        htmlFor="visa_id"
                        className="FileUPloadWrapper"
                        onClick={async () => {
                          setCurrentFile("visa_id");
                        }}
                      >
                        <label htmlFor="visa_id">Upload(Image)</label>
                        {/* <input
                        type="file"
                        id="visa_id"
                        name="visa_id"
                        accept="image/*"
                        onChange={handleChange}
                      /> */}
                        <BsUpload />
                      </label>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col xs={12}>
              <div className="form_group mt-4">
                <label htmlFor="passport_id">
                  Passport Copy {Currentb2bType == "company" ? "of owner" : ""}
                </label>
                <Row className="w-100 gy-3">
                  <Col md={7}>
                    {TotalUploads?.passport_id ? (
                      <img src={TotalUploads?.passport_id} width={120} />
                    ) : (
                      <input
                        className="inputField"
                        name="passport_id"
                        type="text"
                        placeholder=""
                        disabled
                      />
                    )}
                  </Col>
                  <Col md={5}>
                    <label
                      htmlFor="passport_id"
                      className="FileUPloadWrapper"
                      onClick={async () => {
                        await setCurrentFile("passport_id");
                      }}
                    >
                      <label htmlFor="passport_id">Upload(Image)</label>
                      {/* <input
                      type="file"
                      id="passport_id"
                      name="passport_id"
                      accept="image/*"
                      onChange={handleChange}
                    /> */}
                      <BsUpload />
                    </label>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12}>
              <label htmlFor="emt_id" className="form_group mt-4">
                <label htmlFor="emt_id">
                  Emirates ID / National ID{" "}
                  {Currentb2bType == "company" ? "of owner" : ""}
                </label>
                <Row className="w-100 gy-3">
                  <Col md={7}>
                    {TotalUploads?.emt_id ? (
                      <img src={TotalUploads?.emt_id} width={120} />
                    ) : (
                      <input
                        className="inputField"
                        name="emt_id"
                        type="text"
                        placeholder=""
                        disabled
                      />
                    )}
                  </Col>
                  <Col md={5}>
                    <label
                      htmlFor="emt_id"
                      className="FileUPloadWrapper"
                      onClick={async () => {
                        setCurrentFile("emt_id");
                      }}
                    >
                      <label htmlFor="emt_id">Upload(Image)</label>
                      {/* <input
                      type="file"
                      id="emt_id"
                      name="emt_id"
                      accept="image/*"
                      onChange={handleChange}
                    /> */}
                      <BsUpload />
                    </label>
                  </Col>
                </Row>
              </label>
            </Col>
          </Row>

          {/* Terms */}
          <label htmlFor="terms" className="termsGroup mt-4">
            <input
              type="checkbox"
              name="terms"
              onChange={(e) => setUploadTermsAgree(e.target.checked)}
            />
            <label htmlFor="terms">
              <div className="d-flex align-items-center">
                <div>I accept&nbsp;</div>
                <div
                  className="TermsModal"
                  onClick={() => setIsViewTerms(true)}
                >
                  Terms and Conditions
                </div>
              </div>
            </label>
          </label>
        </div>
      </div>
      <Modal
        show={isViewTerms}
        onHide={handleCloseTerms}
        size="lg"
        fullscreen={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Details />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseTerms}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Index;
