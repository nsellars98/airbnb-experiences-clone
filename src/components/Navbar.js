import React from "react";
import "../style/style.css"
import logo from "../assets/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="nav--logo"/>
    </nav>
  );
}

export default Navbar;