
import { useState, useEffect } from "react";
import { adaptarPeliculas } from "../utils/adaptar";

function usePeliculas(busqueda) {
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerPeliculas = async () => {
            setCargando(true);
            setError(null);
            setPeliculas([]);

            try {
                const apiKey = import.meta.env.VITE_OMDB_API_KEY;
                const urlAPI = `https://www.omdbapi.com/?apikey=${apiKey}&s=${busqueda}`;

                const respuesta = await fetch(urlAPI);
                const datos = await respuesta.json();

                if (datos.Response === "True") {
                    setPeliculas(adaptarPeliculas(datos.Search));
                } else {
                    setPeliculas([]);
                }

            } catch (error) {
                setError(error.message);

            } finally {
                setCargando(false);
            }
        };

        obtenerPeliculas();

    }, [busqueda]);

    return { peliculas, cargando, error };
}

export default usePeliculas;
