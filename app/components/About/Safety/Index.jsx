import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { usePathname } from "next/navigation";
import "./styles.scss";

function Index(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <div className="safetyMasuei2139 py-60">
      <Container>
        <div className="heading">
          <h4 className="tag-line mb-3">Safety Measures</h4>
          <h5 className="main-title">{props?.content?.title?.en}</h5>
        </div>
        <Row className="gy-3">
          <Col md={6} lg>
            <div className={lang == "ar" ? "safetyHalf1 arB" : "safetyHalf1"}>
              {props?.content?.safety?.slice(0, 5)?.map((item, i) => (
                <div className="safetyItem" key={i}>
                  <div className="safetyNo">0{i + 1}</div>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h5 className="title">{item?.title?.en}</h5>
                      </Accordion.Header>
                      <Accordion.Body>{item?.detail?.en}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} lg>
            <div
              className="wrapper"
              title={
                "Safety Measures Hot Air Balloon Rides in Dubai | Maha Balloon Adventures"
              }
              description={
                "Details the safety protocols and measures Maha Balloon Adventures follows for safe hot air balloon rides in Dubai."
              }
            ></div>
          </Col>
          <Col md={6} lg>
            <div className={lang == "ar" ? "safetyHalf2 arB" : "safetyHalf2"}>
              {props?.content?.safety?.slice(5, 10)?.map((item, i) => (
                <div className="safetyItem" key={i}>
                  <div className="safetyNo">
                    {i == 4 ? "" : "0"}
                    {i + 6}
                  </div>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h5 className="title">{item?.title?.en}</h5>
                      </Accordion.Header>
                      <Accordion.Body>{item?.detail?.en}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
