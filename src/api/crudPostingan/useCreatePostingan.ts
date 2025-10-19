import { useState } from "react";
import { axiosInstance } from "../../lib/postingan";

type CreatePostPayload = {
  judul: string;
  isi: string;
};

const useCreatePostingan = () => {
    const [createPostinganLoading, setCreatePostinganLoading] = useState(false);
    const [createPostinganError, setCreatePostinganError] = useState("");
    const createPostingan = async (payload : CreatePostPayload) => {
        try{
            setCreatePostinganLoading(true);
            await axiosInstance.post("/postingan-create", 
                payload
            );
            return true;
        }catch(error){
            setCreatePostinganError((error as TypeError).message)
        } finally{
            setCreatePostinganLoading(false);
        }
    }
    return {
        createPostingan,
        createPostinganError,
        createPostinganLoading
    };
}

export default useCreatePostingan;