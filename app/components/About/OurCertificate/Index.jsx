import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import Slider from "react-slick";
import "yet-another-react-lightbox/styles.css";
import "./styles.scss";
const cert =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp1.webp";
const cert2 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp2.webp";
const cert3 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp3.webp";
const cert4 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp4.webp";
const cert5 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp5.webp";

function Index() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
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
    <div className="AboutCertificate3223 py-60">
      <Container>
        <Row className="gy-3">
          <Col xs={12} lg={4}>
            <h3 className="sec-title">
              Our Safety Certifications: The Crown Jewel of Your Aviation
              Journey!
            </h3>
          </Col>
          <Col className="desktop3" xs={12} lg={8}>
            <div className="certifcates">
              <img
                src={cert}
                alt="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                title="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                description="Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures."
                height={"100px"}
                onClick={() => {
                  setOpen(true);
                  setIndex(0);
                }}
              />
              <img
                src={cert2}
                alt="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                title="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                description="Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures."
                height={"100px"}
                onClick={() => {
                  setOpen(true);
                  setIndex(1);
                }}
              />
              <img
                src={cert3}
                alt="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                title="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                description="Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures."
                height={"100px"}
                onClick={() => {
                  setOpen(true);
                  setIndex(2);
                }}
              />
              <img
                src={cert4}
                alt="Top Hot air balloon adventure in UAE | The Dubai Balloon | Maha Balloon Adventures"
                title="Top Hot air balloon adventure in UAE | The Dubai Balloon | Maha Balloon Adventures"
                description="Maha Balloon Adventures is top in UAE for hot air balloon adventures, offering premium services and exceptional experiences."
                height={"100px"}
                onClick={() => {
                  setOpen(true);
                  setIndex(3);
                }}
              />
              <img
                src={cert5}
                alt="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                title="Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures"
                description="Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures."
                height={"100px"}
                onClick={() => {
                  setOpen(true);
                  setIndex(4);
                }}
              />
            </div>
          </Col>
          <Col className="mobilet" xs={12} lg={8}>
            <Slider {...settings}>
              <div className="imgb">
                <img src={cert} alt="" width={"100px"} />
              </div>
              <div className="imgb">
                <img src={cert2} alt="" width={"100px"} />
              </div>
              <div className="imgb">
                <img src={cert3} alt="" width={"100px"} />
              </div>
              <div className="imgb">
                <img src={cert4} alt="" width={"100px"} />
              </div>
              <div className="imgb">
                <img src={cert5} alt="" width={"100px"} />
              </div>
              <div className="imgb">
                <img src={cert2} alt="" width={"100px"} />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
      <>
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: cert },
            { src: cert2 },
            { src: cert3 },
            { src: cert4 },
            { src: cert5 },
          ]}
        />
      </>
    </div>
  );
}

export default Index;
