import React from "react";
import { TbLocationFilled } from "react-icons/tb";
import "../styles/main.scss";

const Services = () => {
  return (
    <div className="services-container" id="services">
      <div className="container services">
        <div>
          <h1>100% Online,</h1>
          <h1>100% Convenient</h1>
        </div>
        <div className="services-list">
          <p>
            <TbLocationFilled className="icon" size={18} /> Chat with a provider
            24/7
          </p>
          <p>
            <TbLocationFilled className="icon" size={18} /> Fast, discreet
            shipping
          </p>
          <p>
            <TbLocationFilled className="icon" size={18} /> Clinically proven
            ingredients and FDA-approved treatments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
