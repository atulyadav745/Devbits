import React, { useState } from "react";

function Table() {
  const url = "https://stock-trading-platform.onrender.com/stock/stocks-data";

  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI0MWY5MGVhYmJlMTEyOGY5YjA5YjciLCJpYXQiOjE2ODAwODg5NzZ9.NRabMvFQh2sSZqFQ0ymfVjAha18824wLpEW0-_UQJbU",
  };

  const [stocksData, setStocksData] = useState({});
  const [loading, setLoading] = useState(true);

  const getStocksData = async () =>
    await fetch(url, {
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          console.log("OK");
          return response.json();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((res) => {
        setStocksData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  getStocksData();

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
                  {stocksData.data.map((e) => {
                    return (
                      <tr>
                        <td className="p-2">
                          <div className="text-slate-800">{e.symbol}</div>
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
