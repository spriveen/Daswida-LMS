// src/pages/auth/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SIMPLE LOGIN CHECK
    if (
      formData.username &&
      formData.email &&
      formData.password
    ) {

      localStorage.setItem("isLoggedIn", "true");

      alert(`${role} Login Successful ✅`);

      // ROLE BASED NAVIGATION
      if (role === "student") {

        navigate("/student/dashboard");

      } else {

        navigate("/teacher/dashboard");

      }

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

        {/* ROLE BUTTONS */}
        <div className="flex gap-3 mb-6 justify-center">

          <button
            onClick={() => setRole("student")}
            className={`px-5 py-2 rounded-xl font-bold transition ${
              role === "student"
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("teacher")}
            className={`px-5 py-2 rounded-xl font-bold transition ${
              role === "teacher"
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            Teacher
          </button>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* USERNAME */}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-400 outline-none"
          />

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="h-[52px] bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Forget Password */}
        
<p className="text-gray-400 text-sm text-center mt-4">

  Forgot your password?{" "}

  <span
    onClick={() => navigate("/forgot-password")}
    className="text-yellow-400 cursor-pointer"
  >
    Reset Password
  </span>

</p>

        {/* REGISTER */}
        <p className="text-gray-400 text-sm text-center mt-5">

          Don't have an account?{" "}

          <span
            onClick={() => navigate("/register")}
            className="text-yellow-400 cursor-pointer"
          >
            Register
          </span>

        </p>

      </div>

    </div>
  );
};

export default Login;