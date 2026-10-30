import { useState, useEffect } from "react";

function useLocalStorage(clave, valorInicial) {

  const [valor, setValor] = useState(() => {
    const datosGuardados = localStorage.getItem(clave);

    return datosGuardados !== null
      ? JSON.parse(datosGuardados)
      : valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);


  return [valor, setValor];
}

export default useLocalStorage;
