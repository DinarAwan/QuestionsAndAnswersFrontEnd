import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/admin/PostinganPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import UsersPage from './pages/admin/UsersPage'
import Dasboard from './pages/user/Dashboard'
import LoginPage from './pages/LoginPage'
import PostinganByUser from './pages/user/PostinganByUser'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

         <Route path="/admin-dashboard" element={<AdminDashboard />} />
         <Route path="/postingan" element={<HomePage />}></Route>
         <Route path="/users" element={<UsersPage />}></Route>

         <Route path='/user-dashboard' element={<Dasboard />}></Route>
         <Route path='/user-postingan' element={<PostinganByUser />}></Route>
      </Routes>
    </>
  )
}

export default App
