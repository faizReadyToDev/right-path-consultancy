import { Link } from "react-router-dom"

const Jobs = () => {
 
    // Display while home page
   
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
                link: "/nobroker0"
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
        }
      
]
 // Display while job/company page
    const jobs2 = [
        { 
            job1 : {
                jobTittle: "Customer Support Associate",
                company: "Amazon",
                location: "Bengaluru, India",
                salary: "₹30K Monthly",
                typeofjob: "Full-Time(On-site)",
                exp: "1-3 Year Experience",
                img: "img/jobs-1.png"
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
                img: "img/jobs-2.png"
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
                img: "img/jobs-3.png"
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
                img: "img/jobs-4.png"
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
                img: "img/jobs-5.png"
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
                img: "img/jobs-6.png"
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
                img: "img/jobs-7.png"
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
                img: "img/jobs-8.png"
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
                img: "img/jobs-9.png"
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
                img: "img/jobs-10.png"
            }
        }
      
]

    return(
        <>

            {/* <div className="p-10 inline-block border">
                <div className="flex gap-5 border-b border-[#696c89] pb-5">
                    <div className="shadow-xl rounded-full border-2 border-slate-100">
                        <img className="w-[4vw] " src="/public/img/jobs-1.png" alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold text-[#2f00fefe]">Customer Support Associate</h1>
                        <h2 className=" text-[#696c89] font-semibold">Amazon</h2>
                    </div>
                </div>

                <div className="border-b border-[#696c89] pb-5">
                    <div className="flex gap-2 items-center mt-5">
                        <img className="w-[1vw] h-[2vh]" src="/public/img/location-jobs.png" alt="" />
                        <h1 className=" text-[#696c89]" >Bengaluru, India</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-[1vw] h-[2vh]" src="/public/img/money-jobs.png" alt="" />
                        <h1 className=" text-[#696c89]">₹30K Monthly</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="/public/img/hourglass.png" alt="" />
                        <h1 className=" text-[#696c89]">Full-Time(On-site)</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                    <img src="/public/img/briefcase.png" alt="" />
                        <h1 className=" text-[#696c89]">1-3 Year Experience</h1>
                    </div>
                </div>

                <div className="flex gap-10 mt-5">
                <button className="flex items-center gap-4 text-white bg-[#2f00fefe] py-2 px-10 rounded-lg shadow-xl shadow-cyan-900"> <img className="w-[1.5vw]" src="/public/img/icons8-arrow-50.png" alt="" /> View Details</button>
                    <div className="flex items-center gap-2">
                    <img className="w-[1vw]" src="/public/img/time-jobs.png" alt="" />
                        <h1 className=" text-[#696c89]">Update2days ago</h1>
                    </div>
                </div>

            </div> */}


            <div className="w-[90vw] mx-auto grid grid-cols-3 gap-10"> 
                {
                jobs.map((item,index) => (
                    <div className="p-9 inline-block border border-slate-300 rounded-lg" key={index}>
                        <div className="flex gap-5 border-b border-slate-300 pb-5">
                            <div className="shadow-xl rounded-full border-2 border-slate-100">
                                <img className="w-[4vw] " src={item.job1.img} alt="" />
                            </div>
                            <div className="">
                                <h1 className="text-xl font-semibold text-[#2f00fefe]">{item.job1.jobTittle}</h1>
                                <h2 className=" text-[#696c89] font-semibold">{item.job1.company}</h2>
                            </div>
                        </div>

                        <div className="border-b border-slate-300 pb-5">
                            <div className="flex gap-2 items-center mt-5">
                                <img className="w-[1vw] h-[2vh]" src="img/location-jobs.png" alt="" />
                                <h1 className=" text-[#696c89]" >{item.job1.location}</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img className="w-[1vw] h-[2vh]" src="img/money-jobs.png" alt="" />
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

                        <div className="flex gap-10 mt-5">
                            <Link to={item.job1.link}>
                                <button className="flex items-center gap-2 text-white bg-[#2f00fefe] py-2 px-5 rounded-lg shadow-xl shadow-cyan-900 cursor-pointer hover:shadow-cyan-600"> <img className="w-[1.5vw]" src="img/icons8-arrow-50.png" alt="" />View Details</button>
                            </Link>
                            <div className="flex items-center gap-2">
                            <img className="w-[1vw]" src="img/time-jobs.png" alt="" />
                                <h1 className=" text-[#696c89]">Update2days ago</h1>
                            </div>
                        </div>

                    </div>
                ))

                }
                
            </div>

        
        </>
    )
}

export default Jobs