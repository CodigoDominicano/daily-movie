import { useState } from "react";

// ========================================
// IMPORTACIÓN DEL HOOK DE AGREGADAS
// ========================================

import usePeliculas from "../hooks/usePeliculas";
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

function Explorar() {

    // ========================================
    // ESTADO DEL BUSCADOR
    // ========================================

        const [busqueda, setBusqueda] = useState("");

    // ========================================
    // CONSULTA DE PELÍCULAS A OMDB
    // ========================================

        const {
            peliculas: peliculasAPI,
            cargando,
            error
        } = usePeliculas(busqueda);

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
                {cargando && <p className="mensaje-busqueda">Cargando películas...</p>}
                {error && <p className="mensaje-busqueda">Error: {error}</p>}

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
        {cargandoAgregadas && (
        <p className="mensaje-busqueda">Cargando películas...</p>
        )}

        {errorAgregadas && (
        <p className="mensaje-busqueda">Error: {errorAgregadas}</p>
        )}

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
