import React, { useState } from 'react';

const HireNodeDev = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "01",
      title: "Understanding Your Needs",
      content: "First, we get to know your project inside and out, digging into the specifics of your requirements to understand exactly what skills and expertise will best support you.   "
    },
    {
      number: "02",
      title: "Finding the Right Fit",
      content: "From there, we carefully pick out candidates with the experience and skills in Node.js to match your project’s demands, narrowing down our talent pool to those who can make an impact."
    },
    {
      number: "03",
      title: "Conducting Background Check",
      content: "We perform thorough background checks, covering both legal and professional verifications, to confirm candidates meet all requirements and can be relied upon"
    },
    {
      number: "04",
      title: "Interviewing and Feedback",
      content: "You get to meet and interview our top picks, making sure they’re not only technically qualified in Node.js but also a great fit for your team culture."
    },
    {
      number: "05",
      title: "Onboarding the Team",
      content: "Once you’re happy with the team, we set up the onboarding, equipping them with everything they need to hit the ground running on your project."
    },
    {
      number: "06",
      title: "Achieving Your Goals",
      content: "We focus on achieving a balance between time and quality to deliver exceptional results within a reasonable timeframe. "
    },
    {
      number: "07",
      title: "Ongoing Support",
      content: "Throughout the project, your personal account manager is here for you—offering continuous support, checking in on progress, and adapting to keep things running smoothly."
    }
  ];

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">HIRING NODE.JS DEVELOPERS IS EASY WITH <br/>US</h2>
          <p className="text-white/90 text-base md:text-lg max-w-4xl">
          We use a clear, step-by-step process to help you build the perfect Node.js development team,<br/>
           whether you need a single engineer or a full project team for your goals. Here’s how it goes:
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

export default HireNodeDev;