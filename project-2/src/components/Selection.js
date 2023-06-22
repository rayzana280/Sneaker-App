import React from "react";
import ShoeCard from "./ShoeCard" ;

function Selection ({shoeData}){
    //console.log(shoeData)
    return(
        <div>
            <p>GET THE SNEAKERS FOR YOU</p>
            {shoeData.map((item)=>{
                return <ShoeCard key={item.name} name={item.name} color={item.color} image={item.image}/>
            })}
        </div>
    )
};

export default Selection;