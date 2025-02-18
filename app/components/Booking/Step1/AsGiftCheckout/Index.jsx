import React from "react";
import { Col, Row } from "react-bootstrap";
import coin from "../../../../assets/icons/GiftCoin.svg";
import { FaCheck } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "./styles.scss";
function Index(props) {
  return (
    <div className="asGiftCheckoutF32e">
      <Row className="ItemROw">
        <Col className="colHalf" md={8}>
          <div className="detail-form  mt-40">
            <div className="sec-title">Contact Details</div>
            <Row className="g-4 mt-3">
              <Col md={6}>
                <div className="form_group">
                  <label htmlFor="name">First Name</label>
                  <input className="inputField" name="FName" type="text" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group">
                  <label htmlFor="name">Last Name</label>
                  <input className="inputField" name="LName" type="text" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group">
                  <label htmlFor="name">Email</label>
                  <input
                    className="inputField"
                    name="email"
                    type="Email"
                    placeholder="abc@gamil.com"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group form_groupPhone">
                  <label htmlFor="name">Mobile Number</label>
                  {/* <input
                    className="inputField"
                    name="phone"
                    type="number"
                    placeholder="(+971)"
                  /> */}
                  <PhoneInput defaultCountry="ae" />
                </div>
              </Col>
              <Col xs={12}>
                <div className="form_group">
                  <label htmlFor="name">Country</label>
                  <select className="selectOption" name="country" id="">
                    <option value="" defaultChecked disabled>
                      Select a Country
                    </option>

                    <option value="uae">UAE</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </Col>
            </Row>

            <div className="sec-title mt-5">Gift To</div>
            <Row className="g-4 mt-3">
              <Col md={6}>
                <div className="form_group">
                  <label htmlFor="name">First Name</label>
                  <input className="inputField" name="FName" type="text" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group">
                  <label htmlFor="name">Last Name</label>
                  <input className="inputField" name="LName" type="text" />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group">
                  <label htmlFor="name">Email</label>
                  <input
                    className="inputField"
                    name="email"
                    type="Email"
                    placeholder="abc@gamil.com"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form_group form_groupPhone">
                  <label htmlFor="name">Mobile Number</label>
                  {/* <input
                    className="inputField"
                    name="phone"
                    type="number"
                    placeholder="(+971)"
                  /> */}
                  <PhoneInput defaultCountry="ae" />
                </div>
              </Col>
              <Col xs={12}>
                <div className="form_group">
                  <label htmlFor="name">Country</label>
                  <select className="selectOption" name="country" id="">
                    <option value="" defaultChecked disabled>
                      Select a Country
                    </option>

                    <option value="uae">UAE</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4}>
          <div className="giftCardWrapper">
            <div className="giftCard mt-40">
              <div className="d-flex justify-content-between align-items-center">
                <img src={coin} alt="" height={80} width={80} />
                <div className="sec-title">Gift Card</div>
              </div>
              <div className="Price">AED {props?.checkOutAmont}</div>
            </div>
            <p className="mt-2">*This gift card is valid for 1 year only</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
