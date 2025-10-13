import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { usePostingan } from "../../api/usePostingan";
import  CardPostingan  from "../../components/CardPostingan";

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

const HomePageAuto: React.FC = () => {
  const { postingan, fetchPostingan } = usePostingan();

  useEffect(() => {
    fetchPostingan();
  }, []);

  return (
    <Sidebar>
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Semua Postingan</h1>

      {/* 2. Buat grid untuk menampung kartu-kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postingan.map((post: Postingan) => (
          // 3. Gunakan komponen PostCard di dalam loop
          <CardPostingan key={post.id} post={post} />
        ))}
      </div>
      </div>
    </Sidebar>
   
  );
}

export default HomePageAuto;
