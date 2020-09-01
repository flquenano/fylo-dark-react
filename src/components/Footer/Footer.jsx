import React from "react";
import "./_footer.scss";

import GPS from "assets/images/icon-location.svg";
import Phone from "assets/images/icon-phone.svg";
import Email from "assets/images/icon-email.svg";
import Logo from "assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer__content">
        <div className="footer__contact">
          <div className="footer__location">
            <img src={GPS} alt="Loc Icon" className="footer__location-icon" />
            <p className="footer__location-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="footer__mobile">
            <img src={Phone} alt="Phone Icon" className="footer__mobile-icon" />
            <p className="footer__email-text">+1-543-123-4567</p>
          </div>

          <div className="footer__email">
            <img src={Email} alt="Email Icon" className="footer__email-icon" />
            <p className="footer__email-text">example@fylo.com</p>
          </div>
        </div>

        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">About Us</li>
            <li className="footer__nav-item">Jobs</li>
            <li className="footer__nav-item">Press</li>
            <li className="footer__nav-item">Blog</li>
          </ul>

          <ul className="footer__nav-list">
            <li className="footer__nav-item">Contact Us</li>
            <li className="footer__nav-item">Terms</li>
            <li className="footer__nav-item">Privacy</li>
          </ul>
        </div>
        <div className="footer__sns">
          <i className="fab fa-2x fa-facebook-square"></i>
          <i className="fab fa-2x fa-twitter-square"></i>
          <i className="fab fa-2x fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
