import "./TarjetaPelicula.Css"

function TarjetaPelicula ({imagen, titulo, anio, onEliminar}) {

    return (
        <article className="tarjeta-pelicula">
            <img src={imagen} alt={`Póster de ${titulo}`} width="200"/>
            <h2>{titulo}</h2>
            <p className="anio-pelicula">{anio}</p>
            <button className="boton-primario"> «Ver más» </button>
            <button className="boton-secundario"
            onClick={onEliminar}> Eliminar </button>
        </article>
    ) 

}

export default TarjetaPelicula;