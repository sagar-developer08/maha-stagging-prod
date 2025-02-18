import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import thumb from "../assets/Navbar/maha.png";
import "./styles.scss";

function Index(props) {
  const {
    handleChange,
    handlePhoneChange,
    handleRoleChange, // Add the role handler here
    handleSubmit,
    isRegisterLoading,
    registerComplete,
    formData,
    role,
  } = props;

  return (
    <div className="Step1DK3" id="register">
      <Row className="gy-5 gx-lg-5 align-items-center">
        <Col md={6}>
          <div className="StepForm">
            {props?.title}
            <div className="form_group mt-4">
              <label htmlFor="FName">First Name</label>
              <input
                className="inputField"
                name="FName"
                type="text"
                onChange={handleChange}
                value={formData?.FName}
              />
            </div>
            <div className="form_group mt-4">
              <label htmlFor="email">Email</label>
              <input
                className="inputField"
                name="LName"
                type="text"
                onChange={handleChange}
                value={formData?.LName}
              />
            </div>
            <div className="form_group mt-4">
              <label htmlFor="LName">Email</label>
              <input
                className="inputField"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData?.email}
              />
            </div>
            <div className="form_group mt-4">
              <label htmlFor="LName">Reference Code</label>
              <input
                className="inputField"
                name="ReferenceCode"
                type="text"
                onChange={handleChange}
                value={formData?.ReferenceCode}
              />
            </div>
            <div className="form_group form_groupPhone mt-4">
              <label htmlFor="whatsAppNo">WhatsApp Number</label>
              <PhoneInput
                defaultCountry="ae"
                onChange={(value) => handlePhoneChange(value)}
                value={formData?.phone}
              />
            </div>

            {/* Role selection dropdown */}
            {role ? (
              <div className="form_group mt-4">
                <label htmlFor="role">Select Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleRoleChange} // Call role change handler
                  className="inputField"
                >
                  <option value="" disabled>
                    -- Select a Role --
                  </option>

                  <option value="B2B-Individual">B2B Individual</option>
                  <option value="B2B-Influencer">B2B Influencer</option>
                  <option value="B2B-company">B2B Company</option>
                </select>
              </div>
            ) : null}

            <button className="btnNl btnNl-primary mt-5" onClick={handleSubmit}>
              {isRegisterLoading ? "Registering..." : "Submit"}
            </button>
          </div>
        </Col>
        <Col md={6}>
          <div className="imgWrapper">
            <img src={thumb} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
