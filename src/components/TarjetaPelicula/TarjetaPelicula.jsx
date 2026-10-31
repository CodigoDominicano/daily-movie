
import "./TarjetaPelicula.css";
import { Link } from "react-router-dom";
import { usePeliculasContext } from "../../context/PeliculasContext";

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
    // COMPROBAR SI LA PELÍCULA YA ESTÁ VISTA
    // ========================================

        const { peliculasVistas } = usePeliculasContext();

        const yaEstaVista = peliculasVistas.some(
        (pelicula) => pelicula.id === id
        );

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
                    className={`boton-marcavista ${yaEstaVista ? "agregada" : ""}`}
                    onClick={onMarcarVista}
                    disabled={yaEstaVista}
                    >
                    {yaEstaVista ? "★ Agregada ✓" : "☆ Marcar como vista"}
                    </button>
                )}

        </article>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default TarjetaPelicula;
