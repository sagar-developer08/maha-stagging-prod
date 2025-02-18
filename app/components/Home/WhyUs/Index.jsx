import React from "react";
import { useRouter, usePathname } from "next/navigation";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import content from "./content";
import Slider from "react-slick";
const part1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/tripadvisor.png";
const part2 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/makemytrip_logo.png";
const part3 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/bookingcom_logo.png";
const part4 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/viator_logo.png";
const whyUs =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/WhyUs.webp";

function Index() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const router = useRouter();
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
    <div className="whyUs32j32 py-60">
      <Container>
        <Row className="gy-3">
          <Col xs="12" lg="7">
            <div className="d-flex align-items-center h-100">
              <div className="whyUsDetails">
                <h2 className="tag-line mb-3">{content?.subtitle?.en}</h2>
                <h3 className="main-title mb-3">{content?.title?.en}</h3>
                <p className="para">{content?.details?.en}</p>

                <div className="partners ">
                  <img src={part1} alt="partners" />
                  <img src={part2} alt="partners" />
                  <img src={part3} alt="partners" />
                  <img src={part4} alt="partners" />
                </div>

                <button
                  // className="btnNl-secondary Desktopd"
                  className="btnNl-secondary "
                  onClick={() => router.push(`/${lang}/why-choose-us`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </Col>
          {/* <Col className="MobileVIew" xs={12}>
            <div className="MobileVIew">
              <Slider {...settings}>
                <div className="imgb">
                  <img src={part1} alt="partners" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={part2} alt="partners" width={"100px"} />
                </div>{" "}
                <div className="imgb">
                  <img src={part3} alt="partners" width={"100px"} />
                </div>{" "}
                <div className="imgb">
                  <img src={part4} alt="partners" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={part1} alt="partners" width={"100px"} />
                </div>{" "}
                <div className="imgb">
                  <img src={part3} alt="partners" width={"100px"} />
                </div>
              </Slider>
              <button className="btnNl-secondary">Learn More</button>
            </div>
          </Col> */}
          <Col xs="12" lg="5">
            <div className="imageWrapper">
              <img
                src={whyUs}
                alt="Maha Balloon Adventures"
                title={
                  "Maha Balloon in Dubai | Hot Air Balloon | Maha Balloon Adventures  "
                }
                description={
                  "Maha Balloon offers breathtaking hot air balloon rides in Dubai, showcasing stunning desert landscapes."
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
