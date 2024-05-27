import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de login
    // Por ejemplo, redirigir a la página de login
    console.log('Login button clicked');
  };

  return (
    <header className="w-full p-4 bg-white shadow-md text-center dark:bg-darkbg">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Music Portal</h1>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-md">
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button onClick={handleLogin} className="p-2 rounded-md flex items-center">
            <BsPersonCircle className="mr-2"/>
            {/* Login */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
