import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import { sellStock } from "../../redux/actions/tradeActions"

const Sell = ({ buySellOption, stockName, stockPrice }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch({
      type: GLOBAL_TYPES.TOGGLE,
      payload: {
        toggle: "hidden"
      }
    })
    navigate("/market");
  };

  let state = useSelector(state => state)
  let toggle = state.toggleReducer.toggle;

  const [stockQuantity, setStockQuantity] = useState(0);

  const handleInput = (e) => {
    setStockQuantity(e.target.value);
  };

  const handleSell = () => {
    const data = {
      ticker: stockName,
      price: stockPrice,
      quantity: stockQuantity
    }
    dispatch(sellStock(state.auth.token, data));
    navigate("/");
  }

  return (
    <div
      id="myModal"
      tabindex="-1"
      className={`fixed top-0 left-0 right-0 z-50 ${toggle} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {buySellOption}
            </h3>
            <button
              type="button"
              onClick={() => handleClose()}
              className="close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="stockname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock Name
                </label>
                <input
                  type="text"
                  id="stockname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Stock name"
                  value={stockName}
                  disabled
                  readonly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="stockprice"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock Price
                </label>
                <input
                  type="text"
                  id="stockprice"
                  value={`Rs ${stockPrice}`}
                  placeholder="$$$$$"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  disabled
                  readonly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={stockQuantity}
                  onChange={(e) => handleInput(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </form>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => handleSell()}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm
            </button>
            <button
              onClick={() => handleClose()}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;