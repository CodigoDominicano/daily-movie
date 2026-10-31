
 // ========================================
 // IMPORTACIÓN DE HOOKS Y CONTEXTO
 // ========================================

import { PeliculasContext } from "./PeliculasContext";
import useLocalStorage from "../hooks/useLocalStorage";


// ========================================
 // COMPONENTE PROVIDER
 // ========================================

function PeliculasProvider({ children }) {

    // ========================================
    // ESTADO DE PELÍCULAS VISTAS
    // ========================================

    const [peliculasVistas, setPeliculasVistas] = useLocalStorage(
        "peliculasVistas",
        []
    );


    // ========================================
    // MARCAR PELÍCULA COMO VISTA
    // ========================================

    const marcarComoVista = (pelicula) => {
        setPeliculasVistas((prev) => {
            const yaExiste = prev.some((p) => p.id === pelicula.id);

            if (yaExiste) {
                return prev;
            }

            return [...prev, pelicula];
        });
    };

    // ========================================
    // AGREGAR PELÍCULA MANUALMENTE
    // ========================================

        const agregarPelicula = (datos) => {
            const nuevaPelicula = {
                id: crypto.randomUUID(),
                nombre: datos.titulo,
                anio: datos.anio,
                imagen: datos.url
                };

        marcarComoVista(nuevaPelicula);
        };


    // ========================================
    // QUITAR PELÍCULA DE VISTAS
    // ========================================

    const quitarDeVistas = (id) => {
        setPeliculasVistas((prev) =>
            prev.filter((pelicula) => pelicula.id !== id)
        );
    };


    // ========================================
    // COMPARTIR DATOS GLOBALMENTE
    // ========================================

    return (
        <PeliculasContext.Provider
            value={{
                peliculasVistas,
                marcarComoVista,
                quitarDeVistas,
                agregarPelicula
            }}
        >
            {children}
        </PeliculasContext.Provider>
    );
}


// ========================================
 // EXPORTACIÓN
 // ========================================

export default PeliculasProvider;
