import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import "./styles.scss";
const map = "https://d3gelo9cifr8ed.cloudfront.net/assets/map.png";
function Index() {
  return (
    <div className="detailsCOn3939 py-60">
      <Container>
        <div className="tag-line mb-3">Contact</div>
        <h4 className="main-title">We are here to help you!</h4>
        <p className="para">
          Do you have questions? We have the answers! You may contact us
          regarding anything because our team is friendly and always available
          for help. Whether you want us to book a flight on behalf of someone
          else or just Book a balloon ride Dubai for yourself, we ensure a
          smooth and amazing experience throughout.
        </p>
        <Row className="mt-3 g-3">
          <Col md={6} lg="4">
            <div className="details">
              <MdMailOutline className="contactIcon" size={30} />
              <h1 className="name">Contact Us</h1>
              <div className="info inFOdetails">
                Get an eagle-eye view of Dubai’s wonders! Contact hot air
                balloon Dubai flight and explore the city’s hidden treasures!
                Your next adventure is just a call away!
              </div>
              <a className="info" href="mailto:fly@mahab.net">
                fly@mahab.net
              </a>
              <br />
              <a
                className="info"
                href="mailto:operation@mahaballoonadventures.com"
              >
                operation@mahaballoonadventures.com
              </a>
            </div>
          </Col>
          <Col md={6} lg="4">
            <div className="details">
              <FiPhone className="contactIcon" size={25} />
              <h2 className="name">Get in Touch with Our Team</h2>
              <div className="info inFOdetails">
                Our top-notch representatives are always ready to answer your
                questions. We offer comprehensive customer support. Get your
                Dubai balloon adventure contact now!
              </div>
              <a className="info" href="tel:971504179392">
                +971 50 417 9392
              </a>
              <br />
              <a className="info" href="tel:971565459255">
                +971 56 545 9255
              </a>
            </div>
          </Col>
          <Col md={6} lg="4">
            <div className="details">
              <GrLocation className="contactIcon" size={30} />
              <h3 className="name">Book Your Balloon Ride Today</h3>
              <div className="info inFOdetails">
                Want to fly over breathtakingly beautiful Dubai scenery? Reserve
                your hot air balloon ride through our website and see majestic
                landscapes from the sky. We make booking easy so you can enjoy
                this great trip without any hassle.
              </div>
              <a
                className="info"
                href="https://maps.app.goo.gl/j21TQhVPtsQsmN768"
                target="__blank"
              >
                Margham Dubai, United Arab Emirates
              </a>
            </div>
          </Col>
        </Row>
        <div className="map">
          {/* <div className="imgWrapperMap">
            <img src={map} alt="" />
          </div> */}
          <iframe
            className="iFramgeMap"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57920.9886785125!2d55.544209872160216!3d24.861739048193225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ef57f936d1fe813%3A0xc7dba3988b5d01a2!2smaha%20balloon%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d24.8712891!2d55.5472793!5e0!3m2!1sen!2s!4v1728893796057!5m2!1sen!2s"
            width="100"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Index;
