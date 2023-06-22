import React from "react";

function Sell(){
    return(
        <form>
            <h1>Sell Your Sneakers And Get Your Money!</h1>
            <label>Name of Shoe</label>
            <input type="text"/>
            <label>ColorWay of Shoe</label>
            <input type="text"/>
            <label>Price</label>
            <input type="text"/>
            <label>Image of Shoe</label>
            <input type="text"/>
            <label>Email</label>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Sell;