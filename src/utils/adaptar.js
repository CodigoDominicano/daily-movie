function adaptarPelicula(pelicula) {
 
    return {
        id: pelicula.imdbID,
        nombre: pelicula.Title,
        anio: pelicula.Year,
        imagen: pelicula.Poster,
    }

}
   
    function adaptarPeliculas(peliculas) {
    return peliculas.map((pelicula) => adaptarPelicula(pelicula));

}

export { adaptarPelicula, adaptarPeliculas };