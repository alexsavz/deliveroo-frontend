import React, {useState, useEffect} from "react";
import Counter from "./Counter";


const ProductLine = ({removeProduct, activeProducts, addProduct}) => {
    
    let totalprice = 0;
    const [finalPrice, setFinalPrice] = useState(0);
    
    for(let x = 0; x < activeProducts.length; x++){
        totalprice += Number(activeProducts[x].price * activeProducts[x].amount);
    };
    useEffect(() => {
    setFinalPrice(totalprice);
    }, [totalprice]);

    // console.log(finalPrice);
    const productFinalPrice = finalPrice * 1.5;

  return (
    <div className="products" >
    {
        activeProducts.map((product,i) => {
            const productPrice = product.price * product.amount;
          return (
            <div className="basket-active" key={i}>
                <div className="product-line">
                  <Counter index={i} addProduct={addProduct} removeProduct={removeProduct} id={product.id} amount={product.amount} />
                  <span className="product-name">{product.title}</span><span>{productPrice.toFixed(2)}€</span>
                {/*                              Number.prototype.toFixed() = The number of digits to appear after the decimal point */}
                </div> 
                <hr/>
            </div>
          )})
    }
    <div className="total-price"><p>Total :</p><span>{productFinalPrice.toFixed(2)}€</span></div>
    {totalprice > 0 && <div className="total-price-dev"><p>Taxe développeur :</p><span>50%</span></div>}
    </div>
    );
   
}

export default ProductLine;