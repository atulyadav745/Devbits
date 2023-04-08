import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Marketorder from "../../components/StockInfo/Marketorder";
import StockGraph from "../../components/StockInfo/StockGraph";
import { customStockDetails } from "../../redux/actions/stockActions";
import Graph from "../../components/Stock/Graph";

function StockInfo() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const state = useSelector((state) => state);

  const [query, setQuery] = useState({
    ticker: state.tickerReducer.ticker,
    timeDuration: "Weekely",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customStockDetails(state.auth.token, query));
  }, []);

  const data = useSelector((state) => state.stockReducer);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 h-full sm:px-2 lg:px-1 py-8 w-full max-w-9xl mx-auto bg-red-600">
              <Graph />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default StockInfo;
