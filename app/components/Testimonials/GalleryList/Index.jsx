import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row,Form } from "react-bootstrap";
// 
const playIcon =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/playbutton.png";
const testimonial1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials1.webp";
const testimonial2 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials2.webp";
const testimonial3 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials3.webp";
const testimonial4 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials4.webp";
const testimonial5 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials5.webp";
const testimonial6 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials6.webp";
const testimonial7 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials7.webp";
const testimonial8 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/filipino.jpg";
const testimonial9 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/german+couple+.jpg";
const testimonial10 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/german+girl.jpg";
const testimonial11 =
  "https://maha-prod.s3.us-east-1.amazonaws.com/indian_female.png";
const testimonial12 =
  "https://maha-prod.s3.us-east-1.amazonaws.com/indian_male.png";
const testimonial13 =
  "https://maha-prod.s3.us-east-1.amazonaws.com/amazing_experience.png";
const testimonial14 =
  "https://maha-prod.s3.us-east-1.amazonaws.com/Breathtaking.png";
const testimonial15 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/MBA-2-29nov-thumbnail.jpg";
const testimonial16 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/arabic.jpg";
const testimonial17 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/chinies+2.jpg";
const testimonial18 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/russian+girl.jpg";
const testimonial19 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/russian+man+.jpg";
  const testimonial20 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/chinies_.png";

// import ModalVideo from "react-modal-video";
import { IoIosCloseCircle } from "react-icons/io";
import useOutsideAlerter from "../../../Hook/useOutsideAlerter";
import "./styles.scss";

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoPoster, setVideoPoster] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const wrapperRef = useRef();
  const videoRef = useRef();

  const handleOpen = async (link, poster) => {
    await setVideoPoster(poster);
    await setVideoLink(link);
    setVideoOpen(true);
    videoRef.current.play();
  };
  const handleClose = () => {
    setVideoPoster("");
    setVideoLink("");
    setVideoOpen(false);
    videoRef.current.pause();
  };

  useEffect(() => {
    if (videoLink) {
      videoRef.current.play();
    }
  }, [videoLink]);

  // useEffect(() => {
  //   useOutsideAlerter(wrapperRef, handleClose);
  // }, [wrapperRef]);
  useOutsideAlerter(wrapperRef, handleClose);

  let galleryList = [
    {
      thumb: testimonial1,
      col_lg: 4,
      language: "hindi",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Ajay%20Family_V1.mp4",
    },
    {
      thumb: testimonial2,
      col_lg: 4,
      language: "english",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha_story_04.mp4",
    },
    {
      thumb: testimonial3,
      col_lg: 4,
      language: "english",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Yara Family_V1.mp4",
    },
    {
      thumb: testimonial7,
      col_lg: 4,
      language: "english",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maya_story_03.mp4",
    },
    {
      thumb: testimonial6,
      col_lg: 4,
      language: "english",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha Story_02.mp4",
    },
    {
      thumb: testimonial5,
      col_lg: 4,
      language: "english",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Parag_V1.mp4",
    },
    {
      thumb: testimonial8,
      col_lg: 4,
      language: "Filipino",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Filpino.mp4",
    },
    {
      thumb: testimonial9,
      col_lg: 4,
      language: "german",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/German+male.mp4",
    },
    {
      thumb: testimonial10,
      col_lg: 4,
      language: "german",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/German+Female.mp4",
    },
    {
      thumb: testimonial11,
      col_lg: 4,
      language: "hindi",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Indian+Female.mp4",
    },
    {
      thumb: testimonial12,
      col_lg: 4,
      language: "hindi",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Indian+Male.mp4",
    },
    {
      thumb: testimonial13,
      col_lg: 4,
      language: "italian",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Italian+Female.mp4",
    },
    {
      thumb: testimonial14,
      col_lg: 4,
      language: "italian",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Italian+Male.mp4",
    },
    {
      thumb: testimonial15,
      col_lg: 4,
      language: "arabic",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Arabic+Female.mp4",
    },
    {
      thumb: testimonial16,
      col_lg: 4,
      language: "arabic",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Arabic+Male.mp4",
    },
    {
      thumb: testimonial17,
      col_lg: 4,
      language: "chinese",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Chinese+Male+2.mp4",
    },
    {
      thumb: testimonial18,
      col_lg: 4,
      language: "russian",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Russian+Female.mp4",
    },
    {
      thumb: testimonial19,
      col_lg: 4,
      language: "russian",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Russian+male.mp4",
    },
    {
      thumb: testimonial4,
      col_lg: 4,
      language: "english",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Dellany_V1.mp4",
    },
    {
      thumb: testimonial20,
      col_lg: 4,
      language: "chinese",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Chinese+Male+1.mp4",
    },
  ];

  const filteredGalleryList = selectedLanguage === "all"
    ? galleryList
    : galleryList.filter(item => item.language === selectedLanguage);

  const uniqueLanguages = [...new Set(galleryList.map(item => item.language))];

  return (
    <div className="testimonials393KD0 py-60">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col xs={12} md={8} className="mb-2 mb-md-0">
            <div className="main-title">See what our Happy Customers Have to Say!</div>
          </Col>
          <Col xs={12} md={4}>
            <div className="sliderArrows d-flex justify-content-center justify-content-md-end">
              <Form.Select
                aria-label="Select language"
                onChange={(e) => setSelectedLanguage(e.target.value)}
                value={selectedLanguage}
                className="w-80 w-md-auto"
              >
                <option value="all">All Languages</option>
                {uniqueLanguages.map((language, index) => (
                  <option key={index} value={language}>
                    {language.charAt(0).toUpperCase() + language.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>

        <div className="galleryList ">
          <Row className="g-4">
            {filteredGalleryList?.map((item, i) => (
              <Col md={6} lg={item?.col_lg} key={"gallery" + i}>
                <div className="imgWrapper">
                  <img src={item?.thumb} alt="" />
                  {item?.videoUrl ? (
                    <div className="Playbuton">
                      <img
                        src={playIcon}
                        alt=""
                        onClick={() => {
                          if (item?.videoUrl) {
                            handleOpen(item?.videoUrl, item?.thumb);
                          }
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {videoLink ? (
          <div className={`${"cst_modal"}`} ref={wrapperRef}>
            <div className="closeIcon_wrapper">
              <div className="closeIcon" onClick={() => handleClose()}>
                <IoIosCloseCircle className="closeIcon" size={35} />
              </div>
            </div>
            <video
              autoPlay
              playsInline
              controls
              preload="metadata"
              ref={videoRef}
            >
              <source
                poster={videoPoster}
                src={videoLink}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default Index;
