import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CoreIndustriesSection = () => {
  const cardsRef = useRef([]);
  const eventListenersRef = useRef([]);

  useEffect(() => {
    // For each card, set up the hover animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return; // Skip if card ref is null
      
      const frontFace = card.querySelector('.card-front');
      const backFace = card.querySelector('.card-back');
      
      // Set initial state
      gsap.set(backFace, { rotationY: 180 });
      
      // Create hover animation timeline
      const tl = gsap.timeline({ paused: true });
      
      tl.to(frontFace, {
        duration: 0.4,
        rotationY: 180,
        ease: "power2.inOut"
      }, 0);
      
      tl.to(backFace, {
        duration: 0.4,
        rotationY: 0,
        ease: "power2.inOut"
      }, 0);
      
      // Create event handler functions
      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();
      
      // Add event listeners
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      // Store the event listeners for cleanup
      eventListenersRef.current[index] = {
        element: card,
        listeners: [
          { type: 'mouseenter', handler: handleMouseEnter },
          { type: 'mouseleave', handler: handleMouseLeave }
        ]
      };
    });

    // Apply inline styles that Tailwind doesn't provide for 3D transforms
    const applyInlineStyles = () => {
      document.querySelectorAll('.perspective-element').forEach(el => {
        el.style.perspective = '1000px';
      });
      
      document.querySelectorAll('.preserve-3d').forEach(el => {
        el.style.transformStyle = 'preserve-3d';
      });
      
      document.querySelectorAll('.backface-hidden').forEach(el => {
        el.style.backfaceVisibility = 'hidden';
      });
    };
    
    applyInlineStyles();

    // Clean up function
    return () => {
      eventListenersRef.current.forEach(item => {
        if (item && item.element) {
          item.listeners.forEach(listener => {
            item.element.removeEventListener(listener.type, listener.handler);
          });
        }
      });
    };
  }, []);

  // Industry card data
  const industries = [
    {
      icon: 'https://inoxoft.com/wp-content/uploads/2023/05/31.svg',
      title: "Custom Real Estate Software Development Services",
      description: "Inoxoft is a real estate development company that has built a number of projects that helped companies."
    },
    {
      icon: 'https://inoxoft.com/wp-content/uploads/2023/05/32.svg',
      title: "Custom Healthcare Software Development Company",
      description: "Inoxoft is a custom healthcare app development company that offers custom healthcare solutions done."
    },
    {
      icon: 'https://inoxoft.com/wp-content/uploads/2023/05/33.svg',
      title: "Education Software Development Services",
      description: "Education software development services help businesses, universities and schools increase students' engagement and digitize learning."
    },
    {
      icon: 'https://inoxoft.com/wp-content/uploads/2023/05/34.svg',
      title: "Custom Logistic Software Development Company",
      description: "Inoxoft is a logistics software development company that creates custom logistics software solutions."
    },
    {
      icon: 'https://inoxoft.com/wp-content/uploads/2023/05/Loan-Underwriting-Systems.svg',
      title: "Custom Fintech Software Development Services",
      description: "Inoxoft provides fintech development services for businesses to resolve their automation challenges."
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">CORE INDUSTRIES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="perspective-element"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="relative w-full h-64 preserve-3d transition-all duration-500 cursor-pointer">
                {/* Front of card */}
                <div className="card-front absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                  <img src={industry.icon} alt={industry.title} className="w-14 h-14 mb-4" />
                  <p className="text-lg font-semibold text-center">{industry.title}</p>
                </div>
                
                {/* Back of card */}
                <div className="card-back absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                  <a href="#" className="text-base font-semibold text-center mb-4 text-white hover:text-blue-200 transition-colors">{industry.title}</a>
                  <p className="text-sm text-center">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreIndustriesSection;