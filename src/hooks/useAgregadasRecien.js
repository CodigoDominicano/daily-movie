
// ========================================
// IMPORTACIÓN DE HOOKS Y UTILIDADES
// ========================================

import { useEffect, useState } from "react";
import { obtenerRecomendaciones } from "../utils/agregadasRecien";
import { adaptarPelicula } from "../utils/adaptar";

// ========================================
// HOOK DE PELÍCULAS AGREGADAS RECIENTEMENTE
// ========================================

function useAgregadasRecien() {

    // ========================================
    // ESTADOS
    // ========================================

    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // ========================================
    // CONSULTAR PELÍCULAS EN OMDB
    // ========================================

    useEffect(() => {
        const controlador = new AbortController();

        const cargarPeliculas = async () => {
            setCargando(true);
            setError(null);

            try {
                const apiKey = import.meta.env.VITE_OMDB_API_KEY;
                const ids = obtenerRecomendaciones();

                const resultados = await Promise.all(
                    ids.map(async (id) => {
                        const respuesta = await fetch(
                            `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`,
                            { signal: controlador.signal }
                        );

                        if (!respuesta.ok) {
                            throw new Error("Error al cargar películas");
                        }

                        const datos = await respuesta.json();

                        if (datos.Response !== "True") {
                            throw new Error(datos.Error || "Error de OMDb");
                        }

                        return adaptarPelicula(datos);
                    })
                );

                if (!controlador.signal.aborted) {
                    setPeliculas(resultados);
                }

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

        cargarPeliculas();

        // ========================================
        // LIMPIEZA DEL EFECTO
        // ========================================

        return () => controlador.abort();

    }, []);

    // ========================================
    // RETORNO
    // ========================================

    return { peliculas, cargando, error };
}

// ========================================
// EXPORTACIÓN
// ========================================

export default useAgregadasRecien;
