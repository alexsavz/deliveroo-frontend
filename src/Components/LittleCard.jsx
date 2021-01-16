import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LittleCard = ({meals}) => {
  return (
      <>
        {meals.map((meal) => {
          return (
            <div className="little-card-menu">
              <div className="little-card" key={meal.id}>
                <div className="little-card-text">
                  <h3>{meal.title}</h3>
                  <p>{meal.description}</p>
                  <div className="little-card-infos"><span className="price">{meal.price} €</span>{meal.popular && <span className="popular"><FontAwesomeIcon icon="star" />Populaire</span>}</div>
                </div>
                <div className="little-card-picture">
                  <img src={meal.picture} alt=""/>
                </div>
              </div>  
            </div>
          )
        })}
      </>
);
}

export default LittleCard;