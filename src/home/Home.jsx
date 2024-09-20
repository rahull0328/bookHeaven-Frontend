import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import BookSlider from '../components/BookSlider'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <BookSlider />
        <Footer />
    </>
  )
}

export default Home