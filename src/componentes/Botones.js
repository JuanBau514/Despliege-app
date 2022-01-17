import React from "react";
import "./styles/Botones.css"

const Botones = ({prev, next, onPrevious, onNext}) =>{

    const botonAnterior = (botonAnterior) => {
        onPrevious();
    }

    const botonSiguiente = (botonSiguiente) => {
        onNext();
    }

    return(

        <nav>
                <ul>
                    {  prev ?
                        <button className="btn1" onClick={botonAnterior} >  Anterior </button>
                        :
                        null
                    };

                    {
                        next ?
                        <button className="btn2" onClick={botonSiguiente}>  Siguiente </button>
                        :
                        null
                    }

                </ul>
        </nav>
    )
}

export default Botones