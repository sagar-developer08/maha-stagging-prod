import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
// import thumb from "../../../../assets/HomePage/testimonial.jpg";
import "./styles.scss";
import { PhoneInput } from "react-international-phone";
function Index(props) {
  const {
    handleChange,
    formData,
    handleRegisterSubmit,
    isRegisterSending,
    setFormData,
  } = props;

  return (
    <div className="RegisterCustomer32">
      <Container>
        <Row className="gy-3">
          <Col lg={6}>
            <div className="formWrapper">
              <div className="form-title">
                Welcome to Maha Balloon Adventures Dubai!
              </div>
              <p className="form-details mt-2">
                Please sign in to your account to get fantastic offers,
                discounts, and other benefits. You can make residual income by
                signing up to the best referral and affiliate marketing program
                with the best hot air balloon adventure company in
                the Middle East.
              </p>
              <div className="ReGisterForm mt-2">
                <div className="regFormWrapper">
                  <Row>
                    <Col lg={6}>
                      <div className="form_group mt-4">
                        <label htmlFor="first_name">First Name</label>
                        <input
                          className="inputField"
                          name="first_name"
                          type="text"
                          placeholder=""
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
                          value={formData?.last_name}
                          onChange={handleChange}
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
                          value={formData?.email}
                          onChange={handleChange}
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
                            setFormData((prev) => ({
                              ...prev,
                              ["phone"]: phone,
                            }))
                          }
                        />
                      </div>
                      {/* <div className="form_group mt-4">
                        <label htmlFor="phone">Mobile Number</label>
                        <input
                          className="inputField"
                          name="phone"
                          type="number"
                          placeholder="(+971)"
                          value={formData?.phone}
                          onChange={handleChange}
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
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mt-3 btnWrapper">
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      props.setlogIn(true);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="btnNl btnNl-primary"
                    onClick={(e) => {
                      handleRegisterSubmit(e);
                    }}
                  >
                    {isRegisterSending ? "Sending..." : "Create Account"}
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="imgWrapper">
              {/* <img src={thumb} alt="" /> */}
              <Image
                src="/assets/HomePage/testimonial.jpg"
                alt="User"
                width={500}
                height={500}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
