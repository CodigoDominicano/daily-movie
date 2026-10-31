
import "./TarjetaPelicula.css";
import { Link } from "react-router-dom";

// ========================================
// COMPONENTE TARJETA PELÍCULA
// ========================================

function TarjetaPelicula({
    id,
    imagen,
    titulo,
    anio,
    onEliminar,
    onMarcarVista
}) {

    // ========================================
    // COMPROBAR SI LA PELÍCULA ES DE IMDB
    // ========================================

    const esPeliculaIMDb = /^tt\d+$/.test(String(id));

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <article className="tarjeta-pelicula">

            {/* ========================================
                INFORMACIÓN DE LA PELÍCULA
            ======================================== */}

            <img
                src={imagen}
                alt={`Póster de ${titulo}`}
                width="200"
            />

            <h2>{titulo}</h2>

            <p className="anio-pelicula">{anio}</p>


            {/* ========================================
                BOTÓN VER MÁS
            ======================================== */}

            {esPeliculaIMDb && (
                <Link to={`/pelicula/${id}`}>
                    <button className="boton-primario">
                        Ver más
                    </button>
                </Link>
            )}


            {/* ========================================
                BOTÓN ELIMINAR
            ======================================== */}

            {onEliminar && (
                <button
                    type="button"
                    className="boton-secundario"
                    onClick={onEliminar}
                >
                    Eliminar
                </button>
            )}


            {/* ========================================
                BOTÓN MARCAR COMO VISTA
            ======================================== */}

            {onMarcarVista && (
                <button
                    type="button"
                    className="boton-marcavista"
                    onClick={onMarcarVista}
                >
                    Marcar como vista
                </button>
            )}

        </article>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default TarjetaPelicula;
