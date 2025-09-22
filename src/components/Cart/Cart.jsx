//Cart
import React from "react";
import { HiX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseQty } from "../../Features/cartSlice";

function Cart({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex text-black justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">🛒 Your Cart</h2>
        <button onClick={onClose}>
          <HiX className="text-2xl hover:text-red-500" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 text-black space-y-3 overflow-y-auto max-h-[70%]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              {/* Image */}
              <img
                src={item.image || "https://via.placeholder.com/50"}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />

              {/* Name & Price */}
              <div className="flex-1 px-3">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price} × {item.qty}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-gray-100">
        <div className="flex text-black justify-between font-bold mb-3">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>
        <button
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
