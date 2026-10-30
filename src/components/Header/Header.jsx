import "./Header.css";
import { NavLink } from "react-router-dom";

function Header () {
    return (
    <header>
        <h1> Daily Movie</h1>
            <nav>
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/explorar">Explorar</NavLink>
                <NavLink to="/vistas">Películas vistas</NavLink>
            </nav>
    </header>
    
    )
}

export default Header;