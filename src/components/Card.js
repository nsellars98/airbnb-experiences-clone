import React from "react";
import icon from "../assets/img/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } // else, location != online && spots still available, doNothing();

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img 
        src={require(`../assets/img/${props.coverImg}`).default}
        alt={props.title}
        className="card--image"
      />
      <div className="card--stats">
        <img
          src={icon}
          alt="icon"
          className="card--icon"
        />
        <span>{props.stats.rating}</span>
        <span className="gray--text">({props.stats.reviewCount}) • </span>
        <span className="gray--text">{props.location}</span>
      </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <span className="bold--text">From ${props.price}</span> / person
        </p>
    </div>
  );
}

export default Card;