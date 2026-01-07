import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Image1 from "../../assets/Hero/1.png";
// import Image2 from "../../assets/Hero/2.png";
import Image2 from "../../assets/Hero/2.png";

import Image3 from "../../assets/hero/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

const ImageList = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
];

const Hero = () => {
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

  // ✅ State for cart drawer
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>
      {/* Navbar gets the openCart function */}
      <Navbar handleOrderPopup={openCart} />

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={closeCart} />

      <div className="relative overflow-hidden min-h-[600px] bg-black text-white flex items-center justify-center">
        {/* Hero Section */}
        <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side: Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Thriftly
            </h1>

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="mt-6 italic text-lg sm:text-xl leading-relaxed"
            >
              Thriftly is Pakistan’s first dedicated online thrift store, designed to make sustainable fashion accessible and affordable for everyone. It provides a platform where individuals can buy and sell pre-loved clothing, giving garments a second life and reducing waste in the fashion industry. Thriftly promotes conscious consumption by encouraging people to choose quality, affordability, and environmental responsibility over fast fashion trends. With a wide range of stylish, gently-used items available at reasonable prices, Thriftly aims to create a community that values both sustainability and style—making it easier than ever to look good while doing good for the planet.
            </motion.div>
          </div>

          {/* Right Side: Image Slider */}
          <div className="flex-1 w-[50%] max-w-lg">
            <Slider {...sliderSettings}>
              {ImageList.map((item) => (
                <div key={item.id} className="flex justify-center">
                  <img
                    src={item.img}
                    alt="Slide"
                    className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex bg-black justify-center">
        <Link to="/products">
          <motion.button
            className="group relative mb-5 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center gap-2 sm:gap-3">
              <span>Explore the Thrift World</span>
              <FiArrowRight className="group-hover:translate-y-1 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </motion.button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
