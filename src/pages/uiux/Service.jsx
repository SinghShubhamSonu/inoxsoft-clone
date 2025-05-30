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

  // Service card data from the provided HTML
  const services = [
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Wireframing.svg",
      title: "Wireframing & Prototyping",
      description: "We translate ideas into interactive prototypes that start with detailed wireframes outlining structure and functionality. Iterative process of our UI/UX design services allows for user testing and feedback before development begins, which results in a polished final product."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/ui-ux-design.svg",
      title: "UX/UI Design",
      description: "At our UI/UX design services company, we go through user research, competitor analysis, and information architecture to craft experiences that are effortless to navigate. Our creative team brings your UX vision to life, focusing on visual appeal, branding consistency, and clear communication to ensure a delightful user journey."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Consulting.svg",
      title: "UX/UI Consulting",
      description: "We provide UX and UI design services and consulting with strategic guidance through design audits and recommendations. Uncover design flaws through expert audits and get clear recommendations to optimize your design with our UX & UI design and consulting services."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Information-Architecture-Design.svg",
      title: "Information Architecture Design",
      description: "We create an intuitive roadmap for users with our mobile UI/UX design services and UI/UX website design services, meticulously structure content, define navigation paths, and establish hierarchies. Our team is determined to ensure your software UI & UX design is organized, intuitive, and user-friendly."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/08/Card_element.svg",
      title: "Usability Testing",
      description: "Our expert UX/UI design services provide you with a deep understanding of your target audience. We utilize interviews, surveys, heatmaps, and A/B testing to identify pain points and optimize your user experience with data-driven insights."
    }
  ];

  return (
    <section className="other-section-class other-section-class relative py-16">
      <div className="section-shadow absolute inset-0"></div>
      <div className="container gsp_dc mx-auto px-4">
        <div className="other-section-header center text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800">UI/UX DESIGN AND DEVELOPMENT <br/>SERVICES WE PROVIDE&nbsp;</h2>
        </div>
        
        <div className="services-section__container">
          {/* First row - 3 cards */}
          <div className="services-section__wrapper grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                className="services-section__item perspective-1000"
                ref={el => cardsRef.current[index] = el}
              >
                <div className="services-section__item-wrapper relative w-full h-64 transform-style-3d transition-transform duration-500 cursor-pointer">
                  {/* Front of card */}
                  <div className="card__face card__face--front card-front absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                    <img 
                      width="54" 
                      height="54" 
                      src={service.icon} 
                      alt={service.title} 
                      className="entered lazyloaded mb-4"
                      loading="lazy"
                    />
                    <p className="title text-lg font-semibold text-center">{service.title}</p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="card__face card__face--back card-back absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                    <p className="text-lg font-semibold text-center mb-4">{service.title}</p>
                    <p className="text-sm text-center">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="services-section__wrapper grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <div 
                key={index + 3} 
                className="services-section__item perspective-1000"
                ref={el => cardsRef.current[index + 3] = el}
              >
                <div className="services-section__item-wrapper relative w-full h-64 transform-style-3d transition-transform duration-500 cursor-pointer">
                  {/* Front of card */}
                  <div className="card__face card__face--front card-front absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                    <img 
                      width="54" 
                      height="54" 
                      src={service.icon} 
                      alt={service.title} 
                      className="entered lazyloaded mb-4"
                      loading="lazy"
                    />
                    <p className="title text-lg font-semibold text-center">{service.title}</p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="card__face card__face--back card-back absolute w-full h-full bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                    <p className="text-lg font-semibold text-center mb-4">{service.title}</p>
                    <p className="text-sm text-center">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="gsp_post_data hidden" 
          data-post_type="services" 
          data-cat="" 
          data-modified="120" 
          data-title="UI UX Design Services" 
          data-home="https://inoxoft.com"
        ></div>
      </div>
    </section>
  );
};

export default Service;