import React from "react";

function ShoeCard({name, color, image }){
    return(
        <div>
            <h2>Name--{name}</h2>
            <h5>ColorWay--{color}</h5>
            <img src={image} alt="shoe image"/>
        </div>
    )
}

export default ShoeCard;