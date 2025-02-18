import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import Details from "./Details/Details";
import DrSliderArrows from "../../DrSliderArrows/Index";
import useWindowSize from "../../../Hook/useWindowSize";
// api
import { fetchPackagesData } from "../../../api/commonApi";
// css
import "./styles.scss";

function Index() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(null);
  const [ExtraDetails, setExtraDetails] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchPackageListData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    touchMove: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    edgeEvent: (item) => {
      console.log("Edge: ", edgeEvent);
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
          autoplay: true,
          autoplaySpeed: 2000,
          swipeToSlide: true,
          draggable: true,
          touchMove: true,
        },
      },
    ],
  };

  // let cardDatacTC = [
  //   {
  //     id: 1,
  //     thumb: package1,
  //     featured: true,
  //     title: "MAHA CLASSIC PACKAGE",
  //     price_adult: "1050",
  //     price_child: "1000",
  //     bookNow: true,
  //     short_detail:
  //       "Experience breathtaking beauty in the Dubai desert with our Classic Hot Air Balloon Package. Enjoy stunning panoramic views as you gently ascend into the sky at an accessible, affordable price.",
  //     itineraries: [
  //       {
  //         feature_img: unlimitedRefreshment,
  //         activity: "Unlimited Refreshment",
  //         details:
  //           "Stay refreshed with unlimited beverages throughout your adventure.",
  //       },
  //       {
  //         feature_img: pickAndDrop,
  //         activity: "Pick up & drop off",
  //         details:
  //           "Enjoy convenient pick-up and drop-off services to make your experience hassle-free.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     thumb: package2,
  //     featured: true,
  //     title: "MAHA MAJESTIC PACKAGE",
  //     price_adult: "1149",
  //     price_child: "1099",
  //     bookNow: true,
  //     short_detail:
  //       "Elevate your adventure with our Deluxe Package. Enjoy exclusive extras and luxurious touches as you float gently over the stunning Dubai desert at sunrise, ensuring a memorable, sophisticated journey.",
  //     itineraries: [
  //       {
  //         feature_img: pickAndDrop,
  //         activity:
  //           "Pick up & drop off (Sharing) Private Vehicle (Extra cost )",
  //         details:
  //           "Enjoy convenient pick-up and drop-off services to make your experience hassle-free.",
  //       },
  //       {
  //         feature_img: unlimitedRefreshment,
  //         activity:
  //           "Unlimited Refreshment, Gourmet Breakfast at the camp after the ride",
  //         details:
  //           "Stay refreshed with unlimited beverages throughout your adventure.",
  //       },
  //       {
  //         feature_img: flightDuration,
  //         activity: "Flight duration 45-60 minutes",
  //         details:
  //           "Enjoy a breathtaking flight that lasts between 45 to 60 minutes, offering stunning aerial views.",
  //       },
  //       {
  //         feature_img: CertificatDtl,
  //         activity: "Flying Experience Certificate signed by the Pilot",
  //         details:
  //           " Receive a personalized flying experience certificate signed by your pilot as a cherished memento.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     thumb: package4,
  //     featured: true,
  //     title: "MAHA ROYAL PACKAGE",
  //     price_adult: "1349",
  //     price_child: "1299",
  //     bookNow: true,
  //     short_detail:
  //       "Enjoy a complete desert experience with pick-up and drop-off from Dubai. Start with unlimited refreshments before an unforgettable 45-60 minute hot air balloon flight, followed by a signed flight certificate.",
  //     itineraries: [
  //       {
  //         feature_img: pickAndDrop,
  //         activity:
  //           "Pick up & drop off (Sharing) Private Vehicle (Extra cost )",
  //         details:
  //           "Enjoy convenient pick-up and drop-off services to make your experience hassle-free.",
  //       },
  //       {
  //         feature_img: unlimitedRefreshment,
  //         activity:
  //           "Unlimited Refreshment, Gourmet Breakfast at the camp after the ride",
  //         details:
  //           "Stay refreshed with unlimited beverages throughout your adventure.",
  //       },
  //       {
  //         feature_img: camelAndHorseRide,
  //         activity: "Camel & Horse ride | Quad biking, Dune Bashing",
  //         details:
  //           "Experience the thrill of camel and horse rides, quad biking, and exhilarating dune bashing.",
  //       },
  //       {
  //         feature_img: photoWIthFelcone,
  //         activity: "Photo with Falcon",
  //         details:
  //           "Capture a memorable moment with a majestic falcon for a unique keepsake.",
  //       },
  //       {
  //         feature_img: flightDuration,
  //         activity: "Flight duration 45-60 minutes",
  //         details:
  //           "Enjoy a breathtaking flight that lasts between 45 to 60 minutes, offering stunning aerial views.",
  //       },
  //       {
  //         feature_img: CertificatDtl,
  //         activity: "Flying Experience Certificate signed by the Pilot",
  //         details:
  //           " Receive a personalized flying experience certificate signed by your pilot as a cherished memento.",
  //       },
  //     ],
  //   },
  // ];

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
  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= packagesData?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="OurPackagesk312 py-60">
      <Container>
        <h2 className="tag-line mb-3">
          Choose From The Best Hot Air Balloon Packages in Dubai{" "}
        </h2>
        <Row>
          <Col md={12} lg={10}>
            <h3 className="main-title mb-3">
              Book Luxury Hot Air Balloon Packages in UAE
            </h3>
          </Col>
          <Col className="sliderArrows" md={12} lg={2}>
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
          {isLoading ? (
            <p className="text-center">loading...</p>
          ) : (
            <Slider ref={sliderRef} {...settings}>
              {packagesData?.map((item) => (
                <Card
                  {...item}
                  key={item?.id}
                  active={active}
                  setActive={setActive}
                  setExtraDetails={setExtraDetails}
                  PrevArrow={<PrevArrow />}
                  NextArrow={<NextArrow />}
                  packageVal={item}
                />
              ))}
            </Slider>
          )}
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
