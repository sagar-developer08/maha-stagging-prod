import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
// import img1 from "../assets/contact.jpg";
import "./styles.scss";
import Link from "next/link";
import { contactUs } from "../../../api/commonApi";
import { toast } from "react-toastify";
const img1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/contactUs.webp";

const Index = () => {
  const pathname = usePathname();
  const lang = pathname?.split("/")?.[1] || "en"; // Ensure locale extraction is safe
  const [formData, setFormData] = useState({});
  const [checkTerms, setCheckTerms] = useState(false);
  const [isLoaidng, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    console.log("formData: ", formData);
    if (!formData?.name) {
      toast.info("Please fill your First name");
      return;
    }
    if (!formData?.last_name) {
      toast.info("Please fill your Last name");
      return;
    }
    if (!formData?.email) {
      toast.info("Please fill your email");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      toast.info("Please enter a valid email");
      return;
    }
    if (!formData?.phone) {
      toast.info("Please fill your phone");
      return;
    }
    if (!checkTerms) {
      toast.info("Please Accept our Terms");
      return;
    }

    setIsLoading(true);
    try {
      const response = await contactUs(formData);
      console.log("🚀 ~ handleChange ~ response:", response);
      if (response?.status == 200 || response?.status == 201) {
        toast.success("Thank you for sharing this with us");
        setFormData({});
      } else {
        toast.error("Oops!, something went wrong please try again later");
      }
    } catch (err) {
      console.log("Fomr Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contactformdi83 py-60">
      <Container>
        <Row className="g-3">
          <Col lg="6">
            <div className="formArea">
              <Row>
                <Col xs={6} md={6}>
                  <div className="form_group">
                    <label htmlFor="name">First Name</label>
                    <input
                      className="inputField"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      value={formData?.first_name}
                    />
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <div className="form_group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      className="inputField"
                      name="last_name"
                      type="text"
                      onChange={handleChange}
                      value={formData?.last_name}
                    />
                  </div>
                </Col>
              </Row>

              <div className="form_group mt-4">
                <label htmlFor="email">Email</label>
                <input
                  className="inputField"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formData?.email}
                />
              </div>

              <div className="form_group mt-4">
                <label htmlFor="phone">Phone</label>
                <input
                  className="inputField"
                  name="phone"
                  type="phone"
                  onChange={handleChange}
                  value={formData?.phone}
                />
              </div>
              <div className="form_group mt-4">
                <label htmlFor="phone">Message</label>
                <textarea
                  className="inputField"
                  name="message"
                  type="text"
                  rows={8}
                  onChange={handleChange}
                  value={formData?.message}
                />
              </div>
              <div className="termsGroup mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onChange={(e) => {
                    setCheckTerms(e.target.checked);
                  }}
                />
                <label htmlFor="terms">
                  I accept the{" "}
                  <Link href={`/${lang}/terms-of-service`}>Terms</Link>
                </label>
              </div>
              <button
                className="btnNl btnNl-primary dpsk39 mt-3"
                onClick={handleSubmit}
                disabled={isLoaidng}
              >
                {isLoaidng ? "Submitting" : "Submit"}
              </button>
            </div>
          </Col>
          <Col lg="6">
            <div className="imgeWrapper">
              <img src={img1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
