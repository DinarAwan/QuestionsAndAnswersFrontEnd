import React from 'react';


interface CardCountPostinganProps {
    icon: React.ElementType
    title: string;
    value: string | number;
}
const CardCountPostingan: React.FC<CardCountPostinganProps> = ({icon: Icon, value, title}) => {
    return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4">
      {/* Lingkaran Ikon */}
      <div className="bg-blue-100 p-4 rounded-full">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>

      {/* Teks Statistik */}
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default CardCountPostingan;