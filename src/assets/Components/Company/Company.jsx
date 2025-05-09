import React from "react";
import { Link } from "react-router-dom"

Link
const Company = () =>{
    const jobs = [
        { 
            job1 : {
                jobTittle: "Customer Support Associate",
                company: "Amazon",
                location: "Bengaluru, India",
                salary: "₹30K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "1-3 Year Experience",
                img: "img/jobs-1.png",
                link: "/amazon"
            }
        },
        {
            job1 : {
                jobTittle: "Warehouse Manager",
                company: "Flipkart",
                location: "Delhi NCR, India",
                salary: "₹40K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "2 Year Experience",
                img: "img/jobs-2.png",
                link: "/flipkart"
            }
        },
        {
            job1 : {
                jobTittle: "Delivery Partner",
                company: "Blinkit",
                location: "Mumbai, India",
                salary: "₹25K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "4 Year Experience",
                img: "img/jobs-3.png",
                link: "/blinkit"
            }
        },
        {
            job1 : {
                jobTittle: "Sales Consultant",
                company: "Nobroker",
                location: "Bengaluru, India",
                salary: "₹35K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "1-2 Year Experience",
                img: "img/jobs-4.png",
                link: "/nobroker"
            }
        },
        {
            job1 : {
                jobTittle: "Technical Support Specialist",
                company: "Teleperformance",
                location: "Hyderabad, India",
                salary: "₹45K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "3 Year Experience",
                img: "img/jobs-5.png",
                link: "/teleperformance"
            }
        },
        {
            job1 : {
                jobTittle: "Operations Executive",
                company: "Swiggy",
                location: "Chennai, India",
                salary: "₹30K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "1 Year Experience",
                img: "img/jobs-6.png",
                link: "/swiggy"
            }
        },
        {
            job1 : {
                jobTittle: "Field Sales Executive",
                company: "Zomato",
                location: "Kolkata, India",
                salary: "₹25K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "0-1 Year Experience",
                img: "img/jobs-7.png",
                link: "/zomato"
            }
        },
        {
            job1 : {
                jobTittle: "Data Analyst",
                company: "Datamark",
                location: "Pune, India",
                salary: "₹50K Monthly",
                typeofjob: "Full-Time (Hybrid)",
                exp: "3+ Years Experience",
                img: "img/jobs-8.png",
                link: "/datamark"
            }
        },
        {
            job1 : {
                jobTittle: "Virtual Assistant",
                company: "Wishup",
                location: "Remote",
                salary: "₹40K Monthly",
                typeofjob: "Contract (Remote)",
                exp: "2+ Year Experience",
                img: "img/jobs-9.png",
                link: "/wishup"
            }
        },
        {
            job1 : {
                jobTittle: "Printing Technician",
                company: "Fresh Print",
                location: "Jaipur, India",
                salary: "₹25K Monthly",
                typeofjob: "Full Time (On Site)",
                exp: "1-3 Years Experience",
                img: "img/jobs-10.png",
                link: "/freshprint"
            }
        }
      
]
    return (

        <>

            <div className="relative mb-10">

                <div className="bg-[url('/img/main-bg.jpg')] max-sm:h-[30vh] sm:h-[55vh] bg-center bg-no-repeat bg-cover relative brightness-[100%]  opacity-20 rounded-b-4xl"></div>
                        <div className="grid grid-cols-4 absolute top-10 items-center justify-items-center">

                        <div className="sm:hidden 2xl:block max-sm:hidden">
                        
                            <div  className="bg-white absolute border border-white shadow-xl inline-block p-4 rounded-full rotate-[10deg] top-20 left-98">
                                <div>
                                    <svg className="w-[1.5vw] max-sm:w-[5vw]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="brown" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>			
                                </div>
                            </div>


                            <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[20deg] absolute bottom-28 right-320">
                                <svg aria-hidden="true" className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="royalblue" d="M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z"></path></svg>  
                            </div> 

                            <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-full rotate-[-10deg] absolute bottom-[-40px] right-350">
                                <svg aria-hidden="true" className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="green" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> 
                            </div>

                            {/* Dots */}
                            <div className="w-[2vw] bg-pink-500 text-pink-500 rounded-full p-4 absolute bottom-[-75px] left-[430px]">

                            </div>
                            <div className="w-[1.5vw] bg-green-500  rounded-full p-3 absolute top-45 left-10">
                            
                            </div>
                            <div className="w-[1vw] bg-yellow-500 text-pink-500 rounded-full p-3 absolute top-20 left-76">
                            
                            </div>
                            <div className="w-[.5vw] bg-red-500 text-pink-500 rounded-full p-2 absolute bottom-0 left-65">
                            
                            </div>
                        </div>
                        <div className="col-span-2 max-2xl:col-span-full items-center justify-center justify-items-center max-2xl:w-[100vw]">
                            <div className="text-center text-[#2f00fefe]">
                                <h1 className="mt-15 text-6xl font-bold max-sm:text-3xl max-sm:mt-10 sm:mb-5"> Jobs</h1>
                            
                                <h3 className="mb-20 text-gray-600 text-md max-sm:mt-0 max-sm:text-md max-sm:m-5 max-2xl:w-[60vw] max-2xl:mx-auto max-sm:w-[80vw] max-sm:mx-auto">See your opportunity in the highest job demand around the world and choose your job dream & make your future bright.</h3>
                            </div >
                            
                        
                        </div>
                        <div className="sm:hidden 2xl:block max-sm:hidden">

                            <div className="border border-white shadow-xl bg-white inline-block p-5 rounded-full rotate-[-30deg] absolute top-50 right-50">
                                <svg aria-hidden="true" className="w-[1vw]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="#008ECC" d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>
                            </div>

                            <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[20deg] absolute top-[0px]">
                                <svg aria-hidden="true" className="w-[1.5vw]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                            </div>

                            <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[-20deg] absolute top-20 right-98">
                                <svg className="w-[1.5vw]"  aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="blue" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>			
                            </div>


                            {/* Dots */}
                            
                            <div className="w-[1.5vw] bg-purple-700 text-pink-500 rounded-full p-3 absolute top-50 right-10">
                            
                            </div>
                            <div className="w-[1.5vw] bg-yellow-500  rounded-full p-3  absolute top-20 right-5">
                            
                            </div>
                            <div className="w-[1vw] bg-green-500 text-pink-500 rounded-full p-3 absolute top-15 right-60">
                            
                            </div>
                            <div className="w-[.5vw] bg-red-500 text-pink-500 rounded-full p-2 absolute bottom-[-70px] right-40">
                            
                            </div>
                        </div>
                    </div>

                </div>

             <div className="w-[90vw] mx-auto grid 2xl:grid-cols-3 gap-10 lg:grid-cols-2 max-2xl:justify-items-center max-sm:justify-items-center"> 
                            {
                            jobs.map((item,index) => (
                                <Link to={item.job1.link}>
                                <div className="sm:p-9 inline-block border border-slate-300 rounded-lg  box-shadow max-sm:p-5" key={index}>
                                    <div className="flex gap-5 border-b border-slate-300 pb-5">
                                        <div className="shadow-xl rounded-full border-2 border-slate-100">
                                            <img className="sm:w-[8vw] md:w-[5vw] lg:w-[4vw] max-sm:w-[10vw]" src={item.job1.img} alt="" />
                                        </div>
                                        <div className="">
                                            <h1 className="sm:text-xl font-semibold text-[#2f00fefe] max-sm:text-sm">{item.job1.jobTittle}</h1>
                                            <h2 className=" text-[#696c89] font-semibold">{item.job1.company}</h2>
                                        </div>
                                    </div>
            
                                    <div className="border-b border-slate-300 pb-5">
                                        <div className="flex gap-2 items-center mt-5">
                                            <img className="sm:w-[1vw] h-[2vh] max-sm:w-[5vw]" src="img/location-jobs.png" alt="" />
                                            <h1 className=" text-[#696c89]" >{item.job1.location}</h1>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <img className="sm:w-[1vw] h-[2vh] max-sm:w-[5vw]" src="img/money-jobs.png" alt="" />
                                            <h1 className=" text-[#696c89]">{item.job1.salary}</h1>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <img src="img/hourglass.png" alt="" />
                                            <h1 className=" text-[#696c89]">{item.job1.typeofjob}</h1>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                        <img src="img/briefcase.png" alt="" />
                                            <h1 className=" text-[#696c89]">{item.job1.exp}</h1>
                                        </div>
                                    </div>
            
                                    <div className="flex sm:gap-10 mt-5 max-sm:gap-0">
                                        <Link to={item.job1.link}>
                                            <button className="flex items-center gap-2 text-white bg-[#2f00fefe] py-2 px-5 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-cyan-600 max-sm:text-sm"> <img className="sm:w-[1.5vw] max-sm:w-[5vw]" src="img/icons8-arrow-50.png" alt="" />View Details</button>
                                        </Link>
                                        <div className="flex items-center gap-2">
                                        <img className="w-[1vw]" src="img/time-jobs.png" alt="" />
                                            <h1 className=" text-[#696c89]">Update2days ago</h1>
                                        </div>
                                    </div>
            
                                </div>
                              </Link>  
                            ))
            
                            }
                            
                        </div>





        
        </>

    )
}

export default Company