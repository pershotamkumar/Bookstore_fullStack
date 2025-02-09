import './App.css'
//pages import
import Home from './components/home/home'
import Courses from './components/courses/courses'
import Signup from './components/signup'
import {Routes ,Route} from 'react-router-dom'
import Contact from './contact'
function App() {

  return (
    <>
    {/* <Home/>
    <Course/> */}
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </div>
    </>
  )
}

export default App
