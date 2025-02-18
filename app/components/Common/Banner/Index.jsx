import React from "react";
import "./styles.scss";
import { Container } from "react-bootstrap";
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Home.jpg";

function Index({ title = "Banner", path = "Home", bg }) {
  return (
    <div className="commBanner21">
      <div
        className="wrapper w-100"
        style={{
          backgroundImage: `url(${bg ? bg : banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bannerText w-100 h-100">
          <Container>
            <div className="banner-title">{title}</div>
            <div className="bradcrum">{path}</div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Index;
