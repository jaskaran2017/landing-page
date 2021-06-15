import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>sunnyside</h1>
      </div>
      <div className="header__right">
        <h5>About</h5>
        <h5>Services</h5>
        <h5>Projects</h5>

        <button className="header__btn">CONTACT</button>
      </div>
    </div>
  );
}

export default Header;
