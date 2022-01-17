import React from "react";
import "./styles/Header.css"

const Header = ({ brand }) => {
    return(
        <div>
                <nav>
                    <div className="header">  
                        <div>
                   <a  className="title" href="/"> {brand} </a>
                   <p>Una aplicacion para poner en practica lo que aprendi de asincronismo y react.js el año pasado </p>
                        </div>      
                    </div>
                 </nav>
        </div>
    )
}

export default Header