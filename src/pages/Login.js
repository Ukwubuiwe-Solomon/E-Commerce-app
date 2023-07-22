import React from 'react'
import {useNavigate} from 'react-router-dom'
import { google } from '../assets'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from '../redux/solomonSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth()
    const Provider = new GoogleAuthProvider()
    const handleGoogleLogin = (e)=>{
        e.preventDefault()
        signInWithPopup(auth, Provider).then((result)=>{
            const user = result.user;
            dispatch(addUser({
                id:user.id,
                name:user.displayName,
                email:user.email,
                Image:user.photoURL
            }))
            setTimeout(()=>{
                navigate("/")
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            toast.success("Log out successfully!")
            dispatch(removeUser())

        }).catch((error)=>{
            toast.error("Something went wrong")
        })
    }
  return (
    <div className='w-full flex flex-col justify-center items-center gap-10 py-20'>
        <div className='w-full flex justify-center items-center gap-10'>
           <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md
           flex items-center justify-center gap-2 cursor-pointer duration-300'>
           <img className='w-8' src={google}
            alt='googleImg' />
            <span className='text-sm text-gray-900'>Sign in with Google</span>
           </div>
           <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md
           hover:bg-gray-800 duration-300'>Sign Out</button>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  )
}

export default Login