import React from "react";
import "./Footer.css";

const Footer = ({ logo }) => {
  return (
    <footer className="footer">
      {/* footer top section */}
      <div className="footer_top-container">
        <h4 className="footer_top-heading">Find Your Perfect Home Today</h4>
        <p className="footer_top-subtext">
          Have a question about our apartments or services? Get in touch with us
          and our friendly customer service team will be happy to assist you
        </p>
        <button className="footer_btn">Contact Us</button>
      </div>

      {/* footer bottom section */}
      <div className="footer_bottom-container">
        <img src={logo} alt="cozyhaven logo" className="footer_logo" />
        <ul className="footer_nav">
          <a href="#" className="footer_nav-link">
            <li className="footer_nav-item">Home</li>
          </a>
          <a href="#" className="footer_nav-link">
            <li className="footer_nav-item">Apartment Type</li>
          </a>
          <a href="#" className="footer_nav-link">
            <li className="footer_nav-item">About Us</li>
          </a>
          <a href="#" className="footer_nav-link">
            <li className="footer_nav-item">Contact Us</li>
          </a>
          <a href="#" className="footer_nav-link">
            <li className="footer_nav-item">Terms & Conditions</li>
          </a>
          <a href="#" className="footer_nav-link">
            <li className="footer_nav-item">Privacy Policy</li>
          </a>
        </ul>
        <p className="footer_bottom-text">
          &copy; 2023 CozyHaven, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
