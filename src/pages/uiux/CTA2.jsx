import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CTA2 = () => {
  const bannerRef = useRef(null);
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);
  
  useEffect(() => {
    // Animation code remains the same
    const banner = bannerRef.current;
    const button = buttonRef.current;
    
    gsap.fromTo(banner, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8,
        ease: "power2.out"
      }
    );
    
    // Button hover handlers - updated to match OutsourceButton animations
    const handleMouseEnter = () => {
      gsap.to(pseudoElementRef.current, {
        width: '500px',
        duration: 1,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pseudoElementRef.current, {
        width: '0px',
        duration: 1,
        ease: "power2.out"
      });
    };
    
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className="w-full bg-gray-50 py-14">
      <section 
        ref={bannerRef}
        className="w-full py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2025/03/Banner-Technical-Audit-blog.jpg.webp)' }}
      >
        <div className="container mx-auto px-4 ">
          <div className="text-center text-white ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            UI/UX DESIGN SERVICES COST
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-12">
            The cost of UI and UX design services largely depends on the number of <br/>pages in the application, amount of graphics, images, and many other <br/>requirements. You can use our App Cost Calculator to define the average <br/>price for outsourced UI/UX design services we provide.
            </p>
            <div className="flex justify-center">
              <div className="relative inline-block">
                <a 
                  ref={buttonRef}
                  href="#" 
                  className="relative inline-flex items-center justify-center px-14 py-3.5 bg-white text-black font-medium rounded-full border border-[#00283b] hover:border-white hover:text-white transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 text-[18px]">ESTIMATE MY DESIGN  <i className="fa fa-angle-right ml-2 relative z-10"></i></span>
                  <span
                    ref={pseudoElementRef}
                    className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA2;