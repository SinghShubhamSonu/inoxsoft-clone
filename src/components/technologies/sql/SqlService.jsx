import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SqlService = () => {
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
        "title": "Custom SQL Database Development",
        "description": "Our custom SQL database development services ensure optimal performance, security, and scalability for your business. From complex database architectures to efficient data models, we tailor solutions to meet your specific requirements."
    },
    {
        "icon": "https://inoxoft.com/wp-content/uploads/2024/09/system-migration.svg",
        "title": "SQL Database Migration",
        "description": "We simplify the migration process from legacy databases to SQL-based systems, enhancing speed, security, and maintainability—ensuring minimal disruption while modernizing your data architecture."
    },
    {
        "icon": "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
        "title": "SQL API Development & Integration",
        "description": "We specialize in building efficient and robust SQL-based APIs and seamlessly integrating with third-party systems, enabling smooth data exchange and ensuring your applications stay connected and responsive."
    },
    {
        "icon": "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
        "title": "Ongoing SQL Support and Maintenance",
        "description": "Our SQL database services don’t end at deployment. We offer continuous performance monitoring, security updates, and optimization to ensure your SQL databases remain high-performing and adaptable to future business needs."
    }
    
      
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800">SQL DEVELOPMENT SERVICES WE PROVIDE</h2>
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

export default SqlService;