
import { useState, useEffect } from "react";

// ========================================
// IMPORTACIÓN DE UTILIDADES
// ========================================

import { adaptarPeliculas } from "../utils/adaptar";

// ========================================
// HOOK PERSONALIZADO USEPELICULAS
// ========================================

function usePeliculas(busqueda) {

    // ========================================
    // ESTADOS
    // ========================================

    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    // ========================================
    // CONSULTA A LA API OMDB
    // ========================================

    useEffect(() => {

        const controlador = new AbortController();

        const obtenerPeliculas = async () => {
            setCargando(true);
            setError(null);
            setPeliculas([]);

            // ========================================
            // EVITAR BÚSQUEDAS VACÍAS
            // ========================================

            if (!busqueda.trim()) {
                setCargando(false);
                return;
            }

            // ========================================
            // PETICIÓN A OMDB
            // ========================================

            try {
                const apiKey = import.meta.env.VITE_OMDB_API_KEY;

                const urlAPI = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(busqueda.trim())}`;

                const respuesta = await fetch(urlAPI, {
                    signal: controlador.signal
                });

                if (!respuesta.ok) {
                    throw new Error("Error al consultar las películas");
                }

                const datos = await respuesta.json();

                // ========================================
                // PROCESAR RESULTADOS
                // ========================================

                if (datos.Response === "True") {
                    setPeliculas(adaptarPeliculas(datos.Search));
                } else if (datos.Error === "Movie not found!") {
                    setPeliculas([]);
                } else {
                    throw new Error(datos.Error || "Error al buscar películas");
                }

            // ========================================
            // MANEJO DE ERRORES
            // ========================================

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }

            } finally {
                if (!controlador.signal.aborted) {
                    setCargando(false);
                }
            }
        };

        obtenerPeliculas();

        // ========================================
        // LIMPIEZA DEL EFECTO
        // ========================================

        return () => controlador.abort();

    }, [busqueda]);

    // ========================================
    // RETORNO DEL HOOK
    // ========================================

    return { peliculas, cargando, error };
}

// ========================================
// EXPORTACIÓN
// ========================================

export default usePeliculas;

