import { useState, useEffect } from 'react';

const Footer = () => {
    const link = "https://www.instagram.com/right_pathconsultancy?igsh=MXZvdmRycDhmb2twdQ%3D%3D";
    const [showDiv,setShowDiv] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1>=
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
        {

          
           
            <div className={ ` ${showDiv ? "visible" : "scale-0"} z-10`}>

        
            <div className={` fixed bottom-0`}>
                <img className= "fixed h-[100vh] w-[100vw] bg-center bg-cover  bottom-0"  src="img/footer-bg.jpg" alt="" />
              <div className="absolute bg-[#2f00ffe2] h-[100vh] w-[100vw] bottom-0">

                    <div className="flex justify-between p-10 items-center w-[90vw] mx-auto border-b border-[#ffffff24] pb-10">

                    
                        <div className="w-[35vw]">
                            <h1 className="text-white text-3xl font-bold mb-5">Stay Updated with the Latest Job Opportunities!</h1>
                            <p className="text-white text-lg font-light">Subscribe to Right Path and receive regular updates on genuine job listings, career tips, and exclusive training programs.</p>
                        </div>
                        <div className="">
                            <div className="flex gap-2">
                                    <input className="bg-white border border-[#ffffff24] rounded-md py-5 pr-40 pl-5" type="text" placeholder="Email"/>
                                    <button className="flex items-center gap-4 text-white py-2 px-10 rounded-md border cursor-pointer hover:bg-blue-400"> <img className="" src="img/arrow-right.png" alt="" />  Subscribe</button>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-white">✌️ We Promise not spam.</h1>
                                </div>
                            </div>

                        </div>

                    <div className="grid grid-cols-4  px-30 mt-10 border-b border-[#ffffff24] pb-10">
                    <div>
                        <h1 className="text-xl font-bold text-white mb-10">Find Us</h1>
                        <h2 className="text-[#d3caca] ">Mon-Sat:10am-7pm</h2>
                        <h1 className="text-xl font-bold text-white ">Noor Nagar, Ajmal bagh,</h1>
                        <h1 className='text-xl font-bold text-white mb-10'>Okhla, New Delhi</h1>
                        <h2 className="text-[#d3caca]">Send a CV</h2>
                        <h1 className="text-xl font-bold text-white" >rightpathconsultancy001-</h1>
                        <h1 className='text-xl font-bold text-white mb-10'>-@gmail.com</h1>
                        <h1 className="text-[#d3caca]">Social Media</h1>
                        <div className='flex gap-2'>
                            <div onClick={() => window.open(link, '_blank')} className='cursor-pointer p-3 bg-white rounded-full inline-block'>
                                <img className='' src="img/instagram.png" alt="" />
                            </div>
                            <div className='p-3 bg-white rounded-full inline-block'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#2f00ff" fill="blue">
                                <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white mb-10">Support</h1>
                        <h2 className="text-[#d3caca] mb-5 cursor-pointer">Help Center</h2>
                        <h2 className="text-[#d3caca] mb-5 cursor-pointer">FAQ's</h2>
                        <h2 className="text-[#d3caca] mb-5">Privacy Policy</h2>
                        <h2 className="text-[#d3caca] mb-5">Terms and Conditions</h2>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white mb-10" >Quick Links</h1>
                        <h2 className="text-[#d3caca] mb-5">About Company</h2>
                        <h2 className="text-[#d3caca] mb-5">Services</h2>
                        <h2 className="text-[#d3caca] mb-5">Jobs</h2>
                        <h2 className="text-[#d3caca] mb-5 cursor-pointer">Contact</h2>
                    </div>
                    <div className="">
                        <div className="flex justify-center mb-5">
                            <img className="w-[7vw] rounded-full bg-center bg-cover border-4 border-[#ffffff24]" src="img/logo.jpg" alt="" />
                        </div>
                        <p className="text-[#d3caca]">Right Path is a trusted platform connecting job seekers with top employers. We provide genuine opportunities, affordable training, and expert HR solutions to empower careers and businesses across India.</p>
                    </div>
                </div>

                    <div className='text-white text-center mt-5'>
                    Copyright © 2025-26 Rigth Path. All rights reserved.
                    </div>
                </div>

              
            </div>
            
        </div>
       
        }
        </>

    )
}

export default Footer