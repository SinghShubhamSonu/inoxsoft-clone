import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollaborationModels = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  
  // Update responsive state based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMedium(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const collaborationModels = [
    {
      title: "PRODUCT DEVELOPMENT",
      description: "Want to develop a new product but has no experience in software development? Provide us a need, vision, and get a comprehensive business solution.",
      link: "/service/product-development-services"
    },
    {
      title: "TEAM EXTENSION",
      description: "Already defined requirements, budget, and time-frames? Hire our software engineers and we'll realize your vision planned in advance.",
      link: "/service/it-staff-augmentation-services"
    },
    {
      title: "DEDICATED TEAM",
      description: "Stay engaged in the development of your product: create, view, and deliver side-by-side with a team of experienced people.",
      link: "/service/dedicated-development-team"
    }
  ];

  // Only use slider for mobile and medium screens
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMedium ? 2 : 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  // Render normal grid for desktop, slider for medium and mobile
  if (!isMobile && !isMedium) {
    return (
      <section className="bg-gray-50 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">OUR COLLABORATION MODELS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationModels.map((model, index) => (
              <a 
                key={index}
                href={model.link} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 h-full"
              >
                <div className="p-10 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">{model.title}</h3>
                    <p className="text-gray-600 text-lg">
                      {model.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Render slider for mobile and medium screens
  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">OUR COLLABORATION MODELS</h2>
        </div>
        
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="cursor-grab active:cursor-grabbing">
            {collaborationModels.map((model, index) => (
              <div className="px-2" key={index}>
                <a 
                  href={model.link} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 block h-full"
                >
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-blue-900 mb-6">{model.title}</h3>
                      <p className="text-gray-600 text-lg">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons - Positioned exactly like in TestimonialSection */}
          <div className="absolute top-[-70px] right-10 flex items-center space-x-3">
            <button 
              onClick={() => sliderRef.current.slickPrev()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              onClick={() => sliderRef.current.slickNext()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default CollaborationModels;