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
            SEO and Digital <br /> Marketing Solutions <br /> You Can Grow <br /> With Us
            </h2>
          </div>

          {/* Right column for larger screens with FAQ */}
          <div className="lg:flex-1">
       
            
            <div className="minifaq dropdown-block gsp_dc">
              <div className="faq">
                {[
                 {
                    title: "SEO & Web Presence Optimization",
                    content: "We offer comprehensive SEO strategies and optimization techniques to enhance your website’s visibility, drive organic traffic, and improve user engagement for a better online presence."
                  },
                  {
                    title: "Mobile Marketing Strategies",
                    content: "Our mobile marketing solutions are designed to target the growing mobile-first audience, enhance user experience, and drive conversions through tailored mobile strategies across platforms."
                  },
                  {
                    title: "Enterprise Digital Marketing Solutions",
                    content: "We create scalable digital marketing strategies for enterprises, ensuring efficient management of multi-channel campaigns and optimizing operational efficiency in reaching global audiences."
                  },
                  {
                    title: "eCommerce Marketing Solutions",
                    content: "We help you grow your online store with comprehensive eCommerce strategies, focusing on SEO, paid ads, and user experience enhancements to drive sales and increase customer loyalty."
                  },
                  {
                    title: "SaaS Marketing & Growth Strategies",
                    content: "Our digital marketing experts specialize in driving SaaS growth with strategies that attract, retain, and convert users through targeted content, SEO, and performance marketing."
                  },
                  {
                    title: "AI & Machine Learning for Marketing",
                    content: "We leverage AI and machine learning technologies to optimize digital marketing campaigns, automate tasks, and provide data-driven insights that maximize ROI."
                  },
                  {
                    title: "Industry-Specific Digital Solutions",
                    content: "With in-depth industry knowledge, we create tailored SEO and digital marketing solutions that meet your unique business needs, addressing challenges and driving growth."
                  },
                  {
                    title: "Custom CRM & Marketing Automation Systems",
                    content: "Our custom CRM and marketing automation systems streamline your digital marketing efforts, centralize customer data, and improve marketing efficiency for better collaboration and decision-making."
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