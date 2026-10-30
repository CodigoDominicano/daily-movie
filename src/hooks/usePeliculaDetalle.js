import { useState, useEffect } from "react";

const usePeliculaDetalle = (id) => {

  const [pelicula, setPelicula] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const obtenerDetalle = async () => {
    setCargando(true);
    setError(null);
    setPelicula(null);

    try {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const urlAPI = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

    const respuesta = await fetch(urlAPI);

    if (!respuesta.ok) {
      throw new Error("Error al consultar la película");
    }

    const datos = await respuesta.json();

    if (datos.Response === "True") {
      setPelicula(datos);
    } else {
      setError(datos.Error);
    }

  } catch (error) {
    setError(error.message);
  } finally {
    setCargando(false);
  }
};

 obtenerDetalle();

  }, [id]);
 

  return {
    pelicula,
    cargando,
    error
  };
};

export default usePeliculaDetalle;