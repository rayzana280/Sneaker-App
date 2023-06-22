import React, {useState} from "react";

function Sell(){

    const [shoeName, stateShoeName] = useState("")
    const [colorWay, stateColorWay] = useState("")
    const [shoePrice, stateShoePrice] = useState("")
    const [shoeImage, stateShoeImage] = useState("")
    const [sellerEmail, stateSellerEmail] = useState("")

    return(
        <form>
            <h1>Sell Your Sneakers And Get Your Money!</h1>
            <label>Name of Shoe</label>
            <input type="text" value={shoeName}/>
            <label>ColorWay of Shoe</label>
            <input type="text" value={colorWay}/>
            <label>Price</label>
            <input type="text" value={shoePrice}/>
            <label>Image of Shoe</label>
            <input type="text" value={shoeImage}/>
            <label>Email</label>
            <input type="text" value={sellerEmail}/>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Sell;