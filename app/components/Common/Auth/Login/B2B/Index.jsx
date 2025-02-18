import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "./styles.scss";
import useAuthApi from "../../../../../api/useAuthApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../../../../store/auth";

function Index(props) {
  const [steps, setSetps] = useState(30);
  const [LogFormData, setLogFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsloadng] = useState(false);
  const dispatch = useDispatch();

  const { PostLogin } = useAuthApi();

  const handleChange = (e) => {
    setLogFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsloadng(true);
    //! validation
    if (!LogFormData?.email) {
      setIsloadng(false);
      toast.error("Please Enter Valid Email");
      return;
    }
    if (!LogFormData?.password) {
      setIsloadng(false);
      toast.error("Please Enter Valid Password");
      return;
    }

    const response = await PostLogin(LogFormData);
    console.log("🚀 ~ handleSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      let payload = {
        userData: response?.data?.user,
        token: response?.data?.token,
      };

      dispatch(LoginUser(payload));
      setIsloadng(false);
      toast.success("Logged In  Successfull");
      setLogFormData({ email: "", password: "" });
      props?.onhide();
    } else {
      setIsloadng(false);
      toast.error(response?.data?.error || "Invalid Credentials");
    }

    // if (response?.status == 200 || response?.status == 201) {
    // }
  };
  return (
    <div className="LoginB2Bdk003">
      <Container>
        <Row className="gy-3">
          <Col lg={6}>
            <div className="formWrapper">
              <div className="form-title">
                Welcome to Maha Balloon Adventures Dubai!
              </div>
              <p className="form-details">
                Please sign in to your account to get fantastic offers,
                discounts, and other benefits. You can make residual income by
                signing up to the best referral and affiliate marketing program
                with the best hot air balloon adventure company in
                the Middle East.
              </p>
              <div className="loginform mt-2">
                <div className="form_group mt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    className="inputField"
                    name="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    onChange={handleChange}
                  />
                </div>
                <div className="form_group mt-4">
                  <div className="password">
                    <label htmlFor="email">Password</label>
                    <span onClick={() => props?.setForgotPassword(true)}>
                      Forget Password?
                    </span>
                  </div>
                  <input
                    className="inputField"
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 btnWrapper">
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      props.setlogIn(false);
                    }}
                  >
                    Create Account
                  </button>
                  <button
                    className="btnNl btnNl-primary"
                    onClick={(e) => {
                      if (isLoading) {
                        return;
                      }
                      handleSubmit(e);
                    }}
                  >
                    {isLoading ? "Logging..." : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="imgWrapper">
              {/* <img src={thumb} alt="User" /> */}
              <Image
                src="/assets/About/member1.png"
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
