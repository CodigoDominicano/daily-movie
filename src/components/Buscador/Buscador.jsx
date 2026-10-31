
// ========================================
// IMPORTACIÓN DE ESTILOS
// ========================================

import "./Buscador.css";

// ========================================
// COMPONENTE BUSCADOR
// ========================================

function Buscador({ busqueda, setBusqueda }) {

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar películas..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
        </div>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default Buscador;
