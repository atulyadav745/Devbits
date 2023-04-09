import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { portfolioDetails } from "../../redux/actions/portfolioActions"
import { GLOBAL_TYPES } from '../../redux/actions/GLOBAL_TYPES';
import Sell from '../BuyAndSell/Sell';
import { GridLoader } from "react-spinners";

function Portfolio() {

    const [portfolio, setPortfolio] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const data = useSelector(state => state.portfolio)

    const [sellData, setSellData] = useState({
        ticker: "IMB",
        price: 0,
    })

    useEffect(() => {
        if (!auth.token) {
            navigate('/');
        }
        dispatch(portfolioDetails(auth.token))
    }, [dispatch])



    // useEffect(() => {
    //     if (data.data) {
    //         setPortfolio(data.data);

    //         console.log(data);
    //     }
    // }, [])

    const handleSell = async (data) => {
        setSellData({
            ticker: data.ticker,
            price: data.price / data.quantity,
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


        <div className="col-span-full xl:col-span-12 bg-gray-900 shadow-lg rounded-sm border border-slate-800">
            <header className="px-5 py-4 border-b border-slate-100 bg-slate-800 text-white">
                <h2 className="font-bold text-center text-2xl ">Your Portfolio</h2>
            </header>
            {toggle == "block" && (<Sell stockPrice={sellData.price} stockName={sellData.ticker} key={sellData.ticker} />)}
            <div className="p-3">

                {/* Table */}
                <div className="overflow-auto max-h-[60vh]">
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
                            <>
                                <table className="table-auto w-full bg-gray-900 ">
                                    {/* Table header */}
                                    <thead className="text-xs uppercase text-white  bg-slate-600 rounded-md">
                                        <tr>
                                            {LabelNames.map((index) => (
                                                <th className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-white text-left text-lg uppercase font-normal" key={index}>
                                                    <div className="font-semibold text-center">{index}</div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="text-base text-white font-medium divide-y divide-slate-400 bg-gray-900">
                                        {
                                            Array.from(data?.data).map((data) => {
                                                if (data.quantity != 0) {
                                                    return (

                                                        <tr key={data.ticker} className='bg-gray-700 hover:bg-gray-600'>
                                                            <td className="px-2 text-xl flex justify-center items-center">
                                                                <div>{data.ticker}</div>
                                                            </td>
                                                            <td className="px-2 text-xl  ">
                                                                <div className="text-center">{data.quantity}</div>
                                                            </td>
                                                            <td className="p-2">
                                                                <div className="px-2 text-xl text-center ">{Math.floor(data.price / data.quantity)}</div>
                                                            </td>
                                                            <td className="p-2">
                                                                <div className="px-2 text-xl  text-center">{Math.floor(data.price / data.quantity) + 10}</div>
                                                            </td>
                                                            <td className="p-2 flex justify-center items-center">
                                                                <button className='text-center w-1/2 bg-green-600 px-5 py-2 rounded-lg text-white text-base' onClick={() => handleSell(data)}>Sell</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }

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




