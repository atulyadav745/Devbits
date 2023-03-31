import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { portfolioDetails } from "../../redux/actions/stockActions"
import { GLOBAL_TYPES } from '../../redux/actions/GLOBAL_TYPES';
import Sell from '../BuyAndSell/Sell';

function Portfolio() {

    const [portfolio, setPortfolio] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (!auth.token) {
            navigate('/');
        }
        dispatch(portfolioDetails(auth.token))
    }, [])

    const data = useSelector(state => state.stockReduer)
    const [sellData, setSellData] = useState({
        ticker: "IMB", 
        price: 0,
    })

    useEffect(() => {
        console.log(data.data)

        if (data.data) {
            setPortfolio(data.data);
            setLoading(false);
        }
    }, [])

    const handleSell = async (ticker, price) => {
        setSellData({
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

    const LabelNames = ["Company", "Quantity", "Purchased Price", "Current Price", "SELL"]

    return (
        <>

            {!loading && (<div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100 bg-slate-800 text-white">
                    <h2 className="font-bold text-center text-2xl ">Your Portfolio</h2>
                </header>
                {toggle == "block" && (<Sell buySellOption="buy" stockPrice={sellData.price} stockName={sellData.ticker} key={sellData.ticker} />)}
                <div className="p-3">

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs uppercase text-white  bg-slate-600 rounded-md">
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
                                {portfolio.map((data) => {
                                    return (
                                        <tr key={data.ticker}>
                                            <td className="px-2 flex justify-center items-center">
                                                <div className="text-slate-800">{data.ticker}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{data.quantity}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-500">{data.price}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{data.price}</div>
                                            </td>
                                            <td className="p-2 flex justify-center items-center">
                                                <button className='text-center bg-green-500 px-5 py-2 rounded-lg text-white text-base' onClick={() => handleSell(data.ticker, data.price)}>Sell</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>)
            }
        </>
    );
}

export default Portfolio;
