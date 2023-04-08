import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Rupee from "../../assets/RupeeCoin.json";
// import Investment from "../../assets/OnlineInvestment.json";
import Portfolio from "../../assets/SavingMoney.json";

const Cards = () => {
  const [userAccountData, setUserAccountData] = useState({
    balance: 5378,
    investedValue: 45,
  });

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       if (user) {
  //         const docRef = doc(db, "user", user.uid);
  //         const docSnap = await getDoc(docRef);
  //         if (docSnap.exists()) {
  //           setUserAccountData(docSnap.data());
  //           // router.push("/dashboard");
  //         } else {
  //           console.log("Document does not exist!");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error getting user data:", error);
  //     }
  //   };

  //   getUserData();
  // }, [user, setUserAccountData,router]);

  // if (userAccountData) {
  return (
    <div className="px-6 pt-6 w-full">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <Lottie animationData={Rupee} />
            <div>
              <h5 className="text-center text-3xl  text-gray-300">Balance</h5>
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-5xl font-bold  text-white">
                  ₹{userAccountData.balance.toFixed(2)}
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="h-full group p-6 sm:p-8 rounded-3xl  border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <h5 className="text-3xl  text-gray-300">Invested Value </h5>
            <div className="my-8">
              <h1 className="text-5xl font-bold  text-white">
                ₹ {userAccountData.investedValue.toFixed(2)}
              </h1>
              <span className=" text-gray-400">
                Last Week&apos;s Investment{" "}
              </span>
            </div>
            <Lottie animationData={Investment} />
          </div>
        </div> */}
        <div>
          <div className="group p-6 sm:p-8 rounded-3xl  border border-gray-200/50  border-gray-700 bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:h-full">
            <Lottie animationData={Portfolio} />

            <div className="mt-6">
              <h5 className="text-center text-3xl  text-gray-300">
                Portfolio Value
              </h5>
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-3xl font-bold  text-white">
                  ₹ {userAccountData.investedValue.toFixed(2)}
                </h3>
                <div className="flex items-end gap-1 text-green-500">
                  <svg
                    className="w-3"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // } else {
  //   return <p>Loading...</p>;
  // }
};

export default Cards;
