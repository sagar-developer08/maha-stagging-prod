import React, { useRef, useState } from "react";

import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import DrSliderArrows from "../../DrSliderArrows/Index";
import useWindowSize from "../../../Hook/useWindowSize";
// import Details from "./Details/Details";
import DetailsV2 from "./DetailsV2/Index";
import "./styles.scss";

function Index({ cardData, title }) {
  const [active, setActive] = useState();
  const [ExtraDetails, setExtraDetails] = useState(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          draggable: true,
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
      // disabled={currentSlide === 0}
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
      // disabled={currentSlide >= cardData?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="ThingTOdoPack312 py-60">
      <Container>
        {/* <div className="tag-line mb-3">Plans</div> */}
        <Row>
          <Col md={12} lg={9}>
            <div className="main-title mb-3">{title?.en}</div>
          </Col>
          <Col className="sliderArrows" md={12} lg={3}>
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
            {cardData?.map((item) => (
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
          {/* {ExtraDetails
            ? ExtraDetails?.map((item, i) => (
                <Col xs={12} lg={6} key={i}>
                  <Details {...item} key={i} />
                </Col>
              ))
            : null} */}
          {ExtraDetails?.details ? (
            <DetailsV2 ExtraDetails={ExtraDetails} />
          ) : null}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
