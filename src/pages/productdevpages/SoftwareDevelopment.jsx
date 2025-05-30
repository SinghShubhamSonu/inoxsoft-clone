import React, { useState } from 'react';

const SoftwareDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 px-6">
          {/* Left column with sticky positioning for larger screens */}
          <div className="lg:flex-1 lg:sticky lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#14375F] mb-6">
              Software Product <br />Development <br />Solutions You Can <br />Create With Us
            </h2>
          </div>

          {/* Right column for larger screens with FAQ */}
          <div className="lg:flex-1">
       
            
            <div className="minifaq dropdown-block gsp_dc">
              <div className="faq">
                {[
                  {
                    title: "Web Applications",
                    content: "We offer visually stunning, user-friendly web applications that help transform your online presence, streamline your business processes and drive customer engagement."
                  },
                  {
                    title: "Mobile Applications",
                    content: "Our experienced developers create native or cross-platform mobile apps designed to meet the needs of today's mobile-first audience, expand your reach and enhance user experience."
                  },
                  {
                    title: "Enterprise Solutions",
                    content: "We aim for robust, scalable software solutions that address complex challenges and optimize operational efficiency."
                  },
                  {
                    title: "eCommerce Platforms",
                    content: "We help you launch a thriving online store with feature-rich eCommerce platforms that drive sales and improve customer satisfaction."
                  },
                  {
                    title: "SaaS Products",
                    content: "Leveraging the power of the cloud, we develop flexible, scalable SaaS solutions that cater to businesses of all sizes and industries."
                  },
                  {
                    title: "Solutions Powered by AI and ML",
                    content: "Our AI engineers harness the power of artificial intelligence and machine learning to automate tasks, gain valuable insights, and make data-driven decisions."
                  },
                  {
                    title: "Industry-Specific Solutions",
                    content: "With our in-depth knowledge of your industry, we develop customized software solutions that address your unique challenges and drive growth."
                  },
                  {
                    title: "Custom CRM and ERP Systems",
                    content: "Our custom CRM and ERP systems help you streamline your operations by centralizing your data, improving your efficiency, and fostering collaboration."
                  }
                ].map((item, index) => (
                  <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                    <div 
                      className="faq-item__title flex justify-between items-center cursor-pointer py-4 border-b border-gray-200"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="text-lg font-medium text-[#14375F]">{item.title}</h3>
                      <div className="button-area w-6 h-6 relative">
                        {/* <span className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-[#14375F] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeIndex === index ? 'rotate-0' : ''}`}></span>
                        <span className={`absolute top-1/2 left-1/2 w-0.5 h-4 bg-[#14375F] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}></span> */}
                         <svg 
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeIndex === index ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 10L12 15L17 10" stroke="#14375F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                        {/* Arrow up icon (when open) */}
                        <svg 
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeIndex === index ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 15L12 10L17 15" stroke="#14375F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div 
                      className={`faq-item__wrapper overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="faq-item__text py-4">
                        <p className="text-[#14375F]">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 mx-6"></div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;