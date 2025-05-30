import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industries = () => {
  const sliderRef = useRef(null);

  const industries = [
    {
      title: "LOGISTICS",
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/06/Top_icon.png.webp',
      link: "/industries/logistics/",
      services: [
        "Fleet management",
        "Last-mile delivery",
        "Order and shipment tracking",
        "Driver scheduling",
        "Vehicle maintenance",
        "Fuel delivery"
      ],
      featured: true
    },
    {
      title: "HEALTHCARE",
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/06/Main-cards-Services.png.webp',
      link: "/industries/healthcare/",
      services: [
        "Telemedicine platforms",
        "Electronic health record (EHR) systems",
        "Patient engagement portals",
        "Medical record management",
        "Remote patient monitoring tools"
      ],
      featured: true
    },
    {
      title: "EDUCATION",
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/06/Main-cards-Services-1.png.webp',
      link: "/industries/education-industry/",
      services: [
        "Learning management systems (LMS)",
        "Student information systems (SIS)",
        "Interactive learning platforms",
        "Gamified educational apps",
        "Virtual and augmented reality learning tools"
      ],
      featured: true
    },
    {
      title: "FINANCE",
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/06/Main-cards-Services-2.png.webp',
      link: "/industries/fintech/",
      services: [
        "Mobile banking applications",
        "Payment processing solutions",
        "Investment management platforms",
        "Fraud detection systems",
        "Blockchain-based financial services"
      ],
      featured: false
    },
    {
      title: "REAL ESTATE",
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/06/Top_icon-1.png.webp',
      link: "/industries/custom-real-estate-software-development-services/",
      services: [
        "Property search and listing apps",
        "Virtual tour and 3D modeling tools",
        "Agent management systems",
        "Smart building solutions",
        "Property management applications"
      ],
      featured: false
    }
  ];

  // Function to handle card animations 
  const initCardAnimation = () => {
    // Get all industry card elements
    const cards = document.querySelectorAll('.industry-card');
    
    cards.forEach(card => {
      const overlay = card.querySelector('.card-overlay');
      const contentWrapper = card.querySelector('.content-wrapper');
      const servicesList = card.querySelector('.services-list');
      
      // Set initial states
      gsap.set(overlay, {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        opacity: 0.3
      });
      
      gsap.set(servicesList, { 
        opacity: 0,
        height: 0,
        overflow: 'hidden'
      });
      
      gsap.set(contentWrapper, {
        y: 0
      });
      
      // Create hover enter animation
      card.addEventListener('mouseenter', () => {
        gsap.to(overlay, { 
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          opacity: 1,
          duration: 0.3 
        });
        
        // First show the services list
        gsap.to(servicesList, { 
          opacity: 1,
          height: 'auto',
          duration: 0.3,
          ease: 'power2.out'
        });
        
        // Then move both title and services list up together
        gsap.to(contentWrapper, {
          y: -20,
          duration: 0.4,
          delay: 0.1,
          ease: 'power2.out'
        });
      });
      
      // Create hover leave animation
      card.addEventListener('mouseleave', () => {
        gsap.to(overlay, { 
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          opacity: 0.3,
          duration: 0.3 
        });
        
        // First move the content wrapper back down
        gsap.to(contentWrapper, {
          y: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
        
        // Then hide the services list
        gsap.to(servicesList, { 
          opacity: 0,
          height: 0,
          duration: 0.3,
          delay: 0.1
        });
      });
    });
  };
  
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  // Initialize animations after the component mounts
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Use matchMedia to only apply animations on non-mobile devices
      if (!window.matchMedia('(max-width: 767px)').matches) {
        initCardAnimation();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white relative">
      <div className="section-shadow absolute top-0 left-0 w-full h-8 opacity-10 bg-gradient-to-b from-gray-400 to-transparent"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-start mb-16">
          <h2 className="text-4xl font-bold text-[#173753] mb-6">INDUSTRIES OUR NODE.JS DEVELOPMENT<br/> FIRM WORKS WITH</h2>
          <p className="text-gray-700 text-[18px] max-w-3xl ">
          From finance to healthcare, our Node.js developers for hire have left their mark across different
          sectors. Each one has its own rhythm and requirements, and we’re here to meet them with solutions 
          that go beyond the ordinary. Here’s a look at the industries we partner with:
          </p>
        </div>
        
        {/* Desktop/Tablet Layout (hidden on small screens) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* First row - featured items (larger cards) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries
                .filter(industry => industry.featured)
                .map((industry, index) => (
                  <div key={`featured-${index}`} className="industry-card relative rounded-lg overflow-hidden shadow-md h-80">
                    {/* Image */}
                    <img 
                      src={industry.image} 
                      alt={`${industry.title} Development`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Content */}
                    <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                      <div className="content-wrapper p-6">
                        <a href={industry.link} className="text-white text-xl font-bold block mb-3 hover:underline">
                          {industry.title}
                        </a>
                        <ul className="services-list text-white space-y-1">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-xs leading-6">•</span>
                              <span className="text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            {/* Second row - regular items (smaller cards) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries
                .filter(industry => !industry.featured)
                .map((industry, index) => (
                  <div key={`regular-${index}`} className="industry-card relative rounded-lg overflow-hidden shadow-md h-64">
                    {/* Image */}
                    <img 
                      src={industry.image} 
                      alt={`${industry.title} Development`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Content */}
                    <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                      <div className="content-wrapper p-6">
                        <a href={industry.link} className="text-white text-xl font-bold block mb-3 hover:underline">
                          {industry.title}
                        </a>
                        <ul className="services-list text-white space-y-1">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-xs leading-6">•</span>
                              <span className="text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Layout (hidden on medium+ screens) */}
        <div className="md:hidden relative mt-8">
          <Slider ref={sliderRef} {...sliderSettings} className="cursor-grab active:cursor-grabbing">
            {industries.map((industry, index) => (
              <div key={index} className="px-2 pb-4">
                <div className="industry-card relative rounded-lg overflow-hidden shadow-md h-72">
                  {/* Image */}
                  <img 
                    src={industry.image} 
                    alt={`${industry.title} Development`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                    <div className="p-6">
                      <a href={industry.link} className="text-white text-xl font-bold block mb-3 hover:underline">
                        {industry.title}
                      </a>
                      <ul className="text-white space-y-1">
                        {industry.services.slice(0, 3).map((service, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-xs leading-6">•</span>
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                        {industry.services.length > 3 && (
                          <li className="text-sm text-gray-300">
                            +{industry.services.length - 3} more services
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Custom Navigation Buttons */}
          <div className="absolute top-[-70px] right-10 flex items-center space-x-3 mt-6">
            <button 
              onClick={() => sliderRef.current.slickPrev()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              onClick={() => sliderRef.current.slickNext()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .slick-dots {
          bottom: -35px;
        }
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .slick-slide > div {
          width: 100%;
          height: 100%;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default Industries;