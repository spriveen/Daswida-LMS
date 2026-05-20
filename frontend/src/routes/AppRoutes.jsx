// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Student Pages
import StudentDashboard from "../pages/student/Dashboard";
import MyCourses from "../pages/student/MyCourses";
import LiveClasses from "../pages/student/LiveClasses";
import StudentAssignments from "../pages/student/Assignments";
import StudentProfile from "../pages/student/Profile";

// Teacher Pages
import TeacherDashboard from "../pages/teacher/Dashboard";
import CreateCourse from "../pages/teacher/CreateCourse";
import TeacherStudents from "../pages/teacher/Students";
import TeacherAssignments from "../pages/teacher/Assignments";
import TeacherProfile from "../pages/teacher/Profile";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Courses from "../pages/admin/Courses";
import Teachers from "../pages/admin/Teachers";
import Students from "../pages/admin/Students";

// Layouts
import StudentLayout from "../layouts/StudentLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import AdminLayout from "../layouts/AdminLayout";
import RootLayout from "../layouts/RootLayout";

function AppRoutes() {
  return (
    <Routes>

      {/* ROOT ROUTE */}
      <Route path="/" element={<RootLayout />} />

      {/* AUTH ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* STUDENT ROUTES */}
      <Route
        path="/student"
        element={<StudentLayout />}
      >
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="live-classes" element={<LiveClasses />} />
        <Route path="assignments" element={<StudentAssignments />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      {/* TEACHER ROUTES */}
      <Route
        path="/teacher"
        element={<TeacherLayout />}
      >
        <Route path="dashboard" element={<TeacherDashboard />} />
        <Route path="create-course" element={<CreateCourse />} />
        <Route path="students" element={<TeacherStudents />} />
        <Route path="assignments" element={<TeacherAssignments />} />
        <Route path="profile" element={<TeacherProfile />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="courses" element={<Courses />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;