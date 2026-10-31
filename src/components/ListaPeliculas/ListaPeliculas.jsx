
 // ========================================
 // IMPORTACIÓN DE COMPONENTES
 // ========================================

import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

// ========================================
// IMPORTACIÓN DE ESTILOS
// ========================================

import "./ListaPeliculas.css";

// ========================================
// COMPONENTE LISTA PELÍCULAS
// ========================================

function ListaPeliculas({
    peliculas,
    onEliminar,
    onMarcarVista,
    tituloLista
}) {

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <section className="lista-peliculas">

            {/* ========================================
                TÍTULO DE LA LISTA
            ======================================== */}

            <h2>{tituloLista}</h2>

            {/* ========================================
                MENSAJE CUANDO NO HAY PELÍCULAS
            ======================================== */}

            {peliculas.length === 0 && (
                <p className="texto-secundario">
                    {tituloLista === "Películas vistas"
                        ? "Todavía no has marcado ninguna película como vista."
                        : "No se encontraron películas con ese nombre."
                    }
                </p>
            )}

            {/* ========================================
                LISTADO DE PELÍCULAS
            ======================================== */}

            {peliculas.map((pelicula) => (
                <TarjetaPelicula
                    key={pelicula.id}
                    id={pelicula.id}
                    titulo={pelicula.nombre}
                    anio={pelicula.anio}
                    imagen={pelicula.imagen}
                    onEliminar={
                        onEliminar
                            ? () => onEliminar(pelicula.id)
                            : undefined
                    }
                    onMarcarVista={
                        onMarcarVista
                            ? () => onMarcarVista(pelicula)
                            : undefined
                    }
                />
            ))}

        </section>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default ListaPeliculas;
