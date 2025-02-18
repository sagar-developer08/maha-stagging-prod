import React from "react";
import { usePathname } from "next/navigation";
import "./styles.scss";

function Card(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div
      className={`fleetOpotion3Card3i21j ${lang == "ar" ? "r_dir" : "l_dir"}`}
      key={props?.key}
    >
      <div className="cardFlight">
        <div className="imageWrapper mb-4">
          <img src={props?.thumb} alt="" />
        </div>
        <div className="sec-title mb-3">{props?.title}</div>
        <div className="para pr-8">{props?.serial}</div>
        <div className="para pr-8">{props?.year}</div>
        <div className="para pr-8">{props?.capacity}</div>
      </div>
    </div>
  );
}

export default Card;
