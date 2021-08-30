import React, { useState } from "react";
import Personajes from "./componentes/Personajes";
import Navbar from "./componentes/Navbar";
import Ficha from "./componentes/Ficha";
import "./App.css";

function App() {
  const [personajeId, setPersonajeId] = useState("");

  const seleccionarPersonaje = (id) => {
    setPersonajeId(id);
    //console.log(personajeId);
  };

  return (
    <div className="App">
      <Navbar />
      <Personajes seleccionarPersonaje={seleccionarPersonaje} />
      <Ficha id={personajeId} />
    </div>
  );
}

export default App;
