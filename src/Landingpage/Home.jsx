import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer"; 

function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Footer/>
    </div>
  );
}

export default Home;