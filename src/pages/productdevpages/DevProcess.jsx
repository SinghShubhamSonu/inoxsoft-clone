import React, { useState } from 'react';

const DevProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "01",
      title: "Discovery & Ideation",
      content: "What we do: Deep dive into your vision, target audience, and market landscape. Through workshops, interviews, and analysis, we define clear objectives, identify potential risks, and create a comprehensive product roadmap.",
      content2:"What you get: A shared understanding of your product’s purpose, value proposition, and target market, along with a detailed project plan outlining scope, timeline, and budget."
    },
    {
      number: "02",
      title: "Design & Prototyping ",
      content: "What we do: Craft intuitive and visually appealing interfaces that bring your product to life. We conduct user testing to gather feedback and refine the design.",
      content2:"What you get: Tangible representations of your product’s look and feel that allow you to visualize the user experience and make informed decisions before development begins."
    },
    {
      number: "03",
      title: "Development & Engineering",
      content: "What we do: Build your product using agile methodologies, ensuring flexibility and responsiveness to feedback. We prioritize clean code, scalability, and maintainability.",
      content2:"What you get: Regular updates and demonstrations of working features, enabling you to track progress and provide input throughout the development process."
    },
    {
      number: "04",
      title: "Quality Assurance",
      content: "What we do: Conduct rigorous testing throughout development to identify and address any bugs or issues, including functional, performance, security, and user acceptance testing.",
      content2:"What you get: A high-quality, reliable product that meets your expectations and delivers a seamless user experience."
    },
    {
      number: "05",
      title: "Deployment & Launch",
      content: "What we do: Plan and execute the deployment process with a smooth transition to your production environment. We provide comprehensive training and support to ensure a successful launch.",
      content2:"What you get: A market-ready product that’s been thoroughly tested and optimized for success."
    },
    {
      number: "06",
      title: "Maintenance & Support",
      content: "What we do: Ongoing support and maintenance to address any issues and keep your product running smoothly. We’ll also work with you to implement updates and enhancements as your business evolves.",
      content2:"What you get: Peace of mind knowing your product is in good hands, with a dedicated team ready to provide assistance whenever you need it."
    }
  ];

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */},
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Product Development Process</h2>
          {/* <p className="text-white/90 text-base md:text-lg max-w-4xl">
            Our well-established process makes it easy to assemble your ideal React.js development team, 
            whether you need a single expert or a full project team. Here's how it works:
          </p> */}
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
                  <div className="text-white text-base">
                    {tab.content2}
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
            <div className="text-white text-base">
                    {tabs[activeTab].content2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProcess;