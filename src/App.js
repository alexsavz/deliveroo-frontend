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
  
  if(!isLoading){
    console.log(load.categories.map((el,i) => {
      return el.name;}));
  }

//   (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: "Brunchs", meals: Array(2)}
// 1: {name: "Petit déjeuner", meals: Array(8)}
// 2: {name: "Viennoiseries et pains", meals: Array(12)}
// 3: {name: "Salades", meals: Array(7)}
// 4: {name: "Tartines froides", meals: Array(5)}
// 5: {name: "Soupe & plats chauds", meals: Array(6)}
// 6: {name: "Sandwichs baguette", meals: Array(0)}
// 7: {name: "Desserts", meals: Array(0)}
// 8: {name: "Boissons fraîches", meals: Array(0)}
// 9: {name: "Epicerie bio", meals: Array(0)}
// 10: {name: "Repas corporate", meals: Array(0)}
// 11: {name: "Couverts", meals: Array(0)}
// length: 12
// __proto__: Array(0)

// el.name
// ["Brunchs", "Petit déjeuner", "Viennoiseries et pains", "Salades", "Tartines froides", "Soupe & plats chauds", "Sandwichs baguette", "Desserts", "Boissons fraîches", "Epicerie bio", "Repas corporate", "Couverts"]

  return (
    <div className="App">
      {
      isLoading ? <span>En cours de chargement... </span> :
      <div>
        <Header title={load.restaurant.name} text={load.restaurant.description} src={load.restaurant.picture} />
        <div className="Main">
          <div className="main-content">
            <div className="cards">
              {load.categories.map((card,i) => {
                return <Menu key={i} cardTitle={card.name} meals={card.meals} />;})}
            </div>
            <div className="basket">
                <Panier />
            </div>
          </div>
        </div>
      </div>
     }
    </div>
  );
}

export default App;
