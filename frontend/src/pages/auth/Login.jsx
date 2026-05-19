// src/pages/auth/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// IMPORT INPUT FIELD
import InputField from "../../components/forms/InputField";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE LOGIN
  const handleSubmit = (e) => {

    e.preventDefault();

    // VALIDATION
    if (
      formData.email &&
      formData.password
    ) {

      // SAVE LOGIN STATUS
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful ✅");

      // REDIRECT
      navigate("/student/dashboard");

    } else {

      alert("Please fill all fields ❌");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-[420px] p-8 rounded-3xl border border-gray-800 bg-[#111] text-white shadow-2xl">

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center">
          DASWIDA LMS Login
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* EMAIL */}
          <InputField
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <InputField
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="h-[52px] bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* FORGOT PASSWORD */}
        <p className="text-gray-400 text-sm text-center mt-4">

          Forgot your password?{" "}

          <span
            onClick={() => navigate("/forgot-password")}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Reset Password
          </span>

        </p>

        {/* REGISTER */}
        <p className="text-gray-400 text-sm text-center mt-5">

          Don't have an account?{" "}

          <span
            onClick={() => navigate("/register")}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Register
          </span>

        </p>

      </div>

    </div>

  );
};

export default Login;