import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const WhyReactNativeSection = () => {
  const sectionRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
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
      className="relative py-16 md:py-24 bg-white"
    >
      {/* Shadow effect */}
      {/* <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-200 to-transparent opacity-60"></div> */}
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-start">
          {/* Section header */}
          <h2 ref={addToRefs} className="text-3xl md:text-4xl font-bold mb-6 text-[#173753]">
            WHY REACT NATIVE
          </h2>
          
          {/* Main paragraph */}
          <p ref={addToRefs} className="mb-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="block">React Native is used by software engineers in <a href="/service/mobile-application-development/" className="text-gray-700 hover:text-gray-800 transition-colors underline">building mobile applications<br/></a> and creating <a href="/service/ui-and-ux-development/" className="text-gray-600 hover:text-gray-800 transition-colors underline">enjoyable UI/UX design</a>. If you are interested in software<br/> targeted to impress end users with fast performance, great design, and<br/> convenient usage, you can confidently use React app development services.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyReactNativeSection;