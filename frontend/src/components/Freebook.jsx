import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from './cards';
import list from '../../public/list.json'

const freebook = () => {
  const filterdata = list.filter((data) =>  data.category === "free" )
  console.log(filterdata)
  var settings = {
    dots: true,
    infinite: false,
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
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-8 mt-5 z-50'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi quis voluptate, tenetur odit unde, rem modi reprehenderit necessitatibus consectetur inventore minus eaque possimus quos facilis! Quae est expedita consectetur.</p>
        </div>
      
      <div className=''>
        <Slider {...settings} >
          {filterdata.map((item)=>( <Cards item={item} key={item.id}/>))}
       
        </Slider>
      </div>
      </div>
    </>
  )
}

export default freebook
