import React, { useEffect } from "react";
import "./styles.scss";
function Index(props) {
  const { adultAmount, adultPrice, childAmount, childPrice, checkOutAmont } =
    props;
  useEffect(() => {
    let totalAdultsPrice = adultPrice * adultAmount;
    let totalChildPrice = childPrice * childAmount;
    props?.setCheckOutAmount(totalAdultsPrice + totalChildPrice);
  }, [adultAmount, childAmount]);
  return (
    <div className="GiftCard392">
      {" "}
      <div className="sec-title mt-40">Customize Your Gift Card Value</div>
      <p className="para mt-3">
        You’re in control! Decide the value of your gift card. Simply select the
        amount that suits your generosity. Need help calculating? Consider the
        unit prices of our offerings to tailor the perfect amount for your gift.
      </p>
      <div className="guest-info mt-40">
        <div className="title">{props?.adultAmount} Adult</div>
        <div className="amont">Aed {adultPrice * adultAmount}</div>
      </div>
      <div className="guest-info mt-40">
        <div className="title">{props?.childAmount} Child</div>
        <div className="amont">Aed {childPrice * childAmount}</div>
      </div>
      <div className="giftamountWrapper mt-40">
        <div className="sec-title mb-3">Gift Card Value</div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            AED
          </span>
          <input
            type="text"
            class="form-control inputField"
            value={checkOutAmont}
            disabled
          />
        </div>
        <p className="msg-info">Minimum gift card value is Aed 200</p>
      </div>
    </div>
  );
}

export default Index;
