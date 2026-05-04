"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    // Import AOS CSS dynamically
    import("aos/dist/aos.css").then(() => {
      // Add custom styles to prevent horizontal overflow only on mobile
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          overflow-x: hidden !important;
        }
        @media (max-width: 768px) {
          [data-aos] {
            transform: none !important;
            opacity: 1 !important;
            transition: none !important;
          }
          .aos-animate {
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Initialize AOS with mobile detection
      const isMobile = window.innerWidth < 768;
      
      AOS.init({
        duration: 800,
        once: true,
        disable: isMobile, // Only disable on mobile devices
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });

      return () => {
        // Cleanup styles when component unmounts
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    });

    // Handle window resize for responsive AOS behavior
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        AOS.refreshHard(); // Disable animations on mobile
      } else {
        AOS.refresh(); // Enable animations on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}
