// src/layouts/RootLayout.jsx

import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function RootLayout() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* NAVBAR */}
            <Navbar />

            {/* SIDEBAR */}
            <div className="flex">
                <Sidebar />
            </div>
        </div>
    );
}

export default RootLayout;
