import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import "./ListaPeliculas.css";

function ListaPeliculas ({peliculas, onEliminar}) {
    return (
        <section className="lista-peliculas">
            <h2> Peliculas Disponibles </h2>
            {peliculas.map((pelicula) => (
                <TarjetaPelicula 
                key={pelicula.id}
                titulo={pelicula.nombre}
                anio={pelicula.anio}
                imagen={pelicula.imagen}
                onEliminar={() => onEliminar(pelicula.id)}
                />
            ))}
        </section>
    )
}

export default ListaPeliculas;