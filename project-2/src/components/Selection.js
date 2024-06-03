import React, {useState} from "react";
import ShoeCard from "./ShoeCard" ;

function Selection ({shoeData, cartUpdate}){
// need to fix the selection due to adding backend data 
    const [selectSize, setSelectSize] = useState("All")
    function sizeChange(event){
        setSelectSize(event.target.value)
        console.log(selectSize)
    }
    // selection is not working when i select a size the shoes are not appearing for each size
    const newData = shoeData.filter((item)=>{
        if(selectSize === "All"){
            return true;
        }else{
           // const convertNumber = parseInt(selectSize)
            return item.size === parseInt(selectSize) // try to true the selectsize number into a integer 
        }
    })
    //console.log(newData)

    return(
        <div>
            <h1>GET THE SNEAKERS FOR YOU</h1>
            <div className="filterSize">
                Select Your Size!
                <select name="filter" onChange={sizeChange}>
                    <option value="All">Select Size</option>
                    <option value="4">Size: 4</option>
                    <option value="5">Size: 5</option>
                    <option value="6">Size: 6</option>
                    <option value="7">Size: 7</option>
                    <option value="8">Size: 8</option>
                    <option value="9">Size: 9</option>
                    <option value="10">Size: 10</option>
                </select>
            </div>
            {newData.map((item)=>{
                return <ShoeCard key={item.id} name={item.name} color={item.color} image={item.image} price={item.price} inCart={item.inCart} id={item.id} cartUpdate={cartUpdate} shoeSize={item.size}/>
            })}
            <p>This Everything We Have In Stock</p>
        </div>
    )
};

export default Selection;