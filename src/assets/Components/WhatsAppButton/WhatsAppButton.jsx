import React from "react";

const WhatsAppButton = () =>{

    
  
    const phoneNumber = "916399010030";
    const message = 'Hello, I would like to inquire about...';

    const WhatsAppClickHandle = () => {

        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
        

        
    }

    return (
        <div onClick={WhatsAppClickHandle} className="bg-green-600 cursor-pointer inline-block fixed bottom-10 right-10 rounded-full p-2 z-10">
            <img className="w-[3vw] cursor-pointer z-10 max-sm:w-[10vw]" src="img/whatsapp.png" alt="" />
        </div>
    )


    
}
export default WhatsAppButton


