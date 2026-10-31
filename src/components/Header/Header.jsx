
// ========================================
// IMPORTACIÓN DE COMPONENTES Y LIBRERÍAS
// ========================================

import { Link, NavLink } from "react-router-dom";

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
                LOGO Y FIRMA DEL DESARROLLADOR
            ======================================== */}

            <Link to="/" className="logo-header">
            <h1>Daily Movie</h1>
            <span>Descubre, explora y guarda tus películas favoritas.</span>
            </Link>

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
