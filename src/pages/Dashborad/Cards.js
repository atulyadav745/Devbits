import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { infoUser } from "../../redux/actions/stockActions"

const Cards = () => {
  const [userAccountData, setUserAccountData] = useState({
    balance: 5378,
    investedValue: 45,
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth?.token) {
      dispatch(infoUser(auth.token))
    }

  }, [dispatch])


  return (
    <div className="px-6 p-6 w-full mb-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto">
        <div className="w-full lg:w-full h-[15vh] lg:h-[20vh] md:col-span-2 lg:col-span-1 mx-auto">
          <div className="h-full space-y-6 group p-6  flex items-center justify-center sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <h5 className="text-center text-xl md:text-2xl lg:text-3xl  text-gray-300">
                Balance
              </h5>
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-white">
                  ₹{auth?.user?.balance}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full  lg:w-full h-[15vh] lg:h-[20vh] md:col-span-2 lg:col-span-1 mx-auto">
          <div className="h-full space-y-6 group p-6  flex items-center justify-center sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <h5 className="text-center  text-xl md:text-2xl lg:text-3xl  text-gray-300">
                Portfolio
              </h5>
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-white">
                  ₹{455}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full lg:w-full h-[15vh] lg:h-[20vh] md:col-span-2 lg:col-span-1 mx-auto">
          <div className="h-full space-y-6 group p-6  flex items-center justify-center sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <h5 className="text-center  text-xl md:text-2xl lg:text-3xl  text-gray-300">
                Invested Value
              </h5>
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-white">
                  ₹{auth?.user?.balance - 100000}
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
