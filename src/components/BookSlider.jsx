import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import Cards from './Cards';

function BookSlider() {

  const [book, setBook] = useState([])
  useEffect(() => {
      const getBook = async() => {
          try {
            const res = await axios.get("http://localhost:2803/book");   
            setBook(res.data.filter((data) => data.category === "Free"))
          } catch (error) {
              console.log(error)
          }
      }
      getBook();
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h1 className="text-center text-pink-700 font-semibold pb-3 text-3xl md:mt-20 mt-8">Top Freebies</h1>
                <p className="text-center pb-6 text-xl">
                    Get in touch with the latest freebies refreshed every week !
                </p>
            </div>
            <div className="pb-8">
                <Slider {...settings}>
                    {book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default BookSlider;