import React,{useState} from "react";
import logo from '../../assets/logo.svg';
import './nav.css'
const NavBar = ()=>{
    const [isActiveHome, setIsActiveHome] = useState(true)
    const [isActiveContacto, setIsActiveContacto] = useState(false)
    return(
        <nav className="navbar">
            <div className="contentNav">
                <div className="line" id={isActiveHome ? 'active' : 'inactive'} onClick={()=>{setIsActiveHome(true);setIsActiveContacto(false)}}>
                    <a href="#" >HOME</a>
                </div>
                <div className="container-logo">
                    <img src={logo} className="App-logo" alt="logo" /> 
                </div>
                <div className="line" id={isActiveContacto ? 'active' : 'inactive'} onClick={()=>{setIsActiveHome(false);setIsActiveContacto(true)}}>
                    <a href="#">CONTACTANOS</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;