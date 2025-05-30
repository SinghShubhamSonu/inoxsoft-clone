import React, { useState } from 'react';

const DevProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "01",
      title: "SEO Strategy & Research",
      content: "What we do: We perform an in-depth analysis of your business, target audience, and industry landscape. Through keyword research, competitor analysis, and market insights, we create a solid SEO strategy tailored to your goals.",
      content2: "What you get: A comprehensive SEO strategy that aligns with your business objectives, along with a clear roadmap outlining target keywords, content plans, and competitive positioning."
    },
    {
      number: "02",
      title: "Content Creation & Optimization",
      content: "What we do: We develop high-quality, SEO-optimized content that resonates with your audience. This includes blog posts, website copy, landing pages, and more to boost organic search rankings.",
      content2: "What you get: Engaging, keyword-rich content that not only improves SEO performance but also attracts and engages your target audience, driving more traffic and conversions."
    },
    {
      number: "03",
      title: "PPC Campaign Management",
      content: "What we do: We plan, create, and manage targeted paid search campaigns across platforms like Google Ads and social media. We focus on driving targeted traffic, maximizing ROI, and improving ad performance.",
      content2: "What you get: Optimized PPC campaigns that deliver results, with regular performance reports and adjustments to ensure your ads are always reaching the right audience at the right time."
    },
    {
      number: "04",
      title: "Social Media Marketing",
      content: "What we do: We create and execute engaging social media strategies that build brand awareness and foster customer engagement. We also analyze social media trends and leverage platforms like Facebook, Instagram, and LinkedIn.",
      content2: "What you get: A strong social media presence that engages your audience, grows your followers, and ultimately drives conversions with a tailored social strategy."
    },
    {
      number: "05",
      title: "Analytics & Performance Monitoring",
      content: "What we do: We use data-driven insights to monitor SEO performance, track PPC campaigns, and measure social media engagement. We continually optimize to improve your digital marketing outcomes.",
      content2: "What you get: Detailed analytics and actionable insights that help you understand your digital marketing performance, with regular reports on key metrics and KPIs to guide decision-making."
    },
    {
      number: "06",
      title: "Ongoing Optimization & Growth",
      content: "What we do: We continually optimize all aspects of your digital marketing efforts, from SEO to paid ads, based on performance data. Our focus is on continuous growth and keeping up with industry trends.",
      content2: "What you get: Continuous improvement of your digital marketing campaigns, ensuring that your efforts stay competitive and scalable as your business grows."
    }
  ];
  

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */},
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our SEO AND DIGITAL MARKETING Process</h2>
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