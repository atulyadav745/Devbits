import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const url =
    "https://finnhub.io/api/v1/news?category=general&token=cgiv7p1r01qoenkm1rdgcgiv7p1r01qoenkm1re0";

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNewsData = async () =>
      await fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })
        .then((res) => {
          setNewsData(res);
        })
        .catch((error) => {
        });
    getNewsData();
  }, []);


  const handleDate = (e) => {
    const unixTimestamp = e;
    const milliseconds = unixTimestamp * 1000; // 1575909015000
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
    return humanDateFormat;
  };


  return (
    <>
      <h1 className="font-bold text-slate-100 text-6xl text-center my-10">Insights Of Market</h1>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-center">
        {newsData.map((e) => {
          return (
            <div key={e.id} className="lg:max-w-sm w-full bg-slate-200 rounded-lg overflow-hidden shadow-lg m-1">
              <img className="w-full" src={e.image} alt={e.headline} />
              <div className="px-3 py-2">
                <div className="font-bold text-lg mb-2 text-center">{e.headline}</div>
                <p className="text-gray-700 text-base">{e.summary}</p>
              </div>
              <div className="px-6 pt-4 pb-2 mx-auto w-max">
                <span className="inline-block bg-slate-400 rounded-full px-2 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2">
                  {e.category}
                </span>
                <span className="inline-block bg-slate-400 rounded-full px-2 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2">
                  {e.source}
                </span>
                <span className="inline-block bg-slate-400 rounded-full px-2 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2">
                  {handleDate(e.datetime)}
                </span>
              </div>
              <div className="flex items-center mt-4 mb-2 ">
                <Link to={e.url} target="blank" className='text-center bg-slate-600 px-5 py-2 rounded-lg text-white text-base mx-auto hover:text-slate-600 hover:bg-slate-50 '>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
