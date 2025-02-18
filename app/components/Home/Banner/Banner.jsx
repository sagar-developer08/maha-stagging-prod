import React from "react";
import { Container } from "react-bootstrap";
import BookingField from "../../Common/BookingField/Index";
import content from "./content";
import "./styles.scss";

function Banner() {
  return (
    <div className="homePageBanner">
      <Container>
        <div className="bannerWrapper">
          <div className="content">
            <h1 className="bannerTitle desktopD3">{content?.title?.en}</h1>
            <h1 className="bannerTitle MObiled93">{content?.title?.en}</h1>
            <p className="desktopD3">{content?.description?.en}</p>
            <p className="MObiled93">{content?.description_mbl?.en}</p>
            <BookingField />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
