import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "78px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "darkgreen",
    textDecoration: "none",
    color: "white",
  };

function NavBar(){
    return (
        <div>
            <NavLink exact to="/" style={linkStyles} activeStyle={{background: "green"}}> HOME </NavLink>
            <NavLink to= "/selection" style={linkStyles} activeStyle={{background: "green"}}> SELECTION</NavLink>
            <NavLink to="/sell" style={linkStyles}  activeStyle={{background: "green"}}> SELL </NavLink>
            <NavLink to="/cart" style={linkStyles} activeStyle={{background: "green"}}> CART </NavLink>
        </div>
    )
}

export default NavBar;