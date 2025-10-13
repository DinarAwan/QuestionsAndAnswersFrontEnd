import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../lib/postingan";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        
        try {
            // await axiosInstance.post('sanctum/csrf-cookie');

            const response = await axiosInstance.post('login', {
                email: email,
                password: password
            })
console.log("Struktur Asli dari Server:", response.data); 
            const {token, user} =response.data;

            localStorage.setItem('authToken', token);

            if (user && user.role) {
                switch (user.role.toLowerCase()) {
                case 'admin':
                    navigate('/admin-dashboard');
                    break;
                case 'user':
                    navigate('/user-dashboard'); 
                    break;
                default:
                    navigate('/'); 
                    break;
                }
            } else {
                navigate('/');
            }
            

            
        }catch (error) {
            console.error('Login Gagal', error);
            setError('Login gagal. Silakan periksa kembali email dan password Anda.');
        } finally {
            setLoading(false);
        }
    }
    

    return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-700 disabled:bg-slate-400"
          >
            {loading ? 'Memproses...' : 'Log    in'}
          </button>
        </form>
      </div>
    </div>
    );
}

export default LoginPage;