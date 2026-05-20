import { BrowserRouter, useLocation } from "react-router-dom";
import { useState } from "react";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/auth/Login";

function Layout() {
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password" ||
    showLogin; // 👈 important

  return (
    <>

      {/* NAVBAR + SIDEBAR hide when login open */}
      {/*!hideLayout && <Navbar onLoginClick={() => setShowLogin(true)} />}
      {!hideLayout && <Sidebar />*/}
      

      <AppRoutes />

      {/* LOGIN OVERLAY */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">

            {/* close button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-white"
            >
              X

            </button>

            <Login />
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;