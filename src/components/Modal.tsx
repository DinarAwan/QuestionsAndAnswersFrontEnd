import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    if (!isOpen){
        return null;
    }


    return (
    <div className="fixed inset-0 stone-100 bg-opacity-25 backdrop-blur-sm z-40 flex items-center justify-center p-4" onClick={onClose}>        
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden z-50"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat mengklik di dalam
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
    );
}

export default Modal;