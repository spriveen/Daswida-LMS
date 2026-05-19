import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

const StudentLayout = () => {
  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="p-6">
        <Outlet />
      </div>

    </div>

  );
};

export default StudentLayout;