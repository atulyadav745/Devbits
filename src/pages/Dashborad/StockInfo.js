import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
// import Marketorder from "../../components/StockInfo/Marketorder";
// import StockGraph from "../../components/StockInfo/StockGraph";
import { customStockDetails } from "../../redux/actions/stockActions";
import Graph from "../../components/Stock/Graph";
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import Buy from "../../components/BuyAndSell/Buy"

function StockInfo() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)

  const [query, setQuery] = useState({
    ticker: state.tickerReducer.ticker,
    timeDuration: "Weekely",
  });
  // const dispatch = useDispatch()'
  const data = useSelector((state) => state.stockReducer);
  useEffect(() => {
    dispatch(customStockDetails(state.auth.token, query));
  }, [dispatch]);

  

  const ticker = useSelector(state => state.tickerReducer)

  const HandleBuy = () => {
    console.log("HELLO")
    dispatch({
      type: GLOBAL_TYPES.TOGGLE,
      payload: {
        toggle: "block"
      }
    })
    setLoading(false);
  }
  let toggle1 = useSelector(state => state.toggleReducer)
  let toggle = toggle1.toggle ;

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-600">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
          {/* Cards Starts*/}
          {toggle == "block" && (<Buy buySellOption="buy" stockPrice={20} stockName="IMD" key={10} />)}
            <div className="px-6 p-6 w-full mb-10">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto">
                <div className="w-full lg:w-full h-[15vh] lg:h-[20vh] md:col-span-2 lg:col-span-1 mx-auto">
                  <div className="h-full space-y-6 group p-6  flex items-center justify-center sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div>
                      <h5 className="text-center  text-xl md:text-2xl lg:text-3xl  text-gray-300">
                        Open
                      </h5>
                      <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-white">
                          ₹{56947}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  lg:w-full h-[15vh] lg:h-[20vh] md:col-span-2 lg:col-span-1 mx-auto">
                  <div className="h-full space-y-6 group p-6  flex items-center justify-center sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div>
                      <h5 className="text-center text-xl md:text-2xl lg:text-3xl  text-gray-300">
                        Close
                      </h5>
                      <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-white">
                          ₹{455}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  w-full lg:w-full h-[15vh] lg:h-[20vh] md:col-span-2 lg:col-span-1 mx-auto">
                  <div className="h-full space-y-6 group p-6  flex items-center justify-center sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div>
                      <h5 className="text-center  text-xl md:text-2xl lg:text-3xl  text-gray-300">
                        Current
                      </h5>
                      <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-white">
                          ₹{100000}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cards Ends */}
            <div className="">
              <Graph />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default StockInfo;
