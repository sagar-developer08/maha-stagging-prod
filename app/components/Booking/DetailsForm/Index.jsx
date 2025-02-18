import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./styles.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";

function Index(props) {
  const { formData, handleDetailsFormData } = props;
  const packageval = useSelector((state) => state?.booking?.package);

  return (
    <div className="ContactFormDSds003j">
      <div className="sec-title mt-3">Contact Details</div>
      <Row className="step2Size">
        <Col className="colHalf" md={8}>
          <div className="wrapper mt-40">
            <Row>
              <Col xs="12" md="6">
                <div className="form_group mt-3">
                  <label htmlFor="name">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <div class="input-group">
                    <input
                      name="name"
                      type="text"
                      class="form-control inputField"
                      onChange={handleDetailsFormData}
                      value={formData?.name}
                    />
                  </div>
                </div>
              </Col>
              <Col xs="12" md="6">
                <div className="form_group mt-3">
                  <label htmlFor="last_name">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <div class="input-group">
                    <input
                      name="last_name"
                      type="text"
                      class="form-control inputField"
                      onChange={handleDetailsFormData}
                      value={formData?.last_name}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="12" md="6">
                <div className="form_group mt-3">
                  <label htmlFor="email">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <div class="input-group">
                    <input
                      name="email"
                      type="text"
                      class="form-control inputField"
                      onChange={handleDetailsFormData}
                      value={formData?.email}
                    />
                  </div>
                </div>
              </Col>
              <Col xs="12" md="6">
                <div className="form_group form_groupPhone mt-3">
                  <label htmlFor="phone">
                    Mobile Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="ae"
                    onChange={(value) => handleDetailsFormData(value, true)}
                    value={formData?.phone}
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* <button
            className="btnNl btnNl-primary mt-4"
            onClick={handlePassengerSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button> */}
        </Col>
        <Col md={4}>
          <div className="CardWrapper mt-40 mb-3">
            <div className="flightCard">
              <div className="sec-title">{packageval?.title}</div>
              <div className="details mt-3">
                <div className="title">Time</div>
                <p className="para mt-1">45 - 60 Minutes</p>
                <div className="title">Location</div>
                <p className="para mt-1">Margham Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
