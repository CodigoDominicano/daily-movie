
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
import useLocalStorage from "./hooks/useLocalStorage";

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

function App() {

    // ========================================
    // ESTADO DEL BUSCADOR
    // ========================================

    const [busqueda, setBusqueda] = useState("");

    const {
        peliculas: peliculasAPI,
        cargando,
        error
    } = usePeliculas(busqueda);


    // ========================================
    // PELÍCULAS VISTAS - LOCALSTORAGE
    // ========================================

    const [peliculasVistas, setPeliculasVistas] = useLocalStorage(
        "peliculasVistas",
        []
    );


    // ========================================
    // MARCAR PELÍCULA COMO VISTA
    // ========================================

    const marcarComoVista = (pelicula) => {
        setPeliculasVistas((prev) => {
            const yaExiste = prev.some((p) => p.id === pelicula.id);

            if (yaExiste) {
                return prev;
            }

            return [...prev, pelicula];
        });
    };


    // ========================================
    // QUITAR PELÍCULA DE VISTAS
    // ========================================

    const quitarDeVistas = (id) => {
        setPeliculasVistas((prev) =>
            prev.filter((pelicula) => pelicula.id !== id)
        );
    };


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
                            marcarComoVista={marcarComoVista}
                        />
                    }
                />

                <Route
                    path="/vistas"
                    element={
                        <PeliculasVistas
                            peliculasVistas={peliculasVistas}
                            quitarDeVistas={quitarDeVistas}
                        />
                    }
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

