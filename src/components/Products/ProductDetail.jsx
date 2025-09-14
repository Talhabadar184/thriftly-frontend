import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice"; 
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // for + and - buttons
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-white">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Product not found.</div>;
  }

  // Increase quantity (max 10)
  const increaseQty = () =>
    setQuantity((prev) => (prev < 10 ? prev + 1 : 10));

  // Decrease quantity (min 1)
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Handle add to cart with quantity
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.picture || "https://via.placeholder.com/400"}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-4">{product.description}</p>

            {/* Updated Price (depends on quantity) */}
            <p className="text-2xl font-semibold mb-6">
              ${product.price * quantity}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={decreaseQty}
                className="bg-gray-700 px-4 py-2 rounded-lg text-xl font-bold hover:bg-gray-600 transition"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={increaseQty}
                className="bg-gray-700 px-4 py-2 rounded-lg text-xl font-bold hover:bg-gray-600 transition"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
