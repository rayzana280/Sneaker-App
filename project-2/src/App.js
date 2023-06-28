import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Selection from "./components/Selection";
import Sell from "./components/Sell";
import NavBar from "./components/NavBar"
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Cart from "./components/Cart";

function App() {
  const [shoeData, stateShoeData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/shoe")
    .then((res) => res.json())
    .then((data)=> stateShoeData(data))
  }, [])
  //console.log(shoeData)

  function addData(newData){
    stateShoeData([...shoeData, newData])
  }

  function cartUpdate(updateCart){
    const updatedItems = shoeData.map((item)=> {
      if(item.id === updateCart.id){
        return updateCart;
      }else{
        return item;
      }
    });
    stateShoeData(updatedItems);
  }

  const cart = shoeData.filter((item)=>{
    if(item.inCart.toString() !== "false"){
      return item
    }
  })

  //console.log(cart)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/cart">
          {cart.map((item)=>{
            return <Cart key={item.id} item={item} cartUpdate={cartUpdate} inCart={item.inCart}/>
          })}
        </Route>
        <Route path="/selection">
          <Selection shoeData={shoeData} cartUpdate={cartUpdate} />
        </Route>
        <Route path="/sell">
          <Sell addData={addData}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
