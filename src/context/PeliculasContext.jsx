// ========================================
// IMPORTACIÓN DE REACT
// ========================================

import { createContext, useContext } from "react";


// ========================================
// CREACIÓN DEL CONTEXTO
// ========================================

export const PeliculasContext = createContext(null);


// ========================================
// HOOK PERSONALIZADO
// ========================================

export function usePeliculasContext() {
    return useContext(PeliculasContext);
}