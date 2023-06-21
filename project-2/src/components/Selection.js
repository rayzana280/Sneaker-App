import React from "react";
import ShoeCard from "./ShoeCard" ;

function Selection ({shoeData}){
    //console.log(shoeData)
    return(
        <div>
            <p>GET THE SNEAKERS FOR YOU</p>
            {shoeData.map((item)=>{
                return <ShoeCard key={item.name}/>
            })}
        </div>
    )
};

export default Selection;