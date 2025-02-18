import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../store/booking";
import img1 from "../../../assets/New/Experience/Unique Hot Air Balloon.webp";
import "./styles.scss";
import { whatsappNo } from "../../../config/general";
function Index() {
  const dispatch = useDispatch();

  return (
    <div className="ExpBucketList3232 py-60">
      <Container>
        <Row className="gy-3">
          <Col lg={6}>
            <div className="details d-flex justify-content-center flex-column h-100">
              <h1 className="main-title mb-4">
                Unique Hot Air Balloon Experience in Dubai
              </h1>
              <p className="para mb-4">
                The feeling one gets while flying in the sky during Ballooning
                is a wonderful experience to offer friends or even to do alone.
                It is quite entertaining to have fun for every age because it
                combines excitement and affection. Hot air balloons are among
                the most photographed aircraft today because of their bright
                colors and nice looks. Our range of touring packages is
                extensive and caters to your precise specifications. If you
                would like to celebrate any special occasion or you just want
                something extraordinary that will never be forgotten, we are
                here for you.
              </p>
              <div>
                <button
                  className="btnNl btnNl-primary pd43 bokNow"
                  onClick={() => {
                    dispatch(setBooking(true));
                  }}
                >
                  Book Now
                </button>
                <a
                  href={`https://wa.me/${whatsappNo}`}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="btnNl btnNl-secondary pd43">
                    WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="wrapper">
              <img src={img1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
