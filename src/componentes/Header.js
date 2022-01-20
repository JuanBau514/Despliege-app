import React from "react";
import "./styles/Header.css"

const Header = ({ brand }) => {
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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