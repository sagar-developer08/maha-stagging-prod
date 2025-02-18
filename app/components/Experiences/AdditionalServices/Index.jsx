import React, { useRef, useState } from "react";

import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";

// details
import DrSliderArrows from "../../DrSliderArrows/Index";
import Details from "./Details/Details";
import { usePathname } from "next/navigation";
import useWindowSize from "../../../Hook/useWindowSize";

import "./styles.scss";
function Index(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const [active, setActive] = useState();
  const [ExtraDetails, setExtraDetails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
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
      disabled={currentSlide >= props?.content?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="ExperiencesAdditionalServices323 py-60">
      <Container>
        {/* <div className="tag-line mb-3">Plans</div> */}
        <Row>
          <Col md={12} lg={6}>
            <div className="main-title mb-3">Additional Services</div>
          </Col>
          <Col className="sliderArrows" md={12} lg={6}>
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
            {props?.content?.map((item) => (
              <Card
                {...item}
                key={item?.id}
                active={active}
                setActive={setActive}
                setExtraDetails={setExtraDetails}
              />
            ))}
          </Slider>
        </div>
        <Row>
          {ExtraDetails
            ? ExtraDetails?.map((item, i) => (
                <Col md={12} lg={6} key={i}>
                  <Details {...item} key={i} />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
