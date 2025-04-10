import { NavLink } from "react-router-dom"



export const NavbarSliderButton = ({ isNavVisible, setIsNavVisible }) => {
    

    return (<>
    
    
        <div className="relative h-screen">
           
            <div  className={`bg-white text-[#696c89] fixed top-0 navSlider z-10 h-screen`}>

                <div className="flex justify-between items-center mt-10 px-10 w-[100vw]">
                    <img className=" rounded-full bg-center bg-cover shadow-xl max-sm:w-[30vw]" src="img/logo.jpg" alt="" />
                    <img onClick={()=>setIsNavVisible(false)} className="shadow-xl z-20" src="img/close.png" alt="" />
                </div>
                <ul onClick={() => setIsNavVisible(false)} className="flex flex-col gap-8 p-10 text-xl items-center">
                   
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

            </div>
        </div>
    
    
    
    
    
    
    
    </>)

}