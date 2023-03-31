import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Marketorder from '../../components/StockInfo/Marketorder';
import StockGraph from "../../components/StockInfo/StockGraph"
import { customStockDetails } from "../../redux/actions/stockActions";

function StockInfo() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const state = useSelector(state => state);

  const [query, setQuery] = useState({
    ticker: state.tickerReducer.ticker,
    timeDuration: "Weekely",
  })
  const dispatch = useDispatch() ;


  useEffect(() => {
    dispatch(customStockDetails(state.auth.token, query))
  }, [])

  const data = useSelector(state => state.stockReducer) ;


  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <StockGraph />
              <Marketorder />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StockInfo;