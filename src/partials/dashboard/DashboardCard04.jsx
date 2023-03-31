// import React from 'react';
// import BarChart from '../../charts/BarChart01';

// // Import utilities
// import { tailwindConfig } from '../../utils/Utils';

// function DashboardCard04() {

//   const chartData = {
//     labels: [
//       '12-01-2020', '01-01-2021', '02-01-2021',
//       '03-01-2021', '04-01-2021', '05-01-2021',
//     ],
//     datasets: [
//       // Light blue bars
//       {
//         label: 'Direct',
//         data: [
//           800, 1600, 900, 1300, 1950, 1700,
//         ],
//         backgroundColor: tailwindConfig().theme.colors.blue[400],
//         hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
//         barPercentage: 0.66,
//         categoryPercentage: 0.66,
//       },
//       // Blue bars
//       {
//         label: 'Indirect',
//         data: [
//           4900, 2600, 5350, 4800, 5200, 4800,
//         ],
//         backgroundColor: tailwindConfig().theme.colors.indigo[500],
//         hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
//         barPercentage: 0.66,
//         categoryPercentage: 0.66,
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
//       <header className="px-5 py-4 border-b border-slate-100">
//         <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
//       </header>
//       {/* Chart built with Chart.js 3 */}
//       {/* Change the height attribute to adjust the chart height */}
//       <BarChart data={chartData} width={595} height={248} />
//     </div>
//   );
// }

// export default DashboardCard04;
// import React from 'react'

import { useEffect, useState } from "react";
import { tailwindConfig } from '../../utils/Utils';
import LineChart from '../../charts/LineChart02';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const DashboardCard04 = () => {
  const [data, setData] = useState({
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "72G4E8C11G2DJQ58";
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];
      await fetch(url)
        .then((data) => {
          //  console.log("Api data", data)
          const res = data.json();
          return res;
        })
        .then((res) => {
          //  console.log("ressss", res)
          let res1 = res["Time Series (5min)"];
          Object.keys(res1).map((key) => {
            dataSet1.push(res1[key]["2. high"]);
            dataSet2.push(res1[key]["3. low"]);
            labelSet.push(key);
          });
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "High",
                data: dataSet1,
                // borderColor: "rgb(255, 99, 132)",
                // backgroundColor: "rgba(99, 132, 0.5)",
                borderColor: tailwindConfig().theme.colors.indigo[500],
                fill: false,
                borderWidth: 2,
                tension: 0,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
              },
              {
                label: "Low",
                data: dataSet2,
                // borderColor: "rgb(53, 162, 235)",
                // backgroundColor: "rgba(53, 235, 0.5)",
                borderColor: tailwindConfig().theme.colors.green[500],
                fill: false,
                borderWidth: 2,
                tension: 0,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: tailwindConfig().theme.colors.green[500],
              },
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);

  // return (
  //   <>
  //     <Line data={data} options={options} />
  //   </>
  // );
  return (
        <div className="flex flex-col col-span-full md:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
          <header className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
          </header>
          {/* Chart built with Chart.js 3 */}
          {/* Change the height attribute to adjust the chart height */}
          <Line data={data}  width={595} height={248}/>
        </div>
      );
};

export default DashboardCard04;
