import useDeletePostingan from "../api/crudPostingan/useDeletePostingan";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface DeleteButtonProps {
  id: number;
  onSuccess: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onSuccess }) => {
  const { deletePostingan, deletePostinganLoading } = useDeletePostingan();

  const handleDelete = async () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
      const success = await deletePostingan(id);
      if (success) {
        alert('Postingan berhasil dihapus!');
        onSuccess();
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={deletePostinganLoading}
      className="text-red-600 hover:text-red-900 disabled:text-gray-400"
      title="Hapus Postingan"
    >
      {deletePostinganLoading ? '...' : <FaTrash />}
    </button>
  );
};

export default DeleteButton;