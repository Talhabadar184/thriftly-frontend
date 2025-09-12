import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Image1 from "../../assets/Hero/1.png";
import Image2 from "../../assets/hero/2.png";
import Image3 from "../../assets/hero/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // ✅ Import framer-motion
// import Banner from '../../assets/Products/blackpattern.png';
import { FiArrowRight, FiCode, FiZap } from "react-icons/fi";
import { FaBrain, FaCogs } from "react-icons/fa";
import Footer from "../Footer/Footer";

const ImageList = [
  {
    id: 1,
    img: Image1,
    // title: "Upto 70% off on all Gadgets",
  },
  {
    id: 2,
    img: Image2,
    // title: "30% off on all Women's Wear",
  },
  {
    id: 3,
    img: Image3,
    // title: "70% off on all Products Sale",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };



  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden min-h-[600px] bg-black text-white flex items-center justify-center">
        {/* Hero Section */}
        <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Side: Text with Scroll-Up Animation */}
          <div className="flex-1 text-center lg:text-left ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Thriftly
            </h1>

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="mt-6 w-[100%] italic text-lg sm:text-xl leading-relaxed"
            >
              Thriftly is Pakistan’s first dedicated online thrift store, designed to make
              sustainable fashion accessible and affordable. It offers a wide range of
              pre-loved clothing, accessories, and lifestyle items that are carefully curated
              to ensure quality and style. With a mission to promote eco-friendly shopping
              and reduce fashion waste, Thriftly empowers people to shop smartly while
              contributing to a greener future. The platform provides a seamless online
              shopping experience, bringing thrift finds right to your doorstep. Thriftly is
              not just a store, but a movement toward conscious consumerism in Pakistan.
            </motion.div>

            {/* <button
              onClick={handleOrderPopup}
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform duration-200"
            >
              Shop Now
            </button> */}

          </div>

          {/* Right Side: Image Slider */}
          <div className="flex-1 w-[1%] max-w-lg">
            <Slider {...sliderSettings}>
              {ImageList.map((item) => (
                <div key={item.id} className="flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>

          

        </div>
        
      </div>
      <div className="flex bg-black justify-center ">
              {/* CTA Button */}
              <Link to="/products">
        <motion.button
          // onClick={scrollToAbout}
          
          className="group relative mb-5 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Button Content */}
          <div className="relative flex items-center gap-2 sm:gap-3">
            <span>Explore the Thrift World</span>
            <FiArrowRight className="group-hover:translate-y-1 transition-transform duration-300" />
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.button>
        </Link>
          </div>

          <Footer/>
    </div>
  );
};

export default Hero;
