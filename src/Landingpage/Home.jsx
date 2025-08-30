import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";


function Home() {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}

export default Home;