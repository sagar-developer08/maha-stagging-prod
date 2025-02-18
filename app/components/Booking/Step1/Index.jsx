import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CalnderWraper from "./Calender/Index";
import AsGiftCard from "./AsGiftCard/Index";
import AsGiftCheckout from "./AsGiftCheckout/Index";
import "./styles.scss";

function Index(props) {
  const {
    adultAmount,
    setAdultAmount,
    childAmount,
    setChildAmount,
    setslotDetails,
    setInitialCheckOutAmount,
  } = props;
  const packageval = useSelector((state) => state?.booking?.package);

  return (
    <div className="step1dk3">
      {props?.asGiftStep == 2 ? (
        <AsGiftCheckout checkOutAmont={props?.checkOutAmont} />
      ) : (
        <Row className="step1Size">
          <Col xs={12} className="colHalf" md={8}>
            <div className="wrapper mt-4">
              <div className="sec-title">{packageval?.title}</div>
              <p className="para mt-3">{packageval?.short_detail}</p>
              <div className="sec-title mt-3">Choose Guests</div>
              {/* Adults Qty */}
              <div className="guest-sec mt-2">
                <div className="sec-title">Adult (above 11 yrs)</div>

                <div className="amount">
                  <div
                    className="qty-icon"
                    onClick={() => {
                      if (adultAmount == 0) {
                        return;
                      }
                      setAdultAmount((prev) => prev - 1);
                    }}
                  >
                    <FaMinus size={16} />
                  </div>
                  {adultAmount}
                  <div
                    className="qty-icon"
                    onClick={() => {
                      if (adultAmount >= 10) {
                        setAdultAmount(10);
                        return;
                      }
                      setAdultAmount((prev) => prev + 1);
                    }}
                  >
                    <FaPlus size={16} />
                  </div>
                </div>
              </div>
              {/* info */}
              <div className="info mt-1">
                <div className="sub-title">
                  from AED {packageval?.price_adult}
                </div>
                <p className="details mt-2">
                  *Passenger should be under 120kgs
                </p>
              </div>

              {/* Adults Qty */}
              <div className="guest-sec mt-2">
                <div className="sec-title">Child (5 - 11 yrs)</div>

                <div className="amount">
                  <div
                    className="qty-icon"
                    onClick={() => {
                      if (childAmount == 0) {
                        return;
                      }
                      setChildAmount((prev) => prev - 1);
                    }}
                  >
                    <FaMinus size={16} />
                  </div>
                  {childAmount}
                  <div
                    className="qty-icon"
                    onClick={() => {
                      if (adultAmount >= 10) {
                        setChildAmount(10);
                        return;
                      }
                      setChildAmount((prev) => prev + 1);
                    }}
                  >
                    <FaPlus size={16} />
                  </div>
                </div>
              </div>
              {/* info */}
              <div className="info mt-1">
                <div className="sub-title">
                  from AED {packageval?.price_child}
                </div>
              </div>
            </div>
          </Col>
          <Col sec-title md={4}>
            {props?.asGift ? (
              <AsGiftCard
                adultAmount={adultAmount}
                adultPrice={packageval?.price_adult}
                childAmount={childAmount}
                childPrice={packageval?.price_child}
                setCheckOutAmount={props?.setCheckOutAmount}
                checkOutAmont={props?.checkOutAmont}
              />
            ) : props?.currentStep == 2 ? (
              <CalnderWraper
                adultAmount={adultAmount}
                childAmount={childAmount}
                setCheckOutAmount={props?.setCheckOutAmount}
                setInitialCheckOutAmount={setInitialCheckOutAmount}
                setslotDetails={setslotDetails}
              />
            ) : null}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Index;
