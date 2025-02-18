import React, { useState } from "react";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  setBooking,
  setPackage,
  setPackageId,
} from "../../../../store/booking";
import { useDispatch } from "react-redux";
function Card(props) {
  const {
    featured,
    package_image,
    title,
    price_adult,
    price_child,
    short_detail,
    itineraries,
    id,
    active,
    setActive,
    setExtraDetails,
    packageVal,
  } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const dispatch = useDispatch();
  const [DetailsList, setDetailsList] = useState([]);

  return (
    <div
      className={`AboutpkCard32 ${lang == "ar" ? "r_dir" : "l_dir"}`}
      {...props}
    >
      <div className="ImgThumb">
        {featured && <div className="featured">Featured</div>}
        <img src={package_image} alt="" />
      </div>
      <div className="detailsSec">
        <h4 className="sec-title mt-4">{title}</h4>
        <div className="tag-line mt-2">
          {" "}
          {price_adult ? <> ADULTS: AED {price_adult}</> : "PRICE ON REQUEST"} /
          {"  "}
          {price_child && <>CHILD: AED {price_child}</>}
        </div>
        <p className="para mt-2">{short_detail}</p>
        <div className="time mt-1">
          <p className="para bds">Time</p>
          <p className="para">45 - 60 Minutes</p>
        </div>
        <div className="mt-1">
          <p className="para bds">Location</p>
          <p className="para">Margham Dubai, United Arab Emirates</p>
          <Link href={`/compare-packages?compare1=${id}`}>Compare</Link>
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
              // setExtraDetails(itineraries);
              setDetailsList(itineraries);
            }}
            className={`btnNl ${
              active == id ? "btnNl-primary" : "btnNl-secondary"
            } pds `}
          >
            View Details
            {/* <IoIosArrowDown className="iconsvg" size={32} /> */}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
