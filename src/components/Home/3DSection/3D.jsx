import React from "react";
import "./styles.css";

export default function M3DSection(){
    return(
        <div className="M3DContainer">
            <div className="containerReflect">
                <div className="image3D">
                </div>
                <div className="reflection">
                </div>
            </div>
            <div className="content3D">
                <div className="title">
                    <h2>Modelado</h2>
                    <h2>3D</h2>
                </div>
                <div className="lowerContent">
                    <div className="description">
                        <p><span className="yellowWord">Creamos modelos en 3D </span> que dan vida a tus proyectos. Nuestro equipo de expertos transforma tus ideas en visualizaciones realistas y detalladas. ¡<strong>Contáctanos </strong>hoy mismo para hacer realidad tus visiones en 3D!"</p>
                    </div>
                    <div className="btnShow">
                        <div className="button">
                            <h3>Ver</h3>
                            <div className="arrow">
                                <i className="bi bi-arrow-right-short"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}