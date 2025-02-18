import React, { Fragment, useState } from "react";
import "./styles.scss";
import img1 from "../../../../assets/HomePage/Packages/card1.jpg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  setBooking,
  setPackageId,
  setPackage,
} from "../../../../store/booking";
import { useDispatch } from "react-redux";
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
    bookNow,
    id,
    active,
    setActive,
    setExtraDetails,
    PrevArrow,
    NextArrow,
    packageVal,
  },
  props
) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const dispatch = useDispatch();
  const [DetailsList, setDetailsList] = useState([]);
  return (
    <div className={`pkCard32 ${lang == "ar" ? "r_dir" : "l_dir"}`} {...props}>
      <div className="ImgThumb">
        {featured && <div className="featured">Featured</div>}
        <img src={package_image ? package_image : img1} alt={title} />
        {/* <img src={img1} alt="" /> */}

        {/* <img src={thumb} alt="" /> */}
      </div>
      <div className="detailsSec">
        <h4 className="card-title mt-4">{title}</h4>
        <div className="tag-line mt-2">
          {price_adult ? <> ADULTS: AED {price_adult}</> : "PRICE ON REQUEST"} /
          {"  "}
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
          <Link href={`/compare-packages?compare1=${id}`}>Compare</Link>
          {/* <Link href={`/${lang}/compare-packages?compare1=${id}`}>Compare</Link> */}
        </div>
      </div>
      {active == id ? (
        <div className="mt-3">
          <ul>
            {DetailsList?.map((item, i) => (
              <li key={"Iters" + i}>{item?.activity}</li>
            ))}
          </ul>
        </div>
      ) : null}
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
        {itineraries?.length > 0 && (
          <button
            onClick={() => {
              if (active == id) {
                setActive(null);
                // setExtraDetails([]);
                setDetailsList([]);

                return;
              }
              setActive(id);
              setDetailsList(itineraries);
              // setExtraDetails(itineraries);
            }}
            className={`btnNl ${
              active == id ? "btnNl-primary" : "btnNl-secondary"
            } pds `}
          >
            {active == id ? "Hide Details" : "View Details"}
            {/* <IoIosArrowDown className="iconsvg" size={16} /> */}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
