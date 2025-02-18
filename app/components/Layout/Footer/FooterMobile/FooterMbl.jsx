import React from "react";
import "./styles.scss";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/Logo.png";
import Accordion from "react-bootstrap/Accordion";

function FooterMbl() {
  return (
    <div className="mobileFooter py-60">
      <div className="container">
        <Row>
          <Col xs={12}>
            <div className="logoWrapper">
              <img src={logo} alt="maha-logo" />
            </div>
          </Col>
          <Col xs={12}>
            <div className="moreInfo">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>More informations</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterMbl;
