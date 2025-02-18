import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./styles.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";

function Index(props) {
  const {
    weightOption,
    setWeightOption,
    adultAmount,
    childAmount,
    passengersAdult,
    handleAdultChange,
    passengersChild,
    handleChildChange,
    handleAdultWeight,
    handleChildWeight,
    fieldsAdults,
    fieldsChilds,
    handleAdultPhoneChange,
    handleChildPhoneChange,
  } = props;
  const packageval = useSelector((state) => state?.booking?.package);

  return (
    <div className="Step4DSds003j">
      <div className="sec-title mt-3">Enter Passengers Details</div>
      <Row className="step2Size">
        <Col className="colHalf PassengerLIStCol" md={8}>
          {fieldsAdults?.map((item, i) => (
            <div className="wrapper mt-40" key={i}>
              <div className="sec-title mt-5">Passenger Adult {i + 1}</div>
              <Row>
                <Col xs="12" md="6">
                  <div className="form_group mt-3">
                    <label htmlFor="name">
                      Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <div class="input-group">
                      <input
                        name="name"
                        type="text"
                        class="form-control inputField"
                        onChange={async (e) => {
                          await handleAdultChange(e, i);
                        }}
                        value={passengersAdult[i]?.name}
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
                        onChange={async (e) => {
                          await handleAdultChange(e, i);
                        }}
                        value={passengersAdult[i]?.last_name}
                      />
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="form_group mt-3">
                <label htmlFor="email">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <div class="input-group">
                  <input
                    name="email"
                    type="text"
                    class="form-control inputField"
                    onChange={async (e) => {
                      await handleAdultChange(e, i);
                    }}
                    value={passengersAdult[i]?.email}
                  />
                </div>
              </div>

              <div className="form_group form_groupPhone mt-4">
                <label htmlFor="phone">
                  Mobile Number <span style={{ color: "red" }}>*</span>
                </label>
                <PhoneInput
                  defaultCountry="ae"
                  onChange={(value) => handleAdultPhoneChange(value, i)}
                  value={passengersAdult[i]?.phone}
                />
              </div>

              {/* <div className="form_group mt-3">
                <label htmlFor="phone">
                  Mobile Number <span style={{ color: "red" }}>*</span>
                </label>
                <div class="input-group">
                  <input
                    name="phone"
                    type="text"
                    class="form-control inputField"
                    onChange={async (e) => {
                      await handleAdultChange(e, i);
                    }}
                    value={passengersAdult[i]?.phone}
                  />
                </div>
              </div> */}

              <div className="form_group mt-3">
                <label htmlFor="weight">
                  Weight (KG) <span style={{ color: "red" }}>*</span>
                </label>
                <div class="input-group">
                  <input
                    name="weight"
                    type="number"
                    min="1"
                    max="120"
                    class="form-control inputField"
                    onChange={async (e) => {
                      if (e.target.value > 220) {
                        toast.error("weight is not acceptable", {
                          toastId: "weightError",
                        });
                        return;
                      }
                      if (e.target.value >= 120) {
                        toast.info(
                          "If weight is more then 120kg Price is doubled",
                          {
                            toastId: "weightDoubled",
                          }
                        );
                      }
                      if (e.target.value < 0) {
                        return;
                      }
                      await handleAdultChange(e, i);
                    }}
                    value={passengersAdult[i]?.weight}
                  />
                </div>
                {/* <div className="weightOptionsWrapper">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-60kg" ? "active" : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-60kg", i);
                    }}
                  >
                    Below 60kg
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-60-80kg"
                        ? `active`
                        : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-60-80kg", i);
                    }}
                  >
                    Between 60 - 80kg
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-80-100kg"
                        ? `active`
                        : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-80-100kg", i);
                    }}
                  >
                    Between 80 - 100kg
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-100-120kg"
                        ? `active`
                        : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-100-120kg", i);
                    }}
                  >
                    Between 100 - 120kg
                  </motion.button>
                </div> */}
                {/* <div className="termsGroup mt-2">
                <input type="checkbox" />

                <label className="mx-2" htmlFor="terms">
                  I am under 120kg
                </label>
              </div> */}
              </div>
            </div>
          ))}
          {childAmount == 0 ? null : (
            <>
              {fieldsChilds?.map((item, i) => (
                <div className="wrapper mt-40" key={i}>
                  <div className="sec-title mt-5">Passenger Child {i + 1}</div>
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="form_group mt-3">
                        <label htmlFor="name">
                          Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <div class="input-group">
                          <input
                            name="name"
                            type="text"
                            class="form-control inputField"
                            onChange={async (e) => {
                              await handleChildChange(e, i);
                            }}
                            value={passengersChild[i]?.name}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="form_group mt-3">
                        <label htmlFor="last_name">
                          Last Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <div class="input-group">
                          <input
                            name="last_name"
                            type="text"
                            class="form-control inputField"
                            onChange={async (e) => {
                              await handleChildChange(e, i);
                            }}
                            value={passengersChild[i]?.last_name}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="form_group mt-3">
                    <label htmlFor="email">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <div class="input-group">
                      <input
                        name="email"
                        type="text"
                        class="form-control inputField"
                        onChange={async (e) => {
                          await handleChildChange(e, i);
                        }}
                        value={passengersChild[i]?.email}
                      />
                    </div>
                  </div>

                  <div className="form_group form_groupPhone mt-4">
                    <label htmlFor="phone">
                      Mobile Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <PhoneInput
                      defaultCountry="ae"
                      onChange={(value) => handleChildPhoneChange(value, i)}
                      value={passengersChild[i]?.adult_phone}
                    />
                  </div>

                  {/* <div className="form_group mt-3">
                    <label htmlFor="adult_phone">
                      Mobile Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <div class="input-group">
                      <input
                        name="adult_phone"
                        type="text"
                        class="form-control inputField"
                        onChange={async (e) => {
                          await handleChildChange(e, i);
                        }}
                        value={passengersChild[i]?.adult_phone}
                      />
                    </div>
                  </div> */}

                  <div className="form_group mt-3">
                    <label htmlFor="weight">
                      Weight (KG) <span style={{ color: "red" }}>*</span>
                    </label>
                    <div class="input-group">
                      <input
                        name="weight"
                        type="number"
                        max={120}
                        class="form-control inputField"
                        onChange={async (e) => {
                          if (e.target.value > 119) {
                            toast.error("weight under 120 kg is Allowed", {
                              toastId: "weightUnder",
                            });
                            return;
                          }
                          await handleChildChange(e, i);
                        }}
                        value={passengersChild[i]?.weight}
                      />
                    </div>
                    {/* <div className="weightOptionsWrapper">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-60kg"
                            ? "active"
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-60kg", i);
                        }}
                      >
                        Below 60kg
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-60-80kg"
                            ? `active`
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-60-80kg", i);
                        }}
                      >
                        Between 60 - 80kg
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-80-100kg"
                            ? `active`
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-80-100kg", i);
                        }}
                      >
                        Between 80 - 100kg
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-100-120kg"
                            ? `active`
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-100-120kg", i);
                        }}
                      >
                        Between 100 - 120kg
                      </motion.button>
                    </div> */}
                    {/* <div className="termsGroup mt-2">
                <input type="checkbox" />

                <label className="mx-2" htmlFor="terms">
                  I am under 120kg
                </label>
              </div> */}
                  </div>
                </div>
              ))}
            </>
          )}

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
