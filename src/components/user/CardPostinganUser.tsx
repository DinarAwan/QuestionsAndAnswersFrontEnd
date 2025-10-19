import React from 'react';
import DeleteButton from '../ButtonDelete';
import EditButton from './EditButton'; 
import { FaUserCircle, FaArrowRight } from 'react-icons/fa';

type User = { id: number; name: string; };
type Postingan = { id: number; judul: string; isi: string; user: User; };

interface CardPostinganProps {
  post: Postingan;
  onActionSuccess: () => void;
  onEdit: () => void;
}

const CardPostingan: React.FC<CardPostinganProps> = ({ post, onActionSuccess, onEdit }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col transition-shadow duration-200 hover:shadow-xl">
      
      <div className="absolute top-4 right-4">
        <div className="flex items-center space-x-4">
          <EditButton onEditClick={onEdit} />
          <DeleteButton id={post.id} onSuccess={onActionSuccess} />
        </div>
      </div>

      <div className="p-6 flex items-center space-x-3 border-b border-gray-100">
        <FaUserCircle className="h-8 w-8 text-slate-500" />
        <div>
          <p className="font-semibold text-slate-800">{post.user.name}</p>
          <p className="text-xs text-slate-400">User ID: {post.user.id}</p>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{post.judul}</h3>
        <p className="text-slate-600 line-clamp-3">{post.isi}</p>
      </div>

      <div className="p-6 bg-gray-50 rounded-b-2xl mt-auto">
        <a 
          href={`/postingan-user/${post.id}`} 
          className="text-blue-600 font-semibold inline-flex items-center group"
        >
          Baca Selengkapnya
          <FaArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CardPostingan;