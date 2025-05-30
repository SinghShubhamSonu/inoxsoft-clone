import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DevelopmentService = () => {
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
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/fi_3449661-1.svg",
      title: "Discovery And Strategy Development",
      description: "We work with you to define your product vision, key features, and target audience. Through research and competitive analysis, we shape a strategy that ensures your product meets market demands."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-5-1.svg",
      title: "Product Ideation",
      description: "We’ll brainstorm innovative concepts and explore different approaches to bring your product to life. Our team will help you prioritize features, define user flows, and create a product roadmap."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-6.svg",
      title: "Design And Prototyping",
      description: "Get intuitive and engaging UI and UX that delight your customers with our software product design and development services. We’ll create interactive prototypes to test and refine your product’s design before moving into development."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/04/MVP.svg",
      title: "PoC And MVP Development",
      description: "We’ll build a proof of concept or minimum viable product to validate your idea and gather user feedback early in the development process to mitigate risks and ensure your product is destined for success."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/Development.svg",
      title: "Development And Engineering",
      description: "Our skilled developers will build your product using the latest technologies and best practices. We follow agile methodologies to ensure flexibility, transparency, and timely delivery."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-7.svg",
      title: "Quality Assurance",
      description: "We’ll conduct comprehensive QA testing, including functional, performance, and security testing, to ensure your product is reliable and bug-free."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/03/integration-1.svg",
      title: "Integration",
      description: "We’ll seamlessly integrate your product with other systems and platforms, ensuring smooth data flow and communication across your technology ecosystem."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
      title: "Maintenance",
      description: "We’ll provide ongoing support and maintenance to keep your product running smoothly and address any issues that may arise, as well as help you implement updates and enhancements."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-5">What’s Included In Our Custom <br/>Product Development Services</h2>
          <p className='text-xl  text-gray-600'>We provide end-to-end digital product development services that cover the entire lifecycle of your<br/> software product.
          </p>
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

export default DevelopmentService;