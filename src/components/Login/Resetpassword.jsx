import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Resetpassword() {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error: apiError } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { password, confirmPassword } = formData;

        if (!password || !confirmPassword) {
            setError("Please fill in both fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const email = JSON.parse(localStorage.getItem("forgotpass_email"));
        const code = JSON.parse(localStorage.getItem("reset_code"));

        try {
            const resultAction = await dispatch(resetPassword({ email, code, password }));
            if (resetPassword.fulfilled.match(resultAction)) {
                localStorage.removeItem("forgotpass_email");
                localStorage.removeItem("reset_code");
                navigate("/Signin"); // or Home if preferred
            }
        } catch {
            setError("Something went wrong. Try again.");
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
                                Reset Password
                            </label>
                            <input
                                label="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                            {(error || apiError) && (
                                <p className="text-red-600 text-sm">{error || apiError}</p>
                            )}

                            <input
                                label="Re-Type Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your Password"
                                className="w-full border mt-5 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
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
                           Reset
                        </button>

                    </form>
                </div>
                <div className="flex-1 bg-black flex justify-center items-center">
                    <h1 className="text-3xl font-bold text-white">Reset Password</h1>
                </div>
            </div>
        </div>
    );
}

export default Resetpassword;
