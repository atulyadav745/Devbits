import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getTransactions } from "../../../actions/transactions";
// import TransactionsSkeleton from "./TransactionsSkeleton";

const Transactions = () => {
  // const dispatch = useDispatch();
  // const transactions = useSelector((state) => state.transactionsReducer);

  // useEffect(() => {
  //   dispatch(getTransactions());
  // }, [dispatch]);

  const [transactions, setTransactions] = useState([]);
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
        console.log(data);
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  getTransactionsData();

  return (
    <div className="bg-gray-900 max-h-72 overflow-y-auto">
      <div className="container px-4 py-4 mx-auto">
        {/* <h2 className="text-left text-lg font-semibold text-gray-700 capitalize text-gray-200 mb-2"> */}
        {/* Transactions ({!transactions?.length ? 0 : transactions.length} latest */}
        {/* records) */}
        {/* </h2> */}
        {/* {!transactions?.length ? ( */}
        {/* <TransactionsSkeleton /> */}
        {/* ) : ( */}
        <div className="text-xs overflow-auto shadow">
          <div className="shadow rounded-lg">
            <table className="table-auto leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-white text-left text-xs uppercase font-normal"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="md:table-cell w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-white text-left text-xs uppercase font-normal"
                  >
                    Shares
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-left text-white text-xs uppercase font-normal"
                  >
                    Ticker
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-5 py-3 bg-gray-800  border-b border-gray-800 text-left text-white text-xs uppercase font-normal"
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
                    <td className="px-5 py-5 border-b border-gray-800 text-xs ">
                      <p className=" text-white whitespace-no-wrap">
                        {transaction.transactionType}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-800 text-xs ">
                      <p className=" text-white whitespace-no-wrap">
                        {transaction.shares}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-800 text-xs ">
                      <p className=" text-white whitespace-no-wrap">
                        {transaction.tickerBought}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-800 text-xs ">
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
