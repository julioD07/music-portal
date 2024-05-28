import { createHashRouter } from "react-router-dom";
import { Home } from "../pages";
import { Login } from '../pages/Login';

export const router = createHashRouter([
  {
    path: "/", // Ruta de la página principal
    element: <Home />, // Componente que se renderizará
  },
  {
    path: "/login", // Ruta de la página de login
    element: <Login/>, // Componente que se renderizará
  }
]);
