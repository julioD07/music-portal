import { createHashRouter } from "react-router-dom";
import { Home, Login, Register } from "../pages";


export const router = createHashRouter([
  {
    path: "/", // Ruta de la página principal
    element: <Home />, // Componente que se renderizará
  },
  {
    path: "/login", // Ruta de la página de login
    element: <Login/>, // Componente que se renderizará
  },
  {
    path: "/register", // Ruta de la página de registro
    element: <Register />, // Componente que se renderizará
  },
]);
