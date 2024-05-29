import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    console.log("Form submitted");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center animate__animated animate__fadeIn"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="max-w-md w-full bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md bg-opacity-90 dark:bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-buttoncolor text-white rounded-md hover:bg-buttonhover transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          No tienes una Cuenta?{" "}
          <Link to="/register" className="text-buttoncolor hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};
