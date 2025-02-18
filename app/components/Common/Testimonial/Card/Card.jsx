import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import "./styles.scss";

function Card(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { handleopen } = props;

  return (
    <div
      className={`TestimonialHOmepage23Card ${
        lang == "ar" ? "r_dir" : "l_dir"
      } ${props?.currentSlide == props?.index ? "" : "testLidk"}`}
      {...props}
      key={props?.key}
    >
      <div
        className={` cardFlight ${
          props?.currentSlide == props?.index ? "cardActive " : ""
        }`}
        style={{
          backgroundImage: `url(${props?.thumb})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* <h3>{props?.title}</h3> */}
        {/* <p className="para">{props?.details}</p> */}

        {/* <div className="reviews">
          <p className="rating">
            <ReactStars
              count={5}
              edit={false}
              size={24}
              isHalf={true}
              value={5.0}
              emptyIcon={<AiFillStar />}
              halfIcon={<AiOutlineStar />}
              fullIcon={<AiFillStar />}
              activeColor="#7ab342"
              color="#e4e2e2"
            />
          </p>
          <p className="reviewInfo">(5.0 stars)</p>
        </div> */}
        <div className="players mt-1">
          <p className="para">{props?.author}</p>

          <div
            className="PlayButton"
            onClick={() => {
              if (!props?.videoUrl) {
                setVideoType("");
                return;
              }
              handleopen(props?.videoUrl, props?.thumb);
            }}
          >
            <FaPlay size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
