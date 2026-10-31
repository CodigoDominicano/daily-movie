
// ========================================
// IMPORTACIÓN DE COMPONENTES
// ========================================

import Buscador from "../components/Buscador/Buscador";
import ListaPeliculas from "../components/ListaPeliculas/ListaPeliculas";

// ========================================
// IMPORTACIÓN DEL CONTEXTO
// ========================================

import { usePeliculasContext } from "../context/PeliculasContext";

// ========================================
// COMPONENTE EXPLORAR
// ========================================

function Explorar({ busqueda, setBusqueda, peliculasAPI, cargando, error}) {

    // ========================================
    // ACCESO AL CONTEXTO
    // ========================================

        const { marcarComoVista } = usePeliculasContext();

    // ========================================
    // RENDERIZADO
    // ========================================


    return (
        <>
            <h2>Explorar películas</h2>

            <Buscador
                busqueda={busqueda}
                setBusqueda={setBusqueda}
            />

            {cargando && <p>Cargando películas...</p>}
            {error && <p>Error: {error}</p>}

            <ListaPeliculas
                peliculas={peliculasAPI}
                onMarcarVista={marcarComoVista}
                tituloLista="Resultados de busqueda"
            />
        </>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default Explorar;
