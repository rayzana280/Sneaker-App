
import './App.css';
import Home from "./components/Home.tsx";
import Selection from "./components/Selection.tsx";
import Sell from "./components/Sell.tsx";
import NavBar from "./components/NavBar.tsx"
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Cart from "./components/Cart.tsx";

export interface Shoe {
  id: number;
  name: string;
  size: number;
  color: string;
  price: number;
  image: string;
  inCart: boolean;
  user_id: number;
}

interface User {
  id: number;
  email: string; 
}

//you will need to have login or sign up because if user doesnt use a email saved in the database then error will come
// add all the commits so git would know what to upload 
function App() {
  const [shoeData, stateShoeData] = useState<Shoe[]>([]);
  const [userData, stateUserData] = useState<User[]>([]);

  useEffect(()=>{
    fetch("http://localhost:9292/shoes")
    .then((res) => res.json())
    .then((data)=> stateShoeData(data))
  }, []);

  useEffect(()=>{
    // use this data to get the user_id for the foreign key 
    fetch("http://localhost:9292/user")
    .then((respond)=> respond.json())
    .then((data)=> stateUserData(data))
  }, []);

  //console.log(shoeData)

  function addData(newData){
    stateShoeData([...shoeData, newData])
  };
  //error may occur because you set value of property in an object when you havent set the value set the properties of the object 

  function cartUpdate(updateCart: Shoe){
    const updatedItems = shoeData.map((item)=> {
      if(item.id === updateCart.id){
        return updateCart;
      }else{
        return item;
      }
    });
    stateShoeData(updatedItems);

  };



  const cart = shoeData.filter((item: Shoe)=>{
    if(item.inCart.toString() !== "false"){
      return item
    }
  });


  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/cart">
          {cart.map((item: Shoe)=>{
            return <Cart key={item.id} item={item} cartUpdate={cartUpdate} />
          })}
        </Route>
        <Route path="/selection">
          <Selection shoeData={shoeData} cartUpdate={cartUpdate} />
        </Route>
        <Route path="/sell">
          <Sell addData={addData} userData={userData}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

