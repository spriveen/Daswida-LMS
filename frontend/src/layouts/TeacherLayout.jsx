// src/layouts/TeacherLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function TeacherLayout() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* SIDEBAR + CONTENT */}
      <div className="flex">
        <Sidebar />
        {/* PAGE CONTENT */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default TeacherLayout;