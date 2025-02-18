import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../store/booking";

import "./styles.scss";
import { toast } from "react-toastify";
import { RiErrorWarningFill } from "react-icons/ri";
function Index(props) {
  const [viewDetails, SetVIewDetails] = useState(false);
  const {
    currentStep,
    asGift,
    setAsGift,
    setAsGiftStep,
    asGiftStep,
    setCurrentStep,
    checkOutAmont,
    lastSubmit,
    handleCheckout,
    isCheckout,
    isPassengerValidated,
    slotDetails,
  } = props;
  return (
    <div className="footer393ld">
      {" "}
      <div className="FooterBTNS mt-1 mt-md-5">
        {asGift ? (
          <div></div>
        ) : lastSubmit ? (
          <div></div>
        ) : (
          <div className="DOts">
            <span
              className={currentStep == 1 ? "active" : ""}
              onClick={() => setCurrentStep(1)}
            ></span>
            <span
              className={currentStep == 2 ? "active" : ""}
              onClick={() => setCurrentStep(2)}
            ></span>
            <span
              className={currentStep == 3 ? "active" : ""}
              onClick={() => setCurrentStep(3)}
            ></span>
            <span
              className={currentStep == 4 ? "active" : ""}
              onClick={() => {
                setCurrentStep(4);
              }}
            ></span>
            {/* <span
              className={currentStep == 5 ? "active" : ""}
              onClick={() => setCurrentStep(5)}
            ></span> */}
          </div>
        )}

        {/*  */}
        <div className="btns">
          {!asGift ? (
            <>
              {/* {currentStep <= 2 ? (
                <button
                  className="btnNl btnNl-secondary"
                  onClick={() => {
                    setAsGift(true);
                  }}
                >
                  Buy as a Gift Card
                </button>
              ) : null} */}
            </>
          ) : (
            <button
              className="btnNl btnNl-secondary mx-3"
              onClick={async () => {
                if (asGift) {
                  setAsGiftStep(1);
                  setAsGift(false);

                  return;
                }
                if (currentStep == 1) {
                  return;
                }

                setCurrentStep((prev) => prev - 1);
              }}
            >
              Back
            </button>
          )}
          {/* Next Step Button */}
          {/* handleCheckout */}
          {currentStep == 4 && lastSubmit ? (
            <button
              className="btnNl btnNl-primary mt-3"
              onClick={(e) => {
                handleCheckout(e);
              }}
            >
              {isCheckout ? "Processing" : "Checkout"}
            </button>
          ) : currentStep == 4 && !lastSubmit ? (
            <></>
          ) : (
            <button
              className="btnNl btnNl-primary"
              onClick={async () => {
                // if (asGift) {
                //   setAsGiftStep(2);
                //   return;
                // }
                if (currentStep == 2 && !slotDetails) {
                  toast.info("Please Select a Booking Date");
                  return;
                }
                if (currentStep == 4 && !lastSubmit) {
                  toast.info("Please Submit All Data First");
                  return;
                }
                setCurrentStep((prev) => prev + 1);
              }}
            >
              {checkOutAmont ? `AED ${checkOutAmont} Continue` : "Continue"}
            </button>
          )}
        </div>
      </div>
      <div
        className={`message mt-3 ${
          viewDetails ? "notdisabled" : "disabledCtn"
        }`}
      >
        <div className="info-icon" onClick={() => SetVIewDetails(!viewDetails)}>
          <RiErrorWarningFill size={40} />
        </div>
        <div className="para">
          Passengers must be at least 5 years old to join the flight, While the
          approximate pick-up time is between 3AM & 5AM, The exact timing
          depends on the sunrise of the month and will be provided the evening
          before your experience.
        </div>
      </div>
    </div>
  );
}

export default Index;
