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

function obtenerPeliculaDelDia() {
  
  const diasTranscurridos = Math.floor(
    Date.now() / (1000 * 60 * 60 * 24)
  );

  const indice = diasTranscurridos % peliculasDiarias.length;

  return peliculasDiarias[indice];
}

export default peliculasDiarias;
export { obtenerPeliculaDelDia };