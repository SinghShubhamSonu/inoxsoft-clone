import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PhpDevService = () => {
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
        title: "Custom PHP Application Development",
        description: "From dynamic websites to complex web applications, our custom PHP development ensures flexibility, performance, and a secure backend tailored to your specific business goals."
      },
      {
        icon: "https://inoxoft.com/wp-content/uploads/2024/09/system-migration.svg",
        title: "Migration to PHP Frameworks",
        description: "We streamline the transition from outdated platforms to modern PHP frameworks like Laravel or Symfony, enhancing speed, security, and code maintainability—without interrupting your ongoing operations."
      },
      {
        icon: "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
        title: "API Development & Integration with PHP",
        description: "We develop reliable RESTful APIs using PHP and integrate third-party services, enabling seamless communication between systems and building a fully connected digital experience."
      },
      {
        icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
        title: "PHP Support and Maintenance",
        description: "Our partnership continues beyond deployment. We provide continuous monitoring, troubleshooting, and updates to keep your PHP applications secure, fast, and future-ready."
      }
      
      
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800">PHP DEVELOPMENT SERVICES WE PROVIDE</h2>
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

export default PhpDevService;