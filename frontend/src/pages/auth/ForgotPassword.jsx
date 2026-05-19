// src/pages/auth/ForgotPassword.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {

      alert("Password Reset Link Sent ✅");

      navigate("/login");

    } else {

      alert("Please enter your email ❌");

    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-[420px] bg-[#111111] border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-4">
          Forgot Password
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Enter your email to reset password
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="h-[52px] bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition duration-300"
          >
            Send Reset Link
          </button>

        </form>

        {/* BACK LOGIN */}
        <p className="text-center text-gray-400 mt-6">

          Back to{" "}

          <span
            onClick={() => navigate("/login")}
            className="text-yellow-400 cursor-pointer"
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
};

export default ForgotPassword;