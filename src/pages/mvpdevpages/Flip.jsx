import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Flip = () => {
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
      title: "Startups",
      description: "Test your concept with MPV development services for startups before investing heavily. Our startup MVP development company will help you gain valuable user feedback and demonstrate your potential to investors with real-world data."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/system-migration.svg",
      title: "Startups",
      description: "Our team will create a custom MVP that perfectly aligns with your specific needs and budget. Get a functional app with our SaaS MVP development services that integrates with your existing workflow, boosting efficiency and saving time and money compared to full-fledged development."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
      title: "Small Businesses",
      description: "Our SaaS MVP development company focuses on building solutions with the core functionalities that deliver significant value to your users. MVP development services reduce development time and minimizes resource allocation, allowing you to test your concept efficiently."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
      title: "Small Businesses",
      description: "Our MVP development services allow you to test new SaaS concepts in a controlled environment. This minimizes risk and allows you to gather valuable user feedback from internal stakeholders before committing to full-scale development."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800 pb-5">WHO CAN BENEFIT FROM OUR MVP<br/> DEVELOPMENT SERVICES?</h2>
          <p className='text-lg font-normal text-gray-600'>At Inoxoft, we believe in starting strong with a minimum viable product, whether it’s an MVP development service for tech startups or a complex enterprise-level solution. Here’s why businesses of all sizes can benefit from our MVP development services:</p>
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
                  {/* <img src={service.icon} alt={service.title} className="w-14 h-14 mb-4" /> */}
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

export default Flip;