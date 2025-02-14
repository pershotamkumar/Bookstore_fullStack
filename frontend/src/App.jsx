import './App.css'
//pages import
import Home from './components/home/home'
import Courses from './components/courses/courses'
import Signup from './components/signup'
import { Navigate, Routes, Route } from 'react-router-dom'
import Contact from './contact'
import { DataProvider } from './context/Createcontext'
import { Toaster } from 'react-hot-toast';
import { useContext,useState,useEffect } from "react";
import { DataContext } from "./context/Createcontext";
import { HashLoader } from "react-spinners";

function App() {
  const { AuthUser, SetAuthUser } = useContext(DataContext)
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <HashLoader color="#4A90E2" size={60} />
      </div>
    );
  }
  return (
    <>
      {/* <Home/>
    <Course/> */}
      <div className='dark:bg-slate-900 dark:text-white'>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/course" element={AuthUser ? <Courses/>:<Navigate to="/"/>}/>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Toaster />

      </div>
    </>
  )
}

export default App
