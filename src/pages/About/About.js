import React from 'react'

function About() {
  return (
    <>
    <div>
    {/* <!-- component --> */}
<div className="container dark:bg-gray-900 mx-auto w-full h-full">
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-0 border-gray-700 h-full border left-[50%] flex" ></div>
    {/* <!-- right timeline --> */}
    <div className="mb-8 justify-between items-center w-full right-timeline flex">
    <div className="md:order-1 md:w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white -z-50">1</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-[90%]">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">History</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Founded in 2008, Bull Traders Trading Company has been helping businesses grow and expand their operations for over 15 years.</p>
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
    <div className="md:order-1 md:w-5/12"></div>
      <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full flex">
        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-[90%]">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Mission</h3>
        <p className="text-sm  leading-snug tracking-wide text-gray-900 text-opacity-100">Our mission is to provide our clients with reliable, efficient, and cost-effective trading solutions that help them succeed in today's global marketplace.</p>
      </div>
    </div>
    
    {/* <!-- right timeline --> */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
    <div className="md:order-1 md:w-5/12"></div>
      <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full flex">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-[90%]">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Expertise</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">"Our team of experienced traders and logistics experts has a deep understanding of the global market and can help businesses navigate complex trade regulations and customs requirements.</p>
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="md:order-1 md:w-5/12"></div>
      <div className="z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full flex">
        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-[90%]">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Clientele</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Bull Traders is a trading company focused on providing bullish investment opportunities for its clients.
We are a reliable trading company with a strong reputation for helping clients maximize profits through bullish market strategies.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default About