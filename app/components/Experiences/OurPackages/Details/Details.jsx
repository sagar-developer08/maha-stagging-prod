import React from "react";
import { FaCircle } from "react-icons/fa6";
import "./styles.scss";
function Details(props) {
  const { key, activity, details, feature_img } = props;
  return (
    <div className="ExperPackCardDetails93k" {...props}>
      <div className="cardDetails">
        {/* <div className="imaWrapper">
          <img src={feature_img ? feature_img : cat1} />
        </div> */}
        <div className="details h-100 w-100">
          <div className="sec-title">
            <FaCircle size={6} /> {activity}
          </div>
          {/* <p>{details}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Details;
