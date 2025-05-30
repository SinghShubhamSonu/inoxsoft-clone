import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ReactNativeTextSection = () => {
  const sectionRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    // Animation for section entrance
    // gsap.fromTo(
    //   sectionRef.current,
    //   { opacity: 0, y: 50 },
    //   { 
    //     opacity: 1, 
    //     y: 0, 
    //     duration: 0.4, 
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top 80%",
    //     }
    //   }
    // );

    // Text animation for each paragraph
    paragraphRefs.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          delay: 0.2 * index,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 85%",
          }
        }
      );
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add paragraphs to our refs array
  const addToRefs = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-16 md:py-24 bg-gray-100"
    >
      {/* Shadow effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-200 to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center">
          {/* First paragraph */}
          <p ref={addToRefs} className="mb-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="block">React Native is an opportunity to create software solutions "out of the box". This open-source cross-platform technology is ideal for dynamic mobile applications. React Native Mobile development is crucial for businesses to grow, especially in fintech and trading industries, stay competitive and satisfy users' needs by offering services online.</span>
          </p>
          
          {/* Second paragraph */}
          <p ref={addToRefs} className="mb-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="block">For a business to be successful, you should think about a mobile application, whom to offer, and where to sell your service or product. The questions of what technology to choose and how to build an app come to mind but are tiresome to an extent? As a React native application development company, we are glad to help you with your search for an ideal solution. We'll explain how to start a project and provide you with information you should know. If there is such a good percentage of those who love React Native, obviously it indicates that there's a need for this programming language and it's growing.</span>
          </p>
          
          {/* Third paragraph */}
          <p ref={addToRefs} className="mb-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="block">No doubt, React Native holds its position and is necessary for mobile developers worldwide. Facebook actively uses React and React Native as its prime technologies. This helps to drive modernization and unite companies, engineers into a powerful IT community. Indeed, there is no direct alternative to React Native, that could completely replace it. Let's first find out more about what React Native is, where it can be used and what to expect after using software based on the following technology.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReactNativeTextSection;