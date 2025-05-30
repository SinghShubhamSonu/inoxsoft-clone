import React, { useRef } from 'react';
import { gsap } from 'gsap';

const CTASection2 = () => {
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      // scale: 1.05,
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.to(pseudoElementRef.current, {
      width: '500px', // Animate the width
      duration: 1,     // Match the transition duration
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      // scale: 1,
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.to(pseudoElementRef.current, {
      width: '0px',    // Animate the width back to 0
      duration: 1,     // Match the transition duration
      ease: "power2.out"
    });
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://inoxoft.com/wp-content/themes/inoxoft/images/de_hardcode/2024/06/CTA.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Shadow overlay */}
      {/* <div className="absolute inset-0 z-0 bg-black opacity-50"></div> */}
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
        <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
            Hire our expert React.js developers and build your project with ease
          </p>
        </div>
        
        {/* Button */}
        <div className="relative inline-block">
          <button 
            ref={buttonRef}
            className="relative inline-flex items-center px-14 py-3.5 hover:text-white bg-white text-[#00283b] text-sm font-medium border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative z-10 hover:text-white text-[18px]">            
              LET'S TALK <i className="fa fa-angle-right ml-2 relative z-10"></i>
            </span>   
          
            <span
              ref={pseudoElementRef}
              className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection2;