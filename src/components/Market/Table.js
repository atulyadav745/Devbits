import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { stockDetails } from "../../redux/actions/stockActions"
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";

function Table() {

  const [stocksData, setStocksData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if (!auth.token) {
      navigate('/');
    }
    dispatch(stockDetails(auth.token))
  }, [])

  const data = useSelector(state => state.stockReduer)

  useEffect(() => {
    if (data.data) {
      setStocksData(data.data);
      setLoading(false);
    }
  }, [])

  const handleClick = (e) => {
    console.log(e.symbol)
    dispatch({
      type: GLOBAL_TYPES.TICKER,
      payload: {
        ticker : e.symbol,
      }
    })
    navigate("/stocksInfo") ;
  }
  return (
    <>
      {loading && <h1>Loading</h1>}
      {!loading && (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
          <header className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Stocks</h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">
                        Company Ticker
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Open</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Previous Close
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Change</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Percent Change
                      </div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm font-medium divide-y divide-slate-100">
                  {/* Row */}
                  {stocksData.map((e) => {
                    return (
                      <tr key={e.symbol} onClick={()=> handleClick(e)}>
                        <td className="p-2 cursor-pointer">
                          <div className="text-slate-800 hover:text-slate-500">{e.symbol}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-green-500">
                            {e.open}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">{e.previousClose}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-sky-500">
                            {e.change}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-sky-500">
                            {e.pChange}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Table;
