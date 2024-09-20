import React from 'react'
import about from  "../assets/about.jpg"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <div className="hero min-h-screen">
            <img src={about} alt="" />
            <div className="hero-overlay bg-opacity-50">
        </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Book<span className="text-pink-700">Heaven</span></h1>
                        <p className="mb-5 font-semibold">
                        Whether you're searching for your next literary escape, a cozy spot to browse, or a community event to attend, BookHeaven is here to make every visit a memorable experience. Join us in celebrating the magic of books and the joy of reading!
                        </p>
                        <Link to={"/register"} className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default About
