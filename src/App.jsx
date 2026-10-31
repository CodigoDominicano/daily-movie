import { Routes, Route } from "react-router-dom";

// ========================================
// IMPORTACIÓN DE PÁGINAS
// ========================================

import Inicio from "./pages/Inicio/Inicio";
import Explorar from "./pages/Explorar";
import PeliculasVistas from "./pages/PeliculasVistas";
import DetallePelicula from "./pages/DetallePelicula";
import NoEncontrada from "./pages/NoEncontrada";

// ========================================
// IMPORTACIÓN DE COMPONENTES
// ========================================

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

function App() {

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

                <Route path="/explorar" element={<Explorar />} />

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

        <Footer />
        </>
    );

}

// ========================================
// EXPORTACIÓN
// ========================================

export default App;
