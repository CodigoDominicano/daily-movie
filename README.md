# 🎬 Daily Movie

**Daily Movie** es una aplicación web desarrollada con React que permite descubrir una película diferente cada día, buscar películas mediante la API OMDb y guardar una colección personal de películas vistas.

## 📌 Descripción del proyecto

Proyecto final del módulo de Desarrollo Frontend con React.

**Caso seleccionado:** A - API como fuente principal.

**API utilizada:** OMDb (Open Movie Database).

La aplicación utiliza datos reales de películas y permite al usuario explorar títulos, consultar información detallada y administrar su colección de películas vistas.

## 🚀 Funcionalidades

- **Película del día:** muestra automáticamente una película diferente según el día, incluyendo póster, título, año, género, director y sinopsis.
- **Explorar películas:** permite buscar películas por título utilizando la API OMDb.
- **Agregadas recientemente:** muestra cuatro películas seleccionadas aleatoriamente de una colección predefinida y consultadas desde OMDb.
- **Detalles:** permite consultar la información completa de una película, incluyendo su calificación de IMDb.
- **Películas vistas:** permite guardar películas consultadas desde OMDb.
- **Agregar manualmente:** formulario para registrar una película indicando título, año y URL del póster.
- **Eliminar películas:** permite quitar películas de la colección.
- **Contador:** muestra la cantidad de películas vistas.
- **Persistencia:** conserva las películas mediante localStorage, incluso al actualizar la página.
- **Manejo de errores:** muestra mensajes durante las consultas y cuando ocurre un problema con la API.
- **Diseño responsive:** interfaz adaptable a computadoras, tabletas y celulares.

## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- HTML y CSS
- Vite
- React Router
- Context API
- API REST de OMDb
- Git y GitHub


## 📂 Estructura del proyecto

```text
src/
├── components/
│   ├── Buscador/
│   │   ├── Buscador.jsx
│   │   └── Buscador.css
│   ├── FormularioPelicula/
│   │   ├── FormularioPelicula.jsx
│   │   └── FormularioPelicula.css
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── ListaPeliculas/
│   │   ├── ListaPeliculas.jsx
│   │   └── ListaPeliculas.css
│   └── TarjetaPelicula/
│       ├── TarjetaPelicula.jsx
│       └── TarjetaPelicula.css
├── context/
│   ├── PeliculasContext.jsx
│   └── PeliculasProvider.jsx
├── hooks/
│   ├── useAgregadasRecien.js
│   ├── useLocalStorage.js
│   ├── usePeliculaDetalle.js
│   └── usePeliculas.js
├── pages/
│   ├── Inicio/
│   │   ├── Inicio.jsx
│   │   └── Inicio.css
│   ├── Explorar.jsx
│   ├── PeliculasVistas.jsx
│   ├── DetallePelicula.jsx
│   └── NoEncontrada.jsx
├── utils/
│   ├── adaptar.js
│   ├── agregadasRecien.js
│   └── peliculasDiarias.js
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Instalación y ejecución

**1. Clonar el repositorio**

```bash
git clone https://github.com/CodigoDominicano/daily-movie.git
```

**2. Entrar a la carpeta del proyecto**

```bash
cd daily-movie
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Configurar la API Key**

Crear un archivo llamado `.env.local` en la raíz del proyecto y agregar:

```env
VITE_OMDB_API_KEY=TU_API_KEY
```

La clave se puede solicitar en [OMDb API](https://www.omdbapi.com/apikey.aspx).

**5. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Abrir en el navegador la dirección local que indique Vite.

## 🧠 Conceptos de React aplicados

- Componentes reutilizables y props.
- `useState` para administrar estados.
- `useEffect` para consultar datos de la API.
- Hooks personalizados para consultas y persistencia.
- `useMemo` para calcular el total de películas vistas.
- Context API para compartir información entre componentes.
- React Router para navegación y rutas dinámicas.
- Formularios controlados.
- Renderizado condicional.
- Listados mediante `.map()` y claves únicas.
- Operaciones de creación y eliminación de películas.
- Almacenamiento local mediante `localStorage`.

## 🌐 Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Película del día |
| `/explorar` | Buscador y películas agregadas recientemente |
| `/vistas` | Colección personal de películas vistas |
| `/pelicula/:id` | Información detallada de una película |
| `*` | Página 404 para rutas inexistentes |

## 📝 Notas

- La información de las películas se obtiene de la API OMDb.
- La sección «Agregadas recientemente» utiliza una selección aleatoria de títulos predefinidos, no un registro real de incorporaciones.
- Las películas agregadas manualmente no disponen de detalles consultables mediante IMDb.
- Las películas vistas se almacenan localmente en el navegador.
- La API Key se configura mediante variables de entorno y no se incluye en el repositorio.

## 👨‍💻 Autor

**JcDevs** - Juan Carlos Zorrilla

Proyecto académico de Desarrollo Frontend con React para el curso Desarrollo de Software en la institucion academica Talendig.
