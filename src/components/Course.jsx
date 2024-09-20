import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import {Link} from 'react-router-dom'

function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async() => {
            try {
              const res = await axios.get("http://localhost:2803/book");   
              console.log(res.data)
              setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, [])
  return (
   <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-black">
            <div className="mt-16 items-center justify-center text-center">
                <h1 className="text-2xl font-semibold md:text-4xl">Delighted to have you Here &nbsp;&nbsp;<span className="text-pink-700">:)</span></h1>
                <p className="mt-12">As you enter our virtual store, you're greeted with a panoramic view of our entire collection. Scroll leisurely through rows of meticulously categorized books—fiction and non-fiction, bestsellers and hidden gems, classics and contemporary works—all displayed with inviting cover art and concise summaries.</p>
                <Link to="/">
                    <button className="bg-pink-700 text-white px-4 py-2 rounded-md mt-6 hover:outline">Back</button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 pb-12">
                {
                    book.map((item) => (
                        <Cards key={item.id} item={item} /> 
                    ))
                }       
            </div>
        </div>
    </>
  )
}

export default Course