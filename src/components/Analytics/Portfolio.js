import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { portfolioDetails } from "../../redux/actions/stockActions"

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

    useEffect(() => {console.log(data.data)

        if (data.data) {
            setPortfolio(data.data);
            setLoading(false);
        }
    }, [])

    const LabelNames = ["Company", "Quantity", "Purchased Price", "Current Price", "Output"]

    return (
        <>
            {!loading && (<div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">Top Channels</h2>
                </header>
                <div className="p-3">

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                <tr>
                                    {LabelNames.map((index) => (
                                        <th className="p-2" key={index}>
                                            <div className="font-semibold text-center">{index}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm font-medium divide-y divide-slate-100">
                                {portfolio.map((data) => {
                                    return (
                                        <tr key={data.ticker}>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <div className="text-slate-800">{data.ticker}</div>
                                                </div>
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
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">{data.price}</div>
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
