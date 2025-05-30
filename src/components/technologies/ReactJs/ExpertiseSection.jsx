import React from 'react';

const ExpertiseSection = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* Optional shadow/overlay depending on design */}
      <div className="absolute inset-0 bg-gray-50 opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Column - Heading */}
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#173753] tracking-wide leading-tight">
              EXPERTISE THAT SETS OUR<br />
              REACT.JS DEVELOPERS APART
            </h2>
          </div>
          
          {/* Right Column - List */}
          <div className="lg:w-1/2 lg:pl-8">
            <ul className="space-y-4">
              {[
                'JavaScript (ES6+)',
                'Component-based architecture',
                'State management libraries',
                'Proficiency with React Router',
                'Jest, React Testing Library, Enzyme',
                'Webpack, Babel, and Build Tools'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                 <div className="w-6 h-6 rounded-full border-2 border-[#0d3050] flex items-center justify-center mr-2">
                    <svg className="w-5 h-4 text-[#0d3050]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;