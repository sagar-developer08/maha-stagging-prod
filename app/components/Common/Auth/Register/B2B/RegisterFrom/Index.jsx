import React, { useState } from "react";
import "./styles.scss";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";

function Index(props) {
  const {
    Currentb2bType,
    handleChange,
    formData,
    RegisterComplete,
    setFormData,
  } = props;

  return (
    <div className="registerForm3232d">
      {RegisterComplete ? (
        <div className="form-title mb-3">Registration Successfull</div>
      ) : null}

      <div className="form-title mb-1">{props?.title}</div>

      {/* <p className="para mb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p> */}
      <div className="regFormWrapper">
        <Row>
          {Currentb2bType == "company" ? (
            <Col md={12}>
              <div className="form_group mt-4">
                <label htmlFor="first_name">Company Name</label>
                <input
                  className="inputField"
                  name="company_name"
                  type="text"
                  placeholder=""
                  disabled={RegisterComplete}
                  onChange={handleChange}
                  value={formData?.company_name}
                />
              </div>
            </Col>
          ) : null}
          <Col lg={6}>
            <div className="form_group mt-4">
              <label htmlFor="first_name">First Name</label>
              <input
                className="inputField"
                name="first_name"
                type="text"
                placeholder=""
                disabled={RegisterComplete}
                onChange={handleChange}
                value={formData?.first_name}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="form_group mt-4">
              <label htmlFor="last_name">Last Name</label>
              <input
                className="inputField"
                name="last_name"
                type="text"
                placeholder=""
                onChange={handleChange}
                disabled={RegisterComplete}
                value={formData?.last_name}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="form_group mt-4">
              <label htmlFor="email">Email</label>
              <input
                className="inputField"
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                onChange={handleChange}
                disabled={RegisterComplete}
                value={formData?.email}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="form_group form_groupPhone mt-4">
              <label htmlFor="Mobile">Mobile Number</label>
              <PhoneInput
                defaultCountry="ae"
                value={formData?.phone}
                onChange={(phone) =>
                  setFormData((prev) => ({ ...prev, ["phone"]: phone }))
                }
                disabled={RegisterComplete}
              />
            </div>
            {/* <div className="form_group mt-4">
              <label htmlFor="phone">Mobile Number</label>
              <input
                className="inputField"
                name="phone"
                type="number"
                placeholder="(+971)"
                onChange={handleChange}
                disabled={RegisterComplete}
                value={formData?.phone}
              />
            </div> */}
          </Col>
          <Col lg={12}>
            <div className="form_group mt-4">
              <label htmlFor="password">Password</label>
              <input
                className="inputField"
                name="password"
                type="password"
                placeholder=""
                onChange={handleChange}
                disabled={RegisterComplete}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="form_group mt-4">
              <label htmlFor="vrify_password">Verify Password</label>
              <input
                className="inputField"
                name="vrify_password"
                type="password"
                placeholder=""
                onChange={handleChange}
                disabled={RegisterComplete}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
