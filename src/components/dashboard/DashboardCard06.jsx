import React from "react";
import Transactions from "../../pages/Dashborad/Transactions";

function DashboardCard06() {
  return (
    <div className="flex mb-20 py-6 w-5/6 mx-auto flex-col col-span-full max-h-96 md:col-span-4 bg-gray-800 shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-bold text-4xl  text-white text-center">Last Transactions</h2>
      </header>
      <Transactions />
    </div>
  );
}

export default DashboardCard06;
