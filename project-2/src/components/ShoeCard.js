import React from "react";

function ShoeCard({name, color, image, price }){
    return(
        <div>
            <h2>Name--{name}</h2>
            <h3>Price--${price}</h3>
            <h5>ColorWay--{color}</h5>
            <img src={image} alt="shoe image" className="imageCard"/>
        </div>
    )
}

export default ShoeCard;