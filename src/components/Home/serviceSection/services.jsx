import React from "react";
import "./styles.css";
import ilustra1 from "../../../assets/ilustra1.png"
import ilustra2 from "../../../assets/ilustra2.png"
import ilustra3 from "../../../assets/ilustra3.png"
import ilustra4 from "../../../assets/ilustra4.png"

export default function ServicesSect(){
    return(
        <div className="containerServices">
            <div className="topSection">
                <div className="title">
                    <h2>NUESTROS SERVICIOS</h2>
                </div>
                <div className="description">
                    <p>Tu éxito es nuestro éxito, y estamos aquí para asegurarnos de que tu software funcione sin problemas.</p>
                </div>
            </div>
            <div className="lowerSection">
                <div className="containCard">
                    <div className="cardServices">
                        <div className="image">
                            <img src={ilustra1} alt="" />
                        </div>
                        <div className="subtitle">
                            <h3>Brindamos soporte tecnico</h3>
                        </div>
                        <div className="description">
                            <p>Brindamos servicios técnicos integrales, que van desde el mantenimiento preventivo hasta la resolución de problemas críticos. Nos destacamos por nuestra versatilidad para enfrentar cualquier desafío técnico que nuestros clientes puedan tener.</p>
                        </div>
                    </div>
                    <div className="cardServices">
                        <div className="image">
                            <img src={ilustra2} alt="" />
                        </div>
                        <div className="subtitle">
                            <h3>Damos las mejores accesorias</h3>
                        </div>
                        <div className="description">
                            <p>creamos páginas web personalizadas que combinan diseño atractivo, funcionalidad intuitiva y rendimiento óptimo. </p>
                        </div>  
                    </div>
                </div>
                <div className="containCard">
                    <div className="cardServices">
                        <div className="image">
                            <img src={ilustra3} alt="" />
                        </div>
                        <div className="subtitle">
                            <h3>Regalamos la mejor experiencia</h3>
                        </div>
                        <div className="description">
                            <p>creamos páginas web personalizadas que combinan diseño atractivo, funcionalidad intuitiva y rendimiento óptimo. </p>
                        </div>
                    </div>
                    <div className="cardServices">
                        <div className="image mlp">
                            <img src={ilustra4} alt="" />
                        </div>
                        <div className="subtitle">
                            <h3>Servicios como pan caliente</h3>
                        </div>
                        <div className="description">
                            <p>creamos páginas web personalizadas que combinan diseño atractivo, funcionalidad intuitiva y rendimiento óptimo. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}