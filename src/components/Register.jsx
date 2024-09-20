import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

function Register() {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:2803/user/register", userInfo)
        .then((res) => {
            if(res.data){
                toast.success("Registered Successfully !");
                navigate(from, {replace: true});
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err) => {
            if(err.response){
                toast.error("Error: " + err.response.data.message)
            }
        })
      }
  return (
    <>
        <div className="flex h-screen items-center justify-center">
            <div id="my_modal_3" className="w-[600px]">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </Link>
                        <h3 className="font-bold text-center text-3xl text-pink-700">BookHeaven !</h3>
                        <br />
                        <h6 className="font-bold text-2xl text-center dark:text-white">Register</h6>
                        {/* Username */}
                        <div className="mt-4 space-y-2">
                            <span>Username</span>
                            <label className="input input-bordered input-accent flex items-center gap-2">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>  
                                <input 
                                type="text" 
                                className="w-80 px-3 bg-transparent py-1 outline-none" 
                                placeholder="Enter Your Username"
                                {...register("name", { required: true })}
                                />    
                            </label>    
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                                <label className="input input-bordered input-accent flex items-center gap-2">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input 
                                    type="email" 
                                    className="w-80 px-3 bg-transparent py-1 outline-none" 
                                    placeholder="Enter Your Email" 
                                    {...register("email", { required: true })}
                                    />    
                                </label>
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                                <label className="input input-bordered input-accent flex items-center gap-2">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                                    </svg>
                                    <input 
                                    type="password" 
                                    className="w-80 px-3 bg-transparent py-1 outline-none" 
                                    placeholder="Enter Your Password" 
                                    {...register("password", { required: true })}
                                    />    
                                </label>    
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        
                        {/* Login Button */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-700 text-white rounded-md px-3 py-1 text-xl">Register</button>
                            <p className="text-xl">Have An Account ? <Link to={"/"} className="cursor-pointer text-pink-700 text-xl" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</Link>{" "}</p>
                        </div>
                    </form>    
                </div>    
            </div>
        </div>
    </>
  )
}

export default Register