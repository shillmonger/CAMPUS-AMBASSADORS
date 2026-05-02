"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const phoneNumber = "2348127435913"; 
  const message = "Hello Startup Abuja, I'd like to inquire about the Innovation Challenge.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-2 z-[100] flex items-center justify-center">
      {/* Pulse Animation Effect */}
      <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-[#25D366] opacity-75"></span>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;
