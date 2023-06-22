import React, {useState} from "react";

function Sell(){

    const [shoeName, stateShoeName] = useState("")
    const [colorWay, stateColorWay] = useState("")
    const [shoePrice, stateShoePrice] = useState("")
    const [shoeImage, stateShoeImage] = useState("")
    const [sellerEmail, stateSellerEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: shoeName,
            color: colorWay,
            price: shoePrice,
            seller: sellerEmail,
            image: shoeImage
        }
        console.log(formData)
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