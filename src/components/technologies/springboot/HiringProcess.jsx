import React, { useState } from 'react';

const HiringProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "01",
      title: "Understanding your backend needs",
      content:
        "We start by analyzing your project's architecture and technical requirements to ensure we identify the right backend expertise and tools for your vision."
    },
    {
      number: "02",
      title: "Selecting backend experts",
      content:
        "We carefully match you with Spring Boot developers who have strong Java skills and deep experience building scalable, secure, and maintainable server-side systems."
    },
    {
      number: "03",
      title: "Rigorous vetting process",
      content:
        "Every developer is screened through detailed technical interviews and background checks so you can be confident in their reliability and capabilities."
    },
    {
      number: "04",
      title: "Cultural and technical fit",
      content:
        "We ensure every candidate not only understands Spring Boot but also aligns well with your team’s work style, communication, and goals."
    },
    {
      number: "05",
      title: "Smooth onboarding",
      content:
        "We handle the onboarding process from end to end—so your new developers are ready to contribute from day one with the tools and access they need."
    },
    {
      number: "06",
      title: "Execution with precision",
      content:
        "Once assembled, our team crafts a custom development roadmap to bring your backend project to life—focusing on high performance, security, and scalability."
    },
    {
      number: "07",
      title: "Ongoing support",
      content:
        "You’ll get a dedicated account manager to ensure communication stays smooth, progress stays on track, and any issues are resolved promptly."
    }
  ]
  

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                HOW TO HIRE OUR SPRING BOOT DEVELOPERS
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-4xl">
                Our proven process makes it easy to build the perfect Spring Boot development team—whether you need backend experts or a full-stack solution. Here's how we do it:
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
                  <div className="text-white text-base">
                    {tab.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right column - content (only visible on medium screens and up) */}
          <div className="hidden md:block md:w-1/2">
            <div className="text-white text-lg">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;