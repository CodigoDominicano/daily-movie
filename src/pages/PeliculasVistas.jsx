
// ========================================
// IMPORTACIÓN DE COMPONENTES
// ========================================

import ListaPeliculas from "../components/ListaPeliculas/ListaPeliculas";


// ========================================
// COMPONENTE PELÍCULAS VISTAS
// ========================================

function PeliculasVistas({ peliculasVistas, quitarDeVistas }) {

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <>
            <h2>Mis películas vistas</h2>

            <ListaPeliculas
                peliculas={peliculasVistas}
                tituloLista="Películas vistas"
                onEliminar={quitarDeVistas}
            />
        </>
    );
}


// ========================================
// EXPORTACIÓN
// ========================================

export default PeliculasVistas;
