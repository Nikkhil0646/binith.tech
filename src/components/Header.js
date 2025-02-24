// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="Binith">
        <p className="hey">Hey,</p>
        <h1>Binith Kumar</h1>
        <p className="second_para">this side.</p>
      </div>
      <div className="bullet_points">
        <ul className="three_bullet">
          <li>developer</li>
          <li>artist</li>
          <li>creator</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
