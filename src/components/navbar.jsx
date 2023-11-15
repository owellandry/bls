import React from "react";
import logo from '../assets/logo.svg';
const NavBar = ()=>{
    return(
        <>
            <nav>
                <a href="/" >HOME <span></span></a>
                <img src={logo} className="App-logo" alt="logo" />
                <a href="/">CONTACTANOS</a>
            </nav>
        </>
    )
}

export default NavBar;