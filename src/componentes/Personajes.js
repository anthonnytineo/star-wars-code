import React, { useState, useEffect } from "react";

const Personajes = (props) => {
  const [listaPersonajes, setListaPersonajes] = useState([]);

  useEffect(() => {
    const cargaDatos = async () => {
      const personajes = await cargarListaPersonajes();
      setListaPersonajes(personajes);
    };

    cargaDatos();
  }, []);

  const cargarListaPersonajes = async () => {
    try {
      const data = await fetch("https://breakingbadapi.com/api/characters");
      const personajes = await data.json();
      //console.log(personajes);
      return personajes;
    } catch (err) {
      console.log(err);
    }
  };

  const seleccionar = (event) => {
    props.seleccionarPersonaje(event.target.value);
  };

  return (
    <select onChange={seleccionar}>
      {listaPersonajes.map((personaje) => (
        <option key={personaje.char_id} value={personaje.char_id}>
          {personaje.name}
        </option>
      ))}
    </select>
  );
};

export default Personajes;
