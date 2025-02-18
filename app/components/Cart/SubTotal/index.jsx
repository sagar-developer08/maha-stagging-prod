import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./styles.scss";
function index() {
  return (
    <div className="SubTotalPfd93">
      <div className="TotalWrapper">
        <div className="sec-title bdr-btm pb-3 pt-1">Order Details</div>
        <div className="details pt-3 mt-3">
          <div className="price mb-3">
            <div>Price</div>
            <div>AED 120</div>
          </div>
          <div className="price mb-3">
            <div>Discount Price</div>
            <div>AED 20</div>
          </div>

          <div className="discountInput mb-3 mt-3">
            <input className="inputField" type="text" placeholder="Coupon" />
            <button className="btnNl btnNl-primary pd-cst">Apply</button>
          </div>

          <div className="price Total mb-1">
            <div className="TOtalPrice">Total Price</div>
            <div>AED 100</div>
          </div>

          <div className="VATTax">Incluside 5% VAT</div>
        </div>
      </div>
      <button className="btnNl btnNl-primary pd-cst mt-3 w-100">
        Place Order
        <FaArrowRightLong className="mx-3" size={16} />
      </button>
    </div>
  );
}

export default index;
