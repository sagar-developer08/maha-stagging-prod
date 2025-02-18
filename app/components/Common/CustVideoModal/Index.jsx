import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles.scss";
function Index(props) {
  const { viewCustomVideo, viewCustomVideoSrc, videoRef, handleClose } = props;

  return (
    <div className={`${viewCustomVideo ? "cst_modal" : "cst_hidden"}`}>
      <div className="closeIcon_wrapper">
        <div className="closeIcon" onClick={() => handleClose()}>
          <IoIosCloseCircle className="closeIcon" size={35} />
        </div>
      </div>

      <video playsInline controls preload="metadata" ref={videoRef}>
        <source
          // poster="http://res.cloudinary.com/dmcknuzk4/image/upload/v1729248147/hhmlbgdcbd97chtrn32y.webp"
          src={viewCustomVideoSrc}
          // src={ReferalVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Index;
