import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import useSize from "../../../utils/useSize";
import "./styles.scss";
const brand1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/tripadvisor.png";
const brand2 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/makemytrip_logo.png";
const brand3 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/bookingcom_logo.png";
const brand4 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/viator_logo.png";
const thumb =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/Trusted Balloon.webp";
const plyIcon =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/playbutton.png";
function Index(props) {
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
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
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
  let SLidesData = [
    {
      title: { en: "Unforgettable Experiences", ar: "" },
      details: {
        en: "At Maha Hot Air Balloon, we believe that every flight should be a memorable adventure. Our hot air balloon rides offer breathtaking views of the Dubai desert, allowing you to witness the stunning sunrise and the vast expanse of golden dunes from a unique perspective. Whether you’re celebrating a special occasion, planning a romantic getaway, or simply seeking adventure, our flights provide an extraordinary experience that will stay with you forever.",
        ar: "",
      },
    },
    {
      title: { en: "Expertise and Safety", ar: "" },
      details: {
        en: "Safety is our top priority. Our hot air balloons are operated by experienced and certified pilots who are dedicated to ensuring a safe and enjoyable flight. We adhere to strict safety protocols and guidelines set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar high above the desert.",
        ar: "",
      },
    },
    {
      title: { en: "Exceptional Customer Service", ar: "" },
      details: {
        en: `From the moment you book your flight to the time you land, our dedicated team is committed to
providing exceptional service. Our friendly staff will assist you with every detail, ensuring a seamless
and enjoyable experience. We take pride in our hospitality, and our guests frequently commend us for
our attentive and accommodating service.`,
        ar: "",
      },
    },
    {
      title: { en: "Tailored Packages for Everyone", ar: "" },
      details: {
        en: `We offer a variety of packages to cater to different preferences and budgets. Whether you choose our
Classic, Majestic, or Royal Package, each option is designed to provide a unique experience. Enjoy
gourmet breakfasts, photo with falcon, camel ride and dune bashing. Whether you’re planning a
romantic proposal, a unique birthday party, or a memorable family outing and corporate groups alike,
our hot air balloon rides provide a spectacular setting. You get exceptional value for a high-quality
adventure, ensuring that your sky-high journey is both affordable and unforgettable.`,
        ar: "",
      },
    },
    {
      title: { en: "Stunning Views and Unique Experiences", ar: "" },
      details: {
        en: `Experience the magic of the Dubai desert like never before. Our flights typically take place just before
sunrise, allowing you to capture the stunning colours of the sky as the sun rises over the horizon.
You’ll have the chance to see iconic landmarks, wildlife, and the breathtaking landscape, all while
floating peacefully in the sky.`,
        ar: "",
      },
    },
    {
      title: { en: "Memories to Last a Lifetime", ar: "" },
      details: {
        en: `Every flight with Maha Hot Air Balloon comes with a commemorative flight certificate signed by our
pilot, allowing you to remember your adventure long after you’ve landed. Additionally, our professional
photography options ensure that you can capture every moment of your journey, creating memories
that you can cherish forever.`,
        ar: "",
      },
    },
    {
      title: { en: "", ar: "" },
      details: { en: `Book Your Adventure Today!`, ar: "" },
    },
    {
      title: { en: "", ar: "" },
      details: {
        en: `Join us at Maha Hot Air Balloon Adventures for an unforgettable experience in the skies above Dubai.
Whether you’re a first-time flyer or a seasoned adventurer, we promise a journey filled with wonder,
excitement, and breathtaking beauty.`,
        ar: "",
      },
    },
  ];
  const [readMore, setReadMore] = useState(true);
  const [mobile, setMobile] = useState(false);
  const { width } = useSize();

  useEffect(() => {
    if (width <= 580) {
      setMobile(true);
      setReadMore(false);
    } else {
      setMobile(false);
      setReadMore(true);
    }
  }, [width]);

  return (
    <div className="AboutINtro32dc py-60">
      <Container>
        <Row className="gy-3 mb-2">
          <Col xs={12} lg={6}>
            <h2 className="main-title">{props?.content?.extra.title.en} </h2>
          </Col>
          <Col xs={12} lg={6}>
            <div className="details">
              <h3 className="title"> {props?.content?.extra.subtitle.en}</h3>
              <p>{props?.content?.extra.details.en}</p>
            </div>

            {/* <div className="BrandsList desktop3"> */}
            <div className="BrandsList">
              <img src={brand1} alt="" width={"135px"} />
              <img src={brand2} alt="" width={"135px"} />
              <img src={brand3} alt="" width={"135px"} />
              <img src={brand4} alt="" width={"135px"} />
            </div>
            {/* <div className="mobilet">
              <Slider {...settings}>
                <div className="imgb">
                  <img src={brand1} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand2} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand3} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand4} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand2} alt="" width={"100px"} />
                </div>
                <div className="imgb">
                  <img src={brand3} alt="" width={"100px"} />
                </div>
              </Slider>
            </div> */}
          </Col>
          {/* <Col xs={12} lg={6}>
            <div
              className="details"
              dangerouslySetInnerHTML={{
                __html: readMore
                  ? props?.content?.detail?.en
                  : props?.content?.detail?.en?.slice(0, 860) + "...",
              }}
            ></div>
            {mobile && (
              <>
                <div
                  className="btnNl-readmore"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read Less" : "Read More"}
                </div>
              </>
            )}

            <div className="BrandsList">
              <img src={brand1} alt="" width={"135px"} />
              <img src={brand2} alt="" width={"135px"} />
              <img src={brand3} alt="" width={"135px"} />
              <img src={brand4} alt="" width={"135px"} />
            </div>
          </Col> */}
        </Row>
        <div className="VideoIntro mt-5 mb-md-5">
          <div className="imgWrapper">
            <img src={thumb} alt="" />
            <div className="playButton">
              <img src={plyIcon} />
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="main-title">{props?.content?.extra.title.en} </div>
          <div className="sec-title mt-3">
            {" "}
            {props?.content?.extra.subtitle.en}
          </div>
          <p className="para mt-3">{props?.content?.extra.details.en}</p>
        </div> */}
      </Container>
    </div>
  );
}

export default Index;
