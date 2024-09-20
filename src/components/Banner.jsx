import React from 'react'
import banner from '../assets/Banner.jpg';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function Banner() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = async(data) => {
        const newsLetterInfo = {
            email : data.email
        }
        await axios.post("http://localhost:2803/subscribe/subscribe", newsLetterInfo)
        .then((res) => {
            if(res.data){
                toast.success("Subscribed To News Letter !");
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
        }).catch((err) => {
            if(err.response){
                console.log(err)
                toast.error("Error Subscribing or Email Already Exists !")
            }
        })
    }  
  return (
    <>
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-5 md:mt:12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-5xl font-bold">Welcome to BookHeaven, where every page holds a <span className="text-pink-700">new adventure !!!</span></h1>
                        <p className="text-xl">
                        Explore our curated collection of literary treasures and discover your next great read. Whether you're seeking classic literature, gripping mysteries, or inspiring non-fiction, our shelves are filled with stories waiting to be explored. Start your journey with us today!
                        </p>
                        {/* News Letter */}
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 dark:bg-black opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                    <input type="text" className="grow" placeholder="Subscribe to News Letter" {...register("email", { required: true })} />
                            </label>
                                    {errors.email && <span className="text-sm text-red-500">Email Required</span>}
                    </div>
                        <button className="btn rounded-md hover:bg-pink-700 dark:border mt-6 bg-pink-700 dark:bg-pink-700 text-white ">Subscribe</button>
                </div>
                <div className="mt-20 order-1 w-full md:ml-6 md:w-1/2">
                    <img src={banner} className="w-92 h-92 rounded" alt="" />
                </div>
            </div>
        </form>
    </>
  )
}

export default Banner