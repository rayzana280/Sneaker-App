import React from "react";

function Cart({item, cartUpdate, inCart}){
    //console.log(item.id)
    const cart = item.inCart
    function handleClick(){
        fetch(`http://localhost:9292/shoes/${item.id}`, {
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
          <h5>Item: {item.name}</h5>  
          <h5>Item Color: {item.color}</h5>
          <h5>${item.price} ea</h5>
          <img src={item.image} alt="item image" className="cartImage"/>
          <button className="buttonCart" onClick={handleClick}>X</button>
        </div>
    )
}

export default Cart;