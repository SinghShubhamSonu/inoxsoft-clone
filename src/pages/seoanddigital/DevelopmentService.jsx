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
      title: "SEO Strategy and Market Research",
      description: "We collaborate with you to define your SEO goals, target audience, and competitive landscape. Through in-depth research and analysis, we craft a strategy that ensures your website ranks higher and attracts the right traffic."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-5-1.svg",
      title: "Digital Marketing Ideation",
      description: "Our team will help you brainstorm innovative marketing strategies, identify growth opportunities, and create a roadmap to execute campaigns that drive results. From social media to email marketing, we prioritize what will bring you the most impact."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-6.svg",
      title: "Creative Design and User Engagement",
      description: "Engage your audience with visually compelling designs and user-friendly experiences. We’ll craft high-impact content and design assets that resonate with your audience, optimizing them for search engines and conversions."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/04/MVP.svg",
      title: "SEO Audits and Market Fit Analysis",
      description: "We conduct in-depth SEO audits and analyze your digital presence to identify gaps and opportunities. Our goal is to fine-tune your online strategy, ensuring it aligns with your audience's needs and the latest SEO trends."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/09/Development.svg",
      title: "Campaign Execution and Optimization",
      description: "Our experts will implement SEO campaigns, digital ads, and content marketing strategies using the latest techniques. Through continuous optimization, we ensure that your efforts generate tangible ROI."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-7.svg",
      title: "Performance Monitoring and Analytics",
      description: "We’ll provide continuous monitoring of your SEO performance, including tracking traffic, rankings, and conversions. Through data-driven insights, we adjust strategies to keep improving results over time."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/03/integration-1.svg",
      title: "Platform Integration and Automation",
      description: "We’ll integrate your digital marketing tools and platforms seamlessly, ensuring automated workflows, better reporting, and more efficient lead management to boost productivity and accuracy."
    },
    {
      icon: "https://inoxoft.com/wp-content/uploads/2024/06/Card_element.svg",
      title: "Ongoing Campaign Maintenance and Growth",
      description: "We provide ongoing management and support to optimize your campaigns, improve SEO rankings, and address any issues that arise. Our team helps you implement new updates, keeping your marketing strategies fresh and competitive."
    }
  ];
  

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-5">What’s Included In Our Custom <br/>Seo And Digital Marketing Services</h2>
          <p className='text-xl  text-gray-600'>We provide end-to-end SEO and digital marketing services that cover the entire lifecycle of your online presence, <br/>from strategy and implementation to optimization and growth.
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