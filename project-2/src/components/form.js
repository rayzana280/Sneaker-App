import React, {useState} from "react"

function Form(){
    const [inputValue, setInputValue] = useState("")
    const [number, setNumber] = useState(0)

   let length = 0
// get the length increase number with number of length 
// when submitted clear input 
// number doesnt go back to number 0 keeps increasing while typing new word
//let numberNumber;
    function inputChange(e){
        setInputValue(e.target.value)
         //numberNumber=e.target.value.length
         setNumber(number+1)
    }

    function inputSubmit(e){
        e.preventDefault()
        //setNumber(numberNumber)
        setInputValue("")
       console.log(number)
    }

  

    return (
        <form onSubmit={inputSubmit}>
            <input type="text" value={inputValue} onChange={inputChange}></input>
            <button>Click Me!</button>
            <p>{number}</p>
        </form>
    )
}

export default Form;

// i think this was a test while in school but keep checking if it doesnt mean anything delete this file