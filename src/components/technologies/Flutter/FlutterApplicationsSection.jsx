import React from 'react';

const FlutterApplicationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 md:px-20">
          {/* Left column with sticky positioning for larger screens */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#173753] mb-6">
              CREATE SIMPLE AND ELEGANT
              <br />MOBILE APPLICATIONS
            </h2>
            <p className="text-base lg:text-lg mb-6 text-[#00283B] font-semibold">
              Add extra potential to your application with flutter 
              mobile app development. We will create fully 
              functional, data-driven, intuitive software 
              solutions with rich UI design for you.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:w-3/5">
            <p className="text-base lg:text-lg mb-2 text-[#00283B] font-semibold">
              What is Flutter used for?
            </p>
            <p className="text-base lg:text-lg mb-6 text-[#00283B]">
              Flutter is a programming framework used for mobile application development. 
              The first distinct peculiarity is that Flutter is based on Dart, one more 
              programming language for creating multi-platform solutions, and more about 
              this technology:
            </p>
            <ul className="space-y-5">
              {[
                "State-of-art technology",
                "Created by Google",
                "Ranked #1 as the fastest-growing mobile framework",
                "Reduces the time for development from 1 month to two weeks"
              ].map((item, index) => (
                <li key={index} className="border-b border-gray-200 py-5 last:border-b-0">
                  <div className="flex items-start text-base lg:text-lg text-[#00283B]">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 mt-0.5">
                      <img 
                        src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/benefits.svg"
                        alt="Check icon"
                        className="w-full h-full"
                      />
                    </div>
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlutterApplicationsSection;