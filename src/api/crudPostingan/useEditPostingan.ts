import { useState } from "react";
import { axiosInstance } from "../../lib/postingan";
type EditPostinganPayload = {
    judul: string;
    isi: string;
}
const useEditPostingan = () => {
    const [editPostinganError, setEditPostinganError] = useState("");
    const [editPostinganLoading, setEditPostinganLoading] = useState(false);

    const editPostingan = async (id: number, payload : EditPostinganPayload) => {
        try {
            await axiosInstance.patch(`/postingan-update/${id}`, payload);
            return true;
        } catch (error) {
            setEditPostinganError((error as TypeError).message);
            return false;
        } finally {
            setEditPostinganLoading(false);
        }
    }


    return {
        editPostingan,
        editPostinganError,
        editPostinganLoading
    };
}

export default useEditPostingan;