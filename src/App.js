import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashborad/Dashboard";
import Stocks from "./pages/Dashborad/Stocks"
import StocksInfo from "./pages/Dashborad/StockInfo"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import News from "./pages/Dashborad/NewsPage";


function App() {
  const location = useLocation();
  const auth = useSelector(state => state.auth)
  let token = ""
  if (auth && auth.token) token = auth.token

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route index element={token ? <Dashboard /> : <Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/market" element={token ? <Stocks /> : <Login />} />
        <Route exact path="/stockInfo" element={token ? <StocksInfo /> : <Login />} />
        <Route exact path="/dashboard" element={token ? <Dashboard /> : <Login />} />
        <Route exact path="/news" element={token ? <News/> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
