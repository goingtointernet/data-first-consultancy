"use client"
import React from 'react';

// Star SVG Component
const StarIcon = () => (
<svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1412 40.3742C15.5879 40.3742 15.1434 39.9113 15.1576 39.3503L15.4523 27.7004C15.4719 26.9246 14.6499 26.4238 13.9843 26.8059L4.00027 32.5377C3.50405 32.8226 2.87387 32.6212 2.62806 32.0993L0.492851 27.5656C0.259243 27.0696 0.464876 26.4753 0.952812 26.2362L11.1058 21.2628C11.8473 20.8996 11.8473 19.8281 11.1058 19.465L0.957784 14.4939C0.467906 14.254 0.26293 13.6562 0.500225 13.1595L2.62782 8.70652C2.87463 8.18997 3.49894 7.99055 3.99289 8.27049L13.989 13.9356C14.6546 14.3129 15.472 13.8117 15.4523 13.0384L15.1578 1.46889C15.1435 0.907677 15.588 0.444885 16.1413 0.444885H20.9747C21.5256 0.444885 21.9691 0.90368 21.9584 1.46245L21.7372 13.0512C21.7225 13.8218 22.5374 14.3179 23.2006 13.942L33.197 8.27671C33.6951 7.99445 34.3244 8.19972 34.5671 8.72352L36.625 13.1652C36.8546 13.6605 36.648 14.2508 36.1623 14.4888L26.0037 19.465C25.2623 19.8281 25.2623 20.8996 26.0037 21.2628L36.1672 26.2413C36.6509 26.4783 36.8579 27.0654 36.6322 27.56L34.5668 32.0823C34.3251 32.6114 33.6899 32.8186 33.1894 32.5314L23.2054 26.7995C22.5421 26.4188 21.7225 26.9145 21.7372 27.6875L21.9585 39.3566C21.9692 39.9153 21.5257 40.3742 20.9749 40.3742H16.1412Z" fill="#7D7D7D"/>
</svg>
);

const LogoBanner = () => {
  // Logo data - you can replace these with your actual logo files
  const logos = [
    { id: 1, src: '/images/p_logo1.png', alt: 'Partner Logo 1' },
    { id: 2, src: '/images/p_logo2.png', alt: 'Partner Logo 2' },
    { id: 3, src: '/images/p_logo3.png', alt: 'Partner Logo 3' }
  ];

  // Create duplicated array for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-secondaryBgColor py-8 overflow-hidden">
      <div className="relative">
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex items-center flex-shrink-0">
              {/* Logo */}
              <div className="mx-8 md:mx-12 lg:mx-16">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 lg:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Star separator */}
              <div className="mx-8 md:mx-12 lg:mx-16">
                <StarIcon />
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-ful pointer-events-none"></div>
      </div>
      
      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoBanner;