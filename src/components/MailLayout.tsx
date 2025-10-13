// src/layouts/MainLayout.tsx

import React from 'react';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* 1. Tampilkan Navbar di sini */}
      <Navbar />

      {/* 2. Render konten halaman di bawahnya */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;