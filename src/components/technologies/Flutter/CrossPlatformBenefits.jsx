import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CrossPlatformBenefits = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

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
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white py-16 md:py-24 pb-24 md:pb-32 relative"
        >
            <div className="section-shadow absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-30"></div>
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-left mb-6 md:mb-8 max-w-4xl container  px-4 md:px-6">
                    <h2
                        ref={headingRef}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#173753] mb-4 md:mb-6"
                    >
                        CROSS-PLATFORM BENEFITS
                    </h2>

                    <p
                        ref={paragraphRef}
                        className="text-[#00283B]  text-lg md:text-xl"
                    >
                        We provide hybrid app development for businesses with different business needs. Starting a software 
                        project in Flutter is always inspirational. Inoxoft commitment to project success will help you 
                        experience professional and friendly cooperation with a skilled web developers team and receive 
                        professional web support.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CrossPlatformBenefits;