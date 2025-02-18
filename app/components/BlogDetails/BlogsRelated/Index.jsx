import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../Common/Blogs/Card/Card";
import DrSliderArrows from "../../DrSliderArrows/Index";
import BlogList from "../../../Db/blogs";
import useWindowSize from "../../../Hook/useWindowSize";

import "./styles.scss";
function Index() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const { width } = useWindowSize();

  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= BlogList?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="BlogsRelated33d3 py-60">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="main-title mb-3">Related Blogs</div>
          </Col>
          <Col md={12} lg={6}>
            <div className="sliderArrows slider_pd-end2">
              <DrSliderArrows
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              />
            </div>
          </Col>
        </Row>

        <div className="SliderWrapper3 mt-3 mt-md-5">
          <div className="arrowslic22dernext">
            <NextArrow />
          </div>
          <div className="arrowslic22derprev">
            <PrevArrow />
          </div>
          <Slider ref={sliderRef} {...settings}>
            {BlogList?.map((item, i) => (
              <Card {...item} slider={true} key={i} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Index;
