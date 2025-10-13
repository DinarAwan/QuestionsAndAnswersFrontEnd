import React from "react";
import { NavLink } from "react-router"; 
import { FaHome, FaRegNewspaper, FaCog } from 'react-icons/fa';
import Navbar from './Navbar';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: 'Home', to: '/admin-dashboard', icon: FaHome },
  { name: 'Postingan Anda', to: '/postingan', icon: FaRegNewspaper },
];

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const linkClasses = "flex items-center w-full p-3 my-1 rounded-lg transition-all duration-200";
  const activeLinkClasses = "bg-zinc-600 text-white font-semibold shadow-lg";
  const inactiveLinkClasses = "text-slate-600 hover:bg-zinc-300 hover:text-zinc-500";

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 flex flex-col bg-gray-200 p-4">
        
        <div className="flex items-center mb-6">
          <img src="../public/logoAnyar.png" alt="Logo" className="w-8 h-8 mr-3 rounded-4xl" />
          <h1 className="text-xl font-bold text-slate-800">Code Awan</h1>
        </div>

        <nav className="flex-grow">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                  }
                >
                  <link.icon className="mr-3 text-lg" />
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto">
           <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
              }
            >
              <FaCog className="mr-3 text-lg" />
              <span>Pengaturan</span>
            </NavLink>
        </div>
    
      </aside>

       <div className="flex-1 flex flex-col overflow-hidden">
        {/* 2. Navbar ditempatkan di atas konten */}
        <Navbar />

      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
       </div>
    </div>
  );
};

export default SidebarLayout;