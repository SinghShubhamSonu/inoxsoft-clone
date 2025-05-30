import React, { useState } from 'react';

const DevProcess = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      number: "01",
      title: "Estimation & Planning",
      content: "During the discovery phase, we deep dive into gaining comprehensive insights of your business needs, uncovering opportunities, and defining clear goals for the project. In-depth consultations, market research, and stakeholder interviews — our custom UI/UX design services aim to identify pain points, and lay the foundation of our cooperation."
    },
    {
      number: "02",
      title: "Wireframing & Prototyping",
      content: "With our UX and UI design services, we translate your vision into tangible wireframes, providing a clear roadmap for the application. These wireframes evolve into interactive prototypes, allowing you to experience the app’s flow firsthand. At this step, we refine color palettes, typography, and layout for an optimal user experience."
    },
    {
      number: "03",
      title: "Testing & Validating",
      content: "We provide rigorous testing to guarantee flawless design functionality. Prototyping allows for early usability testing, identifying and addressing potential issues before they escalate. The team conducts thorough testing cycles within our UI/UX design & development services to ensure your product functions flawlessly."
    },
    {
      number: "04",
      title: "Visual Design & Brand Harmony",
      content: "With a solidified foundation, we leverage stakeholder insights to develop a cohesive and scalable interface. Ensuring you the best UI/UX design services, we meticulously document all design decisions in a style guide, ensuring consistency across elements like grids, layouts, colors, fonts, icons, logos, and imagery "
    },
    {
      number: "05",
      title: "Seamless Handover & Support",
      content: "Our team of talented designers collaborate closely with developers during handover, bridging the gap between design and technical considerations. As your reliable partner, we will ensure a smooth transition and a final product that surpasses expectations."
    }
   
  ];
  

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */},
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">OUR COMPREHENSIVE UI/UX DESIGN <br/>PROCESS
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-4xl">
          UI/UX design & development services at Inoxoft are done carefully, each step is negotiated with the client. We receive directions from clients, hear their requirements, deliver solutions that would suit the identity of the owner, and convey the concept hidden behind.
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