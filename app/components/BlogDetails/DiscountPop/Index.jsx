import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { MdOutlineClose } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import { toast } from "react-toastify";
import useAuthApi from "../../../api/useAuthApi";
import "./styles.scss";
const mahaLogo = "https://d3gelo9cifr8ed.cloudfront.net/assets/Logo.png";

function Index(props) {
  const { show, setShow } = props;

  const [formData, setFormdata] = useState({
    FName: "",
    LName: "",
    email: "",
    phone: "",
  });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const { PostRegister } = useAuthApi();

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePhoneChange = (value) => {
    setFormdata((prev) => ({ ...prev, phone: value }));
  };

  const handleRegisterSubmit = async () => {
    let UpdatedData = {};
    const passd = window.crypto.randomUUID();
    UpdatedData.first_name = formData?.FName;
    UpdatedData.last_name = formData?.LName;
    UpdatedData.email = formData?.email;
    UpdatedData.phone = formData?.phone;
    UpdatedData.password = passd;
    UpdatedData.vrify_password = passd;
    UpdatedData.role = "Customer";

    setIsRegisterLoading(true);
    if (!formData?.FName) {
      toast.error("Please Add First Name");
      setIsRegisterLoading(false);
      return;
    }
    if (!formData?.LName) {
      toast.error("Please Add Last Name");
      setIsRegisterLoading(false);
      return;
    }
    if (!formData?.email) {
      toast.error("Please Add Email");
      setIsRegisterLoading(false);
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      toast.error("Please Add a valid Email");
      setIsRegisterLoading(false);
      return;
    }
    if (formData?.phone?.length <= 6) {
      toast.error("Please Add a valid Whatsapp Number");
      setIsRegisterLoading(false);
      return;
    }

    const response = await PostRegister(UpdatedData);
    console.log("🚀 ~ handleRegisterSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Registration Successfull");
      setIsRegisterLoading(false);
    } else {
      console.log("🚀 ~ handleRegisterSubmit ~ response:", response?.data);
      toast.error(response?.data?.error || "Something Went Wrong");
      setIsRegisterLoading(false);
    }
  };
  return (
    <div>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Body>
          <div className="w-100  d-flex justify-content-end">
            <MdOutlineClose
              onClick={() => {
                setShow(false);
              }}
              className="CloseIcon"
              size={30}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Container
            id="pdopModealTOdk3ds"
            className="d-flex justify-content-center align-content-center flex-column h-100"
          >
            <div className="sec-title">Want to Get More Discount?</div>
            <p className="para mt-3">
              Get Registerd with us to get awesome discount and become B2C
              partner
            </p>
            <Row className="gy-5 w-100">
              <Col md={12}>
                <div className="StepForm">
                  <Row className=" mt-2 mt-md-5">
                    <Col md={6}>
                      <div className="form_group">
                        <label htmlFor="FName">First Name</label>
                        <input
                          className="inputField"
                          name="FName"
                          type="text"
                          onChange={handleChange}
                          value={formData?.FName}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form_group">
                        <label htmlFor="LName">Last Name</label>
                        <input
                          className="inputField"
                          name="LName"
                          type="text"
                          onChange={handleChange}
                          value={formData?.LName}
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
                      placeholder="abc@gmail.com"
                      onChange={handleChange}
                      value={formData?.email}
                    />
                  </div>
                  <div className="form_group form_groupPhone mt-4">
                    <label htmlFor="whatsAppNo">WhatsApp Number</label>
                    <PhoneInput
                      defaultCountry="ae"
                      onChange={(value) => handlePhoneChange(value)}
                      value={formData?.phone}
                    />
                  </div>

                  <button
                    className="btnNl btnNl-primary mt-4"
                    onClick={handleRegisterSubmit}
                    disabled={isRegisterLoading}
                  >
                    {isRegisterLoading ? "Registring" : "Submit"}
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Index;
