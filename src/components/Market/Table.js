import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { stockDetails } from "../../redux/actions/stockActions"
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import Buy from "../BuyAndSell/Buy"
import { GridLoader } from "react-spinners";

function Table() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const initialState = {
    ticker: "IMB",
    price: 0,
  }
  const [buyData, setBuyData] = useState(initialState)
  const data = useSelector(state => state.stockReduer)

  useEffect(() => {
    if (!auth.token) {
      navigate('/');
    }
    dispatch(stockDetails(auth.token))
  }, [dispatch])


  const handleBuy = async (data) => {
    setBuyData({
      ticker: data.symbol,
      price: data.open,
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

    <div className="col-span-full xl:col-span-12 bg-slate-100 shadow-lg rounded-3xl border border-slate-800">

      <header className="px-5 py-4 border-b border-slate-100 bg-slate-800 text-white">
        <h2 className="font-bold text-center text-2xl ">Market Stocks List</h2>
      </header>

      {toggle == "block" && (<Buy stockPrice={buyData.price} stockName={buyData.ticker} key={buyData.ticker} />)}

      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto max-h-[80vh]">

          {!data?.data?.length ?
            (
              <div className='w-full mx-auto p-8' >
                <div className=' p-8 flex justify-center'>
                  <GridLoader
                    color="#3246a8"
                    loading="true"
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='mx-auto'
                  />
                </div>
              </div>

            )
            :
            (
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-xs uppercase text-white bg-slate-600 rounded-md">
                  <tr>
                    {LabelNames.map((index) => (
                      <th className="p-3" key={index}>
                        <div className="font-semibold text-center">{index}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-base font-medium divide-y divide-slate-400 bg-slate-300">
                  {
                    Array.from(data?.data).map((data) => {
                      return (
                        <tr key={data.ticker}>
                          <td className="px-2 text-xl font-bold flex justify-center items-center">
                            <div className="text-slate-800">{data.symbol}</div>
                          </td>
                          <td className="px-2 text-xl font-bold ">
                            <div className="text-center text-gray-800">{Math.floor(data.open)}</div>
                          </td>
                          <td className="p-2 text-xl font-bold">
                            <div className="text-center text-gray-800">{Math.floor(data.previousClose)}</div>
                          </td>
                          <td className="p-2 text-xl font-extrabold">
                            <div className={data.pChange >= 0 ? "text-center text-green-500" : "text-center text-red-500"} > {data.pChange} </div>
                          </td>
                          <td className="p-2 flex justify-center items-center">
                            <button className='text-center w-1/2 bg-slate-600 px-5 py-2 rounded-lg text-white text-base' onClick={() => handleBuy(data)}>Buy</button>
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>

              </table>

            )
          }
        </div>
      </div>
    </div>
  );
}

export default Table;
