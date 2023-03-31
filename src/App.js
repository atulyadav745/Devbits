import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {useSelector} from "react-redux"

import "./css/style.css";
import Data from "./components/SearchBar/Data.json";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Stockpage from "./pages/Stockpage"
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import SearchBar from "./components/SearchBar/SearchBar";
import Company from "./pages/Company/Company";
import BuySell from "./pages/BuyAndSell/BuySell";
import News from "./pages/News/News";

function App() {
  const location = useLocation();
  let token ;
  const auth = useSelector(state => state.auth) 
  
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route index element={ auth.token ?  <Dashboard/> :<Home />} />
        <Route exact path="/signup" element={auth.token ? <Dashboard/> : <Signup />} />
        <Route exact path="/login" element={auth.token ? <Dashboard/> : <Login />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path = "/table" element={<Company/>} ></Route>
        {/* <Route
          exact
          path="/buysell"
          element={
            <BuySell
              buySellOption={"Buy"}
              stockName={"NIFTY50"}
              stockPrice={"2000"}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={<SearchBar placeholder={"enter"} data={Data} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
