import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ReactDevelopmentServicesSection = () => {
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

  // Service card data
  const services = [
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/Development.svg",
      title: "Custom Web Applications Development",
      description: "From user-friendly interfaces to scalable structures, our custom solutions meet your needs precisely, whether you're aiming for high performance, responsiveness, or standout design."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/system-migration.svg",
      title: "Migration to React",
      description: "We make the transition to React simple, moving you from outdated tech to a modern, dynamic framework. The result? A refreshed application with improved speed, reliability, and flexibility, without the usual migration hassles."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
      title: "API Integration",
      description: "Seamless data flow is the secret of a great app. We integrate APIs that connect your React application to other platforms, improving functionality, boosting interoperability, and allowing your business to operate as one smooth, unified system."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
      title: "Support and Maintenance",
      description: "Our partnership doesn't end after launch. We offer ongoing support and maintenance to keep your React applications in top shape, troubleshoot issues, and add new features as your business grows."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">REACT DEVELOPMENT SERVICES WE PROVIDE</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="perspective-1000"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="relative w-full h-64 transform-style-3d transition-transform duration-500 cursor-pointer">
                {/* Front of card */}
                <div className="card-front absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                  <img src={service.icon} alt={service.title} className="w-14 h-14 mb-4" />
                  <p className="text-lg font-semibold text-center">{service.title}</p>
                </div>
                
                {/* Back of card */}
                <div className="card-back absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                  <p className="text-lg font-semibold text-center mb-4">{service.title}</p>
                  <p className="text-sm text-center">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactDevelopmentServicesSection;