import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Service = () => {
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
        "icon": "https://inoxoft.com/wp-content/uploads/2024/09/Development.svg",
        "title": "Custom HTML/CSS/JS Development",
        "description": "Our custom HTML, CSS, and JavaScript development services ensure fast, responsive, and visually appealing websites. From complex layouts to interactive UI elements, we tailor solutions to meet your specific front-end requirements."
    },
    {
        "icon": "https://inoxoft.com/wp-content/uploads/2024/09/system-migration.svg",
        "title": "HTML/CSS/JS Migration",
        "description": "We simplify the migration process from legacy front-end systems to modern HTML, CSS, and JavaScript frameworks. Enhance performance, scalability, and user experience while ensuring minimal disruption during the transition."
    },
    {
        "icon": "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
        "title": "HTML/CSS/JS API Development & Integration",
        "description": "We specialize in creating efficient and responsive HTML, CSS, and JavaScript-based APIs that integrate seamlessly with third-party services, ensuring smooth data exchange and a connected ecosystem across your web applications."
    },
    {
        "icon": "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
        "title": "Ongoing HTML/CSS/JS Support and Maintenance",
        "description": "Our front-end development services don’t stop at deployment. We offer continuous support, performance optimization, and updates to ensure your websites and applications stay responsive, secure, and up-to-date with the latest trends."
    }
    
    
      
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800">HTML/CSS/JS DEVELOPMENT SERVICES WE PROVIDE</h2>
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

export default Service;