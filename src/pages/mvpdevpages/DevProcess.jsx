import React, { useState } from 'react';

const DevProcess = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      number: "01",
      title: "Conceptualization",
      content: "We define the product vision, objectives, and target audience through brainstorming, market research, and user insights. This ensures that your solution idea is well-defined, aligned with current market demands, and tailored to meet customer needs."
    },
    {
      number: "02",
      title: "Defining Requirements",
      content: "We identify and prioritize the core features essential to providing value to users and solving their key pain points. Additionally, we determine the project timeline and budget, choose the technology stack, and discuss all communication details."
    },
    {
      number: "03",
      title: "UI/UX Design",
      content: "We provide design and development services for creating visually appealing and intuitive interfaces that align with the product’s branding and user needs. Our team works on UI components, layout, typography, and color schemes."
    },
    {
      number: "04",
      title: "Development",
      content: "Our custom MVP app development services will help you translate the UI/UX design into a seamless user experience. Front-end developers craft the user interface, while back-end engineers build the core functionality, ensuring security and seamless integration with any necessary APIs. "
    },
    {
      number: "05",
      title: "Quality Assurance",
      content: "This stage of our MVP app & software development services process ensures the software functions as intended, meets the user’s expectations and is free from critical defects. It helps us identify and address issues before product release, minimize risks, and enhance the MVP’s overall quality."
    },
    {
      number: "06",
      title: "Release & User Feedback",
      content: "Once the MVP is ready and tested, we release it to a specific group of users. We select and analyze their feedback to gather insights, validate assumptions, and guide future development. It helps refine the product, prioritize feature enhancements, and make data-driven decisions."
    },
    {
        number:"07",
        title:"Iterative Development and Scaling",
        content:"Based on user feedback, market validation, and business goals, the solution undergoes subsequent development iterations to add new features, improve existing functionalities, and scale the product. Our MVP software development services aim to enhance the solution until it reaches a more comprehensive state."
    }
  ];
  

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */},
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">MINIMUM VIABLE PRODUCT DEVELOPMENT <br/>PROCESS
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-4xl">
          The secret of efficient building minimum viable products lies in a well-tuned development process. At Inoxoft, it relies on a time-tested methodology to ensure development remains agile. From concept to customer acquisition, we guide you through every stage, turning your vision into a tangible product.
          </p>
        </div>
        
        {/* Steps section */}
        <div className="flex flex-col md:flex-row md:space-x-16 lg:space-x-24">
          {/* Left column - steps */}
          <div className="md:w-1/2 relative">
            {/* Vertical line that spans the full height */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0a3b54]"></div>
            
            {tabs.map((tab, index) => (
              <div key={index} className="relative">
                {/* Active tab indicator on vertical line */}
                {activeTab === index && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-[#00a6eb]"></div>
                )}
                
                <div 
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer mb-8 flex items-start pl-6 ${activeTab === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
                >
                  <span className={`text-2xl font-bold mr-4 ${activeTab === index ? 'text-[#00a6eb]' : 'text-[#607d8b]'}`}>
                    {tab.number}
                  </span>
                  <span className={`text-lg font-medium ${activeTab === index ? 'text-white' : 'text-gray-300'}`}>
                    {tab.title}
                  </span>
                </div>
                
                {/* Small screen: Content appears directly under each tab */}
                <div className={`md:hidden pl-6 mb-8 ${activeTab === index ? 'block' : 'hidden'}`}>
                  <div className="text-white text-base mb-5">
                    {tab.content}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* Right column - content (only visible on medium screens and up) */}
          <div className="hidden md:block md:w-1/2">
            <div className="text-white text-lg mb-5">
              {tabs[activeTab].content}
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProcess;