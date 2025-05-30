import React, { useState } from 'react';

const SuccessCase = ({ title, videoSrc, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full lg:w-1/3 px-4 mb-8">
      <div 
        className={`bg-white rounded-lg overflow-hidden h-full flex flex-col transition-shadow duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-md'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a 
          href={link} 
          className="flex flex-col h-full"
        >
          <div className="relative pt-12 px-4">
            <div className="rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  className="w-full h-auto" 
                  src='https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp' 
                  alt="MacBook displaying project"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <video 
                    className="w-4/5 h-auto"
                    playsInline
                    autoPlay
                    muted
                    loop
                    src={videoSrc}
                    poster="/images/blank.gif"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium mt-10 mb-8 text-gray-800">
              {title}
            </h3>
          </div>
          <div className="mt-auto p-4 text-right">
            <span className="inline-flex items-center text-lg font-medium text-[#00283B] group">
              VIEW CASE
              <div className="ml-2 flex items-center overflow-hidden">
                {/* First arrow (always visible) */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="transition-all duration-300"
                >
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                
                {/* Second arrow (gray, hidden by default) */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#8A9CA5" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`transition-all duration-300 -ml-3 ${isHovered ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'}`}
                >
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                
                {/* Third arrow (hidden by default) */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`transition-all duration-300 -ml-3 ${isHovered ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'}`}
                >
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

const SuccessCases = () => {
  const cases = [
    {
      title: "AI-Powered Technology Stack Recommender",
      videoSrc: "/videos/visual-1-1.mp4",
      link: "/casestudy/ai-powered-technology-stack-recommender"
    },
    {
      title: "Data-centric security software for streamlined cyber security risk management",
      videoSrc: "/videos/1.mp4",
      link: "/casestudy/data-centric-security-software-for-streamlined-cyber-security-risk-management"
    },
    {
      title: "Cross-platform mobile app & Web platform for Amenity Management Company",
      videoSrc: "/videos/c67f-43ce-bd03-c45a69eae85e-1-1.mp4",
      link: "/casestudy/custom-software-solution-for-amenity-management-company"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full mb-8">
            <h2 className="text-4xl font-bold text-[#00283b] ml-4 mb-4">SUCCESS CASES</h2>
          </div>
          
          {cases.map((caseItem, index) => (
            <SuccessCase
              key={index}
              title={caseItem.title}
              videoSrc={caseItem.videoSrc}
              link={caseItem.link}
            />
          ))}
          
          <div className="w-full mt-4 text-right">
            <a 
              href="/casestudies" 
              className="inline-flex items-center text-lg font-medium text-[#00283B] hover:text-[#00283B] transition-colors"
            >
              More Case Studies
              <svg 
                className="ml-2" 
                width="151" 
                height="16" 
                viewBox="0 0 151 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M150.707 8.70711C151.098 8.31658 151.098 7.68342 150.707 7.29289L144.343 0.928932C143.953 0.538408 143.319 0.538408 142.929 0.928932C142.538 1.31946 142.538 1.95262 142.929 2.34315L148.586 8L142.929 13.6569C142.538 14.0474 142.538 14.6805 142.929 15.0711C143.319 15.4616 143.953 15.4616 144.343 15.0711L150.707 8.70711ZM0 9H150V7H0V9Z" 
                  fill="#00283B"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;