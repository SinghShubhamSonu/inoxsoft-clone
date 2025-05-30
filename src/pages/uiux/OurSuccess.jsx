import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurSuccess = () => {
  const sliderRef = useRef(null);
  const [activeCase, setActiveCase] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(2);
  
  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Animation for card hover - faster duration (0.15s)
  const handleMouseEnter = (index) => {
    setActiveCase(index);
    
    // Create animation for the active card - faster duration
    gsap.to(`#case-card-${index}`, {
      backgroundColor: '#00283b',
      color: 'white',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-title`, {
      color: 'white',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-description`, {
      color: 'rgba(255, 255, 255, 0.8)',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-meta-label`, {
      color: 'rgba(255, 255, 255, 0.7)',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-meta-value`, {
      color: 'white',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .view-case-link`, {
      color: 'white',
      duration: 0.15
    });
  };
  
  const handleMouseLeave = (index) => {
    setActiveCase(null);
    
    // Revert animation - faster duration
    gsap.to(`#case-card-${index}`, {
      backgroundColor: 'white',
      color: 'black',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-title`, {
      color: '#00283b',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-description`, {
      color: '#555',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-meta-label`, {
      color: '#555',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .case-meta-value`, {
      color: '#00283b',
      duration: 0.15
    });
    
    gsap.to(`#case-card-${index} .view-case-link`, {
      color: '#00283b',
      duration: 0.15
    });
  };

  const successCases = [
    {
      title: "Data-centric security software for streamlined cyber security risk management",
      description: "How we helped a UK security firm simplify cybersecurity management and drive operational excellence.",
      location: "United Kingdom",
      industries: "Security Consulting",
      services: "Discovery phase, UI/UX design, Web Development",
      technologies: "React JS, AWS Aurora, AWS CloudWatch, Google Analytics, MaterialUI, Nest JS, PostgreSQL, React Flow, SheetJS",
      image: "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
      screenshot: "/images/security-software-screenshot.png"
    },
    {
      title: "Web-based mobile app for capturing and storing unaltered proofs",
      description: "How we helped a Canadian entrepreneur launch a secure proof-capture app, that safeguards evidence, enhances credibility, and streamlines legal and compliance processes.",
      location: "Canada",
      industries: "Legal Tech",
      services: "Mobile Development, UI/UX design, Web Development",
      technologies: "React Native, AWS S3, Node.js, Express, MongoDB",
      image: "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
      screenshot: "/images/proof-app-screenshot.png"
    },
    {
      title: "Healthcare management platform for streamlined patient care",
      description: "How we helped a healthcare provider improve patient management and operational efficiency.",
      location: "United States",
      industries: "Healthcare",
      services: "Full-stack Development, UI/UX design, Cloud Infrastructure",
      technologies: "React JS, Node.js, MongoDB, AWS, Tailwind CSS",
      image: "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
      screenshot: "/images/healthcare-screenshot.png"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#00283b] ml-2">OUR SUCCESS CASES</h2>
          
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => sliderRef.current.slickPrev()} 
              className="flex items-center justify-center border border-gray-300 rounded-full w-12 h-12 hover:cursor-pointer hover:border-[#00283b] transition-all"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#00283b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              onClick={() => sliderRef.current.slickNext()} 
              className="flex items-center justify-center border border-gray-300 rounded-full w-12 h-12 hover:cursor-pointer hover:border-[#00283b] transition-all"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#00283b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {successCases.map((caseItem, index) => (
            <div key={index} className="px-2">
              <div 
                id={`case-card-${index}`}
                className="bg-white rounded-lg shadow-md p-8 h-full transition-all duration-150 border border-gray-100 flex flex-col"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div>
                  <h3 className="case-title text-xl font-bold text-[#00283b] mb-4">{caseItem.title}</h3>
                  <p className="case-description text-gray-600 mb-6">{caseItem.description}</p>
                </div>
                
                {activeCase === index ? (
                  <>
                    <div className="space-y-3 mb-6 mt-auto">
                      <div className="flex">
                        <span className="case-meta-label text-gray-600 w-32 font-semibold">Location:</span>
                        <span className="case-meta-value text-white font-medium">{caseItem.location}</span>
                      </div>
                      <div className="flex">
                        <span className="case-meta-label text-gray-600 w-32 font-semibold">Industries:</span>
                        <span className="case-meta-value text-white font-medium">{caseItem.industries}</span>
                      </div>
                      <div className="flex">
                        <span className="case-meta-label text-gray-600 w-32 font-semibold">Services:</span>
                        <span className="case-meta-value text-white font-medium">{caseItem.services}</span>
                      </div>
                      <div className="flex">
                        <span className="case-meta-label text-gray-600 w-32 font-semibold">Technologies:</span>
                        <span className="case-meta-value text-white font-medium flex-1">{caseItem.technologies}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <a href="#" className="view-case-link inline-flex items-center font-medium hover:underline">
                        VIEW CASE STUDY
                        <svg className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="mt-auto flex items-center justify-center h-64">
                    <div className="relative w-full">
                      <img 
                        src={caseItem.image} 
                        alt="Laptop frame" 
                        className="w-full h-auto object-contain mx-auto"
                        style={{ maxWidth: "300px" }} 
                      />
                      {/* You can overlay the actual screenshot here */}
                      {/* <img 
                        src={caseItem.screenshot} 
                        alt={caseItem.title} 
                        className="absolute top-[6%] left-[11.5%] w-[77%] h-auto" 
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-track {
          display: flex !important;
          padding: 1rem 0;
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

export default OurSuccess;