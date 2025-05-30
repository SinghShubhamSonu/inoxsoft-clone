import React, { useRef } from 'react';
import { gsap } from 'gsap';

const OutsourceButton = () => {
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
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        // relative
        className=" relative inline-flex items-center px-12 py-5 hover:text-white  bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className='relative z-10 hover:text-white'>            
        HIRE SQL DEVELOPERS
        </span>   
        <i className="fa fa-angle-right ml-2 relative z-10 hover:text-white"></i>
        <span
          ref={pseudoElementRef}
          className="absolute  left-[-20px]  w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
          // origin-bottom-left transform  z-[-1] top-[-236px]
        ></span>
      </button>
    </div>
  );
};

export default OutsourceButton;


