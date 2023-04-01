import React, { useState, useEffect} from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux"
import {GLOBAL_TYPES}  from "../redux/actions/GLOBAL_TYPES"
import image from "../assets/user.png"

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const auth = useSelector(state => state.auth) ;

  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;

  const handleLogOut = ()=> {
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {
        token : "",
        user: ""
      }
    })

    navigate("/") ;
  }

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  let dashboardLinks = [
    { name: "Dashboard", index: "/dashboard" },
    { name: "News", index: "/news" },
    { name: "Market", index: "/market" },
    { name: "Search", index: "/search" },
    { name: "Profile", index: "/login" },
  ];

  const handleNavigate = (address) => {
    navigate(address)
  }

  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}

        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            className="lg:hidden text-3xl text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>

        {/* Sidebar header */}

        {/* Links */}
        <div className="">
          <div className="mx-auto">
            <img
              className=""
              src={image}
              alt="ProfilePic"
            />
            <p className="text-slate-300 text-center m-5 text-4xl"> {auth.user.username.toUpperCase()}</p>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <ul className="mt-3">
              {dashboardLinks.map((e, i) => {
                return (
                  <li
                    className="text-white text-xl mx-1 hover:bg-slate-600  cursor-pointer my-2 rounded p-2"
                    key={i}
                    onClick={()=> handleNavigate(e.index)}
                  >
                    {e.name}
                  </li>
                );
              })}
            </ul>
              <hr class="h-px my-8  border-0 bg-gray-700"></hr>
            <div className="text-white absolute bottom-0  p-5 w-full">
              <div className="text-white flex ">
                <BiLogOut className="text-5xl" />
                <button onClick={handleLogOut} className="text-xl hover:bg-slate-600 rounded w-1/2">Log out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
