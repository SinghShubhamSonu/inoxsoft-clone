import React from 'react';

const ServiceSection = () => {
    const services = [
        {
          title: "Startups",
          description: "We help startups establish a strong digital presence from the ground up. Our SEO strategies and digital marketing tactics are designed to attract early users, build brand awareness, and drive traffic. With a focus on scalability, we ensure your marketing efforts grow as you do."
        },
        {
          title: "Growing businesses",
          description: "As your business expands, so should your marketing efforts. Our data-driven SEO and digital marketing solutions are built to support growth. Whether it's refining your keyword strategy, improving on-page SEO, or executing comprehensive PPC campaigns, we ensure your brand reaches its full potential."
        },
        {
          title: "Enterprises",
          description: "For large-scale enterprises, we offer advanced SEO and digital marketing solutions that align with your global objectives. Our custom strategies encompass everything from multi-location SEO and international marketing to content strategy and analytics. We ensure that your enterprise brand maintains its competitive edge in search results."
        },
        {
          title: "Innovators",
          description: "Innovators pushing the boundaries of tech need a marketing partner who understands the value of their vision. We combine cutting-edge SEO practices with creative digital marketing techniques to elevate your brand's presence in competitive industries. Whether you’re in AI, blockchain, or any other emerging space, we’ll help your ideas reach the right audience."
        },
      ];
      

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
          Who Can Benefit From Our SEO And<br/>DIGITAL Marketing Solutions?
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