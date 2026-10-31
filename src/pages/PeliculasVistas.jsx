// ========================================
// IMPORTACIÓN DE COMPONENTES
// ========================================

import ListaPeliculas from "../components/ListaPeliculas/ListaPeliculas";
import FormularioPelicula from "../components/FormularioPelicula/FormularioPelicula";

// ========================================
// IMPORTACIÓN DEL CONTEXTO
// ========================================

import { usePeliculasContext } from "../context/PeliculasContext";
import { useMemo } from "react";

// ========================================
// COMPONENTE PELÍCULAS VISTAS
// ========================================

function PeliculasVistas() {

    // ========================================
    // OBTENER DATOS Y FUNCIONES DEL CONTEXTO
    // ========================================

        const {
        peliculasVistas,
        quitarDeVistas,
        agregarPelicula
        } = usePeliculasContext();

    // ========================================
    // TOTAL DE PELÍCULAS VISTAS
    // ========================================

        const totalVistas = useMemo(() => {
        return peliculasVistas.length;
        }, [peliculasVistas]);

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <>
            <h2>Mis películas vistas</h2>
            <p>Total de películas vistas: {totalVistas}</p>

            <ListaPeliculas
                peliculas={peliculasVistas}
                tituloLista="Películas vistas"
                onEliminar={quitarDeVistas}
            />

            {/* ========================================
            FORMULARIO PARA AGREGAR PELÍCULAS
            ======================================== */}

            <h3>Agregar película manualmente</h3>
            <FormularioPelicula onAgregar={agregarPelicula} />

        </>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default PeliculasVistas;

