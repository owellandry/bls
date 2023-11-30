import React from "react";
import './styles.css';

const About = () => {
  return (
    <div className="container-about">
      <div className="about">
        <div className="titleHome">
          <h1>Break line studio</h1>
          <div className="lineAbout">
            {Array.from({ length: 18 }, (_, index) => (
              <div key={index} className="lines"></div>
            ))}
          </div>
          <div className="gardient">
            <div className="bgGardient"></div>
          </div>
        </div>
      </div>
      <div className="descriptionPage">
        <p>
        Somos una <span className="yellowWord">empresa</span> especializada en el <span className="yellowWord">desarrollo de software</span> a medida. <br /> 
        Nuestro equipo de expertos en programación trabaja de la mano <br />
        con nuestros clientes para crear soluciones tecnológicas <br />
        innovadoras y <span className="overline">personalizadas</span>.<br />
        </p>
      </div>
    </div>
  );
};

export default About;
