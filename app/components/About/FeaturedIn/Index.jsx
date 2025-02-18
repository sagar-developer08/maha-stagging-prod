import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./styles.scss";
const brand1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured1.png";
const brand2 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured2.png";
const brand3 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured3.png";
const brand4 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured4.png";
const brand5 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured5.png";

function Index() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="HomePageFeaturedIN ">
      <Container>
        <Row className="gy-3 desktop3">
          <Col xs={12} lg={6}>
            <div className="sec-title">As Featured In</div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="BrandsList">
              <img src={brand1} alt="" width={"100px"} />
              <img src={brand2} alt="" width={"100px"} />
              <img src={brand3} alt="" width={"100px"} />
              <img src={brand4} alt="" width={"100px"} />
              <img src={brand5} alt="" width={"100px"} />
            </div>
          </Col>
        </Row>
        <div className="mobilet">
          <Row className="gy-3 ">
            <Col xs={12}>
              <div className="sec-title">As Featured In</div>
            </Col>
            <Col xs={12}>
              <Slider {...settings}>
                <div className="imgb">
                  <img src={brand1} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand2} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand3} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand4} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand5} alt="" width={"100px"} />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Index;
