import React, { useState } from 'react';

const HiringProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
        number: "01",
        title: "Understanding your backend needs",
        content:
          "We begin by analyzing your project’s requirements, architecture, and business goals to determine the right PHP technologies and development approach for your backend."
      },
      {
        number: "02",
        title: "Selecting PHP experts",
        content:
          "We carefully match you with PHP developers who are highly skilled in frameworks like Laravel, Symfony, or custom PHP—ensuring deep experience in building secure and scalable server-side applications."
      },
      {
        number: "03",
        title: "Rigorous vetting process",
        content:
          "Each developer undergoes thorough technical assessments, code reviews, and background checks to ensure they’re capable, reliable, and ready to deliver results."
      },
      {
        number: "04",
        title: "Cultural and technical fit",
        content:
          "We ensure every developer not only has PHP expertise but also aligns with your team's culture, communication style, and development practices."
      },
      {
        number: "05",
        title: "Smooth onboarding",
        content:
          "Our team handles the complete onboarding process so your developers can hit the ground running—equipped with all tools, access, and documentation they need."
      },
      {
        number: "06",
        title: "Execution with precision",
        content:
          "We craft a custom development roadmap to bring your PHP project to life, with a focus on performance, security, clean architecture, and scalability."
      },
      {
        number: "07",
        title: "Ongoing support",
        content:
          "A dedicated account manager and support team ensure clear communication, regular updates, and fast issue resolution throughout the development lifecycle."
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
                HOW TO HIRE OUR PHP DEVELOPERS
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-4xl">
                Our proven process makes it easy to build the perfect PHP development team—whether you need backend experts or a full-stack solution. Here's how we do it:
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