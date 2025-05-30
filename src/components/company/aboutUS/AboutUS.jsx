import React, { useRef } from 'react';
import CoreTeam from './CoreTeam';
import Feedback from './Feedback';
import Values from './Values';
import WordCluster from './WordCluster';
import CoreTechnologies from './CoreTechnologies';
import ContactForm from './ContactForm';
import Footer from './Footer';

const AboutUs = () => {
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  const handleMouseEnter = () => {
    if (pseudoElementRef.current) {
      pseudoElementRef.current.style.transition = 'width 0.3s ease';
      pseudoElementRef.current.style.width = '100%';
      pseudoElementRef.current.style.left = '0';
    }
  };

  const handleMouseLeave = () => {
    if (pseudoElementRef.current) {
      pseudoElementRef.current.style.transition = 'width 0.3s ease';
      pseudoElementRef.current.style.width = '0';
    }
  };

  const logos = [
    // Logos go here
  ];

  const clutchAwards = [
    // Clutch Awards go here
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="w-full h-full object-cover"
            src="https://inoxoft.com/wp-content/uploads/2023/06/image-40-17.jpg"
          />
          <div className="absolute inset-0 bg-[#00283b]/60" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col ml-12">
          <nav className="pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8 ml-10">
            <div className="flex items-center text-white/90 text-sm">
              <a href="/" className="hover:text-white transition-colors">Inoxoft</a>
              <span className="mx-2 text-white/70">›</span>
              <span className="text-white">About Us</span>
            </div>
          </nav>

          <div className="flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="max-w-screen-xl mx-auto w-full pl-8">
              <h1 className="text-[54px] font-lato font-normal text-white mb-6 tracking-wide leading-tight">
                ABOUT US
              </h1>
              <p className="text-2xl text-white/90 max-w-2xl mb-8 sm:mb-12 font-lato font-light leading-relaxed">
                A trusted technology partner, driven by innovation and a passion for cutting-edge solutions.
              </p>
              <button
                ref={buttonRef}
                className="relative inline-flex items-center px-8 py-2 text-black hover:text-white bg-white border border-[#ffff] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                type="submit"
              >
                <span className="relative z-10 font-medium px-6 py-1">
                  BECOME PART OF OUR TEAM
                </span>
                <span
                  ref={pseudoElementRef}
                  className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"></span>
              </button>
            </div>
          </div>

          <div className="py-6 sm:py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
                {logos.map((logo, index) => (
                  <a
                    key={index}
                    href={logo.href}
                    className="transition-opacity hover:opacity-80 w-full flex justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 sm:h-18 w-auto object-contain grayscale brightness-130 contrast-80"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 sm:py-20 bg-white flex-grow">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-24">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-10">
            <div>
              <p className="text-16px text-[#5A6F79] mb-6 font-lato">
                Codethics Solutions is a custom software, web, and mobile application development company.
                Our expertise include:
              </p>
              <ul className="text-16px text-[#5A6F79] space-y-4 font-lato">
                <li>• Certified Web And Mobile Application Development</li>
                <li>• Comprehensive Quality Assurance</li>
                <li>• Discovery Phase Facilitation</li>
                <li>• Cutting-Edge UI/UX Design</li>
                <li>• Advanced Data Science And Big Data Analytics Solutions.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-16px text-[#5A6F79] font-lato">
                We don't just develop digital solutions—we address business challenges. With over a
                decade of experience, 200+ accomplished projects, and a team of 230+ specialists, we
                know what it takes to turn your ideas into tangible results.
              </p>
              <p className="text-16px text-[#5A6F79] font-lato">
                What sets us apart? We create digital solutions that provide genuine value by
                understanding your goals, business challenges, and opportunities. Our clients—from
                innovative startups to established enterprises—trust us to elevate customer
                experiences, streamline operations, and boost growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clutch Awards Section */}
      <div className="bg-white py-12 flex-grow">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clutchAwards.map((award, index) => (
              <a key={index} href={award.href} className="flex items-start">
                <div className="bg-gray-50 p-4 rounded-md mr-4">
                  <img
                    src={award.logo}
                    alt={award.alt}
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <p className="text-gray-600 whitespace-pre-line">{award.years}</p>
                  <p className="text-gray-600 whitespace-pre-line font-medium">{award.award}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Core Team, Feedback, Values, etc. */}
      <CoreTeam />
      <Feedback />
      <Values />
      <WordCluster />
      <CoreTechnologies />
      <ContactForm />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
