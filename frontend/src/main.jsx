import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {BrowserRouter} from 'react-router-dom'
import {DataProvider} from './context/Createcontext'

createRoot(document.getElementById('root')).render(
  <DataProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </DataProvider>
)
