import React from "react";
import image from "../assets/katie-zaferes.png";
import icon from "../assets/star.png";

function Card() {
  return (
    <div className="card">
      <img src={image} alt="Katie Zaferes" className="card--image"/>
      <div className="card--stats">
        <img src={icon} alt="icon" className="card--icon"/>
        <span>5.0</span>
        <span className="gray--text">(6) • </span>
        <span className="gray--text">USA</span>
      </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className="bold--text">From $136</span> / person</p>
    </div>
  );
}

export default Card;