import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
        question: "What platforms can be targeted with cross-platform app development?",
        answer: (
          <div>
            <p>Cross-platform app development allows developers to create applications that can run on multiple platforms, using a single codebase. There are several platforms that can be targeted with cross-platform app development:</p>
            <p>Mobile Platforms (iOS, Android)</p>
            <p>Web Platforms: browsers, Progressive web apps (PWA)</p>
            <p>Desktop Platforms (Windows, macOS, Linux)</p>
          </div>
        )
      },
      {
        question: "Is the performance of cross-platform apps comparable to native apps?",
        answer: (
          <div>
            <p>Is the performance of cross-platform apps comparable to native apps?<br/>
                The performance of a cross-platform application depends on specific factors:</p>
            <p>complexity of the app</p>
            <p>the efficiency of the framework</p>
            <p>the skill of the development team</p>
            <p>To discover more check our article </p>    
          </div>
        )
      },
      {
        question: "Can I integrate native features in a cross-platform app?",
        answer: (
          <div>
            <p>It is possible to integrate native features into a cross-platform app. Cross-platform frameworks often provide mechanisms to access native APIs and features of the underlying platform. This allows engineers to leverage platform-specific functionality per need.</p>
          </div>
        )
      },
     
  ];

  return (
    <>
    <div className="bg-[#002a3a] text-[#fff] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold uppercase mb-2">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <div 
                className="py-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium pr-8">{item.question}</h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-200 ${openItems[index] ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] ? 'max-h-[2000px] pb-6' : 'max-h-0'
                }`}
              >
                <div className="text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div><hr className="text-gray-300"/></div>
    </>
  );
};

export default FAQ;