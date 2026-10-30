
 // ========================================
 // IMPORTACIÓN DE HOOKS Y UTILIDADES
 // ========================================

import { obtenerPeliculaDelDia } from "../utils/peliculasDiarias";
import usePeliculaDetalle from "../hooks/usePeliculaDetalle";

// ========================================
 // COMPONENTE INICIO
 // ========================================

function Inicio() {

    // ========================================
    // PELÍCULA DEL DÍA
    // ========================================

    const peliculaDelDia = obtenerPeliculaDelDia();
    const {
        pelicula: detalleDiario,
        cargando: cargandoDiario,
        error: errorDiario
    } = usePeliculaDetalle(peliculaDelDia.id);

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <>
            <h2>Película del día: {peliculaDelDia.nombre}</h2>
            {cargandoDiario && <p>Cargando película del día...</p>}
            {errorDiario && <p>Error: {errorDiario}</p>}
            {detalleDiario && (
                <div>
                    <img
                        src={detalleDiario.Poster}
                        alt={detalleDiario.Title}
                        width="200"
                    />

                    <h3>
                        {detalleDiario.Title} ({detalleDiario.Year})
                    </h3>

                    <p><strong>Género:</strong> {detalleDiario.Genre}</p>
                    <p><strong>Director:</strong> {detalleDiario.Director}</p>
                    <p><strong>Sinopsis:</strong> {detalleDiario.Plot}</p>
                </div>
            )}
        </>
    );
}


// ========================================
// EXPORTACIÓN
// ========================================

export default Inicio;
