import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import Marketorder from '../partials/dashboard/Marketorder';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              </div>

            </div>
            <div className="grid grid-cols-12 gap-6">
            <DashboardCard11 />
            <DashboardCard04 />
            <Marketorder />
              {/* <DashboardCard08 /> */}
             
             
              
              {/* <DashboardCard07 /> */}
            </div>
          </div>
        </main>

        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default Dashboard;