import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import "./styles.scss";
import { useSelector } from "react-redux";
function Index(props) {
  const {
    loading,
    formData,
    handleAddressFormData,
    hanldeSubmitData,
    adultAmount,
    childAmount,
    lastSubmit,
    referalCode,
    setreferalCode,
    checkOutAmont,
    isDoubledWeight,
  } = props;
  const packageval = useSelector((state) => state?.booking?.package);
  let RefCode = localStorage.getItem("referral_code");
  return (
    <div className="AddressFormr903Dkfds">
      <Row className="step2Size3">
        <Col className="colHalf" md={8}>
          <div className="wrapper mt-40">
            <div className="sec-title">Pickup Details</div>
            <Row>
              <Col xs={12}>
                <div className="form_group mt-4">
                  <label>Please enter your address</label>
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group mt-4">
                  <label htmlFor="country">Country</label>
                  <input
                    className="inputField"
                    type="text"
                    name="country"
                    value={formData?.country}
                    placeholder="UAE"
                    onChange={handleAddressFormData}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group mt-4">
                  <label htmlFor="city">City</label>
                  <input
                    className="inputField"
                    type="text"
                    name="city"
                    value={formData?.city}
                    placeholder="Dubai"
                    onChange={handleAddressFormData}
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className="form_group mt-4">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="inputField"
                    type="text"
                    name="address"
                    value={formData?.address}
                    onChange={handleAddressFormData}
                    rows={4}
                  />
                </div>
              </Col>
              {/* {RefCode == "null" ? (
                <></>
              ) : (
                <Col xs={12}>
                  <div className="form_group mt-4">
                    <label htmlFor="address">Referral Code</label>
                    <input
                      className="inputField"
                      type="text"
                      value={RefCode}
                      disabled
                    />
                  </div>
                </Col>
              )} */}
            </Row>
          </div>
          {lastSubmit ? (
            <button className="btnNl btnNl-primary mt-4" disabled={true}>
              Submitted
            </button>
          ) : (
            <button
              className="btnNl btnNl-primary mt-4"
              onClick={hanldeSubmitData}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          )}
        </Col>
        <Col md={4}>
          <div className="CardWrapper mt-40">
            <div className="flightCard">
              <div className="sec-title">{packageval?.title}</div>
              <div className="details mt-3">
                <div className="title">Time</div>
                <p className="para mt-1">45 - 60 Minutes</p>
                <div className="title">Location</div>
                <p className="para mt-1">Margham Dubai, United Arab Emirates</p>
                <p className="para mt-1">Adults: {adultAmount} </p>
                <p className="para mt-1">Childs: {childAmount} </p>
                <p className="para mt-1">
                  Sub Total:
                  <strong> AED {checkOutAmont} </strong>
                  {isDoubledWeight && `(Weight Doubled)`}
                </p>
                <p style={{ fontSize: "12px", margin: "0" }}>
                  Price is Doubled for Passenger over 120KG{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="form_group mt-4">
            <label htmlFor="address">Referral Code</label>
            <input
              className="inputField"
              type="text"
              onChange={(e) => {
                setreferalCode(e.target.value);
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
