import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../store/booking";
import "./styles.scss";

function Index(props) {
  const dispatch = useDispatch();

  return (
    <div className={props?.asGiftStep == 2 ? "topBar32 bderBTM" : "topBar32"}>
      {" "}
      <div className="title-sec">
        {props?.asGiftStep == 2 ? (
          <div className="sec-title">Checkout</div>
        ) : (
          <div className="breadCrub">
            {props?.currentStep <= 2 ? (
              <div className="sec-title active">Booking</div>
            ) : props?.currentStep == 3 ? (
              <>
                <div
                  className="sec-title"
                  onClick={() => {
                    if (props?.lastSubmit) {
                      return;
                    }
                    props?.setCurrentStep(1);
                  }}
                >
                  Booking
                  <IoIosArrowForward size={16} />
                </div>
                <div
                  className="sec-title active"
                  onClick={() => {
                    if (props?.lastSubmit) {
                      return;
                    }
                    props?.setCurrentStep(3);
                  }}
                >
                  Contact Details
                  <IoIosArrowForward size={16} />
                </div>
              </>
            ) : props?.currentStep == 4 ? (
              <>
                <div
                  className="sec-title"
                  onClick={() => {
                    if (props?.lastSubmit) {
                      return;
                    }
                    props?.setCurrentStep(1);
                  }}
                >
                  Booking
                  <IoIosArrowForward size={16} />
                </div>
                <div
                  className="sec-title"
                  onClick={() => {
                    if (props?.lastSubmit) {
                      return;
                    }
                    props?.setCurrentStep(3);
                  }}
                >
                  Contact Details
                  <IoIosArrowForward size={16} />
                </div>
                <div className="sec-title active">
                  Pickup
                  <IoIosArrowForward size={16} />
                </div>
              </>
            ) : (
              <>
                <div className="sec-title">
                  Booking
                  <IoIosArrowForward size={16} />
                </div>
                <div className="sec-title">
                  Contact Details
                  <IoIosArrowForward size={16} />
                </div>
                <div className="sec-title">
                  Pickup
                  <IoIosArrowForward size={16} />
                </div>
                <div className="sec-title active">
                  Details
                  <IoIosArrowForward size={16} />
                </div>
              </>
            )}
          </div>
        )}
        <div className="endHalf">
          {/* <div className="btns-section">
            <select className="btnNl btnNl-primary pds" name="lang" id="">
              <option value="en">En</option>
            </select>
            <div className="bar"> </div>
            <select className="btnNl btnNl-secondary pds" name="currency" id="">
              <option value="en">USD $</option>
            </select>
          </div> */}
          <div
            className="closeIcon"
            onClick={() => {
              // dispatch(setBooking(false));
              props?.handleClose();
            }}
          >
            <IoMdClose size={30} />
          </div>
        </div>
      </div>
      {/* {props?.asGiftStep == 2 ? null : (
        <div className="message mt-2">
          <div className="info-icon">
            <RiErrorWarningFill size={40} />
          </div>
          <div className="para">
            Passengers must be at least 5 years old to join the flight, While
            the approximate pick-up time is between 3AM & 5AM, The exact timing
            depends on the sunrise of the month and will be provided the evening
            before your experience.
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Index;
