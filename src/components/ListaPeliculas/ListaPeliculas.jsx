import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import "./ListaPeliculas.css";

function ListaPeliculas ({peliculas, onEliminar, onMarcarVista, tituloLista}) {
    return (
        <section className="lista-peliculas">
            <h2> {tituloLista} </h2>
            {peliculas.length === 0 && (
            <p className="texto-secundario">
            {tituloLista === "Películas vistas"
            ? "Todavía no has marcado ninguna película como vista."
            : "No se encontraron películas con ese nombre."
            }
            </p>
            )}


            {peliculas.map((pelicula) => (
                <TarjetaPelicula 
                key={pelicula.id}
                titulo={pelicula.nombre}
                anio={pelicula.anio}
                imagen={pelicula.imagen}
                onEliminar={onEliminar ? () => onEliminar(pelicula.id) : undefined}
                onMarcarVista={onMarcarVista ? () => onMarcarVista(pelicula) : undefined}
                id={pelicula.id}
                />
            ))}
        </section>
    )
}

export default ListaPeliculas;