import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import { purchaseStock } from "../../redux/actions/tradeActions"
import { toast } from 'react-toast'

const Buy = ({ stockName, stockPrice }) => {

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
  const notify = () => toast('Here is your toast.');
  const handleBuy = () => {

    dispatch({
      type: GLOBAL_TYPES.TOGGLE,
      payload: {
        toggle: "hidden"
      }
    })
    const data = {
      ticker: stockName,
      price: stockPrice,
      quantity: stockQuantity
    }
    dispatch(purchaseStock(state.auth.token, data));    
  }

  return (
    <div
      id="myModal"
      tabindex="-1"
      className={`fixed backdrop-blur-sm top-0 left-0 z-50 ${toggle} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
    >
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-full max-w-2xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-2xl shadow bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
            <h3 className="text-4xl font-semibold  flex-[90%] text-center py-3 text-white">
              BUY STOCK
            </h3>
            <button
              type="button"
              onClick={() => handleClose()}
              className="close  text-4xl bg-transparent text-slate-300 rounded-lg  p-2.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-7 h-7"
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
                  className="block mb-2 text-lg font-bold text-slate-100"
                >
                  Equity Name
                </label>
                <input
                  type="text"
                  id="stockname"
                  className=" border text-base rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Stock name"
                  value={stockName}
                  disabled
                  readonly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="stockprice"
                  className="block mb-2 text-lg font-bold text-slate-100"
                >
                  Stock Price
                </label>
                <input
                  type="text"
                  id="stockprice"
                  value={`Rs ${stockPrice}`}
                  placeholder="$$$$$"
                  className=" border text-base rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled
                  readonly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-lg font-bold text-slate-100"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={stockQuantity}
                  onChange={(e) => handleInput(e)}
                  className=" border text-base rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </form>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t rounded-bborder-gray-600">
            <button
              onClick={() => handleBuy()}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm
            </button>
            <button
              onClick={() => handleClose()}
              type="button"
              className=" focus:ring-4 focus:outline-none rounded-lg border  text-sm font-medium px-5 py-2.5 focus:z-10 bg-red-500 text-white border-gray-500 hover:text-white hover:bg-gray-500 focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
