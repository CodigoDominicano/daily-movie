import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// ========================================
// IMPORTACIÓN DE PÁGINAS
// ========================================

import Inicio from "./pages/Inicio";
import Explorar from "./pages/Explorar";
import PeliculasVistas from "./pages/PeliculasVistas";
import DetallePelicula from "./pages/DetallePelicula";
import NoEncontrada from "./pages/NoEncontrada";

// ========================================
// IMPORTACIÓN DE COMPONENTES
// ========================================

import Header from "./components/Header/Header";

// ========================================
// IMPORTACIÓN DE HOOKS
// ========================================

import usePeliculas from "./hooks/usePeliculas";

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

function App() {

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
    // RENDERIZADO Y RUTAS
    // ========================================

    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<Inicio />}
                />

                <Route
                    path="/explorar"
                    element={
                        <Explorar
                            busqueda={busqueda}
                            setBusqueda={setBusqueda}
                            peliculasAPI={peliculasAPI}
                            cargando={cargando}
                            error={error}
                        />
                    }
                />

                <Route
                    path="/vistas"
                    element={<PeliculasVistas />}
                />

                <Route
                    path="/pelicula/:id"
                    element={<DetallePelicula />}
                />

                <Route
                    path="*"
                    element={<NoEncontrada />}
                />
            </Routes>
        </>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default App;
