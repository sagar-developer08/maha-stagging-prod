import React, { useRef, useState } from "react";
import "./styles.scss";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import ProductListingCard from "../../Common/ProductListingCard/Index";
import prod1 from "../assets/Products/prod1.jpg";
import prod2 from "../assets/Products/prod2.jpg";
import prod3 from "../assets/Products/prod3.jpg";
import prod4 from "../assets/Products/prod4.jpg";
import DrSliderArrows from "../../DrSliderArrows/Index";

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
    responsive: [
      {
        breakpoint: 1080,
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
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black",
    },
    {
      id: 2,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black",
    },
    {
      id: 3,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White",
    },
    {
      id: 3,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White",
    },

    {
      id: 1,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black",
    },
    {
      id: 2,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black",
    },
    {
      id: 3,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White",
    },
    {
      id: 3,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White",
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
    <div className="merchandise32PP39 py-60">
      <Container>
        <div className="tag-line mb-3">Products</div>
        {/* <div className="main-title mb-3">Our Merchandise</div> */}
        <Row>
          <Col md={12} lg={6}>
            <div className="main-title mb-3">Our Merchandise</div>
          </Col>
          <Col md={12} lg={6}>
            <div className="sliderArrows">
              <DrSliderArrows
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {cardData?.map((item) => (
              <ProductListingCard
                product={item}
                key={"product" + item?.id}
                slider={true}
              />
            ))}
          </Slider>
        </div>

        {/* <div className="sliderArrows mt-5">
          <DrSliderArrows prevArrow={<PrevArrow />} nextArrow={<NextArrow />} />
        </div> */}
      </Container>
    </div>
  );
}

export default Index;
