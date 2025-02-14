import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cards from './cards'
import { set } from 'mongoose'
//context 
import { useContext } from "react";
import { DataContext } from "../context/Createcontext";

const Course = () => {

  //context api use 
  const {data} = useContext(DataContext)

  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-8  '> 
       <div className='mt-16  text-center'>
        
        <h1 className='text-xl md:text-2xl  '>We're Delighted To Have You <span>&nbsp;</span> <span className='text-pink-500'>Here :)</span> </h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quaerat libero quia inventore ab neque asperiores culpa molestias est. Dolorum saepe quia illo neque molestias dolor, perspiciatis explicabo nobis necessitatibus.</p>
    
        <Link to={"/"}>
        <button className="mt-3 bg-pink-400 h-8 rounded px-2 hover:scale-105 hover:bg-gray-400 duration-300 text-white">back</button>
        </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
          {
          data.map((item)=>( <Cards item={item} key={item.id}/>))
          }
        </div>
      </div>
    </>
  )
}

export default Course
