import React, { useState } from 'react'
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import "./Navbar.css"


function Navbar() {

    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "NEWS", link: "/" },
        { name: "CONTACT", link: "/" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <nav className="px-2 sm:px-4 py-2.5 sticky w-full z-[20] top-0 left-0 border-b" style={{backgroundColor:"#2b4162", backgroundImage:"linear-gradient(315deg, #2b4162 0%, #12100e 74%)"}} >
            <div className='flex flex-wrap items-center justify-between mx-auto z-[5]'>
                <a href='/' className='flex items-center'>
                    <span className='self-center text-3xl font-semibold whitespace-nowrap text-white my-3'>Bull Traders</span>
                </a>

                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden  transition-all duration-500 ease-in'>
                    {!open ? (<BiMenu/>) : (<AiOutlineClose/>) }
                </div>

                <div className={`z-[-1] md:z-10 items-center justify-between left-0 w-full absolute md:flex md:w-auto md:order-1 md:sticky transition-all duration-500 ease-in top-20  bg-gray-700 md:bg-transparent ${open ? 'top-20 ':'top-[-490px]'} `} >
                    <ul className='flex  flex-col p-3 mt-3  md:flex-row md:space-x-10 md:mt-0 md:text-base md:font-medium md:border-0 bg-gray-900 md:bg-transparent '>
                        {
                            Links.map((link, key) => (
                                <li key={key}>
                                    <a href={link.link} className='block text-lg z-10 text-center py-2 pl-3 pr-4 text-gray-400 rounded  hover:text-white  md:hover:bg-transparent md:hover:text-white md:text-xl md:cursor-pointer'>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar