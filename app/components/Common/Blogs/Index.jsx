import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import DrSliderArrows from "../../DrSliderArrows/Index";
import blogDataTs from "../../../Db/blogs";
import useWindowSize from "../../../Hook/useWindowSize";

import "./styles.scss";
function Index(props) {
  const { blogData } = props;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
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
      disabled={
        blogData
          ? currentSlide >= blogData?.length - toCut
          : currentSlide >= blogDataTs?.length - toCut
      }
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="BlogsHomepage33d3 py-60">
      <Container>
        <h3 className="tag-line mb-3">
          {" "}
          {props?.subTitle ? props?.subTitle : "Blogs"}
        </h3>

        <h4 className="main-title mb-3 ">
          {props?.title
            ? props?.title
            : "Tourist Guides on Things To Do In Dubai UAE"}
        </h4>

        <div className="SliderWrapper3  mt-3 mt-md-5">
          <div className="arrowslic22dernext">
            <NextArrow />
          </div>
          <div className="arrowslic22derprev">
            <PrevArrow />
          </div>
          {blogData ? (
            <>
              <Slider ref={sliderRef} {...settings}>
                {blogData?.map((item, i) => (
                  <Card {...item} slider={true} key={i} />
                ))}
              </Slider>
            </>
          ) : (
            <>
              <Slider ref={sliderRef} {...settings}>
                {blogDataTs?.map((item, i) => (
                  <Card {...item} slider={true} key={i} />
                ))}
              </Slider>
            </>
          )}
        </div>
        <div className="sliderArrows slider_pd-end2 mt-3">
          <DrSliderArrows prevArrow={<PrevArrow />} nextArrow={<NextArrow />} />
        </div>
      </Container>
    </div>
  );
}

export default Index;
