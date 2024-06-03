import React from "react";

function ShoeCard({name, color, image, price, inCart, id , cartUpdate, shoeSize}){
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
    
    if(!image){
        return <h2>Loading...</h2>
      }
    return(
        <div className="divCard">
            <h2>Name--{name}</h2>
            <h3>Price--${price}</h3>
            <h5>ColorWay--{color}</h5>
            <h5>Size--{shoeSize}</h5>
            <img src={image} alt="shoe image" className="imageCard"/>
            <button className="buttonCard" onClick={handleClick}>{inCart ? "Remove From" : "Add To"} Cart</button>
        </div>
    )
}

export default ShoeCard;