import React from "react";

const Counter = ({id, addProduct, removeProduct, amount}) => {

  return (
    <div className="counter">
        <span onClick={() => removeProduct(id)}> - </span>
        <span>{amount}</span>
        <span onClick={() => addProduct(id)}> + </span>
    </div>
);
}

export default Counter;