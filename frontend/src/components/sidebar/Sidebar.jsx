// src/components/sidebar/Sidebar.jsx

import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  Heart,
  History,
  Laptop,
  Calculator,
  FlaskConical,
  Languages,
  Palette,
  FileText,
  Award,
  TrendingUp,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-[260px] h-screen bg-black border-r border-[#1f1f1f] flex flex-col">

      {/* LOGO SECTION */}
      <div className="h-[85px] border-b border-[#1f1f1f] flex items-center px-6">

        {/* LOGO ICON */}
        <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black font-extrabold text-2xl shadow-lg">

          D

        </div>

        {/* LOGO TEXT */}
        <div className="ml-4">

          <h1 className="text-yellow-400 text-2xl font-bold tracking-wide">
            DASWIDA
          </h1>

          <p className="text-gray-500 text-sm">
            LMS PLATFORM
          </p>

        </div>

      </div>

      {/* LIVE SESSION */}
      <div className="h-[55px] border-b border-[#1f1f1f] flex items-center px-6">

        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></div>

        <p className="text-gray-300 text-sm">
          218 Live Sessions
        </p>

      </div>

      {/* MENU SECTION */}
      <div className="flex-1 overflow-y-auto px-4 py-6">

        {/* MAIN TITLE */}
        <p className="text-gray-600 text-xs uppercase mb-4 tracking-widest">
          Main
        </p>

        {/* MAIN MENUS */}
        <div className="space-y-2">

          {/* DASHBOARD */}
          <button className="w-full h-[52px] bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-center justify-between px-4 text-yellow-400 hover:scale-[1.02] transition duration-300">

            <div className="flex items-center gap-3">

              <LayoutDashboard size={20} />

              <span className="font-medium">
                Dashboard
              </span>

            </div>

            <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">
              5
            </span>

          </button>

          {/* MY COURSES */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <BookOpen size={20} />

              <span>My Courses</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              12
            </span>

          </button>

          {/* LIVE CLASSES */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center gap-3 px-4 text-gray-400 hover:text-white transition duration-300">

            <PlayCircle size={20} />

            <span>Live Classes</span>

          </button>

          {/* SAVED */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center gap-3 px-4 text-gray-400 hover:text-white transition duration-300">

            <Heart size={20} />

            <span>Saved</span>

          </button>

          {/* HISTORY */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center gap-3 px-4 text-gray-400 hover:text-white transition duration-300">

            <History size={20} />

            <span>History</span>

          </button>

        </div>

        {/* CATEGORY TITLE */}
        <p className="text-gray-600 text-xs uppercase mt-10 mb-4 tracking-widest">
          Categories
        </p>

        {/* CATEGORY MENUS */}
        <div className="space-y-2">

          {/* IT */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <Laptop size={20} />

              <span>IT & Programming</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              47
            </span>

          </button>

          {/* MATH */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <Calculator size={20} />

              <span>Mathematics</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              23
            </span>

          </button>

          {/* SCIENCE */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <FlaskConical size={20} />

              <span>Science</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              18
            </span>

          </button>

          {/* LANGUAGES */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <Languages size={20} />

              <span>Languages</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              31
            </span>

          </button>

          {/* DESIGN */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <Palette size={20} />

              <span>Design</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              15
            </span>

          </button>

        </div>

        {/* STUDENTS TITLE */}
        <p className="text-gray-600 text-xs uppercase mt-10 mb-4 tracking-widest">
          Students
        </p>

        {/* STUDENT MENUS */}
        <div className="space-y-2">

          {/* ASSIGNMENTS */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <FileText size={20} />

              <span>Assignments</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              08
            </span>

          </button>

          {/* CERTIFICATIONS */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <Award size={20} />

              <span>Certifications</span>

            </div>

            <span className="bg-[#1f1f1f] text-gray-400 text-xs px-2 py-1 rounded-full">
              04
            </span>

          </button>

          {/* PROGRESS */}
          <button className="w-full h-[52px] hover:bg-[#111111] rounded-xl flex items-center justify-between px-4 text-gray-400 hover:text-white transition duration-300">

            <div className="flex items-center gap-3">

              <TrendingUp size={20} />

              <span>Progress</span>

            </div>

            <span className="bg-[#1f1f1f] text-green-400 text-xs px-2 py-1 rounded-full">
              92%
            </span>

          </button>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;