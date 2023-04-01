import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/Home.module.css"
import Navbar from "../../components/Home/Navbar/Navbar"
import Instructions from "../../components/Home/Instruction/Instructions";
import Footer from "../../components/Home/Footer/Footer";
import Team from "../Team/Team.js";
import About from "../About/About";

function Home() {
  return (
    <div className={styles.bgcustom}>
      <Navbar />
      <div className="h-screen">
        <section className="">
          <div className="h-screen md:flex md:justify-center md:items-center">
            <div className="">
              <h1 className="lg:text-7xl text-4xl font-bold text-white m-5">
                Buy & Sell Digital
                <br />
                Assets In The
                <br />
                Cryptex
              </h1>

              <p className="text-white text-lg m-5">
                Coin Cryptex is the easiest, safest, and fastest way to buy & sell
                crypto asset exchange.
              </p>

              <Link
                to="/dashboard"
                className="text-white m-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get started now
              </Link>
            </div>

            <figure className="m-5">
              <img
                src="/assets/hero-banner.png"
                width="570"
                height="448"
                alt="hero banner"
                className="w-100"
              />
            </figure>
            {/* <div className="h-[100%] w-[600px]">
              <Lottie animationData={animation}/>
            </div> */}
          </div>
        </section>
      </div>
      <Instructions />
      <About/>
      <Team/>
     <div>
     <Footer/>
     </div>
    </div>
  );
}

export default Home;

