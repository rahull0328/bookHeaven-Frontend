import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Register from './components/Register';
import ContactUs from './contact/ContactUs';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import AboutUs from './about/AboutUs';

function App() {

    const [authUser, setAuthUser] = useAuth();
    
    return (
      <>
      <div className="dark:bg-black dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
    
  )
}

export default App