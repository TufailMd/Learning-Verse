import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Courses from './components/Pages/Courses.jsx'
import Semester from './components/Pages/Semester.jsx'
import Sem from './components/Pages/Sem.jsx'
import Sub from './components/Pages/Sub.jsx'
import About from './components/Pages/About.jsx'
import Contact from './components/Pages/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/choose-course' element={<Courses />} />
      <Route path='/:courseName/choose-semester' element={<Semester />} />
      <Route path='/:courseName/:sem' element={<Sem />} />
      <Route path='/:courseName/:sem/:subName' element={<Sub />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\main.jsx