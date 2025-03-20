import { useEffect, useState } from "react";

const ContactUs = () => {
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

        
            <div className="flex justify-between w-[90vw] mx-auto mt-20">
                <div className="w-[43vw]">
                    <h1 className="text-3xl text-[#2f00fefe] mb-5 font-bold">Don't hesitate to contact us</h1>
                    <p className="text-[#696C89] mb-10">We’re here to assist you with all your job search and recruitment needs. Whether you have questions, need guidance, or want to explore career opportunities, our team is ready to help.</p>
                    <div className="flex gap-5">

                        <div className="">
                            <div className="border border-[#dededf] rounded-lg mb-5">
                                <div className="flex items-center justify-start gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                        <svg className="w-[1.5vw]" stroke-width="2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path></svg>
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

                                    <svg className="w-[1.5vw]" stroke-width="2" viewBox="0 0 338 402" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path></svg>
                                    </div>
                                    <div>
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold">Our Office</h1>
                                        <h2 className="text-[#696C89]">Noor Nagar, Ajmal Bagh, Okhla, New Delhi</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xl text-[#2f00fefe] mt-10 border-t border-[#dededf] font-semibold pt-13">
                                Social Media:
                            </div>
                        </div>
                        <div className="">
                        <div className="border border-[#dededf] rounded-lg mb-5">
                                <div className="flex items-center justify-start gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                    <svg className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                    </div>
                                    <div>
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold">Our Phone</h1>
                                        <h2 className="text-[#696C89]">+91 6399010030</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#dededf] rounded-lg">
                                <div className="flex items-center justify-center gap-3 p-5">
                                    <div className="bg-[#2f00fefe] inline-block p-2 rounded-lg">

                                    <svg className="w-[1.5vw]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                                    </div>
                                    <div className="items-center">
                                        <h1 className="text-lg text-[#2f00fefe] font-semibold">Work Hours</h1>
                                        <h2 className="text-[#696C89]">Everyday 9am-7pm</h2>
                                    </div>
                                </div>
                            </div>
                                <div className='flex gap-2 mt-10 justify-end border-t border-[#dededf] pt-10'>
                                    <div className='p-4 bg-white rounded-lg inline-block border border-[#2f00fefe]'>
                                        <img className='' src="public/img/instagram.png" alt="" />
                                    </div>
                                    <div className='p-4 bg-white rounded-lg inline-block border border-[#2f00fefe]'>
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
                    <div className="flex gap-5 mb-5">
                        <input className="bg-slate-100 p-4 border border-[#dededf] rounded-lg" type="text" placeholder="Your Name"/>
                        <input className="bg-slate-100 p-4 border border-[#dededf] rounded-lg" type="text" placeholder="Your Email"/>
                    </div>
                    <div className="mb-5 ">
                        <input className="bg-slate-100 pr-66 pl-4 rounded-lg py-4 border border-[#dededf]" type="text" placeholder="Subject"/>
                    </div>
                    <div>
                        <input className="bg-slate-100 text-black pr-66 pl-4 rounded-lg pt-4 pb-30 border border-[#dededf] mb-5" type="text" placeholder="Message"/>
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