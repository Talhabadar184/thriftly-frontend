// Cart.jsx
import React from "react";
import { HiX } from "react-icons/hi";

function Cart({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">🛒 Your Cart</h2>
        <button onClick={onClose}>
          <HiX className="text-2xl hover:text-red-500" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-3">
        {/* Example product */}
        <div className="flex justify-between items-center border-b pb-2">
          <p>Product 1</p>
          <span>$20</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <p>Product 2</p>
          <span>$35</span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-gray-100">
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
