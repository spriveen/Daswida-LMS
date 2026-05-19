// src/pages/auth/Register.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    nic: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SIMPLE VALIDATION
    if (
      formData.username &&
      formData.email &&
      formData.password
    ) {

      alert("Registration Successful ✅");

      navigate("/login");

    } else {

      alert("Please fill all fields ❌");

    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-[500px] bg-[#111111] border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">
          DASWIDA LMS Register
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* ROLE */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none"
          >

            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>

          </select>


          {/* USERNAME */}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-400"
          />


          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-400"
          />


          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-400"
          />


          {/* STUDENT NIC */}
          {role === "student" && (

            <input
              type="text"
              name="nic"
              placeholder="NIC Number"
              value={formData.nic}
              onChange={handleChange}
              className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-400"
            />

          )}


          {/* TEACHER SUBJECT */}
          {role === "teacher" && (

            <input
              type="text"
              name="subject"
              placeholder="Teaching Subject"
              value={formData.subject}
              onChange={handleChange}
              className="h-[52px] px-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-400"
            />

          )}


          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="h-[52px] bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition duration-300"
          >
            Register
          </button>

        </form>


        {/* LOGIN LINK */}
        <p className="text-center text-gray-400 mt-6">

          Already have an account?{" "}

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

export default Register;