import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" width="50px" />
      <div className="navigation my-auto">
        <a href="/">Home</a>
        <a href="/stories">Stories</a>
        <a href="/post-story">Post Story</a>
      </div>
    </div>
  );
}

export default Header;
