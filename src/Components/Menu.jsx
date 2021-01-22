import React from "react";
import Card from "./Card";

const Menu = ({addProduct, categories}) => {
    console.log(categories);
    return <>
            {
                // map on the categories array, conditional rendering if the meal is not empty
                categories.map((card,i) => {
                return card.meals.length > 0 && <Card key={i} cardTitle={card.name} meals={card.meals} addProduct={addProduct} />})
            }
        </>
}

export default Menu;