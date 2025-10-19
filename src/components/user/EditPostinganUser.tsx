import React, { useState } from "react";
import useEditPostingan from "../../api/crudPostingan/useEditPostingan";    

type Postingan = {
  id: number;
  judul: string;
  isi: string;
};

interface EditPostFormProps {
  postinganLama: Postingan; 
  onSuccess: () => void;
}

const EditPostinganUser: React.FC<EditPostFormProps> = ({ postinganLama, onSuccess }) => {
  const [judul, setJudul] = useState(postinganLama.judul);
  const [isi, setIsi] = useState(postinganLama.isi);
  const { editPostingan, editPostinganLoading, editPostinganError } = useEditPostingan();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = { judul, isi };
    const success = await editPostingan(postinganLama.id, payload);
    if (success) {
      alert('Postingan berhasil diperbarui!');
      onSuccess(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {editPostinganError && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">{editPostinganError}</p>}
      
      <div>
        <label htmlFor="judul">Judul</label>
        <input 
          id="judul"
          type="text" 
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
          required 
          disabled={editPostinganLoading}
        />
      </div>
      
      <div>
        <label htmlFor="isi">Isi Postingan</label>
        <textarea 
          id="isi"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
          required 
          disabled={editPostinganLoading}
        />
      </div>
      
      <div className="flex justify-end">
        <button 
          type="submit" 
          disabled={editPostinganLoading}
          className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed">
          {editPostinganLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </div>
    </form>
  );
};

export default EditPostinganUser;