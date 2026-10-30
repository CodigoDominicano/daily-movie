import "./TarjetaPelicula.Css"
import { Link } from "react-router-dom";

function TarjetaPelicula ({id, imagen, titulo, anio, onEliminar, onMarcarVista}) {

    return (
        <article className="tarjeta-pelicula">
            <img src={imagen} alt={`Póster de ${titulo}`} width="200"/>
            <h2>{titulo}</h2>
            <p className="anio-pelicula">{anio}</p>
            <Link to={`/pelicula/${id}`}> <button className="boton-primario"> Ver más</button> </Link>
            {onEliminar && (
            <button className="boton-secundario" onClick={onEliminar}> Eliminar </button>
            )}
            {onMarcarVista && (
            <button type="button" className="boton-marcavista" onClick={onMarcarVista} > Marcar como vista </button>
)}
        </article>
    ) 

}

export default TarjetaPelicula;