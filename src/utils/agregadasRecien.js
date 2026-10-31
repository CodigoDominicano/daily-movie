
// ========================================
// CATÁLOGO DE PELÍCULAS RECOMENDADAS
// ========================================

const peliculasRecomendadas = [
    "tt0816692", // Interstellar
    "tt1375666", // Inception
    "tt0133093", // The Matrix
    "tt0109830", // Forrest Gump
    "tt0111161", // The Shawshank Redemption
    "tt0120737", // The Lord of the Rings
    "tt0110912", // Pulp Fiction
    "tt0102926", // The Silence of the Lambs
    "tt0167260", // The Return of the King
    "tt15239678", // Dune: Part Two
    "tt15398776", // Oppenheimer
    "tt0482571",  // The Prestige
    "tt1853728",  // Django Unchained
    "tt0172495",  // Gladiator
    "tt0068646",  // The Godfather
    "tt2582802",  // Whiplash
    "tt6751668",  // Parasite
    "tt0114369",  // Se7en
    "tt7286456",  // Joker
    "tt4633694",  // Spider-Man: Into the Spider-Verse
    "tt2380307",  // Coco
    "tt2948356",  // Zootopia
    "tt1049413",  // Up
    "tt0435761",  // Toy Story 3
    "tt0120737",  // The Lord of the Rings: The Fellowship of the Ring
    "tt0167261",  // The Lord of the Rings: The Two Towers
    "tt0241527",  // Harry Potter and the Sorcerer's Stone
    "tt0361748",  // Inglourious Basterds
    "tt0088763"   // Back to the Future
];

// ========================================
// SELECCIONAR CINCO PELÍCULAS AL AZAR
// ========================================

function obtenerRecomendaciones() {
    return [...peliculasRecomendadas]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
}

// ========================================
// EXPORTACIÓN
// ========================================

export { obtenerRecomendaciones };
