import React from "react";
import Card from "./Card";

const Menu = (props) => {
  return <Card cardTitle={props.cardTitle} meals={props.meals} />
}

export default Menu;