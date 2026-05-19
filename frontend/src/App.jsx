// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Sidebar />

      <AppRoutes />

    </BrowserRouter>
  );
}

export default App;