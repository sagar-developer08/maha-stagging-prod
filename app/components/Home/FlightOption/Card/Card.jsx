import React, { useState } from "react";

import "./styles.scss";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../../store/booking";
import ReactWhatsapp from "react-whatsapp";
import { whatsappNo } from "../../../../config/general";
function Card(props) {
  const {
    featured = false,
    title,
    price,
    price_adult,
    price_child,
    short_detail,
    thumb,
    thumb_title,
    thumb_desc,
    id,
    itineraries,
    active,
    setActive,
    setExtraDetails,
  } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const dispatch = useDispatch();
  const [DetailsList, setDetailsList] = useState([]);

  return (
    <div
      className={`flightoptionCard3i21j ${lang == "ar" ? "r_dir" : "l_dir"}`}
    >
      <div className="cardFlight">
        <div className="imageWrapper">
          <img
            src={thumb}
            alt={title}
            title={thumb_title}
            description={thumb_desc}
          />
          {/* {featured && <div className="featured">Featured</div>} */}
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
            <p className="para">45 - 60 Minutes</p>
          </div>
          <div className="mt-1">
            <p className="para bds">Location</p>
            <p className="para">Margham Dubai, United Arab Emirates</p>
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

        {/* <div className="price mt-1 mt-md-3">
          <div className="title">{title}</div>
          <div className="amount">From AED {price}</div>
        </div>
        <div className="time mt-1 mt-md-3">
          <p className="para bds">Time</p>
          <p className="para">45 - 60 Minutes</p>
        </div>
        <div className="location mt-1 mt-md-3">
          <p className="para bds">Location</p>
          <p className="para">Margham Dubai, United Arab Emirates</p>
        </div> */}

        <div className="w-100">
          <ReactWhatsapp
            className="Wtp"
            number={whatsappNo}
            message={` Hi There,   I am interested in the  ${title} package. Please get in touch with me to send me a customized quote.`}
          >
            <button
              className="btnNl btnNl-primary pds mrs mt-3"
              accordion
              onClick={() => {
                // dispatch(setBooking(true));
              }}
            >
              Get a Quote
            </button>
          </ReactWhatsapp>
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
            className={`btnNl  mt-3 ${
              active == id ? "btnNl-primary" : "btnNl-secondary"
            } pds`}
          >
            {" "}
            {active == id ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
