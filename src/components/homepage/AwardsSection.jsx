// import React from 'react';

// const AwardsSection = () => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
//             <h2 className="text-3xl font-bold text-black mb-4 uppercase">
//               AWARD-WINNING SOFTWARE<br />DEVELOPMENT COMPANY
//             </h2>
//             <p className="text-sm text-gray-700 mb-6">
//               Leading rating & review platforms rank Inoxost among top software development
//               companies due to our tech assistance in clients' digital transformation
//             </p>
//             <div className="mb-8">
//               <img 
//                 width="300" 
//                 height="92" 
//                 className=" "
//                 src="https://inoxoft.com/wp-content/uploads/2025/01/clutch-1.webp" 
//                 alt="clutch 5.0 50 reviews" 
//               />
//             </div>
//             <button className="bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase flex items-center">
//               GET A QUOTE 
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//           <div className="md:w-1/2">
//             <div className="grid grid-cols-3 gap-4">
//               {/* Top row */}
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
              
//               {/* Middle row */}
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
              
//               {/* Bottom row */}
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//               <div className="flex justify-center">
//                 <img src="/api/placeholder/120/120" alt="Award badge" className="w-24 h-24" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;

import React,{useRef} from 'react';
import { gsap } from 'gsap';


const AwardsSection = () => {
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
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
    <section className="bg-[#f9fbfb] py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row  gap-28">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-black mb-12 uppercase">
              AWARD-WINNING SOFTWARE<br />DEVELOPMENT COMPANY
            </h1>
            <p className="text-sm text-gray-900 mb-12">
              Leading rating & review platforms rank Inoxost among top software development
              companies due to our tech assistance in clients' digital transformation
            </p>
            <div className="mb-8">
              <img 
                width="350" 
                height="92" 
            className="mb-12"
                src="https://inoxoft.com/wp-content/uploads/2025/01/clutch-1.webp" 
                alt="clutch 5.0 50 reviews" 
              />
            </div>
            {/* <button className="bg-blue-900 text-white px-10 py-4 rounded-full text-sm font-semibold uppercase flex items-center">
              GET A QUOTE 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}
              <button
                                    ref={buttonRef}
                                    className="relative inline-flex items-center px-6 py-3 text-black hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className='relative z-10 hover:text-white'>
                                        GET A QUOTE  &gt;
                                    </span>
                                    <span
                                        ref={pseudoElementRef}
                                        className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
                                    ></span>
                                </button>
          </div>
          <div className="md:w-1/2">
            {/* Single image containing all awards */}
            <img 
              src="https://wordpress-1272160-4698418.cloudwaysapps.com/wp-content/uploads/2024/05/Frame-8364.webp" 
              alt="Awards collection" 
              className="w-auto h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;