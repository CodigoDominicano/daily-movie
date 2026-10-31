
// ========================================
// IMPORTACIÓN DE ESTILOS
// ========================================

import "./Footer.css";

// ========================================
// COMPONENTE FOOTER
// ========================================

function Footer() {

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <footer className="footer">

            {/* ========================================
                CRÉDITOS DEL PROYECTO
            ======================================== */}

            <div className="footer-creditos">
                <p>
                    © 2026 Daily Movie · Desarrollado por
                    <span> JcDevs</span>
                </p>

                <p>Proyecto académico · Talendig</p>
            </div>

        </footer>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default Footer;
