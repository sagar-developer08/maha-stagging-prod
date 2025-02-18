import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../../store/booking";
import img1 from "../../../../assets/New/Experience/Unique Hot Air Balloon.webp";
import "./styles.scss";
function Index(props) {
  const { ExtraDetails } = props;
  const dispatch = useDispatch();

  return (
    <div className="PackageDetails303232">
      <Container>
        <Row className="gy-3">
          <Col lg={12}>
            <div className="details d-flex justify-content-center flex-column h-100">
              {ExtraDetails?.title && (
                <h1 className="main-title mb-4">{ExtraDetails?.title}</h1>
              )}
              <div
                className="para mb-4"
                dangerouslySetInnerHTML={{ __html: ExtraDetails?.details }}
              >
                {/* {ExtraDetails?.details} */}
              </div>
              {/* <div>
                <button
                  className="btnNl btnNl-primary pd43 bokNow"
                  onClick={() => {
                    dispatch(setBooking(true));
                  }}
                >
                  Book Now
                </button>
                <button className="btnNl btnNl-secondary pd43">
                  WhatsApp Us
                </button>
              </div> */}
            </div>
          </Col>
          {/* <Col lg={6}>
            <div className="wrapper">
              <img src={img1} alt="" />
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
