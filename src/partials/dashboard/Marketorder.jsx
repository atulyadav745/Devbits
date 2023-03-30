import React from 'react';
// import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function Marketorder() {

  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full  md:col-span-4 dark:bg-gray-100 shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Market Order</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      
      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">

          <tbody >
            <tr 
             >
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
              <td class="whitespace-nowrap px-6 py-4">Open</td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">13 101.48</td>
              {/* <td class="whitespace-nowrap px-6 py-4">@mdo</td> */}
            </tr>
            <tr
             >
              <td class="whitespace-nowrap px-6 py-4">High</td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">21 401.92</td>
            </tr>
            <tr
             >
              <td class="whitespace-nowrap px-6 py-4">Low</td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">21 401.92</td>
            </tr>
            <tr
             >
              <td class="whitespace-nowrap px-6 py-4">Close</td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">21 401.92</td>
            </tr>
            <tr
             >
              {/* <td class="whitespace-nowrap px-6 py-4 font-medium">3</td> */}
              <td class="whitespace-nowrap px-6 py-4">% Change</td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">7.63%</td>
              {/* <td class="whitespace-nowrap px-6 py-4">@twitter</td> */}
            </tr>
          </tbody>
        </table>
        <div class="text-center py-8">
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Buy Now
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a></div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Marketorder;
