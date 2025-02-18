import React from "react";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import thumb from "../assets/connect.jpg";
import { whatsappNo } from "../config/general";
function Index(props) {
  return (
    <div className="connect329klL9">
      <Row className="gy-5 gx-lg-5">
        <Col md={6} className="" id="whatsappus">
          <div className="connectDetails">
            <div className="title mb-3">Step 3 </div>
            <div className="title">{props?.title}</div>
            <div>
              {/* +971502600101 */}
              <a
                href={`https://wa.me/${whatsappNo}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <button className="btnNl btnNl-primary mt-4">
                  Whatsapp Us
                </button>
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="wrapper">
            <img src={props?.img ? props?.img : thumb} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
