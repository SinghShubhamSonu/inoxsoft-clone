// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const ReactNativeServicesSection = () => {
//   const sectionRef = useRef(null);
//   const leftColumnRef = useRef(null);
//   const rightColumnRef = useRef(null);
  
//   // Added refs for the button animation
//   const buttonRef = useRef(null);
//   const pseudoElementRef = useRef(null);

//   // Button animation handlers
//   const handleMouseEnter = () => {
//     gsap.to(buttonRef.current, {
//       duration: 0.2,
//       ease: "power1.out"
//     });

//     gsap.to(pseudoElementRef.current, {
//       width: '500px',
//       duration: 1,
//       ease: "power2.out"
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(buttonRef.current, {
//       duration: 0.2,
//       ease: "power1.out"
//     });

//     gsap.to(pseudoElementRef.current, {
//       width: '0px',
//       duration: 1,
//       ease: "power2.out"
//     });
//   };

//   useEffect(() => {
//     // Create sticky scroll effect for left column
//     // It will be pinned until the right column's content ends
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 10%", // Start pinning earlier (10% from top of viewport)
//       endTrigger: rightColumnRef.current,
//       end: "bottom 62%", // End when the bottom of the right column reaches the bottom of the viewport
//       pin: leftColumnRef.current,
//       pinSpacing: false, // Prevent layout shift
//       anticipatePin: 1, // Helps with smoother pinning
//       // For debugging if needed:
//       // markers: true,
//     });

//     // Clean up
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-white overflow-hidden"
//     >
//       {/* Shadow effect */}
//       <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-100 to-transparent opacity-60"></div>

//       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Column - this will become sticky */}
//           <div
//             ref={leftColumnRef}
//             className="lg:w-2/5 py-12 lg:py-16 pr-6"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase leading-tight">
//               INOXOFT<br />
//               REACT NATIVE APP<br />
//               DEVELOPMENT SERVICES
//             </h2>
//             <p className="text-base md:text-lg text-gray-700">
//               Our React Native engineers can develop top-notch high-performance Android, iOS, and cross-platform applications. Among the React Native mobile application development services we offer you can find:
//             </p>
//           </div>

//           {/* Right Column - this will scroll */}
//           <div
//             ref={rightColumnRef}
//             className="lg:w-3/5 py-12 lg:py-16 lg:pl-12"
//           >
//             <ul className="space-y-16 md:space-y-20">
//               {/* Service Item 1 */}
//               <li className="relative pl-12 md:pl-16">
//                 <div className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-blue-800">1.</div>
//                 <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
//                   Full-cycle React Native Development
//                 </h3>
//                 <p className="text-base text-gray-700">
//                   Inoxoft's dedicated team develops all kinds of React Native applications within the industries we serve. Thus, you receive expert development, seamless mobile app design, accurate quality testing, and fast maintenance services. In addition, we can provide you with React Native developers to enhance your team and scale.
//                 </p>
//               </li>

//               {/* Service Item 2 */}
//               <li className="relative pl-12 md:pl-16">
//                 <div className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-blue-800">2.</div>
//                 <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
//                   Code Audit
//                 </h3>
//                 <p className="text-base text-gray-700">
//                   Inoxoft offers code audit services to clients, whose aim is to enhance the existing codebase. For this reason, our team of React Native engineers searches for possible code weaknesses and bottlenecks to improve the app's code quality, performance, speed, and stability.
//                 </p>
//               </li>

//               {/* Service Item 3 */}
//               <li className="relative pl-12 md:pl-16">
//                 <div className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-blue-800">3.</div>
//                 <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
//                   Maintenance and support
//                 </h3>
//                 <p className="text-base text-gray-700">
//                   With the help of the maintenance and support services we provide it is possible to work on different unexpected app crashes or critical bugs immediately. Also, our support team makes pre-planned audits of the code, improvements to the architecture, fixes bugs, and solves the scalability problems of your product so it can meet both business and user needs.
//                 </p>
//               </li>
//             </ul>

            
//           </div>
//         </div>

//         {/* CTA Button - Updated with animation */}
//         <div className="mb-12 text-center">
//           <div className="relative inline-block">
//             <button
//               ref={buttonRef}
//               className="relative inline-flex items-center px-12 py-5 hover:text-white bg-white border border-black hover:border-white rounded-full transition-all duration-300 overflow-hidden"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span className="relative z-10 hover:text-white">
//                 HIRE REACT NATIVE APP ENGINEER
//               </span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10 hover:text-white" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//               </svg>
//               <span
//                 ref={pseudoElementRef}
//                 className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
//               ></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReactNativeServicesSection;

import React, { useRef } from 'react';
import { gsap } from 'gsap';

const ReactNativeServicesSection = () => {
  // Added refs for the button animation
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  // Button animation handlers
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.to(pseudoElementRef.current, {
      width: '500px',
      duration: 1,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.to(pseudoElementRef.current, {
      width: '0px',
      duration: 1,
      ease: "power2.out"
    });
  };

  return (
    <section className="py-16 bg-white relative">
      {/* Shadow effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-100 to-transparent opacity-60"></div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 px-6">
          {/* Left Column - using sticky positioning exactly like in SolutionsSection */}
          <div className="lg:flex-1 lg:sticky lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase leading-tight">
              INOXOFT<br />
              REACT NATIVE APP<br />
              DEVELOPMENT SERVICES
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Our React Native engineers can develop top-notch high-performance Android, iOS, and cross-platform applications. Among the React Native mobile application development services we offer you can find:
            </p>
          </div>

          {/* Right Column - this will scroll */}
          <div className="lg:flex-1">
            <ul className="space-y-16 md:space-y-20">
              {/* Service Item 1 */}
              <li className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-blue-800">1.</div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  Full-cycle React Native Development
                </h3>
                <p className="text-lg text-gray-700">
                  Inoxoft's dedicated team develops all kinds of React Native applications within the industries we serve. Thus, you receive expert development, seamless mobile app design, accurate quality testing, and fast maintenance services. In addition, we can provide you with React Native developers to enhance your team and scale.
                </p>
              </li>

              {/* Service Item 2 */}
              <li className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-blue-800">2.</div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  Code Audit
                </h3>
                <p className="text-lg text-gray-700">
                  Inoxoft offers code audit services to clients, whose aim is to enhance the existing codebase. For this reason, our team of React Native engineers searches for possible code weaknesses and bottlenecks to improve the app's code quality, performance, speed, and stability.
                </p>
              </li>

              {/* Service Item 3 */}
              <li className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 text-3xl md:text-4xl font-bold text-blue-800">3.</div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  Maintenance and support
                </h3>
                <p className="text-lg text-gray-700">
                  With the help of the maintenance and support services we provide it is possible to work on different unexpected app crashes or critical bugs immediately. Also, our support team makes pre-planned audits of the code, improvements to the architecture, fixes bugs, and solves the scalability problems of your product so it can meet both business and user needs.
                </p>
              </li>
              
            
            
            </ul>
          </div>
        </div>

        {/* CTA Button - Maintained with animation */}
        <div className="mt-12 text-center px-6">
          <div className="relative inline-block">
            <button
              ref={buttonRef}
              className="relative inline-flex items-center px-12 py-5 hover:text-white bg-white border border-black hover:border-white rounded-full transition-all duration-300 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 hover:text-white">
                HIRE REACT NATIVE APP ENGINEER
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10 hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
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

export default ReactNativeServicesSection;