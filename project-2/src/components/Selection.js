import React from "react";
import ShoeCard from "./ShoeCard" ;

function Selection ({shoeData, cartUpdate}){
    //console.log(shoeData)
    return(
        <div>
            <h1>GET THE SNEAKERS FOR YOU</h1>
            {shoeData.map((item)=>{
                return <ShoeCard key={item.id} name={item.name} color={item.color} image={item.image} price={item.price} inCart={item.inCart} id={item.id} cartUpdate={cartUpdate}/>
            })}
            <p>This Everything We Have In Stock</p>
        </div>
    )
};

export default Selection;