import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { portfolioDetails } from "../../redux/actions/stockActions"
import { GLOBAL_TYPES } from '../../redux/actions/GLOBAL_TYPES';
import Sell from '../BuyAndSell/Sell';
import { GridLoader } from "react-spinners";

function Portfolio() {

    const [portfolio, setPortfolio] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [sellData, setSellData] = useState({
        ticker: "IMB",
        price: 0,
    })

    useEffect(() => {
        if (!auth.token) {
            navigate('/');
        }
        setLoading(true);
        dispatch(portfolioDetails(auth.token))
    }, [])

    const data = useSelector(state => state.stockReduer)

    useEffect(() => {
        if (data.data) {
            setPortfolio(data.data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [])

    const handleSell = async (data) => {
        setSellData({
            ticker: data.ticker,
            price: data.price/data.quantity,
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


        <div className="col-span-full xl:col-span-12 bg-slate-100 shadow-lg rounded-sm border border-slate-800">
            <header className="px-5 py-4 border-b border-slate-100 bg-slate-800 text-white">
                <h2 className="font-bold text-center text-2xl ">Your Portfolio</h2>
            </header>
            {toggle == "block" && (<Sell stockPrice={sellData.price} stockName={sellData.ticker} key={sellData.ticker} />)}
            <div className="p-3">

                {/* Table */}
                <div className="overflow-auto max-h-[60vh]">
                    {loading ?
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
                            <>
                                <table className="table-auto w-full ">
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
                                    <tbody className="text-base font-medium divide-y divide-slate-400 bg-slate-300">
                                        {
                                            Array.from(portfolio).map((data) => {
                                                return (
                                                    <tr key={data.ticker}>
                                                        <td className="px-2 text-xl font-bold flex justify-center items-center">
                                                            <div className="text-slate-800">{data.ticker}</div>
                                                        </td>
                                                        <td className="px-2 text-xl font-bold ">
                                                            <div className="text-center">{data.quantity}</div>
                                                        </td>
                                                        <td className="p-2">
                                                            <div className="px-2 text-xl font-bold text-center ">{data.price/data.quantity}</div>
                                                        </td>
                                                        <td className="p-2">
                                                            <div className="px-2 text-xl font-bold text-center">{data.price/data.quantity}</div>
                                                        </td>
                                                        <td className="p-2 flex justify-center items-center">
                                                            <button className='text-center w-1/2 bg-green-600 px-5 py-2 rounded-lg text-white text-base' onClick={() => handleSell(data)}>Sell</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                        )}

                </div>
            </div>
        </div >
    );
}

export default Portfolio;




