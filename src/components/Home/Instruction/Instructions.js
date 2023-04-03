import React from "react";
import im1 from "../../../assets/instruction-1.png";
import im2 from "../../../assets/instruction-2.png";
import im3 from "../../../assets/instruction-3.png";
import im4 from "../../../assets/instruction-4.png";
import Lottie from "lottie-react";
import bit1 from "../../../assets/bit2.json"
import bit2 from "../../../assets/bit1.json"
import bit3 from "../../../assets/bit3.json"
import bit4 from "../../../assets/bit2.json"

function Instructions() {
  let data = [
    {
      step: "Step1",
      name: "Download",
      text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.",
      image: bit1,
    },
    {
      step: "Step2",
      name: "Connect Wallet",
      text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.",
      image: bit2,
    },
    {
      step: "Step3",
      name: "Download",
      text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.",
      image: bit3,
    },
    {
      step: "step4",
      name: "Download",
      text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.",
      image: bit4,
    },
  ];
  return (
    <section
      className="flex min-h-screen items-center"
      aria-label="instruction"
      data-section
    >
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl py-5 text-slate-50">How It Work</h2>

        <p className="text-center text-slate-400 text-2xl mx-auto w-1/2 pb-10">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>

        <ul className="grid gap-[40px] md:grid-cols-4 ">
          {data.map((data, key) => (
            <li key={key}>
              <div className="text-center flex flex-col justify-center items-center py-5 px-5">
                {/* <figure className="transition  ">
                  <img
                    src={data.image}
                    width="96"
                    height="96"
                    loading="lazy"
                    alt={data.step}
                    className="hover:rotate-180 py-3"
                  />
                </figure> */}
                <div className="w-[50%]">
                <Lottie animationData={data.image}/>
                </div>
                

                <p className="card-subtitle text-xl font-bold  text-slate-400">
                  {data.step}
                </p>

                <h3 className="h3 card-title text-xl pb-4 font-extrabold text-slate-50">
                  {data.name}
                </h3>

                <p className="card-text text-base font-semibold text-slate-400">
                  {data.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Instructions;
