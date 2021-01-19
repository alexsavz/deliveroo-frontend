import React from "react";
import ProductLine from "./ProductLine";

const Panier = ({removeProduct, activeProducts, addProduct}) => {

  return (
  <div className="basket-card">
    <button>Valider mon panier</button>
    <ProductLine activeProducts={activeProducts} addProduct={addProduct} removeProduct={removeProduct} />
  </div>
  
);
}

export default Panier;