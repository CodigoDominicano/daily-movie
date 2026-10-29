// ========================================
// IMPORTACIÓN DE COMPONENTES
// ========================================

import Header from "./components/Header/Header"
import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas";
import TarjetaPelicula from "./components/TarjetaPelicula/TarjetaPelicula";

// ========================================
// HEADER
// ========================================

function App() {

    const peliculas = [
        {id: 1, nombre: "Batman", anio: "1989", imagen: "https://images.squarespace-cdn.com/content/v1/50710c28c4aa65eb3b63d154/1713443201248-NWA1FLPL0C0A0N750R6O/image-asset.jpeg?format=1000w"},
        {id: 2, nombre: "Titanic", anio: "1997", imagen: "https://m.media-amazon.com/images/I/71ZJ8am0mKL._AC_SY741_.jpg"},
        {id: 3, nombre: "Avatar", anio: "2009", imagen: "https://cdng.europosters.eu/pod_public/1300/262963.jpg"},
        ];
    

return (
    <>
        <Header />
        <ListaPeliculas peliculas={peliculas} />
    </>
     )    
}
export default App;
