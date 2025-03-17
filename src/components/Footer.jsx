import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import branding from "../assets/Branding.png";
import himsLogo from "../assets/hims-logo.png";
import hipaaLogo from "../assets/hipaa-logo.png";
import "../styles/main.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer container">
        <div className="footer-top">
          <div className="footer-section subscribe-box">
            <h3>Let's Stay In Touch</h3>
            <p>Keep up to date with our latest news & special offers.</p>
            <div class="subscribe-input">
              <input type="email" placeholder="enter your email" />
              <TbLocation size={24} />
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#">Erectile Dysfunction</a>
            <a href="#">Weight Loss</a>
            <a href="#">Men's Hair Loss</a>

            <h4 className="contact">Contact Info</h4>
            <a href="#" className="contact-email">
              <CiMail size={14} /> hello@rizzpharma.com
            </a>
          </div>

          <div className="footer-section">
            <h4>Our Company</h4>
            <a href="#">HIPAA Notice</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Return & Refund Policy</a>
          </div>
        </div>
        <div className="footer-mid">
          <div className="mid-left">
            <img src={hipaaLogo} alt="hipaa" />
          </div>
          <div className="mid-right">
            <div className="socials">
              <a href="#">
                <FaFacebook size={16} />
              </a>
              <a href="#">
                <FaInstagram size={16} />
              </a>
            </div>
            <div className="mid-right-copyright">
              <img src={himsLogo} alt="" />
              <p>
                Copyright © 2024 Rizz Pharma All Right Reserved - Built by
                Business Web Social
              </p>
            </div>
          </div>
        </div>
        <img src={branding} alt="" className="footer-branding" />
      </div>
    </div>
  );
};

export default Footer;
