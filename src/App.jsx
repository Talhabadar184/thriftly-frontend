import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "./index.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Forgotpassword from "./components/Login/Forgotpassword";
import Verifycode from "./components/Login/Verifycode";
import Resetpassword from "./components/Login/Resetpassword";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./Landingpage/Home";

function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Root route → Home page */}
        <Route path="/" element={<Home />} />

        {/* Authentication routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Verifycode" element={<Verifycode />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />

        {/* Pages */}
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Catch-all: redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
