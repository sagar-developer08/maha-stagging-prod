import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";
import Slider from "react-slick";
import "./styles.scss";
import { usePathname } from "next/navigation";
import DrSliderArrows from "../../DrSliderArrows/Index";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Index(props) {
  const { content } = props;
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log("🚀 ~ Index ~ currentSlide:", currentSlide);

  const [CurrentStep, setCurrentStep] = useState(0);
    const pathname = usePathname();
    const lang = pathname.split("/")[1];

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      console.log("next: ", next);
      setCurrentStep(next);
      setCurrentSlide(next);
    },
  };

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
      disabled={currentSlide >= 3}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="experiencesPageTimelin32iki pt-60">
      <Container>
        {/* <button onClick={() => setactive(0)}>A</button> */}
        {/* <button onClick={() => setactive(active + 1)}>B</button> */}
        {/* <div className="SteperWrapper93">
          <Stepper
            activeStep={CurrentStep}
            connectorStateColors={true}
            styleConfig={{
              size: "15px",
              activeBgColor: "#7AB342",
              activeTextColor: "#000",
              completedTextColor: "#000",
              completedBgColor: "#7AB342",
              inactiveTextColor: "#AAAAAA",
            }}
            connectorStyleConfig={{
              completedColor: "#7AB342",
              activeColor: "#7AB342",
              disabledColor: "#AAAAAA",
            }}
          >
            <Step index={0}>
              <div>01</div>
            </Step>
            <Step index={1}>
              <div>02</div>
            </Step>
            <Step index={2}>
              <div>03</div>
            </Step>
            <Step>
              <div>04</div>
            </Step>
            <Step>
              <div>05</div>
            </Step>
          </Stepper>
        </div> */}

        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {content?.map((item, i) => (
              <>
                <Row
                  className={` timeLIneWrap gy-1 gy-md-3 ${
                    lang == "ar" ? "r_dir" : "l_dir"
                  }`}
                >
                  <Col lg="6">
                    <div className="wrapper">
                      <img src={item?.thumb} alt="" />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="details h-100 d-flex justify-content-center flex-column">
                      <div className="setpNom">0{i + 1}</div>
                      <h5 className="mt-1 mt-md-3 titleSlide">
                        {item?.title?.en}
                      </h5>
                      <p className="para mt-1 mt-md-3">{item?.disc?.en}</p>
                      <div className="sliderArrows">
                        <DrSliderArrows
                          prevArrow={<PrevArrow />}
                          nextArrow={<NextArrow />}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Index;
