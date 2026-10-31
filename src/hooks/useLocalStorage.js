
import { useState, useEffect } from "react";

// ========================================
// HOOK PERSONALIZADO USELOCALSTORAGE
// ========================================

function useLocalStorage(clave, valorInicial) {

    // ========================================
    // ESTADO Y RECUPERACIÓN DE DATOS
    // ========================================

    const [valor, setValor] = useState(() => {
        const datosGuardados = localStorage.getItem(clave);

        return datosGuardados !== null
            ? JSON.parse(datosGuardados)
            : valorInicial;
    });

    // ========================================
    // GUARDAR CAMBIOS EN LOCALSTORAGE
    // ========================================

    useEffect(() => {
        localStorage.setItem(clave, JSON.stringify(valor));
    }, [clave, valor]);

    // ========================================
    // RETORNO DEL HOOK
    // ========================================

    return [valor, setValor];
}

// ========================================
// EXPORTACIÓN
// ========================================

export default useLocalStorage;
