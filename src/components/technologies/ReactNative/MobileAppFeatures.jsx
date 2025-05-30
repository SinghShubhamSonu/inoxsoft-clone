import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-[#0e2940] rounded-sm p-8 h-full shadow-md"
        >
            <div className="flex flex-col items-start">
                <div className="mb-4">
                    <img
                        src="https://inoxoft.com/wp-content/uploads/2024/05/white-tick-in-circle.svg"
                        alt="white tick"
                        width="48"
                        height="48"
                        className="align-center"
                    />
                </div>
                <p className="text-white text-base md:text-lg">{title}</p>
            </div>
        </div>
    );
};

const MobileAppFeatures = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Simple fade-in for heading
        gsap.fromTo(
            headingRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                }
            }
        );

        // Simple fade-in for paragraph
        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                }
            }
        );

        // Handle responsive view
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const features = [
        "Flawless UI/UX design with push animations, basic transitions, overrides, and gestures",
        "Smooth code sharing across Android and iOS platforms",
        "Adjusting full screen, portrait, and landscape modes across platforms",
        "Dynamic data that allows displaying different content",
        "Creation of custom interface",
        "Reusable components facilitate collaboration in team",
        "React has a rich library and a lot of built-in components",
        "Great debugging tools and error detecting",
        "Fast-growing developers' community"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false
    };

    return (
        <section
            ref={sectionRef}
            className="bg-white py-16 md:py-20"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-start mb-12 md:mb-16">
                    <h2
                        ref={headingRef}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#173753] mb-4 md:mb-6 leading-tight"
                    >
                        MOBILE APPS WITH <br className="hidden md:block" />
                        GREAT FEATURES AND <br className="hidden md:block" />
                        INTUITIVE DESIGN
                    </h2>

                    <p
                        ref={paragraphRef}
                        className="text-gray-600 text-lg md:text-xl lg:text-2xl text-left "
                    >
                        React Native is the framework with the help of which we can create an awesome user experience.
                        It assists in solving questions like how the application and its design look together, how joyful
                        and easy it is to scroll, to swipe, to return to previous pages or open a new one, do manipulations
                        with animations, how pictures appear, etc.
                    </p>
                </div>

                {/* Mobile View with Slider */}
                {isMobile ? (
                    <div className="relative ">
                        {/* Custom Navigation Buttons for Mobile */}
                        <div className="absolute top-[-50px] right-0 flex items-center space-x-3 z-10">
                            <button
                                onClick={() => sliderRef.current.slickPrev()}
                                className="flex items-center justify-center border border-[#0e2940] rounded-full w-10 h-10 hover:cursor-pointer"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="#0e2940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button
                                onClick={() => sliderRef.current.slickNext()}
                                className="flex items-center justify-center border border-[#0e2940] rounded-full w-10 h-10 hover:cursor-pointer"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="#0e2940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <Slider ref={sliderRef} {...settings} className="cursor-grab active:cursor-grabbing">
                            {features.map((feature, index) => (
                                <div key={index} className="px-2">
                                    <FeatureCard title={feature} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    /* Desktop/Tablet View with Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} title={feature} />
                        ))}
                    </div>
                )}

            </div>

            {isMobile && (
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
            padding-bottom: 40px;
          }
          .slick-slide > div {
            width: 100%;
            height: 100%;
            display: flex;
          }
        `}</style>
            )}
        </section>


    );
};

export default MobileAppFeatures;