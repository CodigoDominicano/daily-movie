import "./Buscador.css";

function Buscador ({busqueda,setBusqueda}) {
    return (
    <div>
        <input 
        type="text" placeholder="Buscar peliculas..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        />    
    </div>
    )
}

export default Buscador;