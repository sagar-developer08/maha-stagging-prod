import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import member1 from "../assets/About/member1.png";
import member2 from "../assets/About/member2.png";
import member3 from "../assets/About/member3.png";
import member4 from "../assets/About/member4.png";
import DrSliderArrows from "../../DrSliderArrows/Index";

import "./styles.scss";
function Index() {
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
      thumb: member1,
      name: "Alex Smith",
      role: "Manager",
      social: [
        {
          icon: <FaLinkedin size={18} />,
          link: "#",
        },
        {
          icon: <FaXTwitter size={18} />,
          link: "#",
        },
        {
          icon: <IoBasketballOutline size={18} />,
          link: "#",
        },
      ],
    },
    {
      id: 2,
      thumb: member2,
      name: "Lisa Makao",
      role: "Consultant",
      social: [
        {
          icon: <FaLinkedin size={18} />,
          link: "#",
        },
        {
          icon: <FaXTwitter size={18} />,
          link: "#",
        },
        {
          icon: <IoBasketballOutline size={18} />,
          link: "#",
        },
      ],
    },
    {
      id: 3,
      thumb: member3,
      name: "Jack Adam",
      role: "Pilot",
      social: [
        {
          icon: <FaLinkedin size={18} />,
          link: "#",
        },
        {
          icon: <FaXTwitter size={18} />,
          link: "#",
        },
        {
          icon: <IoBasketballOutline size={18} />,
          link: "#",
        },
      ],
    },
    {
      id: 4,
      thumb: member4,
      name: "John Malik",
      role: "Safety Specialists",
      social: [
        {
          icon: <FaLinkedin size={18} />,
          link: "#",
        },
        {
          icon: <FaXTwitter size={18} />,
          link: "#",
        },
        {
          icon: <IoBasketballOutline size={18} />,
          link: "#",
        },
      ],
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
    <div className="ourTeamXidk32DJ py-60">
      <Container>
        <h3 className="tag-line mb-3">Meet The Team</h3>

        <div className="main-title mb-3">Meet Our People</div>

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
        </div>
        <div className="sliderArrows mt-3">
          <DrSliderArrows prevArrow={<PrevArrow />} nextArrow={<NextArrow />} />
        </div>
      </Container>
    </div>
  );
}

export default Index;
