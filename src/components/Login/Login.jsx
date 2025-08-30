import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        alert("Login successful!");
        navigate("/home"); // Redirect after login
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-lg shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">
               
                <Link to="/forgotpassword" className="text-blue-500 hover:text-blue-700 font-medium">
                  Forgot Password
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="flex-1 bg-black flex justify-center items-center">
          <h1 className="text-3xl font-bold text-white">Login</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
