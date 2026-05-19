// src/pages/student/Dashboard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white p-8">

      {/* TOP TITLE */}
      <div className="mb-10">

        <h1 className="text-4xl font-extrabold text-yellow-400">
          Student Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back to DASWIDA LMS 🚀
        </p>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* COURSES */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-gray-400 text-lg">
            My Courses
          </h2>

          <p className="text-4xl font-bold text-yellow-400 mt-3">
            08
          </p>

          <button
            onClick={() => navigate("/student/courses")}
            className="mt-5 px-4 py-2 bg-yellow-400 text-black rounded-lg font-bold"
          >
            View Courses
          </button>

        </div>

        {/* LIVE CLASSES */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-gray-400 text-lg">
            Live Classes
          </h2>

          <p className="text-4xl font-bold text-green-400 mt-3">
            03
          </p>

          <button
            onClick={() => navigate("/student/live-classes")}
            className="mt-5 px-4 py-2 bg-green-400 text-black rounded-lg font-bold"
          >
            Join Classes
          </button>

        </div>

        {/* ASSIGNMENTS */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-gray-400 text-lg">
            Assignments
          </h2>

          <p className="text-4xl font-bold text-red-400 mt-3">
            05
          </p>

          <button
            onClick={() => navigate("/student/assignments")}
            className="mt-5 px-4 py-2 bg-red-400 text-black rounded-lg font-bold"
          >
            View Assignments
          </button>

        </div>

        {/* PROFILE */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-gray-400 text-lg">
            My Profile
          </h2>

          <p className="text-4xl font-bold text-blue-400 mt-3">
            100%
          </p>

          <button
            onClick={() => navigate("/student/profile")}
            className="mt-5 px-4 py-2 bg-blue-400 text-black rounded-lg font-bold"
          >
            View Profile
          </button>

        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="mt-12 bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="p-4 rounded-xl bg-black border border-gray-800">
            ✅ Assignment submitted successfully
          </div>

          <div className="p-4 rounded-xl bg-black border border-gray-800">
            🎥 Live class starts at 7.00 PM
          </div>

          <div className="p-4 rounded-xl bg-black border border-gray-800">
            📚 New course added to your dashboard
          </div>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;