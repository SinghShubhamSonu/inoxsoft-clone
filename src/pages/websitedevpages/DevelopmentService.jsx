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
      title: "Discovery and Strategy",
      description: "We begin by understanding your business goals, audience, and competitors. This helps us craft a custom website strategy that ensures your online presence supports your growth and drives engagement."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-5-1.svg",
      title: "Website Ideation and Planning",
      description: "From wireframes to user flows, we’ll brainstorm and structure your website to deliver seamless navigation and compelling user journeys. We help prioritize content and features that matter most to your users."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-6.svg",
      title: "UI/UX Design and Prototyping",
      description: "We design intuitive, responsive interfaces that align with your brand and delight users across all devices. Interactive prototypes allow for early feedback before development begins."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/04/MVP.svg",
      title: "Landing Page & MVP Websites",
      description: "Whether you need a simple landing page or a launch-ready site, we build fast, lightweight websites to get your brand online quickly and validate your digital presence with real users."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/Development.svg",
      title: "Full Website Development",
      description: "Our developers build robust, scalable websites using modern technologies. We follow clean code practices, SEO optimization, and performance enhancements to deliver exceptional user experiences."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-7.svg",
      title: "Quality Assurance",
      description: "We thoroughly test your website for responsiveness, accessibility, speed, and security. Our QA team ensures every feature works perfectly across browsers and devices."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/03/integration-1.svg",
      title: "3rd-Party Integrations",
      description: "Need to connect your site to CRMs, payment gateways, analytics tools, or APIs? We ensure smooth and secure integrations that boost your website’s functionality and performance."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
      title: "Support and Maintenance",
      description: "Post-launch, we offer ongoing website support, updates, and security patches. Whether it's fixing bugs or adding new features, we keep your site up-to-date and performing at its best."
    }
  ];
  

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-5">WHAT'S INCLUDED IN OUR CUSTOM <br/>WEBSITE DEVELOPMENT SERVICES</h2>
          <p className='text-xl  text-gray-600'>WE PROVIDE END TO END DIGITAL WEBSITE DEVELOPMENT SERVICES THAT COVER THE ENTIRE LIFECYCLE OF YOUR<br/> SOFTWARE PRODUCT.
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