
// import React, { useState } from 'react';

// const ServiceOptions = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const serviceOptions = [
//     {
//       title: "PRODUCT DEVELOPMENT",
//       description: "Want to develop a new product but has no experience in software development? Provide us a need, vision, and get a comprehensive business solution."
//     },
//     {
//       title: "TEAM EXTENSION",
//       description: "Already defined requirements, budget, and time-frames? Hire our experts and we'll realize your vision planned in advance."
//     },
//     {
//       title: "DEDICATED TEAM",
//       description: "Stay engaged in the development of your product: create, view, and deliver side-by-side with a team of experienced people."
//     },
//     {
//       title: "AI DEVELOPMENT",
//       description: "Rely on our AI expertise to unlock the untapped potential of vast data amounts and achieve tangible results."
//     }
//   ];

//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? serviceOptions.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === serviceOptions.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="w-full bg-[#f9fbfb] py-14 px-4 overflow-hidden">
//       {/* Container with max width for extremely large screens */}
//       <div className="max-w-screen-2xl mx-auto">
//         {/* Desktop and Tablet View (md and above) */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {serviceOptions.map((service, index) => (
//             <div key={index} className="flex flex-col border-l border-gray-300 pl-6 pr-4 py-4 h-full">
//               <h3 className="text-blue-900 font-bold mb-4">{service.title}</h3>
//               <p className="text-gray-700 text-sm mb-8">{service.description}</p>
//               <div className="mt-auto">
//                 <svg className="w-6 h-6 text-blue-900 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Mobile Carousel View (below md) */}
//         <div className="md:hidden">
//           <div className="flex justify-end mb-4 space-x-2">
//             <button 
//               onClick={goToPrevious}
//               className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
//               aria-label="Previous service"
//             >
//               <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <button 
//               onClick={goToNext}
//               className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-blue-900"
//               aria-label="Next service"
//             >
//               <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </div>
//           <div className="border-l border-gray-300 pl-6">
//             <h3 className="text-blue-900 font-bold mb-4">{serviceOptions[activeIndex].title}</h3>
//             <p className="text-gray-700 text-sm mb-8">{serviceOptions[activeIndex].description}</p>
//             <svg className="w-6 h-6 text-blue-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceOptions;

// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';

// const ServiceOptions = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const serviceOptions = [
//     {
//       title: "PRODUCT DEVELOPMENT",
//       description: "Want to develop a new product but has no experience in software development? Provide us a need, vision, and get a comprehensive business solution."
//     },
//     {
//       title: "TEAM EXTENSION",
//       description: "Already defined requirements, budget, and time-frames? Hire our experts and we'll realize your vision planned in advance."
//     },
//     {
//       title: "DEDICATED TEAM",
//       description: "Stay engaged in the development of your product: create, view, and deliver side-by-side with a team of experienced people."
//     },
//     {
//       title: "AI DEVELOPMENT",
//       description: "Rely on our AI expertise to unlock the untapped potential of vast data amounts and achieve tangible results."
//     }
//   ];

//   // Initialize GSAP animations after component mounts
//   useEffect(() => {
//     // Set up hover animations for desktop/tablet view
//     const serviceItems = document.querySelectorAll('.service-item');
    
//     serviceItems.forEach((item) => {
//       const arrow = item.querySelector('.arrow-line');
      
//       // Set initial state
//       gsap.set(arrow, {
//         attr: { x1: 10 }, // Starting point of the line
//       });
      
//       // Create hover animation timeline (paused initially)
//       const tl = gsap.timeline({ paused: true });
//       tl.to(arrow, {
//         attr: { x1: 3 }, // Extend from the back
//         duration: 0.3,
//         ease: "power2.out"
//       });
      
//       // Add event listeners
//       item.addEventListener('mouseenter', () => tl.play());
//       item.addEventListener('mouseleave', () => tl.reverse());
//     });
    
//     // Set up for mobile view
//     const mobileItem = document.querySelector('.mobile-service-item');
//     if (mobileItem) {
//       const mobileArrow = mobileItem.querySelector('.arrow-line');
      
