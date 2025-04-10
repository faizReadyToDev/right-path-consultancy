import React from "react";
import { useEffect, useState } from "react";
const ContactUs = () => {
    const link = "https://www.instagram.com/right_pathconsultancy?igsh=MXZvdmRycDhmb2twdQ%3D%3D";
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
        <div >

        
            <div className="relative">

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
                    <h1 className="mt-15 text-6xl font-bold max-sm:text-3xl max-sm:mt-10 sm:mb-5"> Contact Us</h1>
                
                    <h3 className="mb-20 text-gray-600 text-md max-sm:mt-0 max-sm:text-md max-sm:m-5 max-2xl:w-[60vw] max-2xl:mx-auto max-sm:w-[80vw] max-sm:mx-auto">With over 20 years of experience, we can deliver great results to assist your HR Management with additional commitment.</h3>
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




            <div className="flex justify-between w-[90vw] mx-auto mt-20 max-sm:flex-col">
                <div className="w-[43vw] max-sm:w-[90vw] max-sm:mx-auto">
                    <h1 className="text-3xl text-[#2f00fefe] mb-5 font-bold max-sm:text-center">Don't hesitate to contact us</h1>
                    <p className="text-[#696C89] mb-10  max-sm:text-center">We’re here to assist you with all your job search and recruitment needs. Whether you have questions, need guidance, or want to explore career opportunities, our team is ready to help.</p>
                    <div className="flex gap-5  max-sm:flex-col">

                        <div className="">
                            <div className="border border-[#dededf] rounded-lg mb-5">
                                <div className="flex items-center justify-start gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                        <svg className="w-[1.5vw] max-sm:w-[3vw] " stroke-width="2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path></svg>
                                    </div>
                                    <div>
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold hover:text-[white]">Our Email</h1>
                                        <h2 className="text-[#696C89]">rightpathconsultancy001@gmail.com</h2>
                                    </div>
                                </div>
                            </div>
                                <div className="border border-[#dededf] rounded-lg">
                                <div className="flex items-center justify-start gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                    <svg className="w-[1.5vw] max-sm:w-[5vw]" stroke-width="2" viewBox="0 0 338 402" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path></svg>
                                    </div>
                                    <div>
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold">Our Office</h1>
                                        <h2 className="text-[#696C89]">Noor Nagar, Ajmal Bagh, Okhla, New Delhi</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xl text-[#2f00fefe] mt-10 border-t border-[#dededf] font-semibold pt-13 max-sm:hidden">
                                Social Media:
                            </div>
                        </div>
                        <div className="">
                        <div className="border border-[#dededf] rounded-lg mb-5">
                                <div className="flex items-center justify-start gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                    <svg className="w-[1.5vw] max-sm:w-[5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                    </div>
                                    <div>
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold">Our Phone</h1>
                                        <h2 className="text-[#696C89]">+91 6399010030</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#dededf] rounded-lg max-sm:mb-20">
                                <div className="flex items-center justify-start gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                    <svg className="w-[1.5vw] max-sm:w-[5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                                    </div>
                                    <div className="items-center ">
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold">Work Hours</h1>
                                        <h2 className="text-[#696C89]">Everyday 9am-7pm</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between border-t border-[#dededf] mb-20 sm:hidden">
                                <div className="text-xl text-[#2f00fefe] mt-10 font-semibold pt-13">
                                    Social Media:
                                </div>
                                <div className='flex gap-2 mt-10 justify-end pt-10 '>
                                        <div onClick={() => window.open(link, '_blank')} className='cursor-pointer p-4 bg-white rounded-lg inline-block border border-[#2f00fefe]'>
                                            <img className='' src="img/instagram.png" alt="" />
                                        </div>
                                        <div className='p-4 cursor-pointer bg-white rounded-lg inline-block border border-[#2f00fefe]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#2f00ff" fill="blue">
                                            <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                                            <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                                            <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                            </svg>
                                    </div>
                                
                            </div>
                            </div>
                                <div className='flex gap-2 mt-10 justify-end border-t border-[#dededf] pt-10 max-sm:hidden'>
                                    <div onClick={() => window.open(link, '_blank')} className='cursor-pointer p-4 bg-white rounded-lg inline-block border border-[#2f00fefe]'>
                                        <img className='' src="img/instagram.png" alt="" />
                                    </div>
                                    <div className='p-4 cursor-pointer bg-white rounded-lg inline-block border border-[#2f00fefe]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#2f00ff" fill="blue">
                                        <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                </div>
                                
                            </div>

                        </div>
                    
                    </div>
                  
                </div>
                <div className="shadow-xl p-10 rounded-lg border border-[#dededf]">
                    <h1 className="text-2xl text-[#2f00fefe] font-semibold mb-10">Leave a Message</h1>
                    <div className="flex gap-5 mb-5 max-sm:flex-col">
                        <input className="bg-slate-100 p-4 border border-[#dededf] rounded-lg max-sm:w-[71vw] max-sm:pr-0" type="text" placeholder="Your Name"/>
                        <input className="bg-slate-100 p-4 border border-[#dededf] rounded-lg max-sm:w-[71vw] max-sm:pr-0" type="text" placeholder="Your Email"/>
                    </div>
                    <div className="mb-5 ">
                        <input className="bg-slate-100 pr-66 pl-4 rounded-lg py-4 border border-[#dededf] max-sm:w-[71vw] max-sm:pr-0" type="text" placeholder="Subject"/>
                    </div>
                    <div>
                        <input className="bg-slate-100 text-black pr-66 pl-4 rounded-lg pt-4 pb-30 border border-[#dededf] mb-5 max-sm:w-[71vw] max-sm:pr-0" type="text" placeholder="Message"/>
                    </div>
                    <button className="flex items-center gap-2 text-white bg-[#2f00fefe] py-2 px-5 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-blue-600">Send Message</button>
                </div>
            </div>
            <div className="flex justify-center mb-40 mt-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.2238757952557!2d77.28469673895684!3d28.55631449392657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f5e3f856fb%3A0x255ab709bf448ac1!2sAjmal%20Bagh%2C%20Noor%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1741774455533!5m2!1sen!2sin" 
            className={`w-[90vw] h-[65vh] ${showDiv ? "hidden" : "visible"}`} 
            loading="lazy" 
            ></iframe>
            </div>
          

        </div>
        
        
        </>


    )
}

export default ContactUs