import React, { Fragment, useState } from "react";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { setBooking, setPackageId, setPackage } from "../../../store/booking";
import { useDispatch } from "react-redux";
const img1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/Packages/card1.jpg";
function Card(
  {
    featured = true,
    package_image,
    thumb,
    title,
    price_adult,
    price_child,
    short_detail,
    itineraries,
    duration,
    location,
    id,
    packageVal,
  },
  props
) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const dispatch = useDispatch();
  return (
    <div
      className={`pkCompareCard32 ${lang == "ar" ? "r_dir" : "l_dir"}`}
      {...props}
      key={props?.key}
    >
      <div className="ImgThumb">
        {featured && <div className="featured">Featured</div>}
        <img src={package_image ? package_image : img1} alt={title} />
        {/* <img src={img1} alt="" /> */}

        {/* <img src={thumb} alt="" /> */}
      </div>
      <div className="detailsSec">
        <h4 className="card-title mt-4">{title}</h4>
        <div className="tag-line mt-2">
          {price_adult ? (
            <>
              {" "}
              ADULTS: AED
              {price_adult}
            </>
          ) : (
            "PRICE ON REQUEST"
          )}{" "}
          /{"  "}
          {price_child && <>CHILD: AED {price_child}</>}
        </div>
        <p className="para mt-2">{short_detail}</p>
        <div className="time mt-1">
          <p className="para bds">Time</p>
          <p className="para">{duration}</p>
        </div>
        <div className="mt-1">
          <p className="para bds">Location</p>
          <p className="para">{location}</p>
        </div>
      </div>
      <div className="mt-3">
        <ul>
          {itineraries?.map((item, i) => (
            <li key={"Iters" + i}>{item?.activity}</li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <button
          className="btnNl btnNl-primary pds mrs"
          accordion
          onClick={() => {
            dispatch(setBooking(true));
            dispatch(setPackageId(id));
            dispatch(setPackage(packageVal));
          }}
        >
          {" "}
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Card;
