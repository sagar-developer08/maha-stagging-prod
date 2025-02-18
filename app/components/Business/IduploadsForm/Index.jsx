import React from "react";
import "./styles.scss";
import { Col, Row } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import placeHlder from "../assets/placeholder.png";
function Index(props) {
  const {
    handleChange,
    UserIdsUploadForRead,
    setUploadTermsAgree,
    UploadTermsAgree,
    Currentb2bType,
    isIdUploading,
    handleIDUploadsSubmit,
  } = props;
  return (
    <div className="IdUploadForm390L">
      <div className="form-title mb-3">Upload Documents For Verification</div>

      <div className="IdUploadsWrapper">
        {Currentb2bType == "B2B-company" ? (
          <Row>
            <Col xs={12}>
              <label htmlFor="trade_lic" className="form_group mt-4">
                <label htmlFor="trade_lic">Trade License</label>
                <Row className="w-100 gy-3">
                  <Col md={2}>
                    {UserIdsUploadForRead?.trade_lic ? (
                      <a
                        href={UserIdsUploadForRead?.trade_lic}
                        target="__blank"
                      >
                        <div className="ImgUploadSec">
                          <img
                            src={UserIdsUploadForRead?.trade_lic}
                            height={200}
                            width={200}
                          />
                        </div>
                      </a>
                    ) : (
                      <a target="__blank">
                        <div className="ImgUploadSec">
                          <img src={placeHlder} height={200} width={200} />
                        </div>
                      </a>
                    )}
                  </Col>
                  <Col md={5}>
                    <input
                      className="inputField"
                      name="trade_lic"
                      type="text"
                      placeholder=""
                      defaultValue={UserIdsUploadForRead?.trade_lic}
                      disabled
                    />
                  </Col>
                  <Col md={5}>
                    <label htmlFor="trade_lic" className="FileUPloadWrapper">
                      <label htmlFor="trade_lic">Upload(Image)</label>
                      <input
                        type="file"
                        id="trade_lic"
                        name="trade_lic"
                        accept="image/*"
                        onChange={handleChange}
                      />
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
                  <Col md={2}>
                    {UserIdsUploadForRead?.trn_cert ? (
                      <a href={UserIdsUploadForRead?.trn_cert} target="__blank">
                        <div className="ImgUploadSec">
                          <img
                            src={UserIdsUploadForRead?.trn_cert}
                            height={200}
                            width={200}
                          />
                        </div>
                      </a>
                    ) : (
                      <a target="__blank">
                        <div className="ImgUploadSec">
                          <img src={placeHlder} height={200} width={200} />
                        </div>
                      </a>
                    )}
                  </Col>
                  <Col md={5}>
                    <input
                      className="inputField"
                      name="trn_cert"
                      type="text"
                      placeholder=""
                      defaultValue={UserIdsUploadForRead?.trn_cert}
                      disabled
                    />
                  </Col>
                  <Col md={5}>
                    <label htmlFor="trn_cert" className="FileUPloadWrapper">
                      <label htmlFor="trn_cert">Upload(Image)</label>
                      <input
                        type="file"
                        id="trn_cert"
                        name="trn_cert"
                        accept="image/*"
                        onChange={handleChange}
                      />
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
                  <Col md={2}>
                    {UserIdsUploadForRead?.visa_id ? (
                      <a href={UserIdsUploadForRead?.visa_id} target="__blank">
                        <div className="ImgUploadSec">
                          <img
                            src={UserIdsUploadForRead?.visa_id}
                            height={200}
                            width={200}
                          />
                        </div>
                      </a>
                    ) : (
                      <a target="__blank">
                        <div className="ImgUploadSec">
                          <img src={placeHlder} height={200} width={200} />
                        </div>
                      </a>
                    )}
                  </Col>
                  <Col md={5}>
                    <input
                      className="inputField"
                      name="visa_id"
                      type="text"
                      placeholder=""
                      defaultValue={UserIdsUploadForRead?.visa_id}
                      disabled
                    />
                  </Col>
                  <Col md={5}>
                    <label htmlFor="visa_id" className="FileUPloadWrapper">
                      <label htmlFor="visa_id">Upload(Image)</label>
                      <input
                        type="file"
                        id="visa_id"
                        name="visa_id"
                        accept="image/*"
                        onChange={handleChange}
                      />
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
                Passport Copy{" "}
                {Currentb2bType == "B2B-company" ? "of owner" : ""}
              </label>
              <Row className="w-100 gy-3">
                <Col md={2}>
                  {UserIdsUploadForRead?.passport_id ? (
                    <a
                      href={UserIdsUploadForRead?.passport_id}
                      target="__blank"
                    >
                      <div className="ImgUploadSec">
                        <img
                          src={UserIdsUploadForRead?.passport_id}
                          height={200}
                          width={200}
                        />
                      </div>
                    </a>
                  ) : (
                    <a target="__blank">
                      <div className="ImgUploadSec">
                        <img src={placeHlder} height={200} width={200} />
                      </div>
                    </a>
                  )}
                </Col>
                <Col md={5}>
                  <input
                    className="inputField"
                    name="passport_id"
                    type="text"
                    placeholder=""
                    defaultValue={UserIdsUploadForRead?.passport_id}
                    disabled
                  />
                </Col>
                <Col md={5}>
                  <label htmlFor="passport_id" className="FileUPloadWrapper">
                    <label htmlFor="passport_id">Upload(Image)</label>
                    <input
                      type="file"
                      id="passport_id"
                      name="passport_id"
                      accept="image/*"
                      onChange={handleChange}
                    />
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
                {Currentb2bType == "B2B-company" ? "of owner" : ""}
              </label>
              <Row className="w-100 gy-3">
                <Col md={2}>
                  {UserIdsUploadForRead?.emt_id ? (
                    <a href={UserIdsUploadForRead?.emt_id} target="__blank">
                      <div className="ImgUploadSec">
                        <img
                          src={UserIdsUploadForRead?.emt_id}
                          height={200}
                          width={200}
                        />
                      </div>
                    </a>
                  ) : (
                    <a target="__blank">
                      <div className="ImgUploadSec">
                        <img src={placeHlder} height={200} width={200} />
                      </div>
                    </a>
                  )}
                </Col>
                <Col md={5}>
                  <input
                    className="inputField"
                    name="emt_id"
                    type="text"
                    placeholder=""
                    defaultValue={UserIdsUploadForRead?.emt_id}
                    disabled
                  />
                </Col>
                <Col md={5}>
                  <label htmlFor="emt_id" className="FileUPloadWrapper">
                    <label htmlFor="emt_id">Upload(Image)</label>
                    <input
                      type="file"
                      id="emt_id"
                      name="emt_id"
                      accept="image/*"
                      onChange={handleChange}
                    />
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
          <label htmlFor="terms">I accept terms and conditions</label>
        </label>

        <button
          className="btnNl btnNl-primary mt-3"
          onClick={handleIDUploadsSubmit}
        >
          {isIdUploading ? "Uploading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Index;
