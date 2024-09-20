import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const messageInfo = {
        username: data.username,
        email: data.email,
        message: data.message
    }
    await axios.post("http://localhost:2803/contact/contact", messageInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data){
                toast.success("Message Sent Successfully !"); 
                window.location.reload();           
            }
        }).catch((err) => {
            if(err.response){
                toast.error("Error Sending Message !")
            }
        })
  }

  return (
    <>
        <div className="flex h-screen items-center justify-center pl-20 pt-4">
            <div className="w-[600px]">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-center text-3xl text-pink-700">BookHeaven !</h3>
                        <br />
                        <h6 className="font-bold text-2xl text-center dark:text-white">Contact Us !</h6>
                        {/* Username */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <label className="input input-secondary flex items-center gap-2">
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
                                placeholder="Enter Your Name"
                                {...register("username", { required: true })}
                                />    
                            </label>    
                            {errors.username && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                                <label className="input input-secondary flex items-center gap-2">
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
                        {/* Message */}
                        <div className="mt-4 space-y-2">
                            <span>Message</span>
                                <textarea
                                  placeholder="Enter Your Message"
                                  rows={5}
                                  cols={57}
                                  className="textarea textarea-secondary"  
                                  {...register("message", { required: true })}
                                />    
                                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        
                        {/* Login Button */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-700 text-white rounded-md px-3 py-1 text-xl">Send</button>
                        </div>
                    </form>    
                </div>    
            </div>
        </div>
    </>
  )
}

export default Contact