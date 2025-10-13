import { usePostingan } from "../../api/usePostingan";
import CardCountPostingan from "../../components/CardCountPostingan";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa";

const AdminDashboard = () => {
    const {postingan, fetchPostingan} = usePostingan();

    useEffect(() => {
        fetchPostingan();
    }, []);

    const jumlahPostingan = postingan.length;

    return (
        <Sidebar>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardCountPostingan 
                    title="Total Postingan"
                    value={jumlahPostingan}
                    icon={FaRegNewspaper} 
                    />
                </div>
            </div>
        </Sidebar>);
}

export default AdminDashboard;