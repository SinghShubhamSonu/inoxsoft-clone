//CTASection1.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';

const CTA = () => {
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
    <section
      className="relative py-12 md:py-20 text-white text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://inoxoft.com/wp-content/themes/inoxoft/images/de_hardcode/2024/06/CTA.png)' }}
    >
      {/* Optional overlay to ensure text readability */}
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold mb-10 md:mb-12">
          Create design solutions that attract users and drive your business forward with us
          </p>

          <div className="relative inline-block">
            <button
              ref={buttonRef}
              className="relative inline-flex items-center px-14 py-3.5 hover:text-white bg-white text-[#00283b] text-sm font-medium border border-white hover:border-white rounded-full transition-all duration-300 overflow-hidden"
              onClick={() => {
                // You can add your modal logic here
                console.log('Button clicked');
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 hover:text-white text-[18px] ">
                DISCUSS YOUR IDEA<i className="fa fa-angle-right ml-2 relative z-10"></i>
              </span>
            
              <span
                ref={pseudoElementRef}
                className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;