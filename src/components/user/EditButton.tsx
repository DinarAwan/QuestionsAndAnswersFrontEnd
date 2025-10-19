// src/components/EditButton.tsx

import React from 'react';
import { FaEdit } from 'react-icons/fa';

interface EditButtonProps {
  onEditClick: () => void; // Fungsi yang dipanggil saat tombol diklik
}

const EditButton: React.FC<EditButtonProps> = ({ onEditClick }) => {
  return (
    <button
      onClick={onEditClick}
      className="text-blue-600 hover:text-blue-900"
      title="Edit Postingan"
    >
      <FaEdit />
    </button>
  );
};

export default EditButton;