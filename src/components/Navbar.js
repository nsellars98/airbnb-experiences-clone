import React from "react";
import logo from "../assets/img/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img 
        src={logo}
        alt="logo"
        className="nav--logo"
      />
    </nav>
  );
}

export default Navbar;