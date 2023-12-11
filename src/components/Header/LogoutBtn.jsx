import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogoutBtn() {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    function logoutHandler(){
      toast.success('Logout successfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        authService.logout().
        then(() => dispatch(logout()))
        navigate("/");
    }
  return (
    <button 
    className='inline-bock px-6 py-2 text-gray-300 duration-200 hover:bg-blue-100 rounded-full hover:text-gray-950'
    onClick={logoutHandler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn