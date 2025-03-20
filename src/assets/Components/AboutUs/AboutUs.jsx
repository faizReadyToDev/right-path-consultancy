import { useEffect,useState } from "react";
const AboutUs = () => {

    return (
        <>
            <div className= {`mt-20 mb-40 `}>

                <div className="w-[50vw] mx-auto text-center ">
                    <h1 className="text-3xl text-[#2f00fefe] font-bold mb-5">Your Gateway to a World of Career Opportunities</h1>
                    <p className="text-[#696c89]">Right Path is a trusted job consultancy platform dedicated to connecting job seekers with verified opportunities and providing affordable training and career guidance. We partner with top companies like Amazon, Flipkart, and Swiggy to create skill-based employment solutions tailored to individual goals.</p>
                </div>

                <div className="p-20 grid grid-cols-3 gap-10">
                    <div className="p-4 border border-slate-300 w-[28vw] rounded-lg">
                        <div className="flex items-center gap-5">
                            <div className="p-2 bg-[#2f00fefe] inline-block">
                                <svg aria-hidden="true" className="w-[1vw]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path></svg>
                            </div>
                        
                                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Who We Are?</h1>
                        </div>
                            <h2 className="text-[#696c89] text-start pl-13">Employee Guide is a trusted platform dedicated to connecting job seekers with genuine, skill-based opportunities. With a focus on affordability and transparency, we help individuals find the right fit for their careers while supporting employers in discovering top talent.</h2>
                    </div>
                    <div className="p-4 border border-slate-300 w-[28vw] rounded-lg">
                        <div className="flex items-center gap-5">
                            <div className="p-2 bg-[#2f00fefe] inline-block">
                                <svg aria-hidden="true" className="w-[1vw]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
                            </div>
                        
                                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Our Vision</h1>
                        </div>
                            <h2 className="text-[#696c89] text-start pl-13">To revolutionize employment by creating a reliable platform that bridges the gap between talent and opportunity. We aim to empower individuals with meaningful job opportunities that align with their skills and aspirations.</h2>
                    </div>
                    <div className="p-4 border border-slate-300 w-[28vw] rounded-lg">
                        <div className="flex items-center gap-5">
                            <div className="p-2 bg-[#2f00fefe] inline-block">
                                <svg aria-hidden="true" className="w-[1vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z"></path></svg>
                            </div>
                        
                                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Our MIssion</h1>
                        </div>
                            <h2 className="text-[#696c89] text-start pl-13">To provide a transparent, user-friendly, and inclusive job consultancy service. We strive to make employment accessible and affordable while fostering growth for both job seekers and employers across industries.</h2>
                    </div>
                </div>

                <div className="text-center mt-10 mb-10">
                    <h1 className="text-4xl text-[#2f00fefe] font-semibold mb-5">Over 183K+</h1>
                    <h1 className="text-4xl text-[#2f00fefe] font-semibold">Global User Parpicipation</h1>
                </div>

                <div className="flex w-[80vw] mx-auto justify-evenly">
                    <div className="">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">7</h1>
                                <span className="text-blue-400 text-xl">k</span>
                            </div>
                            <h2 className="text-[#696C89]">Satisfied People</h2>
                        </div>
                        <div className="border-l border-[#dededf] pl-20">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">350</h1>
                                <span className="text-blue-400 text-xl">+</span>
                            </div>
                            <h2 className="text-[#696C89]">Company</h2>
                        </div>
                        <div className="border-l border-[#dededf] pl-20">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">9</h1>
                                <span className="text-blue-400 text-xl">k</span>
                            </div>
                            <h2 className="text-[#696C89]">Job Vacancy</h2>
                        </div>
                        <div className="border-l border-[#dededf] pl-20">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">3</h1>
                                <span className="text-blue-400 text-xl">k</span>
                            </div>
                            <h2 className="text-[#696C89]">Success Stories</h2>
                        </div>
                </div>
                
                <img className="mt-10 h-[60vh] w-[80vw] mx-auto" src="img/bg-aboutus.png" alt="" />

                <div className="flex justify-between w-[90vw] mx-auto items-center mt-20">
                    <h1 className="text-2xl text-[#2f00fefe] font-bold mb-3">Your Success Starts With Our Expert Team</h1>
                    <button className="flex items-center gap-4 text-white bg-[#2f00fefe] py-2 px-10 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-blue-600"> <img className="w-[1.5vw]" src="img/icons8-arrow-50.png" alt="" /> Meet All Team</button>
                </div>


                <div className="w-[90vw] mx-auto bg-slate-100 p-10 border border-slate-300 rounded-lg mt-40">
                    <div className="mb-20">
                        <h1 className="text-2xl text-[#2f00fefe] font-bold mb-3">Your Success Starts With Our Expert Team</h1>
                        <h2 className="text-[#696C89]">Over 8+ million interactions, <span className="font-bold">800.000 Success</span> stories make yours now.</h2>
                    </div>
                    <div className="flex gap-2">
                        <input className=" bg-white border border-slate-300 rounded-md pr-220 pl-5" type="text" placeholder="Your Email"/>
                        <button className="flex items-center gap-4 text-white bg-[#2f00fefe] py-2 px-10 rounded-md cursor-pointer hover:shadow-sm hover:shadow-cyan-900"> <img className="w-[1.5vw]" src="img/icons8-arrow-50.png" alt="" /> Subscribe</button>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-[#696C89]">✌️ We Promise not spam.</h1>
                    </div>
                </div>
            </div>
         

        
        </>


    )
}

export default AboutUs