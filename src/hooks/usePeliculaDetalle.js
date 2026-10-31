
import { useState, useEffect } from "react";

// ========================================
// HOOK PERSONALIZADO USEPELICULADETALLE
// ========================================

function usePeliculaDetalle(id) {

    // ========================================
    // ESTADOS
    // ========================================

    const [pelicula, setPelicula] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    // ========================================
    // CONSULTA A LA API OMDB
    // ========================================

    useEffect(() => {

        const controlador = new AbortController();

        const obtenerDetalle = async () => {
            setCargando(true);
            setError(null);
            setPelicula(null);

            // ========================================
            // EVITAR CONSULTAS SIN ID
            // ========================================

            if (!id) {
                setError("No se proporcionó una película.");
                setCargando(false);
                return;
            }

            // ========================================
            // PETICIÓN A OMDB
            // ========================================

            try {
                const apiKey = import.meta.env.VITE_OMDB_API_KEY;
                const urlAPI = `https://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=${apiKey}`;

                const respuesta = await fetch(urlAPI, {
                    signal: controlador.signal
                });

                if (!respuesta.ok) {
                    throw new Error("Error al consultar la película");
                }

                const datos = await respuesta.json();

                // ========================================
                // PROCESAR RESULTADOS
                // ========================================

                if (datos.Response === "True") {
                    setPelicula(datos);
                } else {
                    throw new Error(
                        datos.Error || "No se encontró la película."
                    );
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

        obtenerDetalle();

        // ========================================
        // LIMPIEZA DEL EFECTO
        // ========================================

        return () => controlador.abort();

    }, [id]);

    // ========================================
    // RETORNO DEL HOOK
    // ========================================

    return { pelicula, cargando, error };
}

// ========================================
// EXPORTACIÓN
// ========================================

export default usePeliculaDetalle;
