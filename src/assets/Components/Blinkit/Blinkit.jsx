import React from "react";
const Blinkit = () =>{

    const whatsAppHandle = () => {
        const whatsappLink = `https://wa.me/916399010030?text=${encodeURIComponent("Hello, I would like to inquire about...")}`;
        window.open(whatsappLink, "_blank");
    }

    return(
        <>
        


        <div className="relative">
            <div className="bg-[url('img/main-bg.jpg')] h-[77vh] bg-center bg-no-repeat bg-cover relative brightness-[100%]  opacity-20 rounded-b-4xl"></div>
            <div className="absolute top-10">
            <div className="items-center w-[100vw]">
                <div className="items-center flex justify-center">
                    <div className=" inline-block mb-5 shadow-xl rounded-full border-2 border-slate-300">
                        <img className="w-[6vw] max-sm:w-[20vw]" src="img/jobs-3.png" alt="" />
                    </div>
                </div>
                <div className="items-center">
                    <h2 className=" text-[#696c89] text-xl font-semibold text-center mb-5 max-sm:text-lg">Blinkit</h2>
                    <h1 className="text-3xl font-semibold text-[#2f00fefe] text-center max-sm:text-xl">Delivery Partner</h1>
                </div>
                <div className="border-b border-t border-slate-300 pb-5 flex gap-15 text-lg items-center justify-center mt-5 pt-5 max-sm:flex-col max-sm:gap-5">
                            <div className="flex gap-2 items-center">
                                <img className="w-[1vw] h-[2vh] max-sm:w-[5vw]" src="img/location-jobs.png" alt="" />
                                <h1 className=" text-[#2f00fefe]" >Mumbai, India
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img className="w-[1vw] h-[2vh] max-sm:w-[5vw]" src="img/money-jobs.png" alt="" />
                                <h1 className=" text-[#2f00fefe]">₹25K Monthly</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="img/hourglass.png" alt="" />
                                <h1 className=" text-[#2f00fefe]">Contract (On-site)</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                            <img src="img/briefcase.png" alt="" />
                                <h1 className=" text-[#2f00fefe]">0-1 Year Experience</h1>
                            </div>
                        </div>
                        <div className="items-center flex justify-center mt-5">
                            <button  onClick={whatsAppHandle} className="flex items-center gap-2 text-white bg-[#2f00fefe] py-2 px-5 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-cyan-600"> 
                            <svg aria-hidden="true" class="w-[1vw] max-sm:w-[5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                 APPLY FOR JOB</button>
                        </div>
            </div>
            </div>
            
          
        </div>

        <div className="flex  w-[80vw] mx-auto mt-20 justify-evenly jobs-details max-sm:w-[90vw]">
            <div className="w-[25vw] border border-[#696c89] pl-10 pt-5 pr-10 h-[96vh] rounded-lg max-sm:hidden">
                <h1 className="text-[#2f00fefe] font-semibold text-xl">Job Information</h1>
                <div>
                    <div className="">
                    <div className=" pb-5 text-lg items-center pt-5">
                           
                            <div className="">
                                <div className="flex gap-2 items-center border-t border-[#696c89] pt-5">
                                    <img className="w-[1.5vw]" src="img/location-details.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Location</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">Mumbai, India</div>
                            </div>
                            <div className="">
                                <div className="flex gap-2 items-center  pt-5">
                                    <img className="w-[1.5vw]" src="img/chart.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Career Level</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">Fresher</div>
                            </div>
                            <div className="">
                                <div className="flex gap-2 items-center  pt-5">
                                    <img className="w-[1.5vw]" src="img/hourglass.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Employee Type</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">Contract (Remote)</div>
                            </div>
                            <div className="">
                                <div className="flex gap-2 items-center  pt-5">
                                    <img className="w-[1.5vw]" src="img/pencil.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Job Type</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">Delivery Partner</div>
                            </div>
                            <div className="">
                                <div className="flex gap-2 items-center  pt-5">
                                    <img className="w-[1.5vw]" src="img/briefcase.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Experience</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">0-1 Year Experience</div>
                            </div>
                            <div className="">
                                <div className="flex gap-2 items-center  pt-5">
                                    <img className="w-[1.5vw]" src="img/money-jobs.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Salary</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">₹25K Monthly</div>
                            </div>
                            <div className="mb-5">
                                <div className="flex gap-2 items-center  pt-5">
                                    <img className="w-[1.5vw]" src="img/Date.png" alt="" />
                                    <h1 className="  text-[#696c89]" >Date posted</h1>
                                </div>
                                <div className="ml-8 text-[#2f00fefe] ">1 April, 2025</div>
                            </div>

                            
                            <div className="items-center flex justify-center mt-5">
                            <button className="flex items-center gap-2 text-white bg-[#2f00fefe] py-3 px-21 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-cyan-600"> 
                            <svg aria-hidden="true" class="w-[1vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                 APPLY NOW</button>
                        </div>
                          
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Scrolling free div */}
            <div className="w-[45vw] max-sm:w-[90vw]">
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-xl mb-5">
                    Job Highlights
                    </h1>
                    <p className="items-center flex-col justify-items-start pl-10 text-[#696c89]">
                        <h1 className="items-center flex justify-center gap-2"> <svg className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Flexible work hours for maximum convenience.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>Remote work setup to support work-life balance.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>Weekly payouts with additional incentives.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Opportunity to collaborate with a leading delivery service provider.</h1>
                    </p>
                </div>
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-xl mb-5 mt-10">
                    Job Description
                    </h1>
                    <p className="items-center flex-col justify-items-start pl-10 text-[#696c89]">
                    As a <span className="font-semibold">Delivery Partner </span> at Blinkit, you will ensure timely delivery of groceries and other essentials to customers, providing an exceptional delivery experience. This role is perfect for self-motivated individuals seeking flexible work opportunities.
                    </p>
                </div>
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-xl mb-5 mt-10">
                    Job Responsibilities :
                    </h1>
                    <p className="items-center flex-col justify-items-start pl-10 text-[#696c89]">
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Deliver orders to customers accurately and on time.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Maintain a professional and customer-friendly attitude.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Follow route optimization for efficient deliveries.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Communicate with the support team for assistance or updates.</h1>
                       
                    </p>
                </div>
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-xl mb-5 mt-10 ">
                    Job Requirements :
                    </h1>
                    <p className="items-center flex-col justify-items-start pl-10 text-[#696c89]">
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Basic smartphone knowledge to operate the delivery app.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Valid two-wheeler license and vehicle.</h1>
                        <h1 className="items-center flex justify-center gap-2"> <svg fill="gray" className="w-[0.4vw] max-sm:w-[2.5vw]" viewBox="0 0 612 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> Strong interpersonal and time management skills.</h1>
        
                    </p>
                </div>
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-xl mb-5 mt-10">Additional Information</h1>
                    <div className="grid grid-cols-3 max-sm:grid-cols-1">
                        <div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Career Level</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Senior Execute</h1>
                            </div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Years of Experience</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">1-3 Years</h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Qualification</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Professional Certificate</h1>
                            </div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Employee Type</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Contract (Remote)</h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Job Type</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Customer Support Associate</h1>
                            </div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Educational Background</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Not mandatory</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-2xl mb-5 mt-10">Company Overview</h1>
                    <p>Blinkit is a leading instant delivery service provider revolutionizing the e-commerce logistics space. We ensure convenience, speed, and reliability for millions of customers.</p>
                </div>
                <div className="text-[#2f00fefe] font-semibold text-xl mb-5 mt-10">Company Photo</div>
                <div className="grid grid-cols-3 gap-2 mb-10">
                    <div className="flex flex-col gap-2">
                        <img src="img/office-pic-1.jpg" alt="" />
                        <img src="img/office-pic-4.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src="img/office-pic-2.jpg" alt="" />
                        <img src="img/office-pic-5.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src="img/office-pic-3.jpg" alt="" />
                        <img src="img/office-pic-6.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-[#2f00fefe] font-semibold text-lg">Additional Information Company</h1>
                    <div className="grid grid-cols-3 max-sm:grid-cols-1">
                        <div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Registration No.</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5"></h1>
                            </div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Company Size</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">10 - 50 Employees
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Industry</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Information Technology (IT)</h1>
                            </div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Average Processing Time</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">14 Days</h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Website</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">www.blinkit.com</h1>
                            </div>
                            <div>
                                <h1 className="text-[#696c89] font-semibold mt-5">Benefits & Others</h1>
                                <h1 className="text-[#2f00fefe] font-semibold  mb-5">Medical, Sports (e.g. Gym)</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex items-center mt-10 mb-5 gap-5">
                    <h1 className="text-[#2f00fefe] text-xl font-semibold  ">Share this job: </h1>
                    <div className="flex gap-3">
                        <img className="w-[1.5vw] h-[3vh] max-sm:w-[5vw]" src="img/facebook.png" alt="" />
                        <img className="w-[1.5vw] h-[3vh] max-sm:w-[5vw]" src="img/twitter.png" alt="" />
                        <img className="w-[1.5vw] h-[3vh] max-sm:w-[5vw]" src="img/linkedin-jobs.png" alt="" />
                    </div>
                </div>
            </div>
        </div>


















        
        
        
        </>
    )
}

export default Blinkit