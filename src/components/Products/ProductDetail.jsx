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
            <p className="text-2xl font-semibold mb-6">${product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product))}
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
