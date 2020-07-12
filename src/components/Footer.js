import React from "react";
import logo from "../images/logo.png";
import { findByLabelText } from "@testing-library/react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="d-flex">
        <img src={logo} alt="logo" width="40px" height="40" />
        <p className="description ml-2">
          Amaterasu Stories is a website to share your stories to others :)
        </p>
      </div>

      <ul className="mt-2 ml-4">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
      <div className="d-flex">
        <a href="https://www.facebook.com" target="blank">
          <img
            src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png"
            alt="logo"
            width="30px"
            height="30"
          />
        </a>
        <a href="https://www.twitter.com" target="blank">
          <img
            src="https://pngimg.com/uploads/twitter/twitter_PNG34.png"
            alt="logo"
            width="30px"
            height="30"
          />
        </a>
        <a href="https://www.instagram.com" target="blank">
          <img
            src="https://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png"
            alt="logo"
            width="30px"
            height="30"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
