import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import DrSliderArrows from "../../DrSliderArrows/Index";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import img1 from "../assets/About/balloon.jpg";

import "./styles.scss";
function Index(props) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let cardData = [
    {
      id: 1,
      thumb: img1,
      title: "A6 WOW",
      serial: "A6OMG and A6 FUN",
      year: "Built Year: 2020",
      capacity: "Capacity 24 + 2 Pilot",
    },
    {
      id: 2,
      thumb: img1,
      title: "A6 WOW",
      serial: "A6OMG and A6 FUN",
      year: "Built Year: 2020",
      capacity: "Capacity 24 + 2 Pilot",
    },
    {
      id: 3,
      thumb: img1,
      title: "A6 WOW",
      serial: "A6OMG and A6 FUN",
      year: "Built Year: 2020",
      capacity: "Capacity 24 + 2 Pilot",
    },
    {
      id: 4,
      thumb: img1,
      title: "A6 WOW",
      serial: "A6OMG and A6 FUN",
      year: "Built Year: 2020",
      capacity: "Capacity 24 + 2 Pilot",
    },
    {
      id: 5,
      thumb: img1,
      title: "A6 WOW",
      serial: "A6OMG and A6 FUN",
      year: "Built Year: 2020",
      capacity: "Capacity 24 + 2 Pilot",
    },
  ];
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

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= cardData?.length - 1}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="ourFleet32903X9 py-60">
      <Container>
        <Row>
          <Col md={12}>
            <div className="tag-line mb-3">{props?.content?.subtitle?.en}</div>
            <div className="main-title mb-3">{props?.content?.title?.en}</div>
            <div
              dangerouslySetInnerHTML={{ __html: props?.content?.detail?.en }}
            ></div>
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
            {cardData?.map((item, i) => (
              <Card {...item} key={i} />
            ))}
          </Slider>
          <div className="sliderArrows mt-5">
            <DrSliderArrows
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Index;
