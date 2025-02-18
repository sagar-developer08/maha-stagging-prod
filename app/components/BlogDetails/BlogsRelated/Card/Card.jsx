import React from "react";

import "./styles.scss";

function Card(props) {
  return (
    <div className="BlogsCardHomepahg32">
      <div className="cardFlight">
        <div className="imageWrapper">
          <img src={props?.thumb} alt="" />
        </div>
        <div className="blogType">
          <div className="category">{props?.category}</div>
          <div className="readTime">{props?.readTime}</div>
        </div>
        <div className="details mt-3">
          <div className="sec-title">{props?.title}</div>
          <p className="para mt-2">{props?.details}</p>
        </div>
        <button className="btnNl btnNl-secondary">Read More</button>
      </div>
    </div>
  );
}

export default Card;
