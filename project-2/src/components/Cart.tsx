import React from "react";
import {Shoe} from '../App.tsx'

interface Props {
    item: Shoe // item is Shoe
    cartUpdate: (updatedCart: Shoe) => void //check to see how to return more then one thing you could use if else ;
}

function Cart({item, cartUpdate}: Props){

    const {id, name, inCart, price , color, image} = item

    //console.log(item.id)
    function handleClick(){
        fetch(`http://localhost:9292/shoes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inCart: !inCart,
            }),
        })
        .then((r)=> r.json())
        .then((updatedCart)=> cartUpdate(updatedCart))
    }
    return(
        <div className="cart">
            <h6>Item In Cart</h6>
          <h5>Item: {name}</h5>  
          <h5>Item Color: {color}</h5>
          <h5>{`${price} each`}</h5>
          <img src={image} alt="item image" className="cartImage"/>
          <button className="buttonCart" onClick={handleClick}>X</button>
        </div>
    )
}

export default Cart;