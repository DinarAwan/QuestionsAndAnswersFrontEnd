import { useState } from "react";
import { axiosInstance } from "../lib/postingan";

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

export const usePostingan = () => {
  const [postingan, setPostingan] = useState<Postingan[]>([]);

  const fetchPostingan = async () => {
      const response = await axiosInstance.get("/postingan");
      setPostingan(response.data.data); // simpan data ke state

   
  };

  return { postingan, fetchPostingan};
};
