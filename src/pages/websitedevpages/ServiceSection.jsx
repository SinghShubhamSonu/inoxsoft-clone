import React from 'react';

const ServiceSection = () => {
    const services = [
        {
          title: "Startups",
          description: "We help startups establish a strong online presence with modern, scalable, and user-friendly websites. Whether you need a landing page, a portfolio, or a full-fledged web platform, our team delivers fast and affordable solutions to get you noticed online."
        },
        {
          title: "Growing businesses",
          description: "As your business scales, so should your website. We specialize in building performance-optimized, SEO-friendly websites that reflect your brand and support your growth goals. Our team ensures smooth user experiences and robust backend systems to handle increasing traffic and functionality."
        },
        {
          title: "Enterprises",
          description: "We build enterprise-grade websites that prioritize security, scalability, and integration with your internal systems. Our team has experience in handling high-traffic environments, ensuring your digital presence is reliable, compliant, and aligned with business objectives."
        },
        {
          title: "Innovators",
          description: "For those looking to push boundaries, we develop cutting-edge websites using the latest in web technologies. From interactive experiences to web apps driven by AI or real-time data, we partner with you to build something truly unique and impactful."
        },
      ];
      

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
          Who Can Benefit From Our Website Development Services?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg relative">
              <div className="mb-6">
                <div className="absolute top-8 left-8">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0d3050] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0d3050]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <h3 className=" font-semibold text-[#0d3050] mb-3 text-lg sm:text-xl">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;