import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import LogoutButton from '../LogoutButton';// Pastikan path ini benar

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userName = "Dinar Soniawan";
  const userRole = "Admin";

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-slate-700">Question and Answerrrr</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              className="p-2 rounded-full text-slate-500 hover:bg-gray-100 hover:text-slate-700"
              aria-label="Notifikasi"
            >
              <FaBell className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <FaUserCircle className="h-8 w-8 text-slate-600" />
              <div className="text-sm">
                <p className="font-semibold text-slate-800">{userName}</p>
                <p className="text-slate-500">{userRole}</p>
              </div>
            </div>

            <div className="h-6 w-px bg-gray-200"></div>

            <LogoutButton />
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <FaUserCircle className="h-10 w-10 text-slate-600" />
            <div className="text-base">
              <p className="font-semibold text-slate-800">{userName}</p>
              <p className="text-slate-500">{userRole}</p>
            </div>
          </div>
          <hr/>
          <a href="#" className="flex items-center text-slate-600 hover:bg-gray-100 p-2 rounded-lg">
            <FaBell className="mr-3 h-5 w-5"/>
            Notifikasi
          </a>
          <div className="border-t pt-4">
            <LogoutButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;