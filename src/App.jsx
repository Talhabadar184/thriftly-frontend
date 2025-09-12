import Navbar from './components/Navbar/Navbar'
import { useEffect } from 'react';
import './index.css';
import AOS from 'aos';
import React from "react";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Home from "./Landingpage/Home"
import Forgotpassword from "./components/Login/Forgotpassword"
import Verifycode from "./components/Login/Verifycode"
import Resetpassword from "./components/Login/Resetpassword"
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

function App() {

  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,  
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
   <BrowserRouter>
        <RouterRoutes>
          {/* Redirect the root path to the Landing Page initially */}
          <Route path="/" element={<Navigate to="/Hero" replace />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Verifycode" element={<Verifycode />} />
          <Route path="/Resetpassword" element={<Resetpassword />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </RouterRoutes>
      </BrowserRouter>
  )
}

export default App


  