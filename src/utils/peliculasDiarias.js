
// ========================================
// LISTADO DE PELÍCULAS DIARIAS
// ========================================

const peliculasDiarias = [
    {
        id: "tt0816692",
        nombre: "Interstellar"
    },
    {
        id: "tt1375666",
        nombre: "Inception"
    },
    {
        id: "tt0468569",
        nombre: "The Dark Knight"
    },
    {
        id: "tt0133093",
        nombre: "The Matrix"
    },
    {
        id: "tt0109830",
        nombre: "Forrest Gump"
    }
];

// ========================================
// FUNCIÓN PARA OBTENER LA PELÍCULA DEL DÍA
// ========================================

function obtenerPeliculaDelDia() {

    // ========================================
    // CALCULAR LOS DÍAS TRANSCURRIDOS
    // ========================================

    const diasTranscurridos = Math.floor(
        Date.now() / (1000 * 60 * 60 * 24)
    );

    // ========================================
    // SELECCIONAR LA PELÍCULA
    // ========================================

    const indice = diasTranscurridos % peliculasDiarias.length;

    return peliculasDiarias[indice];
}

// ========================================
// EXPORTACIÓN
// ========================================

export default peliculasDiarias;
export { obtenerPeliculaDelDia };
