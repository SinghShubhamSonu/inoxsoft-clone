import React, { useState } from 'react';

const HiringProcessSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "01",
      title: "Understanding your vision",
      content: "First, we dig into your project's goals and technical requirements, ensuring we know exactly which skills will best support your vision."
    },
    {
      number: "02",
      title: "Selecting top talent",
      content: "We handpick professionals with the right mix of experience and expertise, matching them to your project's unique demands for maximum impact."
    },
    {
      number: "03",
      title: "Background and verification",
      content: "Every candidate goes through thorough vetting, including legal and professional checks, so you know they're reliable and ready to go."
    },
    {
      number: "04",
      title: "Interviews and team fit",
      content: "You'll meet our top picks to confirm they're not only technically skilled in React.js technology but also a great cultural fit for your team, setting everyone up for success."
    },
    {
      number: "05",
      title: "Seamless onboarding",
      content: "Once the team is chosen, we handle all onboarding steps, equipping them to hit the ground running with everything they need for your project."
    },
    {
      number: "06",
      title: "Focusing on your goals",
      content: "Finally, we develop a unique React.js project plan that balances quality and speed, delivering top-tier results on a timeline that fits your needs."
    },
    {
      number: "07",
      title: "Dedicated Support",
      content: "Your personal account manager stays with you every step of the way, offering guidance, tracking progress, and adapting to keep the project on track and efficient."
    }
  ];

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">HOW TO HIRE OUR REACT DEVELOPERS</h2>
          <p className="text-white/90 text-base md:text-lg max-w-4xl">
            Our well-established process makes it easy to assemble your ideal React.js development team, 
            whether you need a single expert or a full project team. Here's how it works:
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

export default HiringProcessSection;