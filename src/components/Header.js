import React, { useState } from "react";
import headerSVG from "../resources/undraw_adventure_4hum 1.svg";
import "../styles/Header.css";

const Header = ({ showImage }) => (
  <div className="header">
    <h1 className="header-text">Country Quiz</h1>;
    <img
      className={`header-image ${showImage}`}
      src={headerSVG}
      alt="header svg"
    />
  </div>
);

export default Header;
