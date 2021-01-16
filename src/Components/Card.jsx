import React from "react";
import LittleCard from "./LittleCard";

const Card = (props) => {
  return (
    <div className="menu-items">
        <h2 className="card-title">{props.cardTitle}</h2>
        <div className="menu-item">
                <LittleCard meals={props.meals}/>
        </div>
    </div>
);
}

export default Card;