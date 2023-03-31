import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { stockDetails } from "../../redux/actions/stockActions"
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import Buy from "../BuyAndSell/Buy"

function Table() {

  const [stocksData, setStocksData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [buyData, setBuyData] = useState({
    ticker: "IMB", 
    price: 0,
})


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
        ticker: e.symbol,
      }
    })
    navigate("/stocksInfo");
  }

  const handleBuy = async (ticker, price) => {
    setBuyData({
        ticker: ticker,
        price: price,
    })
    dispatch({
      type: GLOBAL_TYPES.TOGGLE,
      payload: {
        toggle: "block"
      }
    })

  }
  let toggle1 = useSelector(state => state.toggleReducer)
  let toggle = toggle1.toggle;

  const LabelNames = ["Company", "Open", "Previous Close", "Change", "BUY"]

  return (
    <>
      {loading && <h1>Loading</h1>}
      {!loading && (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
          {toggle == "block" && (<Buy buySellOption="buy" stockPrice={buyData.price} stockName={buyData.ticker} key={buyData.ticker} />)}
          <header className="px-5 py-4 border-b border-slate-100 bg-slate-800 text-white">
            <h2 className="font-bold text-center text-2xl ">Stocks List</h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-xs uppercase text-white bg-slate-600 rounded-sm">
                  <tr>
                    {LabelNames.map((index) => (
                      <th className="p-3" key={index}>
                        <div className="font-semibold text-center">{index}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-base font-medium divide-y divide-slate-100">
                  {stocksData.map((data) => {
                    return (
                      <tr key={data.ticker}>
                        <td className="px-2 flex justify-center items-center">
                          <div className="text-slate-800">{data.symbol}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-green-600">{data.open}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-red-500">{data.previousClose}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">{data.pChange}</div>
                        </td>
                        <td className="p-2 flex justify-center items-center">
                          <button className='text-center bg-slate-600 px-5 py-2 rounded-lg text-white text-base' onClick={() => handleBuy(data.ticker, data.price)}>Buy</button>
                        </td>
                      </tr>
                    )
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
