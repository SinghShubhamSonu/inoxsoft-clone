import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WhyInox = () => {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Reset refs array
  cardsRef.current = [];
  
  // Function to add elements to our refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  // Cards data
  const cardsData = [
   {
    title : "Extensive Experience",
    text : "Inoxoft has extensive experience in MVP development across various industries, including healthcare, education, logistics, real estate, and fintech. Our developers specialize in the most progressive technologies and tools to deliver high-quality software products."
   },
   {
    title : "Time & Cost Efficiency",
    text : "Our custom MVP app development services company follows an Agile development approach to deliver the essential features within a specified timeframe. We offer flexible cooperation models, providing you with remote, extended, or dedicated team options."
   },
   {
    title : "User-Centric Approach",
    text : "We build MVP with the end-users in mind, focusing on their preferences and expectations. Our team incorporates client feedback and conducts usability testing to create a seamless and engaging UX, to increase user satisfaction, adoption, and loyalty to your company or brand."
   },
   {
    title : "Scalability & Future Growth",
    text : "With a scalable architecture, modular design, cloud server, and performance optimization, your MVP will be well-positioned to accommodate increasing user demands and support your growth."
   }
  ];
  
  // Store original heights of cards
  const originalHeights = useRef({});
  
  // Setup GSAP animations
  useEffect(() => {
    // Get original heights of all cards
    cardsRef.current.forEach((card, index) => {
      // Store the original height for reference
      originalHeights.current[index] = card.offsetHeight;
      
      const cardText = card.querySelector('.card-text');
      const cardTitle = card.querySelector('.card-title');
      gsap.set(cardText, { opacity: 0 });
      
      // Setup hover animation with height expansion
      card.addEventListener('mouseenter', () => {
        // Calculate expanded height (30% taller)
        const expandedHeight = originalHeights.current[index] * 1.3;
        
        gsap.to(card, {
          backgroundColor: '#003349',
          height: expandedHeight,
          duration: 0.2,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          borderColor: '#003349', // Change border color on hover to match background
        });
        gsap.to(cardTitle, {
          color: 'white',
          duration: 0.2,
        });
        gsap.to(cardText, {
          opacity: 1,
          color: 'white',
          duration: 0.2,
        });
        
        // Only adjust positions in desktop layout (xl breakpoint - 1280px)
        if (window.matchMedia('(min-width: 1280px)').matches) {
          updateCardPositions(index);
        }
      });
      
      // Setup mouseleave animation
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          backgroundColor: 'white',
          height: originalHeights.current[index],
          duration: 0.2,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          borderColor: 'black', // Return to black border on mouse leave
        });
        gsap.to(cardTitle, {
          color: '#003349',
          duration: 0.2,
        });
        gsap.to(cardText, {
          opacity: 0,
          color: '#003349',
          duration: 0.2,
        });
        
        // Only reset positions in desktop layout (xl breakpoint - 1280px)
        if (window.matchMedia('(min-width: 1280px)').matches) {
          resetCardPositions();
        }
      });
    });
    
    // Function to update positions of cards when one expands
    const updateCardPositions = (expandedIndex) => {
      const positions = [
        { top: '0px', left: '0px', zIndex: 1 },
        { top: '100px', left: '250px', zIndex: 2 },
        { top: '200px', left: '500px', zIndex: 3 },
        { top: '300px', left: '750px', zIndex: 4 }
      ];
      
      // Get height increase amount
      const heightIncrease = originalHeights.current[expandedIndex] * 0.3;
      
      // Adjust positions of cards after the expanded one
      cardsRef.current.forEach((card, idx) => {
        if (idx > expandedIndex) {
          const originalTop = parseInt(positions[idx].top, 10);
          // Move down by the height increase amount
          gsap.to(card, {
            top: `${originalTop + heightIncrease}px`,
            duration: 0.2
          });
        }
      });
    };
    
    // Function to reset positions of all cards
    const resetCardPositions = () => {
      const positions = [
        { top: '0px', left: '0px', zIndex: 1 },
        { top: '100px', left: '250px', zIndex: 2 },
        { top: '200px', left: '500px', zIndex: 3 },
        { top: '300px', left: '750px', zIndex: 4 }
      ];
      
      // Reset all cards to original positions
      cardsRef.current.forEach((card, idx) => {
        gsap.to(card, {
          top: positions[idx].top,
          duration: 0.2
        });
      });
    };
    
    // Staggered appearance animation for cards on load
    gsap.fromTo(cardsRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out" }
    );
    
    // Apply initial positions based on screen size
    const handleResize = () => {
      const isDesktop = window.matchMedia('(min-width: 1280px)').matches;
      
      if (cardsContainerRef.current) {
        if (!isDesktop) {
          // Mobile/tablet layout
          cardsRef.current.forEach(card => {
            card.style.position = 'relative';
            card.style.top = 'auto';
            card.style.left = 'auto';
            card.style.zIndex = 'auto';
            gsap.to(card, { 
              height: 'auto',
              duration: 0.2
            });
          });
        } else {
          // Desktop layout
          const positions = [
            { top: '0px', left: '0px', zIndex: 1 },
            { top: '100px', left: '250px', zIndex: 2 },
            { top: '200px', left: '500px', zIndex: 3 },
            { top: '300px', left: '750px', zIndex: 4 }
          ];
          
          cardsRef.current.forEach((card, index) => {
            card.style.position = 'absolute';
            card.style.top = positions[index].top;
            card.style.left = positions[index].left;
            card.style.zIndex = positions[index].zIndex;
            
            // Ensure we have the current heights stored
            originalHeights.current[index] = card.offsetHeight;
          });
        }
      }
    };
    
    // Initialize layout
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cardsRef.current.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-4xl md:text-3xl font-bold text-[#003349] uppercase">
          Why Inoxoft for Tech Product  <br className="hidden md:block" /> Development Services?
          </h2>
        </div>
        
        {/* Cards container */}
        <div 
          ref={cardsContainerRef}
          className="relative max-w-6xl mx-auto xl:h-128 h-auto"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white border border-black rounded-lg p-6 w-full xl:w-96 shadow-md cursor-pointer mb-4 xl:mb-0"
            >
              <h3 className="card-title text-xl font-bold text-[#00283b]">{card.title}</h3>
              <p className="card-text mt-3 text-sm text-[#003349]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInox;