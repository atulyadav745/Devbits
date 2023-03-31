import React, { useState, useEffect } from "react";

const News = () => {
  const url =
    "https://finnhub.io/api/v1/news?category=general&token=cgiv7p1r01qoenkm1rdgcgiv7p1r01qoenkm1re0";

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNewsData = async () =>
      await fetch(url)
        .then((response) => {
          if (response.ok) {
            console.log("OK");
            return response.json();
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })
        .then((res) => {
          setNewsData(res);
          console.log(newsData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    getNewsData();
  }, []);

  // getNewsData();

  const handleDate = (e) => {
    const unixTimestamp = e;
    const milliseconds = unixTimestamp * 1000; // 1575909015000
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
    // const humanDateFormat = {
    //   weekday: dateObject.toLocaleString("en-US", { weekday: "long" }), // Monday
    //   month: dateObject.toLocaleString("en-US", { month: "long" }), // December
    //   day: dateObject.toLocaleString("en-US", { day: "numeric" }), // 9
    //   year: dateObject.toLocaleString("en-US", { year: "numeric" }), // 2019
    //   hour: dateObject.toLocaleString("en-US", { hour: "numeric" }), // 10 AM
    //   minute: dateObject.toLocaleString("en-US", { minute: "numeric" }), // 30
    //   second: dateObject.toLocaleString("en-US", { second: "numeric" }), // 15
    //   timeZoneName: dateObject.toLocaleString("en-US", {
    //     timeZoneName: "short",
    //   }), // 12/9/2019, 10:30:15 AM CST
    // };
    return humanDateFormat;
  };

  return (
    <>
      <h1 className="font-bold text-5xl text-center my-10">News</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {newsData.map((e) => {
          return (
            <div key={e.id} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
              <img className="w-full" src={e.image} alt={e.headline} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{e.headline}</div>
                <p className="text-gray-700 text-base">{e.summary}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {e.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {e.source}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {handleDate(e.datetime)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
