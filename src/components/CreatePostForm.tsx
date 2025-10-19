import React, { useState } from 'react';
import useCreatePostingan from '../api/crudPostingan/useCreatePostingan';
import useGetPostinganByUser from '../api/crudPostingan/useGetPostinganByUser';

interface CreatePostFormProps {
  onSuccess: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSuccess }) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const { createPostingan, createPostinganLoading, createPostinganError } = useCreatePostingan();
  const { fetchPostinganByUser} = useGetPostinganByUser();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = { judul, isi };
    const success = await createPostingan(payload);

    if (success) {
      // di sini kalo mau massage berhasil post
      onSuccess(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Tampilkan pesan error jika ada */}
      {createPostinganError && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">{createPostinganError}</p>}
      
      <div>
        <label htmlFor="judul" className="block text-sm font-medium text-slate-700">
          Judul
        </label>
        <input 
          id="judul"
          type="text" 
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
          required 
          disabled={createPostinganLoading}
        />
      </div>
      
      <div>
        <label htmlFor="isi" className="block text-sm font-medium text-slate-700">
          Isi Postingan
        </label>
        <textarea 
          id="isi"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
          required 
          disabled={createPostinganLoading}/>
      </div>
      
      <div className="flex justify-end">
        <button 
          onClick={fetchPostinganByUser}
          type="submit" 
          disabled={createPostinganLoading}
          className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed">
          {createPostinganLoading ? 'Menyimpan...' : 'Simpan Postingan'}
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;