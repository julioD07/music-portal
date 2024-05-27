import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/", // Ruta de la página principal
    element: <Home />, // Componente que se renderizará
  },
]);
