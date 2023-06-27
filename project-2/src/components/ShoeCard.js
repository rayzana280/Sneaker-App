import React from "react";

function ShoeCard({name, color, image, price, inCart, id , cartUpdate}){
    function handleClick(){
        fetch(`http://localhost:3000/shoe/${id}`, {
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
        <div>
            <h2>Name--{name}</h2>
            <h3>Price--${price}</h3>
            <h5>ColorWay--{color}</h5>
            <img src={image} alt="shoe image" className="imageCard"/>
            <button onClick={handleClick}>{inCart ? "Remove From" : "Add To"} Cart</button>
        </div>
    )
}

export default ShoeCard;