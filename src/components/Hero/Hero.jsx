import React from "react";
import Navbar from "../Navbar/Navbar";
import Image1 from "../../assets/hero/image.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick"; // Importing the react-slick slider
import "slick-carousel/slick/slick.css"; // Import slider styles
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 70% off on all Gadgets",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate voluptatem.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate voluptatem.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate voluptatem.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1, // Slide one item at a time
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background Patterns */}

        <div className="h-[600px] w-[1000px] bg-black absolute -top-16 -right-[15.59%] rounded-[25%] rotate-0"></div>
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/4 right-0 rounded-3xl rotate-45"></div>

        {/* Hero Section */}
        <div className="container relative w-full">
          <Slider {...sliderSettings}>
            {ImageList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center sm:text-left sm:flex-col justify-center"
              >
                {/* Text Content (Above) */}
                <div className="flex">
                  <div className="p-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                      {item.title}
                    </h1>
                    <p className="mt-4 text-base sm:text-lg">
                      {item.description}
                    </p>
                    <button
                      onClick={handleOrderPopup}
                      className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-200"
                    >
                      Order Now
                    </button>
                  </div>

                  {/* Image Content */}
                  <div className="flex justify-center mt-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
