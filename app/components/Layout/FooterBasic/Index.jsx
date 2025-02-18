import React from "react";
import thumb from "../assets/Logo.png";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Index() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div className="footerBasic39kd9">
      <Container>
        <div className="wrapper">
          <Row className="gy-4">
            <Col md={2}>
              <div className="imgWrapper">
                <img src={thumb} alt="" />
              </div>
            </Col>
            <Col md={8}>
              <div className="copyRight">
                <div className="details">
                  {pathname?.includes("b2b") ? (
                    <p>
                      © 2024 Made in UAE with ❤️ By Prism digital:{" "}
                      <a href="https://www.prism-me.com/" target="__blank">
                        Digital Marketing Agency Dubai
                      </a>
                      .
                    </p>
                  ) : (
                    <p>
                      © 2024 Made in UAE with ❤️ By Prism Digital:{" "}
                      <a href="https://www.prism-me.com/" target="__blank">
                        Website Design Dubai
                      </a>
                      .
                    </p>
                  )}
                  <Link href={`/${lang}/privacy-policy`}>Privacy Policy</Link>
                  <Link href={`/${lang}/terms-of-service`}>
                    Terms of Service
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="social">
                <a
                  href="https://www.facebook.com/mahaballoonadventures/"
                  target="__blank"
                >
                  <FaFacebook className="icon" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/mahaballoonadventures/"
                  target="__blank"
                >
                  <FaInstagram className="icon" size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@mahaballoon_adventures"
                  target="__blank"
                >
                  <FaTiktok className="icon" size={20} />
                </a>
                <a href="">
                  <FaLinkedin className="icon" size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@mahahotairballoons"
                  target="__blank"
                >
                  <FaYoutube className="icon" size={20} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Index;
