// Navbar.jsx
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo1 from "../Navbar/logo1.png";

const Menu = [
  { id: 1, name: "Home/About", link: "/#" },
  { id: 2, name: "Wardrobe", link: "/products" },
  { id: 3, name: "Get in touch?", link: "/Contact" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 duration-200 bg-white shadow-md dark:bg-gray-500 dark:text-white">
      {/* Upper Navbar */}
      <div className="py-4 bg-black">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div>
            <img
              className="h-10 rounded-md bg-green-500"
              src={logo1}
              alt="Thriftly Logo"
            />
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

          {/* Menu Links */}
          <div
            className={`absolute top-[72px] left-0 w-full bg-black sm:relative sm:top-0 sm:left-0 sm:w-auto sm:flex ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col sm:flex-row sm:items-center gap-4 text-white px-4 py-4 sm:py-0 sm:px-0">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 duration-200 hover:text-xl hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handleOrderPopup}
              className="flex items-center gap-3 px-4 py-1"
            >
              <FaCartShopping className="text-xl text-white hover:scale-125 cursor-pointer drop-shadow-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
