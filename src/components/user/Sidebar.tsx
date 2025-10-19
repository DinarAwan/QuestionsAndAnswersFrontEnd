// src/layouts/DashboardLayout.tsx

import React from 'react';
import { NavLink } from 'react-router';
import { FaHome, FaRegNewspaper, FaCog } from 'react-icons/fa';
import Navbar from './Navbar'; 

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: 'Home', to: '/user-dashboard', icon: FaHome },
  { name: 'Postingan Anda', to: '/user-postingan', icon: FaRegNewspaper },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const linkClasses = "flex items-center w-full p-3 my-1 rounded-lg transition-colors duration-200";
  const activeLinkClasses = "bg-slate-800 text-white font-semibold shadow-md";
  const inactiveLinkClasses = "text-slate-600 hover:bg-slate-200 hover:text-slate-800";

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 flex-shrink-0 flex flex-col bg-white p-4 border-r border-gray-200">
        
        <div className="flex items-center mb-6">
          <img src="/LogoAnyar.png" alt="Logo" className="w-9 h-9 mr-3 rounded-full" />
          <h1 className="text-xl font-bold text-slate-800">Code Awan</h1>
        </div>

        <nav className="flex-grow">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  end // 'end' penting agar link Home tidak selalu aktif
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

      <div className="flex-1 overflow-y-auto">
        
        <Navbar />

        <main className="p-6">
          {children}
        </main>
        
      </div>
    </div>
  );
};

export default DashboardLayout;