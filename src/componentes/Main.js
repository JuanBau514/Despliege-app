import React from "react";
import "./styles/Main.css";

const Main = ({characters=[]}) => {
    return (
        <div className="container">
            {
                characters.map((item, index) => (
                    <div key={index} className="columna"> 
                        <div className="card">
                            <img src={item.image} alt=""></img>
                             
                            <div className="titulo">{item.name}</div>
                            <div className="especie">Especie : {item.species}</div>
                            <div className="ubicacion">Ubicación : {item.location.name}</div>
                            <div className="origen">Dimension de Origen : {item.origin.name}</div>

                        </div>
                    </div>
                ) ) 
            }
        </div>
    )
}

export default Main