import './App.css';
import {useState, useEffect} from "react";
import Header from './Components/Header';
import Menu from './Components/Menu';
import Panier from "./Components/Panier";
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

function App() {

  const [load, setLoad] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-reacteur-alexsavz.herokuapp.com/");
      setLoad(response.data);
      setIsLoading(false);
      // console.log(response.data.restaurant.path);
    } catch (e) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // onClick to add a product name in the new array
  const addProduct = (itemId) => {
    console.log("Product added");

    let isSelected = false;

    products.forEach(product => {
      if (product.id === itemId){
        isSelected = true;
      }
    })
 
    // L'item selectionné est confirmé dans le panier
    if(isSelected){

      const productsCopy = [...products];

      // on le selectionne dans le tableau à l'aide de l'id
      const productToFind = productsCopy.find((product) => 
        product.id === itemId
      );

      productToFind.amount++;
      setProducts(productsCopy);
    }
    // Si il n'est pas selectionné, l'item est push dans le tableau de pruduits du panier
    else{
      const productsCopy = [...products];
      load.categories.forEach(category => {
        category.meals.forEach(meal => {
          if(meal.id === itemId){
            meal.amount = 1;
            productsCopy.push(meal);
          }
        });
      });
      setProducts(productsCopy);
      } 
  }

  const removeProduct = (itemId) => {
    
    const productsCopy = [...products];

    let isSelected = false;
    products.forEach(product => {
      if (product.id === itemId){
        isSelected = true;
      }
    })

    if(isSelected){
      const productToFind = productsCopy.find((product) => 
        product.id === itemId
      );

      if(productToFind.amount > 0){
        // productToFind.price = productToFind.price.toFixed(2);
        productToFind.amount--;
      setProducts(productsCopy);
      }
      
    }
  }

  console.log(products);

  return (
    <div className="App">
      {
      isLoading ? <span>En cours de chargement... </span> :
      <div>
        <Header title={load.restaurant.name} text={load.restaurant.description} src={load.restaurant.picture} />
        <div className="Main">
          <div className="main-content">
            <div className="cards">
                <Menu categories={load.categories} addProduct={addProduct} />
            </div>
            <div className="basket">
                <Panier activeProducts={products} removeProduct={removeProduct} addProduct={addProduct} />
            </div>
          </div>
        </div>
      </div>
     }
    </div>
  );
}

export default App;
