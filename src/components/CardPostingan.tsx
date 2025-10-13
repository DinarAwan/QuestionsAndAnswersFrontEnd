import React from "react";
import { FaUserCircle, FaArrowRight } from 'react-icons/fa';


type User = {
     id: number;
    name: string;
   };

type Postingan = {
    id: number;
    judul: string;
    isi: string;
    user: User;
}

type PostinganProps = {
    post: Postingan;
}

const CardPostingan: React.FC<PostinganProps> = ({post}) => {


    return (
        <div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col transition-shadow duration-200 hover:shadow-xl">
        {/* Bagian Header Kartu: Info Penulis */}
        <div className="p-6 flex items-center space-x-3 border-b border-gray-100">
          <FaUserCircle className="h-8 w-8 text-slate-500" />
          <div>
            {/* 6. Akses data melalui objek 'post' */}
            <p className="font-semibold text-slate-800">{post.user.name}</p>
            <p className="text-xs text-slate-400">User ID: {post.user.id}</p>
          </div>
        </div>

        {/* Bagian Body Kartu: Judul dan Isi Postingan */}
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{post.judul}</h3>
          <p className="text-slate-600 line-clamp-3">
            {post.isi}
          </p>
        </div>

        {/* Bagian Footer Kartu: Tombol Aksi */}
        <div className="p-6 bg-gray-50 rounded-b-2xl mt-auto">
          <a
            href={`/posts/${post.id}`}
            className="text-blue-600 font-semibold inline-flex items-center group"
          >
            Baca Selengkapnya
            <FaArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
        </div>
    );
}

export default CardPostingan;