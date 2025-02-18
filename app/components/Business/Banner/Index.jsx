import React, { useState } from "react";
import landingBanner from "../assets/Banner/landingBanner.webp";
import { Col, Container, Row } from "react-bootstrap";
import { useCountdown } from "../Hook/useCountdown";
import ModalVideo from "react-modal-video";

import "./styles.scss";

function Index(props) {
  const [videoOpen, setVideoOpen] = useState(false);
  const LastDate = 13 * 24 * 60 * 60 * 1000;
  const StartDate = new Date("9/28/2024,12:00:00").getTime();
  const Count = StartDate + LastDate;
  const [days, hours, minutes, seconds] = useCountdown(Count);

  return (
    <div
      className="bannerBusiness"
      style={{
        backgroundImage: `url(${landingBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "65%",
      }}
    >
      <div className="wrapper">
        <Container>
          <Row className="gy-3">
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
              <div className="bannerHalfDetails">
                <div className="main_title">{props?.title}</div>
                <div className="sub_title">{props?.subtitle}</div>
                <div className="btnWrapper">
                  <a href="#register">
                    <button className="btnNl btnNl-primary mt-4">
                      Register
                    </button>
                  </a>
                  <button
                    className="btnNl btnNl-secondary mt-4"
                    // onClick={() => setVideoOpen(true)}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              className="d-flex justify-content-start justify-content-md-center align-items-center"
            >
              <div className="countDown">
                <div className="count">
                  <div className="time timeLeft">{days}</div>
                  <div className="duration">Days</div>
                </div>
                <div className="count">
                  <div className="time">:</div>
                </div>
                <div className="count">
                  <div className="time timeLeft">{hours}</div>
                  <div className="duration">Hours</div>
                </div>
                <div className="count">
                  <div className="time">:</div>
                </div>
                <div className="count">
                  <div className="time timeLeft">{minutes}</div>
                  <div className="duration">Min</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId={""}
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
}

export default Index;
