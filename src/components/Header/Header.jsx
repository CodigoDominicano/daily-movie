
// ========================================
// IMPORTACIÓN DE COMPONENTES Y LIBRERÍAS
// ========================================

import { NavLink } from "react-router-dom";

// ========================================
// IMPORTACIÓN DE ESTILOS
// ========================================

import "./Header.css";

// ========================================
// COMPONENTE HEADER
// ========================================

function Header() {

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <header>

            {/* ========================================
                TÍTULO DE LA APLICACIÓN
            ======================================== */}

            <h1>Daily Movie</h1>

            {/* ========================================
                MENÚ DE NAVEGACIÓN
            ======================================== */}

            <nav>
                <NavLink to="/" end>
                    Inicio
                </NavLink>

                <NavLink to="/explorar">
                    Explorar
                </NavLink>

                <NavLink to="/vistas">
                    Películas vistas
                </NavLink>
            </nav>

        </header>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default Header;
