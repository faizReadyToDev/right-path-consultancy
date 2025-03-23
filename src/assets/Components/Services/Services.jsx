import { useEffect, useState } from "react";


const Services = () => {
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

    return (

        <>



        <div className={`${showDiv ? "scale-0" : "visible"}`}>
        <div className="">

            <div className="bg-[url('/img/main-bg.jpg')] h-[50vh] bg-center bg-no-repeat bg-cover relative brightness-[100%]  opacity-20 rounded-b-4xl"></div>
            <div className="grid grid-cols-4 absolute top-50 items-center">

            <div className="">

                <div  className="bg-white absolute border border-white shadow-xl inline-block p-4 rounded-full rotate-[10deg] top-27 left-98">
                    <div>
                        <svg className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="brown" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>			
                    </div>
                </div>


                <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[20deg] absolute bottom-28 right-320">
                    <svg className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="royalblue" d="M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z"></path></svg>  
                </div> 

                <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-full rotate-[-10deg] absolute bottom-[-40px] right-330">
                    <svg className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="green" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> 
                </div>

                {/* Dots */}
                <div className="w-[2vw] bg-pink-500 text-pink-500 rounded-full p-4 absolute bottom-[-15px] left-[430px]">

                </div>
                <div className="w-[1.5vw] bg-green-500  rounded-full p-3 absolute top-45 left-15">
                
                </div>
                <div className="w-[1vw] bg-yellow-500 text-pink-500 rounded-full p-3 absolute top-20 left-76">
                
                </div>
                <div className="w-[.5vw] bg-red-500 text-pink-500 rounded-full p-2 absolute bottom-0 left-65">
                
                </div>
            </div>
            <div className="col-span-2">
                <div className="text-center text-[#2f00fefe]">
                    <h1 className="mt-20 text-6xl font-bold mb-5">Services</h1>
                    <h3 className="mb-20 text-gray-600 text-md">These services aim to support Human Resources in managing their workforce effectively and efficiently.</h3>
                </div >
                

            </div>
            <div>

                <div className="border border-white shadow-xl bg-white inline-block p-5 rounded-full rotate-[-30deg] absolute top-50 right-50">
                    <svg className="w-[1vw]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="#008ECC" d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>
                </div>

                <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[20deg] absolute bottom-[-30px]">
                    <svg className="w-[1.5vw]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                </div>

                <div className="border bg-white border-white shadow-xl inline-block p-4 rounded-lg rotate-[-20deg] absolute top-27 right-98">
                    <svg className="w-[1.5vw]"  viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="blue" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>			
                </div>


                {/* Dots */}
                
                <div className="w-[1.5vw] bg-purple-700 text-pink-500 rounded-full p-3 absolute top-50 right-10">
                
                </div>
                <div className="w-[1.5vw] bg-yellow-500  rounded-full p-3  absolute top-45">
                
                </div>
                <div className="w-[1vw] bg-green-500 text-pink-500 rounded-full p-3 absolute top-15 right-60">
                
                </div>
                <div className="w-[.5vw] bg-red-500 text-pink-500 rounded-full p-2 absolute top-[10px] right-30">
                
                </div>
            </div>
            </div>

        </div>
            <div className="w-[35vw] mx-auto text-center mt-10 ">
                <h1 className="text-3xl text-[#2f00fefe] font-bold mb-5">Explore Your Benefits with Right Path</h1>
                <p className="text-[#696c89]">Discover the wide range of benefits we offer to enhance your experience. From expert support to personalized solutions, explore how we can help you achieve your goals effectively.</p>
            </div>
            <div className="p-20 grid grid-cols-3 gap-10 ">
                <div className="p-4 border border-slate-300 w-[28vw] rounded-lg box-shadow">
                <div className="p-2 bg-[#2f00fefe] inline-block">
                    <svg className="w-[1vw]"  viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path></svg>
                </div>
           
                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Talent Mapping</h1>
                <h2 className="text-[#696c89]">Talent Mapping
                Identifying and matching your unique talents with roles that help you thrive professionally.</h2>
                </div>
                <div className="p-4 border border-slate-300 w-[28vw] rounded-lg box-shadow">
                <div className="p-2 bg-[#2f00fefe] inline-block">
                    <svg className="w-[1vw]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill=
                    'white' d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg>
                </div>
           
                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Employer Branding</h1>
                <h2 className="text-[#696c89]">Helping businesses build a strong, recognizable brand to attract top talent.</h2>
                </div>
                <div className="p-4 border border-slate-300 w-[28vw] rounded-lg box-shadow">
                <div className="p-2 bg-[#2f00fefe] inline-block">
                    <svg className="w-[1vw]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg>
                    </div>
           
                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">HR Consulting</h1>
                <h2 className="text-[#696c89]">HR Consulting
                Offering expert advice and comprehensive support for various aspects of human resource management.</h2>
                </div>
                <div className="p-4 border border-slate-300 w-[28vw] rounded-lg box-shadow">
                <div className="p-2 bg-[#2f00fefe] inline-block">
                <svg className="w-[1vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>
                </div>
           
                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Talent Sourcing</h1>
                <h2 className="text-[#696c89]">
                Leverage innovative strategies to find the perfect job opportunities aligned with your skills and aspirations.</h2>
                </div>
                <div className="p-4 border border-slate-300 w-[28vw] rounded-lg box-shadow">
                <div className="p-2 bg-[#2f00fefe] inline-block">
                <svg className="w-[1vw]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"></path></svg>
                </div>
           
                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Recruitment Process</h1>
                <h2 className="text-[#696c89]">Simplifying the hiring journey with expert-led processes to secure the best opportunities for job seekers.</h2>
                </div>
                <div className="p-4 border border-slate-300 w-[28vw] rounded-lg box-shadow">
                <div className="p-2 bg-[#2f00fefe] inline-block">
                <svg className="w-[1vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M109.46 244.04l134.58-134.56-44.12-44.12-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86l100.17 100.18zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01 113.2 113.2 46.02-46.03zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9 316.08 82.71zm186.63 285.43l-33.64-33.64-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86z"></path></svg>
                </div>
           
                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Talent Management</h1>
                <h2 className="text-[#696c89]">Helping organizations and individuals achieve productivity through effective workforce management.</h2>
                </div>
               

            </div>
        </div>
        
        
        
        </>

    )
}

export default Services