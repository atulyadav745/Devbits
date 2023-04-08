import React, { useState } from "react";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState({});
  const url = "https://stock-trading-platform.onrender.com/stock/leader-board";
  const getLeaderboardData = () => {
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
          console.log("error in getting leaderboard data");
        }
        return response.json();
      })
      .then((data) => {
        setLeaderboardData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="bg-gray-500">
      <h1 className="text-center text-4xl font-bold py-3">LEADERBOARD</h1>
      <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left text-gray-400">
          <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Profit
              </th>
              <th scope="col" class="px-6 py-3">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-gray-900 border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Nikhil
              </th>
              <td class="px-6 py-4">nikhil</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
