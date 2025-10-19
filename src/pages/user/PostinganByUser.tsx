import { useEffect } from "react";
import Sidebar from "../../components/user/Sidebar";
import useGetPostinganByUser from "../../api/crudPostingan/useGetPostinganByUser";
import CardPostinganUser from "../../components/user/CardPostinganUser";
import Modal from "../../components/Modal";
import CreatePostForm from "../../components/CreatePostForm";
import { useState } from "react";
import EditPostinganUser from "../../components/user/EditPostinganUser";

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

const PostinganByUser: React.FC = () => {
    const {postingan, fetchPostinganByUser} = useGetPostinganByUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<Postingan | null>(null);

    const handelCreatePostSuccess = () => {
        setIsModalOpen(false);
        fetchPostinganByUser();
    }
    const handleActionSuccess = () => {
        fetchPostinganByUser();
    };

    const handleOpenEditModal = (post: Postingan) => {
        setEditingPost(post);
        setIsEditModalOpen(true); 
    };

    const handleEditSuccess = () => {
        setIsEditModalOpen(false);
        setEditingPost(null);
        fetchPostinganByUser();
    }

    useEffect(() => {
        fetchPostinganByUser();
    }, []);

    return (
        <div>
            <Sidebar>
                <div className="flex justify-between items-center mb-6">
                    <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-700">
                    + Tambah Postingan
                    </button>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-6">Postingan </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {postingan.map((post: Postingan) => (
                            <CardPostinganUser
                            key={post.id} 
                            post={post} 
                            onActionSuccess={handleActionSuccess}
                            onEdit={() => handleOpenEditModal(post)} 
            />
                        ))}
                    </div>
                </div>
                <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Buat Postingan Baru">
                    <CreatePostForm onSuccess={handelCreatePostSuccess} />
                </Modal>

                {editingPost &&
                <Modal 
                  isOpen={isEditModalOpen} 
                  onClose={() => setIsEditModalOpen(false)} 
                  title="Edit Postingan"
                >
                  <EditPostinganUser 
                    postinganLama={editingPost} 
                    onSuccess={handleEditSuccess} 
                  />
                </Modal>
        }       
            </Sidebar>
        </div>
    );
}

export default PostinganByUser;