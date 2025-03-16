import React from "react";
import { BiSupport } from "react-icons/bi";
import { LiaMoneyBillWaveSolid, LiaShippingFastSolid } from "react-icons/lia";
import { LuBadgePercent } from "react-icons/lu";
import "../styles/main.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="features-item">
        <LiaMoneyBillWaveSolid className="features-icon" />
        <p>Secure Payment</p>
      </div>
      <div className="features-item">
        <BiSupport className="features-icon" />
        <p>Online Support</p>
      </div>
      <div className="features-item">
        <LiaShippingFastSolid className="features-icon" />
        <p>Free Shipping</p>
      </div>
      <div className="features-item">
        <LuBadgePercent className="features-icon" />
        <p>Best Value</p>
      </div>
    </div>
  );
};

export default Features;
