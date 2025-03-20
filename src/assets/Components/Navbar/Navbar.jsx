import React from "react";

import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="bg-[#2f00fefe]">

            <div className="flex justify-center gap-5 bg-[#2f00fefe] text-white p-2">
                <button onClick={() => alert("Join Right Path")}
                 className="bg-[#a1ebb1] text-[#233dff] rounded-xl px-3 py-1 hover:text-indigo-300" >
                    Join Right Path 
                </button>
                <span className="text-[#ffffffcc]">
                    Pan India 
                </span>
            </div>
            <div className="flex justify-between shadow-xl py-6 px-16 bg-white rounded-t-full h-[16vh] items-center">
                <img className="w-[7vw] rounded-full bg-center bg-cover border-4 border-[#ffffff24] shadow-lg" src="/public/img/logo.jpg" alt="" />
                <ul className="flex justify-evenly gap-10 text-slate-500">
                
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
                    <span className="">
                        <button className="flex items-center gap-2 bg-white text-[#2f00fefe] border border-blue-400 shadow-cyan-900 shadow-xl rounded-lg px-4 py-2 cursor-pointer hover:shadow-xl hover:shadow-blue-400">
                        <img className="w-8" src="/public/img/telephone.png" alt="" />
                            More Information</button>
                    </span>
            </div>
        
        </div>
        <div className="bg-blue-600 inline-block fixed bottom-10 left-10">
            <img className="w-[2vw]" src="public/img/arrow-up.png" alt="" />
        </div>
        <div className="bg-green-600 inline-block fixed bottom-10 right-10 rounded-full p-2 z-10">
            <img className="w-[3vw]" src="public/img/whatsapp.png" alt="" />
        </div>
       
        </>

    )
}

export default Navbar