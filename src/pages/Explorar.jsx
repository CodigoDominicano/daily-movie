// ========================================
// IMPORTACIÓN DEL HOOK DE AGREGADAS
// ========================================

import useAgregadasRecien from "../hooks/useAgregadasRecien";

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
    // PELÍCULAS AGREGADAS RECIENTEMENTE
    // ========================================

        const {
            peliculas: agregadasRecien,
            cargando: cargandoAgregadas,
            error: errorAgregadas
        } = useAgregadasRecien();


    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <>
            <h2 className="titulo-pagina">Explorar peliculas</h2>

            <Buscador
                busqueda={busqueda}
                setBusqueda={setBusqueda}
            />

            
            {/* ========================================
                RESULTADOS Y AGREGADAS RECIENTEMENTE
            ======================================== */}

            {   busqueda.trim() ? (
    <>
        {cargando && <p>Cargando películas...</p>}
        {error && <p>Error: {error}</p>}

        {!cargando && !error && (
            <ListaPeliculas
                peliculas={peliculasAPI}
                onMarcarVista={marcarComoVista}
                tituloLista="Resultados de búsqueda"
            />
        )}
    </>
            ) : (
        <>
        {cargandoAgregadas && <p>Cargando películas...</p>}
        {errorAgregadas && <p>Error: {errorAgregadas}</p>}

        {!cargandoAgregadas && !errorAgregadas && (
            <ListaPeliculas
                peliculas={agregadasRecien}
                onMarcarVista={marcarComoVista}
                tituloLista="Agregadas recientemente"
            />
        )}
        </>
            )}

        </>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default Explorar;
