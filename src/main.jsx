
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// ========================================
// IMPORTACIÓN DEL CONTEXTO
// ========================================

import PeliculasProvider from "./context/PeliculasProvider";

// ========================================
// RENDERIZADO PRINCIPAL
// ========================================

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <PeliculasProvider>
                <App />
            </PeliculasProvider>
        </BrowserRouter>
    </StrictMode>
);


