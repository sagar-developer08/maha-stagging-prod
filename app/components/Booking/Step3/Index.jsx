import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import "./styles.scss";
import { useSelector } from "react-redux";
function Index(props) {
  const { handlePassengerSubmit, loading, setPickUpData, pickUpData } = props;
  const [optontype, setOptionType] = useState(1);
  const packageval = useSelector((state) => state?.booking?.package);

  const [customInput, setCustomInput] = useState("");
  console.log("🚀 ~ Index ~ customInput:", customInput);

  const handleChange = (e) => {
    setPickUpData({
      ...pickUpData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Step3Dkfds">
      <Row className="step2Size3">
        <Col className="colHalf" md={8}>
          <div className="wrapper mt-40">
            <div className="sec-title">Pickup Details</div>

            {/* <div className="form_group mt-4"> */}
            {/* <label htmlFor="pickup">Where shall we pick you up?</label> */}

            {/* <select
                className="selectOption"
                name="pickupType"
                id=""
                onChange={(e) => {
                  setOptionType(e.target.value);
                  handleChange(e);
                }}
              >
                <option value="1">Pick me up from my house</option>
                <option value="2" defaultChecked>
                  Hotel pick up location to be confirmed
                </option>
                <option value="3">Pick me up from my hotel</option>
              </select>
            </div> */}

            {optontype == 1 ? (
              <>
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
                        value={pickUpData?.country}
                        onChange={handleChange}
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
                        value={pickUpData?.city}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form_group mt-4">
                      <label htmlFor="house_no">House No</label>
                      <input
                        type="text"
                        className="inputField"
                        name="house_no"
                        value={pickUpData?.house_no}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form_group mt-4">
                      <label htmlFor="address">Street Address</label>
                      <input
                        type="text"
                        className="inputField"
                        name="address"
                        value={pickUpData?.address}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form_group mt-4">
                      <label htmlFor="area">Area</label>
                      <input
                        className="inputField"
                        type="text"
                        name="area"
                        value={pickUpData?.area}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form_group mt-4">
                      <label htmlFor="landmark">Landmark</label>
                      <input
                        className="inputField"
                        type="text"
                        name="landmark"
                        value={pickUpData?.landmark}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>
                {/* <div className="form_group mt-3">
                  <label htmlFor="Address_custm ">
                    Please enter your address
                  </label>
                  <div class="input-group">
                    <input
                      name="Address_custm"
                      type="text"
                      class="form-control inputField"
                      placeholder={"Type your address"}
                      onChange={(e) => setCustomInput(e.target.value)}
                    />
                    <span
                      class={
                        customInput?.length > 5
                          ? "input-group-text Checked"
                          : "input-group-text"
                      }
                      id="basic-addon1"
                    >
                      <FaCheck size={16} />
                    </span>
                  </div>
                </div> */}
              </>
            ) : optontype == 3 ? (
              <div className="form_group mt-4">
                <label htmlFor="address"> Which hotel you are residing?</label>
                <input
                  type="text"
                  className="inputField"
                  name="address"
                  value={pickUpData?.address}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            ) : optontype == 2 ? (
              <></>
            ) : null}
          </div>
          <button
            className="btnNl btnNl-primary mt-4"
            onClick={handlePassengerSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
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
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
