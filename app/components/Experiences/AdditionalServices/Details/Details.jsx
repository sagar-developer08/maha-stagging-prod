import React from "react";

import "./styles.scss";
function Details({ title, details, thumb }, props) {
  return (
    <div className="ExperPackCardDetai32ls93k" {...props}>
      <div className="cardDetails">
        <div className="imaWrapper">
          <img src={thumb} />
        </div>
        <div className="details h-100 w-100">
          <div className="sec-title">{title}</div>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
