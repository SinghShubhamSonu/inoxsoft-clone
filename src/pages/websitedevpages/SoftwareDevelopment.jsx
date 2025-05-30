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
              Website <br />Development <br />Solutions You Can <br />Create With Us
            </h2>
          </div>

          {/* Right column for larger screens with FAQ */}
          <div className="lg:flex-1">
       
            
            <div className="minifaq dropdown-block gsp_dc">
              <div className="faq">
                {[
                {
                    title: "Custom Websites",
                    content: "We design and develop responsive, visually appealing websites tailored to your brand. From simple sites to complex platforms, we create digital experiences that leave a lasting impression."
                  },
                  {
                    title: "Web Portals and Dashboards",
                    content: "We build interactive web portals and custom dashboards that provide seamless access to information and improve user engagement for customers, partners, or employees."
                  },
                  {
                    title: "Enterprise Web Solutions",
                    content: "Scalable, secure, and high-performance enterprise-grade websites built to handle large-scale operations and deliver powerful functionality across departments."
                  },
                  {
                    title: "eCommerce Websites",
                    content: "Launch or grow your online store with a feature-rich, conversion-optimized eCommerce website. We integrate payment gateways, inventory systems, and personalized shopping experiences."
                  },
                  {
                    title: "CMS-Based Solutions",
                    content: "We develop websites on popular CMS platforms like WordPress, Webflow, and headless CMS for easy content management, scalability, and SEO optimization."
                  },
                  {
                    title: "AI-Enhanced Web Experiences",
                    content: "Incorporate intelligent features like chatbots, personalization engines, and smart search into your site to elevate user engagement and streamline interactions."
                  },
                  {
                    title: "Industry-Specific Websites",
                    content: "Whether you’re in healthcare, education, real estate, or any other sector, we build websites that cater to the specific needs and compliance requirements of your industry."
                  },
                  {
                    title: "Custom Web-Based Systems",
                    content: "From booking engines to intranet platforms, we develop custom web-based systems that automate workflows, enhance collaboration, and drive business efficiency."
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