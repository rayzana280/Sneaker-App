import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Selection from "./components/Selection";
import Sell from "./components/Sell";
import NavBar from "./components/NavBar"
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";

function App() {
  const [shoeData, stateShoeData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/shoe")
    .then((res) => res.json())
    .then((data)=> stateShoeData(data))
  }, [])
  //console.log(shoeData)
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/selection">
          <Selection shoeData={shoeData} />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
