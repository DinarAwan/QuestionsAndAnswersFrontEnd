import { useState } from "react";
import { axiosInstance } from "../../lib/postingan";

type User = {
    id: number;
    name: string;
}

type Postingan = {
    id: number;
    judul: string;
    isi: string;
    user: User;
}


const useGetPostinganByUser = () => {
    const [postingan, setPostingan] = useState<Postingan[]>([]);

    const fetchPostinganByUser = async () => {
        const response = await axiosInstance.get('/user-postingan');
        setPostingan(response.data.data);
    }

    return {postingan, fetchPostinganByUser};;
}

export default useGetPostinganByUser;