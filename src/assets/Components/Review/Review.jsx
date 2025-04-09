import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const Review = () => {

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
    return (
        <>
        
        <div className="w-[80vw] max-sm:w-[100vw] mx-auto items-center relative mt-20 overflow-hidden hidden">

            <div className="flex gap-3 items-center">
                <div className="p-2 rounded-full bg-purple-500">
                    <svg className="w-[1vw]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                </div>
                <h1 className=" text-[#2f00fefe] font-semibold">Our Testimonials</h1>    
            </div>
            <h1 className="text-4xl text-[#2f00fefe] mt-10 mb-10 font-bold">Best Reviews From Our Users</h1>

            <div className="">
            <Swiper
            className='overflow-visible'
            slidesPerView={slidesPerViews}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay =  {{
                delay: 1500,
                disableOnInteraction: false,
              }}
            
            >
                <SwiperSlide
                className=''>
                <div className='h-[60vh] sm:flex sm:justify-center relative'>

                    <div className="xl:w-[25vw] lg:w-[30vw] sm:w-[40vw]">
                        <p className="p-10 border text-lg text-[#696C89] border-[#dededf] rounded-lg">"Right Path helped me land my dream job with ease. The platform's simple interface and genuine job listings made my search stress-free. The team's support during the interview process was incredible!"</p>
            
                    </div>
                    <div className="absolute xl:bottom-[10px] xl:left-[50px] sm:bottom-[-60px] sm:left-[180px]">
                        <div className="inline-block">

                            <img className="w-[5vw] sm:w-[8vw] rounded-full" src="img/main-1.png" />
                        </div>
                        <div className="flex  mb-3">

                            <img  className="w-[1vw] sm:w-[1.5vw] " src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                        </div>
                        <h1 className="text-lg text-[#2f00fefe]">Rohit Sharma</h1>
                        <h1 className="text-[#696C89]">Software Engineer</h1>
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide
                className=''>
                <div className='h-[60vh] sm:flex sm:justify-center'>

                    <div className="xl:w-[25vw] lg:w-[30vw] sm:w-[40vw]">
                        <p className="p-10 border text-lg text-[#696C89] border-[#dededf] rounded-lg">"Right Path helped me land my dream job with ease. The platform's simple interface and genuine job listings made my search stress-free. The team's support during the interview process was incredible!"</p>
            
                    </div>
                    <div className=" absolute xl:bottom-[10px] xl:left-[50px] sm:bottom-[-60px] sm:left-[180px]">
                        <div className="inline-block">

                            <img className="w-[5vw] sm:w-[8vw] rounded-full" src="img/main-1.png" />
                        </div>
                        <div className="flex  mb-3">

                            <img  className="w-[1vw] sm:w-[1.5vw]" src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                        </div>
                        <h1 className="text-lg text-[#2f00fefe]">Rohit Sharma</h1>
                        <h1 className="text-[#696C89]">Software Engineer</h1>
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide
                className=''>
                <div className='h-[60vh] sm:flex sm:justify-center'>

                    <div className="xl:w-[25vw] lg:w-[30vw] sm:w-[40vw]">
                        <p className="p-10 border text-lg text-[#696C89] border-[#dededf] rounded-lg">"Right Path helped me land my dream job with ease. The platform's simple interface and genuine job listings made my search stress-free. The team's support during the interview process was incredible!"</p>
                       
                    </div>
                    <div className="absolute xl:bottom-[10px] xl:left-[50px] sm:bottom-[-60px] sm:left-[180px]">
                        <div className="inline-block">

                            <img className="w-[5vw] sm:w-[8vw] rounded-full" src="img/main-1.png" />
                        </div>
                        <div className="flex  mb-3">

                            <img  className="w-[1vw] sm:w-[1.5vw]" src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                        </div>
                        <h1 className="text-lg text-[#2f00fefe]">Rohit Sharma</h1>
                        <h1 className="text-[#696C89]">Software Engineer</h1>
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='h-[60vh] sm:flex sm:justify-center'>

                    <div className="xl:w-[25vw] lg:w-[30vw] sm:w-[40vw]">
                        <p className="p-10 border text-lg text-[#696C89] border-[#dededf] rounded-lg">"Right Path helped me land my dream job with ease. The platform's simple interface and genuine job listings made my search stress-free. The team's support during the interview process was incredible!"</p>
            
                    </div>
                    <div className="absolute xl:bottom-[10px] xl:left-[50px] sm:bottom-[-60px] sm:left-[180px]">
                        <div className="inline-block">

                            <img className="w-[5vw] sm:w-[8vw] rounded-full" src="img/main-1.png" />
                        </div>
                        <div className="flex  mb-3">

                            <img  className="w-[1vw] sm:w-[1.5vw]" src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                        </div>
                        <h1 className="text-lg text-[#2f00fefe]">Rohit Sharma</h1>
                        <h1 className="text-[#696C89]">Software Engineer</h1>
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='h-[60vh] sm:flex sm:justify-center'>

                    <div className="xl:w-[25vw] lg:w-[30vw] sm:w-[40vw]">
                        <p className="p-10 border text-lg text-[#696C89] border-[#dededf] rounded-lg">"Right Path helped me land my dream job with ease. The platform's simple interface and genuine job listings made my search stress-free. The team's support during the interview process was incredible!"</p>
                    </div>
                    <div className="absolute xl:bottom-[10px] xl:left-[50px] sm:bottom-[-60px] sm:left-[180px]">
                        <div className="inline-block">

                            <img className="w-[5vw] sm:w-[8vw] rounded-full" src="img/main-1.png" />
                        </div>
                        <div className="flex  mb-3">

                            <img  className="w-[1vw] sm:w-[1.5vw]" src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                            <img className="w-[1vw] sm:w-[1.5vw]"  src="img/star.png" />
                        </div>
                        <h1 className="text-lg text-[#2f00fefe]">Rohit Sharma</h1>
                        <h1 className="text-[#696C89]">Software Engineer</h1>
                    </div>

                    </div>
                </SwiperSlide>
                
            </Swiper>
            </div>
        </div>
           
        
        </>

    )
}

export default Review