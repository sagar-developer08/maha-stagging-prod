import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import thumb from "../assets/follow.jpg";
import fb from "../assets/icons/fbNew.svg";
import tiktok from "../assets/icons/tiktok.svg";
import insta from "../assets/icons/Instagram.svg";
import yt from "../assets/icons/youtube.svg";
import "./styles.scss";
import { toast } from "react-toastify";
function Index(props) {
  const { soicalClick, setSocialClick } = props;
  console.log("🚀 ~ Index ~ soicalClick:", soicalClick);

  function popitup(url, windowName) {
    let newwindow = window.open(url, windowName, "height=500,width=500");
    if (newwindow && newwindow.focus) {
      newwindow.focus();
    }
    return false;
  }
  return (
    <div className="Followus939">
      <Row className="gy-5 gx-lg-5">
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
          <div className="wrapper">
            <img src={props?.img ? props?.img : thumb} alt="" />
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
          <div className="FollowUsDetails">
            <div>
              <div className="title mb-3">Step 2 </div>
              <div className="title">
                Follow Us on Our Social Media Channels!
              </div>

              <div className="socialBtnWrapper mt-3 mt-md-5">
                <a
                  // href="https://www.facebook.com/mahaballoonadventures/"
                  // target="_blank"
                  // rel="noopener"
                  onClick={() => {
                    setSocialClick((prev) => prev + 1);

                    popitup(
                      "https://www.facebook.com/mahaballoonadventures/",
                      "followus"
                    );
                  }}
                >
                  <button className="fb">
                    <img src={fb} alt="" />
                    Facebook
                  </button>
                </a>
                <a
                  // href="https://www.tiktok.com/@mahaballoon_adventures"
                  // target="_blank"
                  // rel="noopener"
                  onClick={() => {
                    setSocialClick((prev) => prev + 1);

                    popitup(
                      "https://www.tiktok.com/@mahaballoon_adventures",
                      "followus"
                    );
                  }}
                >
                  <button className="tiktok">
                    <img src={tiktok} alt="" />
                    TikTok
                  </button>
                </a>
                <a
                  // href="https://www.instagram.com/mahaballoons_dubai/"
                  // target="_blank"
                  // rel="noopener"
                  // onClick={() => setSocialClick((prev) => prev + 1)}
                  onClick={() => {
                    setSocialClick((prev) => prev + 1);

                    popitup(
                      "https://www.instagram.com/mahaballoonadventures/",
                      "followus"
                    );
                  }}
                >
                  <button className="insta">
                    <img src={insta} alt="" />
                    Instagram
                  </button>
                </a>
                <a
                  // href="https://www.youtube.com/@mahahotairballoons"
                  // target="_blank"
                  // rel="noopener"
                  // onClick={() => setSocialClick((prev) => prev + 1)}
                  onClick={() => {
                    setSocialClick((prev) => prev + 1);

                    popitup(
                      "https://www.youtube.com/@mahahotairballoons",
                      "followus"
                    );
                  }}
                >
                  <button className="youtube">
                    <img src={yt} alt="" />
                    Youtube
                  </button>
                </a>
              </div>
              <a href="#whatsappus">
                <button
                  className="btnNl btnNl-primary mt-4 mt-md-5"
                  onClick={() => {
                    if (soicalClick < 4) {
                      toast.info("Please Follow on all Social platforms", {
                        toastId: "soicalInfo",
                        autoClose: 1500,
                      });
                      return;
                    }
                    props?.nextSlide();
                  }}
                >
                  Continue
                </button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
