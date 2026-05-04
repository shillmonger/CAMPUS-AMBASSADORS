"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    // Import AOS CSS dynamically
    import("aos/dist/aos.css").then(() => {
      // Add custom styles to prevent horizontal overflow while allowing fade animations on mobile
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          overflow-x: hidden !important;
        }
        @media (max-width: 768px) {
          /* Allow fade animations on mobile but prevent transform-based overflow */
          [data-aos="fade-up"],
          [data-aos="fade-down"],
          [data-aos="fade-left"],
          [data-aos="fade-right"],
          [data-aos="fade-up-right"],
          [data-aos="fade-up-left"],
          [data-aos="fade-down-right"],
          [data-aos="fade-down-left"] {
            transform: translateY(0) !important;
          }
          
          /* Prevent zoom and complex transforms on mobile */
          [data-aos="zoom-in"],
          [data-aos="zoom-out"],
          [data-aos="zoom-in-up"],
          [data-aos="zoom-in-down"],
          [data-aos="zoom-out-up"],
          [data-aos="zoom-out-down"] {
            transform: scale(1) !important;
          }
          
          /* Ensure no horizontal transforms */
          [data-aos] {
            transform: translateX(0) !important;
          }
          
          /* Allow opacity transitions for fade effects */
          [data-aos] {
            opacity: 0 !important;
            transition: opacity 0.6s ease-out !important;
          }
          
          [data-aos].aos-animate {
            opacity: 1 !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Initialize AOS - enable on all devices but with mobile-safe settings
      AOS.init({
        duration: 800,
        once: true,
        disable: false, // Enable on all devices
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        // Mobile-specific settings
        offset: window.innerWidth < 768 ? 50 : 120, // Smaller offset on mobile
        delay: window.innerWidth < 768 ? 100 : 0, // Slight delay on mobile for smoother performance
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
      // Refresh AOS when window resizes
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}
