import React, { useState } from "react";
import pantalla2 from "../../assets/pantallaCelular.png";
import "./styles.css";

export default function WebPhone() {
  const [phoneVisible, setPhoneVisible] = useState(true);

  const handleButtonClick = () => {
    setPhoneVisible(!phoneVisible);
  };

  return (
    <div className="sectionPhone">
      <img className="pantallaPhone" src={pantalla2} alt="..." />
      <div className="containerPhoneContent">
        <div className="webPhoneInf">
          <h1 className="gradient-text">Hacemos</h1>
          <h1>Tu App Movil</h1>
        </div>
        <div className="phoneAlign">
          <div className="containerPhone">
            <div className="borderPhone">
              <div className="btnsPhone">
                <div className="btn"></div>
                <div className="btn"></div>
                <div className="btn"></div>
              </div>
              <div className="cameraPhone">
                <svg
                  width="61" height="18" viewBox="0 0 61 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="39" cy="3" r="3" fill="#8F8C8C" />
                  <circle cx="5" cy="13" r="5" fill="#8F8C8C" />
                  <path d="M20 13H59" stroke="#727272" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div className={`phone pantalla1 ${phoneVisible ? "display-change" : ""}`}>
                <div className="navPhone">
                  <div className="close-icon">
                    <i className="bi bi-x-lg"></i>
                  </div>
                  <div className="titlePh">
                    <h1>Title-Logo</h1>
                  </div>
                  <div className="bar-icon">
                    <svg
                      width="103" height="auto" viewBox="0 0 103 163" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M11 11L11 152.75" stroke="white" strokeWidth="20.25" strokeLinecap="round" />
                      <path d="M51.5 71.75L51.5 152.75" stroke="white" strokeWidth="20.25" strokeLinecap="round" />
                      <path d="M92 31.25L92 152.75" stroke="white" strokeWidth="20.25" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="contentPhone">
                  <div className="sectionImg">
                    <div className="arrowLeft">
                      <i className="bi bi-chevron-left"></i>
                    </div>
                    <div className="square-container">
                      <div className="square"></div>
                      <div className="square"></div>
                      <div className="square"></div>
                    </div>
                    <div className="arrowRigth">
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </div>
                  <div className="contentPreviewPhone">
                    <div className="alignItemsPh">
                      <div className="titlePrevPhone">Titulo</div>
                      <div className="descriptionPrevPhone">
                        Lorem ipsum dolor sit amet consectetur. Fringilla ut
                        lobortis eget massa.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerPh">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
              <div className={`phone2 pantalla2 ${!phoneVisible ? "display-change" : ""}`}>
                {Array.from({ length: 20 }, (_, index) => (
                  <div key={index} className="Apps"></div>
                ))}
              </div>

              <div className="buttonPhone">
                <div className="button" id="toggleButton" onClick={handleButtonClick}></div>
              </div>
            </div>
          </div>
          <div className="subtitle">
            <h1>Paginas Web</h1>
            <h2>Websites</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
