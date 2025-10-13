import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import LogoutButton from '../LogoutButton';


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Bagian Kiri: Judul Halaman atau Search Bar */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-600">Question and Answer</h1>
          </div>

          {/* Bagian Kanan: Ikon dan Profil Pengguna (Desktop) */}
          <div className="hidden md:flex items-center space-x-5">
            <button 
              className="p-2 rounded-full text-slate-500 hover:bg-gray-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Notifikasi"
            >
              <FaBell className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <FaUserCircle className="h-8 w-8 text-slate-600" />
              <div className="text-sm">
                <p className="font-semibold text-slate-800">Dinar Soniawan</p>
                <p className="text-slate-500">Admin</p>
              </div>
            </div>
            <LogoutButton />
          </div>
          
          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
            
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <div className="flex items-center space-x-3 px-2 py-3">
              <FaUserCircle className="h-10 w-10 text-slate-600" />
              <div className="text-base">
                <p className="font-semibold text-slate-800">Dinar Soniawan</p>
                <p className="text-slate-500">Admin</p>
              </div>
            </div>
            <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-gray-100">
              <FaBell className="mr-3 h-5 w-5"/>
              Notifikasi
            </a>
          </div>
        </div>
      )}
      
      
    </header>
   

  );
};

export default Navbar;