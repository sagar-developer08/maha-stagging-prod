import React, { useState } from "react";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import ReactWhatsapp from "react-whatsapp";
import { whatsappNo } from "../../../../config/general";
function Card(
  {
    featured,
    thumb,
    thumb_title,
    thumb_desc,
    title,
    price,
    detail,

    moreService,
    id,
    active,
    setActive,
    setExtraDetails,
  },
  props
) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div
      className={`AboutpkCard3232 ${lang == "ar" ? "r_dir" : "l_dir"}`}
      {...props}
    >
      <div className="ImgThumb">
        {featured && <div className="featured">Featured</div>}
        <img
          src={thumb}
          alt={title}
          title={thumb_title}
          description={thumb_desc}
        />
      </div>
      <div className="CardDIdi">
        <div className="sec-title mt-4">{title?.en}</div>
        <div className="tag-line mt-2">{price?.en}</div>
        <p className="para mt-2">{detail?.en}</p>
      </div>
      <ReactWhatsapp
        className="Wtp btnNl btnNl-primary mt-2"
        number={whatsappNo}
        message={` Hi There,   I am interested in the  ${title?.en} Service. Please get in touch with me to send me a quote.`}
      >
        Contact us
      </ReactWhatsapp>
      {/* <button className={`btnNl btnNl-primary mt-2`}>Contact us</button> */}
      {/* <button
        onClick={() => {
          if (active == id) {
            setActive(null);
            setExtraDetails([]);
            return;
          }
          setActive(id);
          setExtraDetails(moreService);
        }}
        className={`${active == id ? "btnNl-primary-j" : "btnNl-secondary-j"} ${
          active == id ? "activeCard" : ""
        } w-100 d-flex justify-content-between align-items-center`}
      >
        View Details <IoIosArrowDown className="iconsvg" size={32} />
      </button> */}
    </div>
  );
}

export default Card;
