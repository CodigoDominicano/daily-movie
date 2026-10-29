import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import "./ListaPeliculas.css";

function ListaPeliculas ({peliculas}) {
    return (
        <section className="lista-peliculas">
            <h2> Peliculas Disponibles </h2>
            {peliculas.map((pelicula) => (
                <TarjetaPelicula 
                key={pelicula.id}
                titulo={pelicula.nombre}
                anio={pelicula.anio}
                imagen={pelicula.imagen}
                />
            ))}
        </section>
    )
}

export default ListaPeliculas;