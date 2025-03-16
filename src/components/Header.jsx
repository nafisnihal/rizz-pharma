import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/main.scss";

const Header = () => {
  return (
    <div className="container header">
      <img src={logo} alt="" className="logo" />
      <div className="header-right">
        <div className="header-nav">
          <nav className="navs">
            <a href="" className="nav">
              Home
            </a>
            <a href="" className="nav">
              Category
            </a>
            <a href="" className="nav">
              Top Products
            </a>
            <a href="" className="nav">
              Contact Us
            </a>
            <a href="" className="nav">
              FAQs
            </a>
          </nav>
          <div className="socials">
            <a href="">
              <FaInstagram size={24} />
            </a>
            <a href="">
              <AiOutlineFacebook size={24} />
            </a>
          </div>
        </div>
        <div className="header-buttons">
          <button className="button-primary">Sign Up</button>
          <button className="button-secondary">Login</button>
          <BsCart3 size={36} className="cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
