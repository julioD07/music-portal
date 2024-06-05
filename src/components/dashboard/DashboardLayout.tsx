import { Outlet, Link } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useState } from "react";


export const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-darkbg">
      <div className="flex flex-grow">
        <button
          onClick={toggleSidebar}
          className={`p-4 text-2xl focus:outline-none fixed top-0 left-0 z-20 transition-colors duration-300 
          
          `}
        >
          <FaBars />
        </button>
        <aside
          className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 z-10`}
        >
          <div className="p-4 text-2xl font-bold text-center border-b border-gray-200 dark:border-gray-700">
            Dashboard
          </div>
          <nav className="mt-6">
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="flex items-center p-2 pl-6 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <FaHome className="mr-2" />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="profile"
                  className="flex items-center p-2 pl-6 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <FaUser className="mr-2" />
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="settings"
                  className="flex items-center p-2 pl-6 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <FaCog className="mr-2" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={`flex-grow p-8 pt-16 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <Outlet />
        </main>
      </div>
    </div>
      {/* <Reproductor /> */}
    </>
  );
};
