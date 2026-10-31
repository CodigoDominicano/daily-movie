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

        const totalVistas = peliculasVistas.length;

    // ========================================
    // ORDENAR PELÍCULAS VISTAS
    // ========================================

        const peliculasOrdenadas = useMemo(() => {
        return [...peliculasVistas].reverse();
        }, [peliculasVistas]);

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <>
            <h2 className="titulo-pagina">Mis películas vistas</h2>
            <p className="contador-vistas">Total de películas vistas: {totalVistas}</p>

            <ListaPeliculas
                peliculas={peliculasOrdenadas}
                tituloLista="Películas vistas"
                onEliminar={quitarDeVistas}
            />

            {/* ========================================
            FORMULARIO PARA AGREGAR PELÍCULAS
            ======================================== */}

            <h3 className="titulo-formulario">Agregar película manualmente</h3>
            <FormularioPelicula onAgregar={agregarPelicula} />

        </>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default PeliculasVistas;

