import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ReactNativeExperienceSection = () => {
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
      className="relative py-16 md:py-24 bg-gray-50"
    >
      <div className="absolute inset-0 shadow-inner pointer-events-none opacity-30"></div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/2" ref={leftTextRef}>
            <h2 
              ref={headingRef} 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#173753] mb-6"
            >
              OUR EXPERIENCE IN CUSTOM REACT NATIVE DEVELOPMENT SERVICES
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-8">
              The dedicated team of developers at Inoxoft knows what challenges may happen and what solutions will resolve an existing business need. Inoxoft has successfully delivered React Native app development services for clients from the US, UK, Sweden, Netherlands, Germany, Israel, and other countries.
            </p>
          </div>
          <div 
            className="lg:w-1/2 space-y-6" 
            ref={rightTextRef}
          >
            <p className="text-gray-800 text-base md:text-lg">
              Development of apps in React Native demands knowledge in JavaScript, JSX, CSS, HTML, Redux, animations and this is not the full list. It is evolving technology in which Inoxoft React Native developers have solid experience. In a team of skilled engineers, we develop expertise in React Native and other technologies. Building hybrid platforms with Inoxoft is conducted at a high level and with great dedication. We execute correctly the business logic and unite requirements into a single perfectly working solution.
            </p>
            <p className="text-gray-800 text-base md:text-lg">
              Inoxoft has 6 years of experience in designing and delivering software applications for a wide range of clients with different business needs. Our case studies disclose narrow-field cases we worked on. Challenges we resolved and unique solutions we applied to achieve the clients' ultimate needs help to reveal and understand our baggage of experience for those, who want to partner with us for the first time. As well, we provide React Native consulting services for scaling up and improving your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactNativeExperienceSection;