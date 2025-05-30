import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FlutterInfoSection = () => {
  const sectionRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Fade in and slide up animations
    tl.fromTo(paragraph1Ref.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    tl.fromTo(paragraph2Ref.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6" // Start slightly before the first animation ends
    );

    // Clean up
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F9FBFB] relative"
    >
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-gray-200 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl  text-left">
          <p 
            ref={paragraph1Ref}
            className="mb-6 text-gray-800 text-lg leading-relaxed"
          >
            In 2018, the approach to writing a codebase at the fastest terms and effectively combine it with design implementation resulted in an ingenious open-source UI software development kit, called Flutter. The advantages of Flutter in the first place as the most top-priority skill for software engineers.
          </p>
          
          <p 
            ref={paragraph2Ref}
            className="text-gray-800 text-lg leading-relaxed"
          >
            What is flutter app development? The concept with which Flutter has been presented to the world: create beautiful apps around the world. Inoxoft is a flutter app development company, specializing in solutions for mobile development, and standing side by side with modern technologies. We take direction at satisfying end-user needs and meeting our clients' requirements. So, we introduce Flutter app development services for iOS and Android applications. New powerful mobile solutions are waiting to help your business grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlutterInfoSection;