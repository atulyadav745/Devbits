import React, { useEffect, useState } from "react";


const Transactions = () => {
  
  const [transactions, setTransactions] = useState([{
    transactionType: "BUY",
    shares: 11,
    tickerBought: "BAJFINANCE",
    transactedAt: "2023-04-08T18:39:02.307Z",
  }]);
  const url =
    "https://stock-trading-platform.onrender.com/stock/allTransaction";
  const getTransactionsData = () => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI2MGVkYjkzZjg1YWE4MzNiNTE5MDYiLCJpYXQiOjE2ODAyMTU3NzJ9.tZaVZeD8WvUHARlfGNUKwglslT8t2TQfqLTpE5mIfNI",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  getTransactionsData();

  return (
    <div className="bg-gray-900 max-h-47 overflow-y-auto w-full">
      <div className="container px-4  w-full py-4 mx-auto">
        <div className="text-xs overflow-auto shadow">
          <div className="shadow rounded-lg">
            <table className="table-auto leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-white text-left text-lg uppercase font-normal"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="md:table-cell w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-white text-left text-lg uppercase font-normal"
                  >
                    Shares
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-left text-white text-lg uppercase font-normal"
                  >
                    Ticker
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-left text-white text-lg uppercase font-normal"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={transaction._id}
                    className="bg-gray-700 hover:bg-gray-600"
                  >
                    <td className="px-5 py-5 border-b border-gray-800 text-base ">
                      <p className=" text-white whitespace-no-wrap">
                        {transaction.transactionType}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-800 text-base ">
                      <p className=" text-white whitespace-no-wrap">
                        {transaction.shares}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-800 text-base ">
                      <p className=" text-white whitespace-no-wrap">
                        {transaction.tickerBought}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-800 text-base ">
                      <p className=" text-white whitespace-no-wrap">
                        {new Date(transaction.transactedAt).toDateString()}{" "}
                        {new Date(
                          transaction.transactedAt
                        ).toLocaleTimeString()}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Transactions;
