import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ReactNativeCostSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    timeline
      .fromTo(headingRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(leftTextRef.current, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.6"
      )
      .fromTo(rightTextRef.current, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.6"
      );

    return () => {
      // Cleanup
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-16 md:py-20 bg-[#003042] text-white"
    >
      <div className="absolute inset-0 shadow-inner pointer-events-none opacity-30"></div>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-52 px-6">
          <div className="lg:w-2/5" ref={leftTextRef}>
            <h2 
              ref={headingRef} 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            >
              REACT NATIVE APPDEVELOPMENT COST
            </h2>
            <p className="text-base md:text-lg font-medium">
              How to estimate the cost of React Native app development services? 
              The exact price can be established by experts after the timeframes, 
              requirements, and business needs are known.
            </p>
          </div>
          <div 
            className="lg:w-3/5" 
            ref={rightTextRef}
          >
            <p className="text-base md:text-lg mb-4 xl:ml-11 font-medium text-justify">
              Business analysts, project managers, team leaders, 
              engagement and delivery managers gather to evaluate all 
              clients' requirements. To provide reasonable time and money 
              estimation some metrics, diagrams, and analytics are to be 
              conducted. In such a flow, Inoxoft defines the cost for project 
              by negotiating and discussing each and every detail with a 
              client. Though, it is also possible to define an average cost for 
              web and mobile application development with <a href="/app-calculator/" className="text-white hover:text-blue-200 underline">App Cost 
              Calculator</a>. It is online and immediately shows the price for 
              the desired services.
            </p>
            <p className="text-base md:text-lg xl:ml-11 font-medium">
              To note, estimation depends on project complexity, additional 
              features, team composition etc. Where can you request React 
              Native application development services and explore how 
              software application development is organized at Inoxoft? 
              Contact us and ask for any information you want to have at 
              your disposal. You'll receive a response from our expert, who 
              is ready to provide you with comprehensive details on all the 
              existing questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactNativeCostSection;