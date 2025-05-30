import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AdvantagesOfFlutterSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const advantages = [
    {
      image: 'https://inoxoft.com/wp-content/uploads/2023/05/flutter-Photo-bg-1.jpg',
      title: "Great Design Features",
      description: "New design features that are easily implemented within code: Shadows, blurs, masks, shimmering, smooth page transitions and animations"
    },
    {
      image:'https://inoxoft.com/wp-content/uploads/2023/05/flutter-Photo-bg-2.jpg',
      title: "Beneficial Flutter Plugins",
      description: "In Flutter, there are a number of ready-made Google plugins that suit perfectly well for different apps."
    },
    {
      image: 'https://inoxoft.com/wp-content/uploads/2023/05/flutter-Photo-bg-3.jpg',
      title: "Custom UI, Excellent UX",
      description: "Flutter allows great cooperation of flutter app developers with designers because you develop and watch design updates at the same time. Choose different layouts, platforms or devices – Inoxoft knows how to realize UI/UX ideas into a visually attractive application made with Flutter."
    },
    {
      image: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-Photo-bg-4.jpg",
      title: "Cross-Platform Opportunities",
      description: "Inoxoft specializes in flutter mobile app development for iOS and Android. Our applications are compatible with different platforms and devices. Flutter technology allows us to combine cross-platform software with the finest design and fast development."
    },
    {
      image: 'https://inoxoft.com/wp-content/uploads/2023/05/flutter-Photo-bg-5.jpg',
      title: "Excellent For Startups",
      description: "It is user-friendly, fast, plugin-based. You receive simplified development in short terms, but the result – cross-platform iOS and Android app with awesome design and quick performance."
    }
  ];

  useEffect(() => {
    // Set up GSAP animations
    const section = sectionRef.current;
    const cards = cardRefs.current;

    // Animate title
    gsap.fromTo(
      section.querySelector('h2'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        } 
      }
    );

    // Animate each card with staggered effect
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          } 
        }
      );
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-[#173753] mb-12 sm:mb-16 text-center lg:text-left px-2 sm:px-4 lg:px-0 ml-8">
  ADVANTAGES OF FLUTTER
</h2>

        <div className="flex flex-col space-y-8 max-w-[1400px] mx-auto rounded-xl ">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img 
                  src={advantage.image} 
                  alt={advantage.title}
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-12 md:p-14 text-white">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
                    {advantage.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-xl text-gray-300 font-medium leading-relaxed max-w-xl">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesOfFlutterSection;