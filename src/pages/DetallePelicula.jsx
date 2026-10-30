
 // ========================================
 // IMPORTACIÓN DE HOOKS
 // ========================================

import { useParams } from "react-router-dom";
import usePeliculaDetalle from "../hooks/usePeliculaDetalle";


// ========================================
 // COMPONENTE DETALLE PELÍCULA
 // ========================================

function DetallePelicula() {

    // ========================================
    // OBTENER ID Y CONSULTAR OMDB
    // ========================================

    const { id } = useParams();

    const { pelicula, cargando, error } = usePeliculaDetalle(id);


    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <>
            <h2>Detalle de la película</h2>

            {cargando && <p>Cargando detalles...</p>}

            {error && <p>Error: {error}</p>}

            {pelicula && (
                <div>
                    <img
                        src={pelicula.Poster}
                        alt={pelicula.Title}
                        width="200"
                    />

                    <h3>{pelicula.Title} ({pelicula.Year})</h3>

                    <p><strong>Género:</strong> {pelicula.Genre}</p>
                    <p><strong>Director:</strong> {pelicula.Director}</p>
                    <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
                    <p><strong>Calificación IMDb:</strong> {pelicula.imdbRating}</p>
                </div>
            )}
        </>
    );
}


// ========================================
// EXPORTACIÓN
// ========================================

export default DetallePelicula;
