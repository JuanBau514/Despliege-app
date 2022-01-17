import React, {useEffect, useState} from "react";
import Header from  "./componentes/Header";
import Main from "./componentes/Main";
import Botones from "./componentes/Botones";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character/";

  const fetchCharacters = ( url ) => {
    fetch(url)
      .then (response => response.json())
      .then (data => { setCharacters(data.results);
        setInfo(data.info); })
      .catch(error => console.error(error))
  };

  const botonAnterior = () => {
    fetchCharacters(info.prev);
  }

  const botonSiguiente = () => {
    fetchCharacters(info.next);
  }

  useEffect( () => {
    fetchCharacters(initialurl);
  }, [] )

  return (
    <>
      <Header brand={"Rick and Morty App"} />
      <div className="container">

          <Botones prev={info.prev} next={info.next} onPrevious={botonAnterior} onNext={botonSiguiente} />
          <Main characters={characters}> </Main>
          <Botones />

     </div>
    </>  
  );
}

export default App;
