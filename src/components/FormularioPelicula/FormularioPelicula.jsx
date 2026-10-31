
import { useState } from "react";

// ========================================
// IMPORTACIÓN DE ESTILOS
// ========================================

import "./FormularioPelicula.css";

// ========================================
// COMPONENTE FORMULARIO PELÍCULA
// ========================================

function FormularioPelicula({ onAgregar }) {

    // ========================================
    // ESTADOS DEL FORMULARIO
    // ========================================

    const [titulo, setTitulo] = useState("");
    const [anio, setAnio] = useState("");
    const [url, setUrl] = useState("");

    // ========================================
    // FUNCIONES PARA ACTUALIZAR LOS CAMPOS
    // ========================================

    const cambiarTitulo = (e) => {
        setTitulo(e.target.value);
    };

    const cambiarAnio = (e) => {
        setAnio(e.target.value);
    };

    const cambiarUrl = (e) => {
        setUrl(e.target.value);
    };

    // ========================================
    // FUNCIÓN PARA AGREGAR PELÍCULAS
    // ========================================

    const enviar = (e) => {
        e.preventDefault();

        const datos = {
            titulo,
            anio,
            url
        };

        onAgregar(datos);

        // Limpiar los campos después de agregar
        setTitulo("");
        setAnio("");
        setUrl("");
    };

    // ========================================
    // RENDERIZADO
    // ========================================

    return (
        <form className="formulario-pelicula" onSubmit={enviar}>

            {/* ========================================
                CAMPO TÍTULO
            ======================================== */}

            <div>
                <label className="etiqueta" htmlFor="titulo">
                    Título de la película
                </label>

                <input
                    id="titulo"
                    type="text"
                    className="campo"
                    value={titulo}
                    onChange={cambiarTitulo}
                    required
                />
            </div>

            {/* ========================================
                CAMPO AÑO
            ======================================== */}

            <div>
                <label className="etiqueta" htmlFor="anio">
                    Año de la película
                </label>

                <input
                    id="anio"
                    type="number"
                    className="campo"
                    value={anio}
                    onChange={cambiarAnio}
                    min="1888"
                    max="2100"
                    required
                />
            </div>

            {/* ========================================
                CAMPO URL DEL PÓSTER
            ======================================== */}

            <div>
                <label className="etiqueta" htmlFor="url">
                    URL del póster
                </label>

                <input
                    id="url"
                    type="url"
                    className="campo"
                    value={url}
                    onChange={cambiarUrl}
                    required
                />
            </div>

            {/* ========================================
                BOTÓN AGREGAR
            ======================================== */}

            <div>
                <button className="boton-primario" type="submit">
                    Agregar película
                </button>
            </div>

        </form>
    );
}

// ========================================
// EXPORTACIÓN
// ========================================

export default FormularioPelicula;
