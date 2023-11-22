import React, {useState} from "react";
import './styles.css';

export default function WebDesktop(){
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)

    const preventDefault = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="seccionDesk">
            <div className="containerDeskContent">
                <div className="deskAling">
                    <div className="borderContent">
                        <div className="cameraDesk">
                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.5" cy="13.5" r="11.5" fill="#4D4D4D"/>
                                <circle cx="3.5" cy="3.5" r="3.5" fill="#4D4D4D"/>
                            </svg>
                        </div>
                        <div className="desktop">
                                <div className="navDesk">
                                    <div className="logoPrevDesk">
                                        <h1>logo</h1>
                                    </div>
                                    <div className="menuPrevDesk">
                                        <ul>
                                            <li className="line" id={isActive1 ? 'active' : 'inactive'} onClick={()=>{setIsActive1(true);setIsActive2(false);setIsActive3(false);setIsActive4(false)}}><a href="#" onClick={e=>preventDefault(e)}>menu</a></li>
                                            <li className="line" id={isActive2 ? 'active' : 'inactive'} onClick={()=>{setIsActive1(false);setIsActive2(true);setIsActive3(false);setIsActive4(false)}}><a href="#" onClick={e=>preventDefault(e)}>menu</a></li>
                                            <li className="line" id={isActive3 ? 'active' : 'inactive'} onClick={()=>{setIsActive1(false);setIsActive2(false);setIsActive3(true);setIsActive4(false)}}><a href="#" onClick={e=>preventDefault(e)}>menu</a></li>
                                            <li className="line" id={isActive4 ? 'active' : 'inactive'} onClick={()=>{setIsActive1(false);setIsActive2(false);setIsActive3(false);setIsActive4(true)}}><a href="#" onClick={e=>preventDefault(e)}>menu</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contentDesk">
                                    <div className="imgPreview">

                                    </div>
                                    <div className="contentPreviewDesk">
                                        <div className="titlePrevDesk">
                                            Titulo
                                        </div>
                                        <div className="descriptionPrevDesk">
                                            Lorem ipsum dolor sit amet consectetur. Netus semper risus convallis at quam dolor velit nunc. Vivamus pellentesque urna elementum ipsum massa nulla. Cras sagittis varius fames lorem dolor sit eget sed egestas. Ut morbi dolor interdum risus pellentesque tempus.
                                        </div>
                                    </div>
                                    <div className="serialNumber">
                                            <p>01--02</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>
                        </div>
                    </div>
                    <div className="subtitle">
                        <h1>Paginas Web</h1>
                        <h2>Websites</h2>
                    </div>
                </div>
                <div className="webDeskInfo">
                    <h1 className="gradient-text">Creamos</h1>
                    <h1>Tu Pagina</h1>
                    <h1>Web</h1>
                </div>
            </div>

        </div>
    )
}