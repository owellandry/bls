import React,{useState} from "react";
import logo from '../../assets/logo.svg';
import './nav.css'
const NavBar = ()=>{
    const [isActiveHome, setIsActiveHome] = useState(true)
    const [isActiveContacto, setIsActiveContacto] = useState(false)
    return(
        <>
            <nav>
                <div className="line" id={isActiveHome ? 'active' : 'inactive'} onClick={()=>{setIsActiveHome(true);setIsActiveContacto(false)}}>
                    <a href="#" >HOME</a>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="line" id={isActiveContacto ? 'active' : 'inactive'} onClick={()=>{setIsActiveHome(false);setIsActiveContacto(true)}}>
                    <a href="#">CONTACTANOS</a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;