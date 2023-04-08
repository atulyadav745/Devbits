import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashborad/Dashboard";
import Stocks from "./pages/Dashborad/Stocks";
import StocksInfo from "./pages/Dashborad/StockInfo";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import News from "./pages/Dashborad/NewsPage";
import Notify from "./components/Alert/Notify";
import Guide from "./pages/Guide/Guide";
import { GLOBAL_TYPES } from "./redux/actions/GLOBAL_TYPES";
import { ToastContainer } from "react-toast";
import { Toaster } from "react-hot-toast";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const notify = useSelector((state) => state.notifyReducer);
  const dispatch = useDispatch();
  let token = "";
  if (auth && auth.token) token = auth.token;
  // dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Notify />
      <div style={{ "z-index": "9999" }}>
        <Toaster style={{ "z-index": "9999" }} />
        <ToastContainer position="top-right" style={{ "z-index": "9999" }} />
      </div>
      <Routes>
        <Route index element={token ? <Dashboard /> : <Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/market" element={token ? <Stocks /> : <Login />} />
        <Route
          exact
          path="/stockInfo"
          element={token ? <StocksInfo /> : <Login />}
        />
        <Route
          exact
          path="/dashboard"
          element={token ? <Dashboard /> : <Login />}
        />
        <Route exact path="/news" element={token ? <News /> : <Login />} />
        <Route exact path="/guide" element={<Guide />} />
        {/* <Route exact path="/loading" element={token ? <Loading/> : <Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
