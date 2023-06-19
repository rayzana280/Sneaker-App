import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
    return (
        <div>
            <NavLink to="/"> HOME </NavLink>
            <NavLink to= "/selection"> SELCTION</NavLink>
            <NavLink to="/sell"> SELL </NavLink>
        </div>
    )
}