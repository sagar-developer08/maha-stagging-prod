import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import "./styles.scss";
import useAuthApi from "../../../../api/useAuthApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Index(props) {
  const [formData, setFormData] = useState({ email: "" });
  const [isLoading, setIsLoaidng] = useState(false);
  const { PostForgotPass } = useAuthApi();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setIsLoaidng(true);
    if (!formData?.email) {
      toast.error("Please Enter a Valid Email");
      setIsLoaidng(false);

      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      setIsLoaidng(false);
      toast.error("Email is Invalid");
      return;
    }
    let Payload = {
      emailOrPhone: formData?.email,
    };
    const response = await PostForgotPass(Payload);
    console.log("🚀 ~ handleSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      setIsLoaidng(false);
      props?.onhide();
      toast.success(
        response?.data?.message || "Verification Token Sent to Email"
      );
      props?.backGO();
      router.push("/");
    } else {
      setIsLoaidng(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };
  return (
    <div className="forgetPasswrodForm3232">
      <div className="form-title mb-3">Generate Password</div>
      <div className="regFormWrapper">
        <Row className="g-3">
          <Col lg={12}>
            <div className="form_group mt-4">
              <label htmlFor="pass">Email</label>
              <input
                className="inputField"
                name="email"
                type="email"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col lg={12}>
            <button
              className="btnNl btnNl-secondary mx-3"
              onClick={() => props.backGO()}
            >
              Back
            </button>
            <button
              className="btnNl btnNl-primary"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
