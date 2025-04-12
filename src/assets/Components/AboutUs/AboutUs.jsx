import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect , useState} from 'react';
const AboutUs = () => {

   const [slidesPerViews, setSlidesPerViews] = useState(3);
       useEffect(() => {
   
           const handleResize = () => {
               const width = window.innerWidth;
               if(width <= 750){
                   setSlidesPerViews(1)
                   console.log(slidesPerViews);
                   
               }else if(width < 1400){
                   setSlidesPerViews(2)
                   console.log(slidesPerViews);
               }else{
                   setSlidesPerViews(3)
                   console.log(slidesPerViews);
               }
           }
   
           handleResize();
           window.addEventListener('resize', handleResize);
   
   
           return () => window.removeEventListener('resize', handleResize);
           
       },[slidesPerViews])

    const faizInsta = "https://www.instagram.com/iamfaiiizzzz/"
    const faizLinkedin = "https://www.linkedin.com/in/faiz-ur-rehman-400b36247"
    const umarInsta = "https://www.instagram.com/right_pathconsultancy?igsh=MXZvdmRycDhmb2twdQ%3D%3D";
    const umarLinkedin = "https://www.linkedin.com/in/faiz-ur-rehman-400b36247"


    return (
        <>

<div className="relative">

<div className="bg-[url('/img/main-bg.jpg')] max-sm:h-[30vh] sm:h-[55vh] bg-center bg-no-repeat bg-cover relative brightness-[100%]  opacity-20 rounded-b-4xl"></div>
        <div className="grid grid-cols-4 absolute top-10 items-center justify-items-center">

        <div className="sm:hidden 2xl:block max-sm:hidden">
         
            <div  className="bg-white absolute border border-white shadow-xl inline-block p-4 rounded-full rotate-[10deg] top-20 left-98">
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
                <h1 className="mt-15 text-6xl font-bold max-sm:text-3xl max-sm:mt-10 sm:mb-5">About Us</h1>
               
                <h3 className="mb-20 text-gray-600 text-md max-sm:mt-0 max-sm:text-md max-sm:m-5 max-2xl:w-[60vw] max-2xl:mx-auto max-sm:w-[80vw] max-sm:mx-auto">At Employee Guide, we are dedicated to empowering job seekers and employers by bridging the gap between talent and opportunity.</h3>
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



            <div className= {`mt-20 mb-60 `}>

                <div className="w-[50vw] mx-auto text-center max-sm:w-[80vw]">
                    <h1 className="text-3xl text-[#2f00fefe] font-bold mb-5">Your Gateway to a World of Career Opportunities</h1>
                    <p className="text-[#696c89]">Right Path is a trusted job consultancy platform dedicated to connecting job seekers with verified opportunities and providing affordable training and career guidance. We partner with top companies like Amazon, Flipkart, and Swiggy to create skill-based employment solutions tailored to individual goals.</p>
                </div>

                <div className="p-20 grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-sm:p-5">
                    <div className="p-4 border border-slate-300 w-[28vw] max-sm:w-[90vw] rounded-lg box-shadow">
                        <div className="flex items-center gap-5">
                            <div className="p-2 bg-[#2f00fefe] inline-block">
                                <svg aria-hidden="true" className="w-[1vw] max-sm:w-[5vw]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path></svg>
                            </div>
                        
                                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Who We Are?</h1>
                        </div>
                            <h2 className="text-[#696c89] text-start pl-13">Right Path is a trusted platform dedicated to connecting job seekers with genuine, skill-based opportunities. With a focus on affordability and transparency, we help individuals find the right fit for their careers while supporting employers in discovering top talent.</h2>
                    </div>
                    <div className="p-4 border border-slate-300 w-[28vw] max-sm:w-[90vw] rounded-lg box-shadow">
                        <div className="flex items-center gap-5">
                            <div className="p-2 bg-[#2f00fefe] inline-block">
                                <svg aria-hidden="true" className="w-[1vw] max-sm:w-[5vw]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
                            </div>
                        
                                <h1 className="text-lg text-[#2f00fefe] mb-3 mt-3 font-semibold">Our Vision</h1>
                        </div>
                            <h2 className="text-[#696c89] text-start pl-13">To revolutionize employment by creating a reliable platform that bridges the gap between talent and opportunity. We aim to empower individuals with meaningful job opportunities that align with their skills and aspirations.</h2>
                    </div>
                    <div className="p-4 border border-slate-300 w-[28vw] max-sm:w-[90vw] rounded-lg box-shadow">
                        <div className="flex items-center gap-5">
                            <div className="p-2 bg-[#2f00fefe] inline-block">
                                <svg aria-hidden="true" className="w-[1vw] max-sm:w-[5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z"></path></svg>
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

                <div className=" w-[80vw] mx-auto justify-evenly grid grid-cols-4 max-sm:grid-cols-2 max-sm:w-[100vw]">
                    <div className="col-span-1 pl-20  max-sm:mb-10 max-sm:pl-20">
                       

                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">7</h1>
                                <span className="text-blue-400 text-xl">k</span>
                            </div>
                            <h2 className="text-[#696C89]">Satisfied People</h2>
                       
                        </div>
                        <div className="border-l border-[#dededf] pl-20 col-span-1 max-sm:pl-20">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">350</h1>
                                <span className="text-blue-400 text-xl">+</span>
                            </div>
                            <h2 className="text-[#696C89]">Company</h2>
                        </div>
                        <div className="border-l border-[#dededf] pl-20 col-span-1 max-sm:pl-20">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">9</h1>
                                <span className="text-blue-400 text-xl">k</span>
                            </div>
                            <h2 className="text-[#696C89]">Job Vacancy</h2>
                        </div>
                        <div className="border-l border-[#dededf] pl-20 col-span-1 max-sm:pl-15">
                            <div className="flex w-[6vw] justify-center">
                                <h1 className="text-5xl text-[#2f00fefe] font-bold mb-3">3</h1>
                                <span className="text-blue-400 text-xl">k</span>
                            </div>
                            <h2 className="text-[#696C89]">Success Stories</h2>
                        </div>
                </div>
                
                <img className="mt-10 h-[60vh] w-[80vw] mx-auto max-sm:h-[50vw] max-sm:w-[100vw]" src="img/bg-aboutus.png" alt="" />

                <div className="flex justify-between w-[90vw] mx-auto items-center mt-20">
                    <h1 className="text-2xl text-[#2f00fefe] font-bold mb-3 max-sm:text-center">Your Success Starts With Our Expert Team</h1>
                    <button className="flex items-center gap-4 text-white bg-[#2f00fefe] py-2 px-10 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-blue-600 max-sm:hidden"> <img className="w-[1.5vw]" src="img/icons8-arrow-50.png" alt="" /> Meet All Team</button>
                </div>

                <div className='mt-10 sm:p-20 flex gap-30  w-[90vw] mx-auto max-sm:flex-col max-sm:p-0 max-sm:gap-10'>
                <div>
                
                <div className='bg-gray-100 w-[13vw] h-[55vh] rounded-t-full rounded-b-full pt-5 pb-5 max-sm:w-[60vw] max-sm:mx-auto'>
                    <div className='flex justify-center mt-10 mb-5'>
                        <img className='w-[10vw] rounded-full max-sm:w-[30vw]' src="img/owner.jpg" alt="" />
                    </div>
                    <h1 className='text-center mb-3 text-[#2f00fefe] font-bold'>Umar Hayat Khan</h1>
                    <h2 className='text-center mb-10 text-[#696C89] font-semibold'>Founder</h2>
                    <div className={` flex gap-5 justify-center`}>
                        <img className='w-[2vw] cursor-pointer max-sm:w-[10vw]' src="img/linkedin-jobs.png" alt="" />
                        <img onClick={() => window.open(umarInsta,"_blank")} className='w-[2vw] cursor-pointer max-sm:w-[10vw]' src="img/ig.png" alt="" />
                    </div>
                </div>
                </div>
                <Swiper
            className={` w-[60vw] mx-auto`}
            slidesPerView={slidesPerViews}
            spaceBetween={30}
            loop={true}
            modules={[ Scrollbar, A11y,Autoplay]}
            pagination={{ clickable: true }}
            autoplay =  {{
                delay: 1500,
                disableOnInteraction: false,
              }}
            
            >
                <SwiperSlide
                className=''>
                <div className='bg-gray-100 w-[13vw] h-[55vh] rounded-t-full rounded-b-full pt-5 pb-5 max-sm:w-[60vw] max-sm:mx-auto'>
                    <div className='flex justify-center mt-10 mb-5'>
                        <img className='w-[10vw] rounded-full max-sm:w-[30vw]' src="img/owner.jpg" alt="" />
                    </div>
                    <h1 className='text-center mb-3 text-[#2f00fefe] font-bold'>Umar Hayat Khan</h1>
                    <h2 className='text-center mb-10 text-[#696C89] font-semibold'>Founder</h2>
                    <div className='flex gap-5 justify-center'>
                        <img className='w-[2vw] cursor-pointer max-sm:w-[10vw]' src="img/linkedin-jobs.png" alt="" />
                        <img  onClick={() => window.open(umarInsta,"_blank")} className='w-[2vw] cursor-pointer max-sm:w-[10vw]' src="img/ig.png" alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide
                className=''>
                <div className='bg-gray-100 w-[13vw] h-[55vh] rounded-t-full rounded-b-full pt-5 pb-5 max-sm:w-[60vw] max-sm:mx-auto'>
                    <div className='flex justify-center mt-10 mb-5'>
                        <img className='w-[10vw] rounded-full max-sm:w-[30vw]' src="img/webdev.jpeg" alt="" />
                    </div>
                    <h1 className='text-center mb-3 text-[#2f00fefe] font-bold'>Faiz Ur Rehman</h1>
                    <h2 className='text-center mb-10 text-[#696C89] font-semibold'>Web Developer</h2>
                    <div className='flex gap-5 justify-center'>
                        <img onClick={() => window.open(faizLinkedin, '_blank')} className='w-[2vw] cursor-pointer max-sm:w-[10vw]' src="img/linkedin-jobs.png" alt="" />
                        <img onClick={() => window.open(faizInsta, '_blank')} className='w-[2vw] cursor-pointer max-sm:w-[10vw]' src="img/ig.png" alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide
                className=''>
                <div className='bg-gray-100 w-[13vw] h-[55vh] rounded-t-full rounded-b-full pt-5 pb-5 max-sm:w-[60vw] max-sm:mx-auto'>
                    <div className='flex justify-center mt-10 mb-5'>
                        <img className='w-[10vw] rounded-full max-sm:w-[30vw]' src="img/profile.png" alt="" />
                    </div>
                    <h1 className='text-center mb-3 text-[#2f00fefe] font-black'>Laiba</h1>
                    <h2 className='text-center mb-10 text-[#696C89] font-semibold'>Consultant</h2>
                    <div className='flex gap-5 justify-center'>
                        <img className='w-[2vw] max-sm:w-[10vw]' src="img/linkedin-jobs.png" alt="" />
                        <img className='w-[2vw] max-sm:w-[10vw]' src="img/ig.png" alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide
                className=''>
                <div className='bg-gray-100 w-[13vw] h-[55vh] rounded-t-full rounded-b-full pt-5 pb-5 max-sm:w-[60vw] max-sm:mx-auto'>
                    <div className='flex justify-center mt-10 mb-5 '>
                        <img className='w-[10vw] rounded-full max-sm:w-[30vw]' src="img/profile.png" alt="" />
                    </div>
                    <h1 className='text-center mb-3 text-[#2f00fefe] font-bold'>Arbaz Shahid</h1>
                    <h2 className='text-center mb-10 text-[#696C89] font-semibold'>Interior Designer</h2>
                    <div className='flex gap-5 justify-center'>
                        <img className='w-[2vw] max-sm:w-[10vw]' src="img/linkedin-jobs.png" alt="" />
                        <img className='w-[2vw] max-sm:w-[10vw]' src="img/ig.png" alt="" />
                    </div>
                </div>
                </SwiperSlide>
               
                
               
                
                
            </Swiper>
                </div>


                <div className="w-[90vw] mx-auto bg-slate-100 p-10 border border-slate-300 rounded-lg mt-40 max-sm:p-5">
                    <div className="mb-20">
                        <h1 className="text-2xl text-[#2f00fefe] font-bold mb-3 max-sm:text-center">Your Success Starts With Our Expert Team</h1>
                        <h2 className="text-[#696C89] max-sm:text-center">Over 8+ million interactions, <span className="font-bold">800.000 Success</span> stories make yours now.</h2>
                    </div>
                    <div className="flex gap-2 max-sm:flex-col">
                        <input className=" bg-white border border-slate-300 rounded-md pr-220 pl-5 max-sm:pr-13 max-sm:py-2" type="text" placeholder="Your Email"/>
                        <button className="flex items-center gap-4 text-white bg-[#2f00fefe] py-2 px-10 rounded-md cursor-pointer hover:shadow-sm hover:shadow-cyan-900"> <img className="w-[1.5vw] max-sm:w-[5vw]" src="img/icons8-arrow-50.png" alt="" /> Subscribe</button>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-[#696C89] max-sm:text-center">✌️ We Promise not spam.</h1>
                    </div>
                </div>
            </div>
         

        
        </>


    )
}

export default AboutUs