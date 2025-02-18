import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import "./styles.scss";
import useAuthApi from "../../../../../../api/useAuthApi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Index(props) {
  const [formData, setFormData] = useState({
    pass: "",
    verify_pass: "",
  });
  const searchParams = useSearchParams();
  const [isLoading, setIsLoaidng] = useState(false);
  const router = useRouter();

  const { PostResetPass } = useAuthApi();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    setIsLoaidng(true);

    let tokenQuery = searchParams.get("token");
    if (!tokenQuery) {
      toast.error("Invalid Reset Link");
      setIsLoaidng(false);
    }

    if (!formData?.pass) {
      toast.error("Please Enter a password");
      setIsLoaidng(false);

      return;
    }
    if (formData?.pass?.length < 8) {
      toast.error("Password lenght must be greather then 8");
      setIsLoaidng(false);

      return;
    }
    console.log("Pass: ", formData);

    if (formData?.pass !== formData?.verify_pass) {
      toast.error("Password not matched");
      setIsLoaidng(false);
      return;
    }

    let Payload = {
      token: tokenQuery,
      newPassword: formData?.pass,
    };

    const response = await PostResetPass(Payload);
    console.log("🚀 ~ handleSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      setIsLoaidng(false);
      props?.onhide();
      toast.success(response?.data?.message || "Password Reset Successfull");
      router.push("/");
      location.reload();
    } else {
      setIsLoaidng(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };
  return (
    <div className="resetPassword">
      <div className="form-title mb-3">Set Password</div>

      <div className="regFormWrapper">
        <Row className="g-3">
          <Col lg={12}>
            <div className="form_group mt-4">
              <label htmlFor="pass">Password</label>
              <input
                className="inputField"
                name="pass"
                type="password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="form_group mt-4">
              <label htmlFor="verify_pass">Verify Password</label>
              <input
                className="inputField"
                name="verify_pass"
                type="password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={12}>
            <button
              className="btnNl btnNl-primary"
              onClick={() => handleSubmit()}
              disabled={isLoading}
            >
              {isLoading ? "Submitting" : "Submit"}
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
