import React from "react";
import "../styles/main.scss";

const Loader = ({ fullScreen }) => {
  return (
    <div
      className="loader"
      style={{
        height: fullScreen ? "100vh" : "30vh",
      }}
    >
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
