import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Verifycode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error: apiError } = useSelector((state) => state.auth);
  const email = JSON.parse(localStorage.getItem("forgotpass_email"));

 

   const handleChange = (e) => {
    setCode(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code) {
      setError("Verification code is required.");
      return;
    }

    if (!/^\d{6}$/.test(code)) {
      setError("Please enter a valid 6-digit code.");
      return;
    }

    try {
      const resultAction = await dispatch(verifyResetCode({ email, code }));
      if (verifyResetCode.fulfilled.match(resultAction)) {
        localStorage.setItem("reset_code", JSON.stringify(code));
        navigate("/");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-lg shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Verify code</h2>
          <form onSubmit={handleSubmit} className="space-y-4" >
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
               label="Code"
              type="text"
              name="code"
              value={code}
              onChange={handleChange}
              placeholder="Enter your Code"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              {(error || apiError) && (
              <p className="text-red-600 text-sm">{error || apiError}</p>
            )}
            </div>
            
            <button
               type="submit"
              disabled={loading}
              className="w-full bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Verify code
            </button>
        
          </form>
        </div>
        <div className="flex-1 bg-black flex justify-center items-center">
          <h1 className="text-3xl font-bold text-white">Verify code</h1>
        </div>
      </div>
    </div>
  );
}

export default Verifycode;
