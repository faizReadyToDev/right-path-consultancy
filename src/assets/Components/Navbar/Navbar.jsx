import React from "react";

import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import HandleScroll from "../ScrollToTopButton/ScrollToTopButton";
import HandleWhatsAppClick from "../WhatsAppButton/WhatsAppButton";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Navbar = () => {
    return (
        <>
        <div className="bg-[#2f00fefe] w-[100vw]">

            <div className="flex justify-center gap-5 bg-[#2f00fefe] text-white p-2 max-sm:flex-col items-center max-sm:gap-2">
                <button onClick={() => alert("Join Right Path")}
                 className="bg-[#a1ebb1] text-[#233dff] rounded-xl px-3 py-1 hover:text-indigo-300 max-sm:text-sm" >
                    Join Right Path 
                </button>
                <span className="text-[#ffffffcc] max-sm:text-sm">
                    Pan India 
                </span>
            </div>
            <div className="flex justify-between shadow-xl py-6 px-16 bg-white rounded-t-full h-[16vh] items-center max-sm:h-[10vh] max-sm:rounded-t-2xl max-sm:p-0 max-sm:relative">
                <img className="w-[7vw] rounded-full bg-center bg-cover border-4 border-[#ffffff24] shadow-lg max-sm:w-[20vw] " src="img/logo.jpg" alt="" />
                <img className="lg:hidden w-[7vw] max-sm:visible max-sm:absolute max-sm:right-10" src="img/menu.png" alt="" />
                <ul className="flex justify-evenly gap-10 text-slate-500 max-sm:hidden">
                
                        <li className="cursor-pointer hover:text-[#2f00fefe]">
                            <NavLink to="/" 
                            className={({ isActive }) => isActive ? "active  text-[#2f00fefe] " : "text-slate-500"}>
                            Home
                            </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-[#2f00fefe]">
                            <NavLink to="/jobs" className={({ isActive }) => isActive ? "active  text-[#2f00fefe] " : "text-slate-500"}>
                            Jobs
                            </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-[#2f00fefe]">
                            <NavLink to="/jobs" className={({ isActive }) => isActive ? "active  text-[#2f00fefe] " : "text-slate-500"}>
                            Companies
                            </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-[#2f00fefe]">
                            <NavLink to="/services" className={({ isActive }) => isActive ? "active  text-[#2f00fefe] " : "text-slate-500"}>
                            Services
                            </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-[#2f00fefe]">
                            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active  text-[#2f00fefe] " : "text-slate-500"}>
                            About Us
                            </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-[#2f00fefe]">
                            <NavLink to="/contactus" className={({ isActive }) => isActive ? "active  text-[#2f00fefe] " : "text-slate-500"}>
                            Contact Us
                            </NavLink>
                        </li>
                  
                </ul>
                <Link
                to="/contactus"
                >
                    <span className="">
                        <button className="flex items-center gap-2 bg-white text-[#2f00fefe] border border-blue-400 shadow-cyan-900 shadow-xl rounded-lg px-4 py-2 cursor-pointer hover:shadow-xl hover:shadow-blue-400 max-sm:hidden">
                        <img className="w-8" src="img/telephone.png" alt="" />
                            More Information</button>
                    </span>
                </Link>
            </div>
        
        </div>
        <div onClick={HandleScroll} className="bg-blue-600 inline-block cursor-pointer fixed bottom-10 left-10 z-20">
            <img className=" cursor-pointer w-[2vw] max-sm:w-[10vw]" src="img/arrow-up.png" alt="" />
        </div>
       <WhatsAppButton/>
       
        </>

    )
}

export default Navbar