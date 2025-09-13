import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products"); // backend endpoint
        const data = await res.json();
        console.log("API Response:", data);
        setProducts(Array.isArray(data) ? data : []);

      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-xl text-gray-300">
        Loading products...
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="mb-20 text-white bg-black">
        <div className="container mx-auto py-10 backdrop-blur-sm">
          {/* Section Heading */}
          <div className="flex justify-center mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Wardrobe
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                {/* Product Image */}
                <img
                  src={product.picture || "https://via.placeholder.com/400"}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                {/* Product Details */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description || "No description available."}
                  </p>

                  {/* Button */}
                  <Link to={`/products/${product.id}`}>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-black font-bold py-2 px-4 rounded-lg hover:opacity-90 transition">
                    View More
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
