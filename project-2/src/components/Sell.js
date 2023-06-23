import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

function Sell({addData}){

    const [shoeName, stateShoeName] = useState("")
    const [colorWay, stateColorWay] = useState("")
    const [shoePrice, stateShoePrice] = useState("")
    const [shoeImage, stateShoeImage] = useState("")
    const [sellerEmail, stateSellerEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            id: uuidv4(),
            name: shoeName,
            color: colorWay,
            price: shoePrice,
            seller: sellerEmail,
            image: shoeImage
        };
       // console.log(formData)
       fetch("http://localhost:3000/shoe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(formData),
       })
       .then((r)=> r.json())
       .then((newData) => addData(newData) )
       .catch(error=> console.log(error))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Sell Your Sneakers And Get Your Money!</h1>
            <label>Name of Shoe</label>
            <input type="text" value={shoeName} onChange={(e)=> stateShoeName(e.target.value)}/>
            <label>ColorWay of Shoe</label>
            <input type="text" value={colorWay} onChange={(e)=> stateColorWay(e.target.value)}/>
            <label>Price</label>
            <input type="text" value={shoePrice} onChange={(e)=> stateShoePrice(e.target.value)}/>
            <label>Image of Shoe</label>
            <input type="text" value={shoeImage} onChange={(e)=> stateShoeImage(e.target.value)}/>
            <label>Email</label>
            <input type="text" value={sellerEmail} onChange={(e)=> stateSellerEmail(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Sell;