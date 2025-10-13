import { useNavigate } from "react-router";
import { axiosInstance } from "../lib/postingan";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await axiosInstance.post('logout');
            localStorage.removeItem('authToken');
            delete axiosInstance.defaults.headers.common['Authorization'];
            navigate('/login');
        } catch (error) {
            console.error('Logout Gagal', error);
        }
    }
    return (
        <div>
            <button onClick={handleLogout}
            className="flex items-center space-x-2 text-sm font-semibold text-red-600 hover:text-red-800"
            title="Logout">
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
    );
}

export default LogoutButton;