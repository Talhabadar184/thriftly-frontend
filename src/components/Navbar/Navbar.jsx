import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'About', link: '/#' },
  { id: 3, name: 'Products', link: '/#' },
  { id: 4, name: 'Contact us', link: '/#' },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* Upper Navbar */}
      <div className="py-4 bg-black">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="#" className="flex gap-2 text-2xl text-white font-bold cms:text-3xl">
              Shopfy
            </a>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {/* Inner Bar */}
          <div
            data-aos="zoom-in"
            className={`absolute top-[72px] left-0 w-full bg-black sm:relative sm:top-0 sm:left-0 sm:w-auto sm:flex ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="flex flex-col sm:flex-row sm:items-center gap-4 text-white px-4 py-4 sm:py-0 sm:px-0">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 duration-200 hover:text-xl"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block group">
              {/* Input Field */}
              <input
                type="text"
                className="w-[40px] transition-all duration-300 ease-in-out group-hover:w-[200px] rounded-full px-2 py-1 focus:w-[200px] focus:border-blue/300"
              />
              {/* Search Icon */}
              <IoMdSearch className="absolute text-black -translate-y-1/2 top-1/2 right-3 transition-all duration-300 ease-in-out group-hover:text-black" />
            </div>
            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="flex items-center gap-3 px-4 py-1"
            >
              <span className="hidden color transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
