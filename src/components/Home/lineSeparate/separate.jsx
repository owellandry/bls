import React from "react";
import "./styles.css";
import logo from "../../../assets/logo2.svg"

export default function Separate(){
    return(
        <div className="lineContainer">
            <div className="lineContent">
                <div className="textSection">
                    <div className="lineTitle">
                        <h2>Break Line Studio.</h2>
                    </div>
                    <div className="lineDescription">
                        <p>Nos enorgullece ofrecer soluciones a medida que superen las expectativas de nuestros clientes y les permitan alcanzar sus objetivos empresariales.</p>
                    </div>
                    <div className="lineButtons">
                        <button>
                            Conocenos
                        </button>
                        <button>
                            Contactanos
                        </button>
                    </div>
                </div>
                <div className="logoSection">
                    <img src={logo} alt=". . ." />
                </div>
            </div>
        </div>
    )
}