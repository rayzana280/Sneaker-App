import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

function Sell({addData}){

    const [shoeName, stateShoeName] = useState("")
    const [colorWay, stateColorWay] = useState("")
    const [shoePrice, stateShoePrice] = useState("")
    const [shoeImage, stateShoeImage] = useState("")
    const [sellerEmail, stateSellerEmail] = useState("")
    const [shoeSize, setShoeSize] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            id: uuidv4(),
            name: shoeName,
            shoeSize: shoeSize,
            color: colorWay,
            price: shoePrice,
            seller: sellerEmail,
            image: shoeImage,
            inCart: false
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
        <form onSubmit={handleSubmit} className="formClass">
            <h2>Sell Your Sneakers And Get Your Money!</h2>
            <label>Name of Shoe:</label>
            <input type="text" value={shoeName} onChange={(e)=> stateShoeName(e.target.value)}/>
            <label>Shoe Size:</label>
            <input type="text" value={shoeSize} onChange={(e)=> setShoeSize(e.target.value)}></input>
            <label>Color Way of Shoe:</label>
            <input type="text" value={colorWay} onChange={(e)=> stateColorWay(e.target.value)}/>
            <label>Price:</label>
            <input type="text" value={shoePrice} onChange={(e)=> stateShoePrice(e.target.value)}/>
            <label>URL Image of Shoe:</label>
            <input type="text" value={shoeImage} onChange={(e)=> stateShoeImage(e.target.value)}/>
            <label>Email:</label>
            <input type="text" value={sellerEmail} onChange={(e)=> stateSellerEmail(e.target.value)}/>
            <button type="submit">Submit</button>
            <p>Make sure all the information is correct and we'll reach out to you once you have a buyer!</p>
            <h5>With Love</h5>
            <h5>Sneaker Up</h5>
        </form>
    )
};

export default Sell;