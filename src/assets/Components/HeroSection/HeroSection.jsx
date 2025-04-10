import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";
import Review from "../Review/Review";
import Services from "../Services/Services";
import { Link } from "react-router-dom";

const HeroSection = () => {

        const [showDiv,setShowDiv] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
              if (
                window.innerHeight + document.documentElement.scrollTop>=
                document.documentElement.offsetHeight
              ) {
                setShowDiv(true);
              } else {
                setShowDiv(false);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
          },[]);
    return(
        <>
        <div className={ ` ${showDiv ? "scale-0" : "visible"}`} >

        
           <div className="relative">

           
               <div className="bg-[url('/img/main-bg.jpg')] h-[77vh] bg-center bg-no-repeat bg-cover relative brightness-[100%]  opacity-20 rounded-b-4xl"></div>
                <div className="grid grid-cols-4 absolute top-50 items-center justify-items-center max-sm:top-20">

                <div className="sm:hidden 2xl:block max-sm:hidden">
                 
                    <div  className="bg-white absolute border border-white shadow-xl inline-block p-4 rounded-full rotate-[10deg] top-27 left-98">
                        <div>
			                <svg className="w-[1.5vw]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="brown" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>			
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
                        <h1 className="mt-20 text-6xl font-bold max-sm:mt-0 max-sm:text-3xl ">Find Your Dream Job</h1>
                        <h2 className="text-3xl font-semi-bold mb-10 max-sm:mt-3 max-sm:text-2xl">Empowering Careers, One Opportunity at a Time</h2>
                        <h3 className="mb-20 text-gray-600 text-md max-sm:mt-0 max-sm:text-md max-sm:m-5 max-2xl:w-[60vw] max-2xl:mx-auto max-sm:w-[80vw] max-sm:mx-auto">We connect job seekers with top employers across India. Our mission is simple: to provide <span className="font-bold ">genuine, budget-friendly, and skill-based employment opportunities</span> tailored to your aspirations.</h3>
                    </div >
                    
                    <div className="mt-10 ml-20 sm:ml-0 max-sm:ml-0 flex items-center max-sm:flex-col max-sm:justify-center">
                        <Link to="/company">
                            <button className="flex items-center gap-4 text-white bg-[#2f00fefe] sm:py-2 sm:px-10 max-sm:px-3 max-sm:py-2 max-sm:mb-5 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-blue-600 "> <img className="sm:w-[3vw] md:w-[1.5vw] max-sm:w-[6vw]" src="img/icons8-arrow-50.png" alt="" /> Get Started</button>
                        </Link>

                        <div className="flex items-center max-sm:flex-col max-sm:mt-3">
                            <div className="flex relative justify-center items-center max-sm:justify-center">

                                <div className="w-[4vw] max-sm:w-[8vw] border-[3.5px] border-white rounded-full absolute sm:left-[10px] md:left-[10px] lg:left-[15px] max-sm:right-[20px]">
                                    <img className="rounded-full" src="img/main-1.png" alt="" />
                                </div>
                                <div className=" w-[4vw] max-sm:w-[8vw] border-[3.5px] border-white rounded-full absolute sm:left-[30px] md:left-[40px] lg:left-[60px] max-sm:right-[0px]">
                                    <img className="rounded-full" src="img/main-2.png" alt="" />
                                </div>
                                <div className=" w-[4vw] max-sm:w-[8vw] border-[3.5px] border-white rounded-full absolute sm:left-[55px] md:left-[65px] lg:left-[105px] max-sm:right-[-20px]">
                                    <img className="rounded-full" src="img/main-3.jpg" alt="" />
                                </div>
                                <div className=" w-[4vw] max-sm:w-[8vw] border-[3.5px] border-white rounded-full absolute sm:left-[80px] md:left-[90px] lg:left-[150px] max-sm:right-[-40px]">
                                    <img className="rounded-full" src="img/main-4.jpg" alt="" />
                                </div>
                            </div>
                            <span className="text-[#2f00fefe] font-bold sm:ml-[120px] md:ml-[150px] lg:ml-[220px] max-sm:ml-0 max-sm:mt-3">5K+ Active Members</span>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden 2xl:block max-sm:hidden">
    
                    <div className="border border-white shadow-xl bg-white inline-block p-5 rounded-full rotate-[-30deg] absolute top-50 right-50">
                        <svg aria-hidden="true" className="w-[1vw]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="#008ECC" d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>
                    </div>

                    <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[20deg] absolute bottom-[-40px] right-70">
                        <svg aria-hidden="true" className="w-[1.5vw]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                    </div>

                    <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[-20deg] absolute top-28 right-98">
                        <svg className="w-[1.5vw]"  aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="blue" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>			
                    </div>


                    {/* Dots */}
                    
                    <div className="w-[1.5vw] bg-purple-700 text-pink-500 rounded-full p-3 absolute top-50 right-10">
                    
                    </div>
                    <div className="w-[1.5vw] bg-yellow-500  rounded-full p-3  absolute top-45">
                    
                    </div>
                    <div className="w-[1vw] bg-green-500 text-pink-500 rounded-full p-3 absolute top-15 right-60">
                    
                    </div>
                    <div className="w-[.5vw] bg-red-500 text-pink-500 rounded-full p-2 absolute bottom-[10px] right-40">
                    
                    </div>
                </div>
            </div>

            </div>
          

            <div className=" h-[30vh] items-center shadow-xl rounded-4xl bg-slate-100 justify-center py-10 animationSlider overflow-x-hidden max-sm:h-[30vh]">
                <h1 className="text-gray-500 text-center font-semibold mb-15">Collaborating with <span className="text-blue-800 font-bold">3200+ </span>international renowned companies</h1>
                <div className="flex  justify-evenly gap-14 logo-slider ">
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-1.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-2.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-3.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-4.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-5.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-6.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-7.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-8.png" alt="" />


                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-1.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-2.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-3.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-4.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-5.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-6.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-7.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-8.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-1.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-2.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-3.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-4.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-5.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-6.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-7.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-8.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-1.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-2.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-3.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-4.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-5.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-6.png" alt="" />
                    <img  className="w-[10vw] max-sm:w-[40vw]" src="img/company-7.png" alt="" />
                    <img className="w-[10vw] max-sm:w-[40vw]"  src="img/company-8.png" alt="" />

                </div>

            </div>

            <div className="flex justify-between max-2xl:mx-auto bg-white  rounded-4xl sm:p-20 md:flex-col sm:flex-col max-sm:flex-col lg:flex-row max-sm:p-0 max-sm:pt-10 max-sm:mt-0">
                <div className="w-[40vw] sm:w-[50vw] sm:mx-auto sm:mb-5 max-sm:w-[80vw] max-sm:mx-auto max-sm:mb-5 ">
                    <h1 className="text-4xl text-[#2f00fefe] font-bold mb-3">Find The One That Suits You</h1>
                    <h2 className="text-[#696C89] ">See your opportunity in the highest job demand around the world and choose your job dream & make your future bright. Discover your next career move!</h2>
                </div>
                <div className="flex gap-10 max-sm:gap-5 max-sm:justify-center sm:justify-center">
                    
                        <div className="flex-col justify-end max-sm:p-4">
                        <h1 className="text-4xl text-[#2f00fefe] font-bold mb-3 flex justify-end">764K</h1>
                        <div className="flex mb-3 justify-end">
                            <img className="w-[1vw] max-sm:w-[3vw]" src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]" src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]" src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]" src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]" src="img/star.png" alt="" />
                        </div>
                        <h2 className="text-[#696C89] flex justify-end">Satisfied People</h2>
                        </div>
                    

               
              

                    <div className="border-l border-[#dededf] sm:px-6 max-sm:p-4">

                        <h1 className="text-4xl text-[#2f00fefe] font-bold mb-3 flex justify-end">1,812+K</h1>
                        <div className="flex  mb-3 justify-end">

                            <img  className="w-[1vw] max-sm:w-[3vw]" src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]"  src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]"  src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]"  src="img/star.png" alt="" />
                            <img className="w-[1vw] max-sm:w-[3vw]"  src="img/star.png" alt="" />
                        </div>
                        <h2 className="text-[#696C89] flex justify-end">Global Company</h2>
                    </div>
                 
                    
                 
                </div>

            </div>
            

  
            <Jobs/>
            <Review/> 
   
        

          

           
            

            </div>
        </>
    )
}
export default HeroSection