import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    subject: "",
    studentId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`${role} Login Successful ✅`);

    if (onClose) onClose();

    if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/teacher/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-[420px] p-8 rounded-2xl border border-gray-800 bg-[#111] text-white shadow-lg">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          DASWIDA LMS Login
        </h2>

        {/* ROLE SELECT */}
        <div className="flex gap-3 mb-6 justify-center">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-lg font-bold ${
              role === "student"
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("teacher")}
            className={`px-4 py-2 rounded-lg font-bold ${
              role === "teacher"
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            Teacher
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
          />

          {/* STUDENT FIELDS */}
          {role === "student" && (
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
              className="p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
            />
          )}

          {/* TEACHER FIELDS */}
          {role === "teacher" && (
            <>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />
            </>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        {/* REGISTER */}
        <p className="text-gray-400 text-sm text-center mt-4">
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