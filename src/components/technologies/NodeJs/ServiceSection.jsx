import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ServiceSection = () => {
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
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Consulting.svg",
      title: "Node.js Consulting Services ",
      description: "Need a fresh perspective? We'll review your Node.js setup, analyze your code, optimize your data processing, and guide you on scaling Node.js applications for growth."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/Development.svg",
      title: "Custom Development ",
      description: "When 'off-the-shelf' just doesn't cut it, our team builds Node.js solutions from scratch to provide exactly what your business demands, whether it's real-time data processing, complex architectures, or intuitive interfaces."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/03/integration-1.svg",
      title: "Back-End Development and Integration",
      description: "We create robust, scalable back-end infrastructures that act as the backbone of your application. Our solutions allow smooth interactions across platforms, simplify data flow, and improve the overall user experience."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/system-migration.svg",
      title: "Node.js Migration",
      description: "Ready to level up? We handle migrations from legacy systems to Node.js, giving you a faster, more secure, and reliable modernized system."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
      title: "API Development",
      description: "Our Node.js APIs are the perfect bridges between systems. From secure data exchange to intuitive app integration, we create RESTful APIs that connect the dots and allow your business to expand and interact effortlessly."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-7-1.svg",
      title: "DevOps and Infrastructure Management",
      description: "We optimize your Node.js applications for performance and scalability. With robust CI/CD pipelines, containerization, and monitoring, we enhance deployment speeds and build a stable production environment."
    },   
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
      title: "Support and Maintenance",
      description: "Our support doesn't end at deployment. We offer ongoing maintenance to keep your Node.js applications running smoothly, troubleshooting issues, adding functionality, and keeping your system secure."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">REACT DEVELOPMENT SERVICES WE PROVIDE</h2>
        </div>
        
        {/* First row - 3 cards */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {services.slice(0, 3).map((service, index) => (
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

        {/* Second row - 3 cards */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {services.slice(3, 6).map((service, index) => (
              <div 
                key={index + 3} 
                className="perspective-1000"
                ref={el => cardsRef.current[index + 3] = el}
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

        {/* Third row - 1 centered card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {services.slice(6).map((service, index) => (
              <div 
                key={index + 6} 
                className="perspective-1000 mx-auto"
                ref={el => cardsRef.current[index + 6] = el}
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
      </div>
    </section>
  );
};

export default ServiceSection;