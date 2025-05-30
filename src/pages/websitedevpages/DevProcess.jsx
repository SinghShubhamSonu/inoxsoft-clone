import React, { useState } from 'react';

const DevProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "01",
      title: "Discovery & Strategy",
      content: "What we do: We begin by understanding your business goals, audience, and competitors. Through workshops and in-depth analysis, we define a clear strategy for your website, ensuring it aligns with your brand and objectives.",
      content2: "What you get: A solid website strategy, including defined objectives, user personas, and a detailed project roadmap outlining scope, timeline, and budget."
    },
    {
      number: "02",
      title: "UI/UX Design & Prototyping",
      content: "What we do: We create wireframes and design beautiful, user-friendly interfaces that offer intuitive navigation. We conduct user testing to refine the design and ensure a seamless user experience across all devices.",
      content2: "What you get: Interactive prototypes and high-fidelity designs that allow you to visualize the user journey and make informed decisions before development begins."
    },
    {
      number: "03",
      title: "Website Development",
      content: "What we do: Using the latest technologies, we build responsive websites that meet your business goals. We follow agile methodologies to ensure flexibility, scalability, and a focus on performance throughout the development process.",
      content2: "What you get: A fully functional, responsive website, with regular updates and progress demonstrations so you can track milestones and provide input along the way."
    },
    {
      number: "04",
      title: "Quality Assurance",
      content: "What we do: Our QA team tests your website for bugs, responsiveness, security, and cross-browser compatibility. We ensure your site performs smoothly under all conditions and is free from errors before launch.",
      content2: "What you get: A polished, bug-free website that works seamlessly across all devices and browsers, providing a smooth user experience for your visitors."
    },
    {
      number: "05",
      title: "Deployment & Launch",
      content: "What we do: We handle the deployment process, ensuring a smooth transition to your live environment. We provide thorough training and documentation to ensure you can easily manage your website post-launch.",
      content2: "What you get: A fully deployed, market-ready website, optimized for performance and ready for users, along with the tools to maintain it moving forward."
    },
    {
      number: "06",
      title: "Ongoing Maintenance & Support",
      content: "What we do: We offer ongoing support and maintenance to ensure your website stays up-to-date, secure, and functional. We also assist with adding new features and addressing any issues as your website evolves.",
      content2: "What you get: Continuous support and updates to keep your website performing at its best, with a dedicated team ready to resolve issues and implement new features."
    }
  ];
  

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */},
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Website Development Process</h2>
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