import React from "react";
import "../styles/main.scss";

const Hero = () => {
  return (
    <div className="container hero" id="hero">
      <h1 className="hero-title">
        Prescription treatments for your <br />{" "}
        <span className="colored-text">health goals</span>
      </h1>
      <button className="hero-button">Find My Treatment</button>
    </div>
  );
};

export default Hero;
