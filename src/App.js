import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashborad/Dashboard";
import Stockpage from "./pages/Stockpage"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";

function App() {
  const location = useLocation();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route index element={auth.token ? <Dashboard /> : <Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/table" element={<Stockpage/>} />
        <Route exact path="/dashboard" element={auth.token ? <Dashboard /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
