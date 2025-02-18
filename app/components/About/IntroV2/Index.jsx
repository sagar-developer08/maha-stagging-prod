import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";
import Slider from "react-slick";
import "./styles.scss";
import { usePathname } from "next/navigation";
import DrSliderArrows from "../../DrSliderArrows/Index";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const whyUsIntro =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/WhyYouSHouldIntro.webp";

function Index(props) {
  const { content } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [CurrentStep, setCurrentStep] = useState(0);

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
  let SLidesData = [
    {
      title: { en: "Unforgettable Experiences", ar: "" },
      details: {
        en: "At Maha Hot Air Balloon, every flight is a memorable adventure. Our hot air balloon rides offer breathtaking views of the Dubai desert, letting you witness stunning sunrises and vast golden dunes from a unique perspective. Whether celebrating a special occasion, planning a romantic getaway, or seeking adventure, we have you covered.",
        ar: "",
      },
    },
    {
      title: { en: "Expertise and Safety", ar: "" },
      details: {
        en: "Safety is our top priority. Our hot air balloons are operated by experienced and certified pilots dedicated to ensuring a safe and enjoyable flight. We adhere to strict safety protocols and guidelines set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar high above the desert.",
        ar: "",
      },
    },
    {
      title: { en: "Exceptional Customer Service", ar: "" },
      details: {
        en: `From the moment you book your flight to the time you land, our dedicated team is committed to providing exceptional service. Our friendly staff will assist you with every detail, ensuring a seamless and enjoyable experience. We take pride in our hospitality, and our guests frequently commend us for our attentive and accommodating service.`,
        ar: "",
      },
    },
    {
      title: { en: "Tailored Packages for Everyone", ar: "" },
      details: {
        en: `We offer a variety of packages to cater to different preferences and budgets. Whether you choose our Classic, Majestic, or Royal Package, each option is designed to provide a unique experience. Enjoy gourmet breakfasts, photos with falcons, camel rides, and dune bashing. Our hot air balloon rides offer a spectacular setting. Don't Miss it!`,
        ar: "",
      },
    },
    {
      title: { en: "Stunning Views and Unique Experiences", ar: "" },
      details: {
        en: `Experience the magic of the Dubai desert like never before. Our flights typically take place just before sunrise, allowing you to capture stunning colors of the sky as the sun rises over the horizon. You’ll have the chance to see iconic landmarks, wildlife, and breathtaking landscapes, all while floating peacefully in the sky.`,
        ar: "",
      },
    },
    {
      title: { en: "Memories to Last a Lifetime", ar: "" },
      details: {
        en: `Every flight with Maha Hot Air Balloon comes with a commemorative flight certificate signed by our pilot, allowing you to remember your adventure long after you’ve landed. Additionally, our professional photography options ensure that you can capture every moment of your journey, creating memories that you can cherish forever.`,
        ar: "",
      },
    },
    {
      title: { en: "Book your adventure today!", ar: "" },
      details: {
        en: `Don’t wait to experience the breathtaking beauty of the Dubai desert from above! Reserve your hot air balloon adventure today for a truly unforgettable journey. With expert pilots and tailored packages, we promise an extraordinary experience that will leave you in awe. Embrace the magic of the skies and create lasting memories with us!
`,
        ar: "",
      },
    },
  ];

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
      disabled={currentSlide >= SLidesData?.length - 1}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="IntroSLider23e py-60">
      <Container>
        <h4 className="main-title">{props?.content?.title?.en}</h4>

        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {SLidesData?.map((item, i) => (
              <>
                <Row
                  className={` timeLIneWrap gy-3 ${
                    lang == "ar" ? "r_dir" : "l_dir"
                  }`}
                >
                  <Col lg="6">
                    <div className="wrapper">
                      <img
                        src={whyUsIntro}
                        alt="Hot Air Balloon Dubai | Hot Air Balloon Ride Dubai | Maha Balloon Adventures "
                        title={
                          "Hot Air Balloon Dubai | Hot Air Balloon Ride Dubai | Maha Balloon Adventures "
                        }
                        description="Hot air balloon over Dubai’s desert, capturing the serene experience offered by Maha Balloon Adventures."
                      />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="details h-100 d-flex justify-content-center flex-column">
                      <h5 className="mt-3 titleSlide">{item?.title?.en}</h5>
                      <p className="para mt-3">{item?.details?.en}</p>
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