//       // Set initial state
//       gsap.set(mobileArrow, {
//         attr: { x1: 10 }
//       });
      
//       // Create hover animation
//       const mobileTl = gsap.timeline({ paused: true });
//       mobileTl.to(mobileArrow, {
//         attr: { x1: 3 },
//         duration: 0.3,
//         ease: "power2.out"
//       });
      
//       // Add event listeners
//       mobileItem.addEventListener('mouseenter', () => mobileTl.play());
//       mobileItem.addEventListener('mouseleave', () => mobileTl.reverse());
//     }
//   }, []);

//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? serviceOptions.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === serviceOptions.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="w-full bg-[#f9fbfb] py-14 px-4 overflow-hidden">
//       {/* Container with max width for extremely large screens */}
//       <div className="max-w-screen-2xl mx-auto">
//         {/* Desktop and Tablet View (md and above) */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {serviceOptions.map((service, index) => (
//             <div key={index} className="service-item flex flex-col border-l border-gray-300 pl-6 pr-4 py-4 h-full">
//               <h3 className="text-blue-900 font-bold mb-4">{service.title}</h3>
//               <p className="text-gray-700 text-sm mb-8">{service.description}</p>
//               <div className="mt-auto">
//                 <svg className="w-8 h-8 text-blue-900 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <line 
//                     className="arrow-line" 
//                     x1="10" 
//                     y1="12" 
//                     x2="21" 
//                     y2="12" 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     strokeLinecap="round"
//                   />
//                   <polyline 
//                     points="14,5 21,12 14,19" 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Mobile Carousel View (below md) */}
//         <div className="md:hidden">
//           <div className="flex justify-end mb-4 space-x-2">
//             <button 
//               onClick={goToPrevious}
//               className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
//               aria-label="Previous service"
//             >
//               <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <button 
//               onClick={goToNext}
//               className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-blue-900"
//               aria-label="Next service"
//             >
//               <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </div>
//           <div className="mobile-service-item border-l border-gray-300 pl-6">
//             <h3 className="text-blue-900 font-bold mb-4">{serviceOptions[activeIndex].title}</h3>
//             <p className="text-gray-700 text-sm mb-8">{serviceOptions[activeIndex].description}</p>
//             <svg className="w-8 h-8 text-blue-900 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <line 
//                 className="arrow-line" 
//                 x1="10" 
//                 y1="12" 
//                 x2="21" 
//                 y2="12" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round"
//               />
//               <polyline 
//                 points="14,5 21,12 14,19" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceOptions;

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ServiceOptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Use refs to store animation timelines
  const desktopTimelineRefs = useRef([]);
  const mobileTimelineRef = useRef(null);
  
  const serviceOptions = [
    {
      title: "PRODUCT DEVELOPMENT",
      description: "Want to develop a new product but has no experience in software development? Provide us a need, vision, and get a comprehensive business solution."
    },
    {
      title: "TEAM EXTENSION",
      description: "Already defined requirements, budget, and time-frames? Hire our experts and we'll realize your vision planned in advance."
    },
    {
      title: "DEDICATED TEAM",
      description: "Stay engaged in the development of your product: create, view, and deliver side-by-side with a team of experienced people."
    },
    {
      title: "AI DEVELOPMENT",
      description: "Rely on our AI expertise to unlock the untapped potential of vast data amounts and achieve tangible results."
    }
  ];

  // Initialize GSAP animations after component mounts
  useEffect(() => {
    // Kill previous animations to prevent conflicts
    if (desktopTimelineRefs.current.length > 0) {
      desktopTimelineRefs.current.forEach(tl => tl && tl.kill());
    }
    if (mobileTimelineRef.current) {
      mobileTimelineRef.current.kill();
    }
    
    // Reset refs
    desktopTimelineRefs.current = [];
    
    // Set up hover animations for desktop/tablet view
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach((item, index) => {
      const arrow = item.querySelector('.arrow-line');
      
      // Set initial state - MODIFIED initial value to start at x1=15 instead of 5
      gsap.set(arrow, {
        attr: { x1: 15, x2: 50 },
      });
      
      // Create animation for only the arrow line (tail)
      const tl = gsap.timeline({ 
        paused: true,
        defaults: { 
          ease: "power2.inOut", // Smoother easing function
          duration: 0.3 // Longer duration for smoother animation
        }
      });
      
      // MODIFIED: Change the amount of extension by using a smaller negative value
      tl.to(arrow, {
        attr: { x1: -20 }, // Reduced extension - only goes to -20 instead of -60
      }, 0);
      
      // Add event listeners with debouncing for smoother transitions
      let timeout;
      item.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        tl.play();
      });
      
      item.addEventListener('mouseleave', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          tl.reverse();
        }, 50); // Small delay to prevent flickering
      });
      
      // Store the timeline reference
      desktopTimelineRefs.current[index] = tl;
    });
    
    // Set up for mobile view
    const mobileItem = document.querySelector('.mobile-service-item');
    if (mobileItem) {
      const mobileArrow = mobileItem.querySelector('.arrow-line');
      
      // Set initial state - MODIFIED initial value to start at x1=15 instead of 5
      gsap.set(mobileArrow, {
        attr: { x1: 15, x2: 50 }
      });
      
      // Create hover animation with identical settings to desktop
      const mobileTl = gsap.timeline({ 
        paused: true,
        defaults: { 
          ease: "power3.inOut",
          duration: 0.6
        }
      });
      
      // MODIFIED: Match the reduced extension of desktop view
      mobileTl.to(mobileArrow, {
        attr: { x1: -20 }, // Reduced extension - only goes to -20 instead of -60
      }, 0);
      
      // Add event listeners with debouncing
      let mobileTimeout;
      mobileItem.addEventListener('mouseenter', () => {
        clearTimeout(mobileTimeout);
        mobileTl.play();
      });
      
      mobileItem.addEventListener('mouseleave', () => {
        clearTimeout(mobileTimeout);
        mobileTimeout = setTimeout(() => {
          mobileTl.reverse();
        }, 50);
      });
      
      // Store the timeline reference
      mobileTimelineRef.current = mobileTl;
    }
    
    // Cleanup function
    return () => {
      if (desktopTimelineRefs.current.length > 0) {
        desktopTimelineRefs.current.forEach(tl => tl && tl.kill());
      }
      if (mobileTimelineRef.current) {
        mobileTimelineRef.current.kill();
      }
    };
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? serviceOptions.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === serviceOptions.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full bg-[#f9fbfb] py-14 px-4 overflow-hidden">
      {/* Container with max width for extremely large screens */}
      <div className="max-w-screen-2xl mx-auto">
        {/* Desktop and Tablet View (md and above) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOptions.map((service, index) => (
            <div key={index} className="service-item flex flex-col border-l border-gray-300 pl-6 pr-4 py-4 h-full relative hover:cursor-pointer">
              <h3 className="text-blue-900 font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-16">{service.description}</p>
              <div className="absolute bottom-4 right-0">
                <svg className="w-24 h-12 text-blue-900" viewBox="-20 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line 
                    className="arrow-line" 
                    x1="15" 
                    y1="12" 
                    x2="50" 
                    y2="12" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <polyline 
                    className="arrow-head"
                    points="43,5 50,12 43,19" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View (below md) */}
        <div className="md:hidden">
          <div className="flex justify-end mb-4 space-x-2">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-blue-900"
              aria-label="Next service"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="mobile-service-item border-l border-gray-300 pl-6 pr-4 py-4 relative hover:cursor-pointer">
            <h3 className="text-blue-900 font-bold mb-4">{serviceOptions[activeIndex].title}</h3>
            <p className="text-gray-700 text-sm mb-16">{serviceOptions[activeIndex].description}</p>
            <div className="absolute bottom-4 right-4">
              <svg className="w-32 h-12 text-blue-900" viewBox="-20 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line 
                  className="arrow-line" 
                  x1="15" 
                  y1="12" 
                  x2="50" 
                  y2="12" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                <polyline 
                  className="arrow-head"
                  points="43,5 50,12 43,19" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOptions;