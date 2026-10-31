
// ========================================
// ADAPTAR UNA PELÍCULA DE OMDB
// ========================================

function adaptarPelicula(pelicula) {

    return {
        id: pelicula.imdbID,
        nombre: pelicula.Title,
        anio: pelicula.Year,
        imagen: pelicula.Poster
    };
}

// ========================================
// ADAPTAR UNA LISTA DE PELÍCULAS
// ========================================

function adaptarPeliculas(peliculas) {

    return peliculas.map((pelicula) => adaptarPelicula(pelicula));
}

// ========================================
// EXPORTACIÓN DE FUNCIONES
// ========================================

export { adaptarPelicula, adaptarPeliculas };
