import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import ReactWhatsapp from "react-whatsapp";
import { whatsappNo } from "../../../config/general";
function Index(props) {
  return (
    <div className="giftOfferK312">
      <Container>
        <Row>
          <Col md="12" lg="6">
            <h3 className="title">
              {props?.title
                ? props?.title
                : "Gift An Unforgettable Hot Air Balloon Adventure Today"}
            </h3>
          </Col>
          <Col md="12" lg="6">
            <div>
              <ReactWhatsapp
                className="Wtp btnNl whtsappUs mt-5"
                number={whatsappNo}
                message={` Hi There,   I am interested in Gift. Please get in touch with me to send me a customized quote.`}
              >
                WhatsApp Us
              </ReactWhatsapp>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
