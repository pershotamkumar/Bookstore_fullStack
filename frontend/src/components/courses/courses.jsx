import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Course from '../course'
const courses = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'><Course/></div>
      <Footer/>

    </>
  )
}

export default courses
