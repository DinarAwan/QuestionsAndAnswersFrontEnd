import { useState } from "react";
import { axiosInstance } from "../../lib/postingan";

const useDeletePostingan = () => {
    const [deletePostinganError, setDeletePostinganError] = useState("");
    const [deletePostinganLoading, setDeletePostinganLoading] = useState(false);
    const deletePostingan = async (id: number) => {
        try {
            setDeletePostinganLoading(true);
            await axiosInstance.delete(`/postingan-delete/${id}`);
            return true;
        } catch (error) {
            setDeletePostinganError((error as TypeError).message);
            return false;
        } finally {
            setDeletePostinganLoading(false);
        }
    }
    return {
        deletePostingan,
        deletePostinganError,
        deletePostinganLoading
    }
}

export default useDeletePostingan;