// src/components/navbar/Navbar.jsx

import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="w-full h-[85px] bg-black border-b border-[#1f1f1f] flex items-center justify-between px-10">

      {/* LEFT SIDE LOGO */}
      <div className="flex items-center">

        <h1 className="text-3xl font-extrabold tracking-wide">

          <span className="text-yellow-400">DASWIDA</span>

          <span className="text-white ml-2">LMS</span>

        </h1>

      </div>

      {/* CENTER MENU */}
      <div className="flex items-center gap-10 h-full">

        {/* STUDENTS */}
        <button className="text-gray-400 hover:text-white hover:border-yellow-400 border-b-2 border-transparent h-full flex items-center transition duration-300">

          Students

        </button>

        {/* TEACHERS */}
        <button className="text-gray-400 hover:text-white hover:border-yellow-400 border-b-2 border-transparent h-full flex items-center transition duration-300">

          Teachers

        </button>

        {/* COURSES */}
        <button className="text-gray-400 hover:text-white hover:border-yellow-400 border-b-2 border-transparent h-full flex items-center transition duration-300">

          Courses

        </button>

        {/* ADMIN */}
        <button className="text-gray-400 hover:text-white hover:border-yellow-400 border-b-2 border-transparent h-full flex items-center transition duration-300">

          Admin

        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* SEARCH BAR */}
        <div className="w-[240px] h-[48px] bg-[#111111] border border-[#262626] rounded-xl flex items-center px-4">

          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search courses..."
            className="bg-transparent outline-none text-white placeholder:text-gray-500 ml-3 w-full"
          />

        </div>

        {/* ENROLL BUTTON */}
        <button className="h-[48px] px-6 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 transition duration-300">

          Enroll Now

        </button>

        {/* LOGIN BUTTON */}
        <Link to="/login">

          <button className="h-[48px] px-6 rounded-xl border border-gray-700 text-white hover:border-yellow-400 hover:text-yellow-400 transition duration-300">

            Login

          </button>

        </Link>

      </div>

    </nav>

  );

}

export default Navbar;