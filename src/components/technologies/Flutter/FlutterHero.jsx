import React, { useRef } from 'react';
import { gsap } from 'gsap';

const FlutterHero = () => {
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);
  
  // Button animation handlers
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.to(pseudoElementRef.current, {
      width: '500px',
      duration: 1,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      duration: 0.2,
      ease: "power1.out"
    });

    gsap.to(pseudoElementRef.current, {
      width: '0px',
      duration: 1,
      ease: "power2.out"
    });
  };

  // Partner logos
  const images = [
    { src: "https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-1.webp", alt: "ISO 27001" },
    { src: "https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-2.webp", alt: "Microsoft Gold Partner" },
    { src: "https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-3.webp", alt: "Google Cloud Partner" },
    { src: "https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-4.webp", alt: "ISTQB Silver Partner" },
    { src: "https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-5.webp", alt: "Clutch Firms That Deliver" },
    { src: "https://inoxoft.com/wp-content/themes/inoxoft/images/Partner-slide-6.webp", alt: "Lviv IT Cluster" }
  ];

  return (
    <section className="h-full mt-4 bg-cover bg-center bg-no-repeat bg-[url('https://inoxoft.com/wp-content/uploads/2020/03/Frame-8644-3.jpg')] xl:bg-[url('https://inoxoft.com/wp-content/uploads/2020/03/image-40-5.jpg')]">
      <div className="max-w-full overflow-hidden mt-27">
        <div className="text-left px-4 sm:px-8 md:px-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white pt-14 mt-4">
            FLUTTER APP<br className="hidden sm:block" />DEVELOPMENT SERVICES
          </h1>

          <p className="text-white mb-4 text-xl sm:text-2xl md:text-3xl pt-5 pr-0 md:pr-6 leading-7 md:leading-9">
            There are many opportunities that new technologies are giving to us. To watch how quickly and smoothly an application works,
            to know that its development and testing were fast enough and easy – that's the prime aim, a golden mean among developers' circles.
          </p>

          <div className="mt-20">
            <div className="relative inline-block">
              <button
                ref={buttonRef}
                className="relative inline-flex items-center px-12 py-5 text-black bg-white hover:text-white border hover:border-white rounded-full transition-all duration-300 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="relative z-10">GET A QUOTE</span>   
                <i className="fa fa-angle-right ml-2 relative z-10"></i>
                <span
                  ref={pseudoElementRef}
                  className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] bg-opacity-20 rotate-[-29deg]"
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="container mx-auto py-6 md:py-10 px-4 sm:px-8 md:px-14 mt-2 md:mt-36">
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-1 md:p-2"> 
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-contain w-full h-16 sm:h-20 md:h-32 lg:h-36"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlutterHero;