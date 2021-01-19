import React from "react";
import ProductLine from "./ProductLine";

const Panier = ({removeProduct, activeProducts, addProduct}) => {

  return (
    <>
    {
      activeProducts.length > 0 ? 
      <div className="basket-card">
        <button>Valider mon panier</button>
        <ProductLine activeProducts={activeProducts} addProduct={addProduct} removeProduct={removeProduct} />
      </div>
      :
      <div className="basket-card basket-card-empty">
        <button>Valider mon panier</button>
        <div className="basket-empty">Votre panier est vide</div>
      </div>
    }
    </>
);
}

export default Panier;