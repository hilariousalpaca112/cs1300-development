import logo from './logo.svg';
import React from "react";
import FilteredList from "./FilteredList";
import ShoppingCart from "./ShoppingCart";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import './App.css';


// data list
const productList = [
  { id: 0, name: "Gruaud Larose", type: "Red", region: "France", price: 35},
  { id: 1, name: "Las Perdices", type: "Red", region: "Argentina", price: 40},
  { id: 2, name: "Ladoix Blanc", type: "White", region: "France", price: 165},
  { id: 3, name: "Sinskey Pinot Noir", type: "Red", region: "America", price: 65},
  { id: 4, name: "Vidiano", type: "White", region: "Greece", price: 30},
  { id: 5, name: "Champagne Sanger", type: "Sparkling", region: "France", price: 50},
  { id: 6, name: "Lytton Estate Rosé", type: "Rosé", region: "America", price: 20},
  { id: 7, name: "Tomero", type: "Red", region: "Argentina", price: 30},
  { id: 8, name: "Methea", type: "Rosé", region: "Greece", price: 25},
  { id: 9, name: "L'Ermitage", type: "Sparkling", region: "America", price: 45 },
  { id: 10, name: "Secret Des Terres", type: "Red", region: "France", price: 70 },
  { id: 11, name: "Le Vigneron Grec", type: "White", region: "Greece", price: 35},


];



const App = () => {


  const [cartItems, setCartItems] = React.useState([]);

  // functions to handle adding and removing items to cart
  const handleAddWine = (wineBottle) => {
    setCartItems(cartItems.concat([{ ...wineBottle, id: Date.now() }]));
  };

  const handleRemoveWine = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (

    <div className="container-fluid d-flex py-2">
      <div className='header'>
      <h1>Online Wine Shop</h1>
      <FilteredList list={productList} onAdd={handleAddWine} />
      </div>
      <div>
        <ShoppingCart cartItems={cartItems} onRemove={handleRemoveWine} />
      </div>
    </div>
  );
};

export default App;