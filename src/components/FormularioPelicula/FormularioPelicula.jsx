import "./FormularioPelicula.css";
import { useState } from "react";
 
function FormularioPelicula ({onAgregar}) {
   const [titulo, setTitulo] = useState ("");
   const [anio, setAnio] = useState ("");
   const [url, setUrl] = useState ("")
 
   const cambiarTitulo = (e) => {
    setTitulo(e.target.value);
  };
   
   const cambiarAnio = (e) => {
    setAnio(e.target.value);
  };

  const cambiarUrl = (e) => {
    setUrl(e.target.value);
  };
 
  const enviar = (e) => {
    e.preventDefault();
    const datos = { titulo, anio, url };
    console.log(datos);
    onAgregar(datos);
    setTitulo("");
    setAnio("");
    setUrl("");
  };


 
  return (
   
   <form className="formulario-pelicula" onSubmit={enviar}>

      <div>
        <label className="etiqueta" htmlFor="titulo"> Titulo de la Pelicula </label>
        <input id="titulo" type="text" className="campo" value={titulo} onChange={cambiarTitulo} required />
      </div>

      <div>
        <label className="etiqueta" htmlFor="anio"> Año de la Pelicula </label>
        <input id="anio" type="numer" className="campo" value={anio} onChange={cambiarAnio} required />
      </div>

      <div>
        <label className="etiqueta" htmlFor="url"> URL del Poster </label>
        <input id="url" type="url" className="campo" value={url} onChange={cambiarUrl} required />
      </div>

      <div>
        <button className="boton-primario" type="submit"> Agregar Pelicula </button>
      </div>

    </form>
  );
}
 
export default FormularioPelicula;