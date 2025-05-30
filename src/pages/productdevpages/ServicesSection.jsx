import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Startups",
      description: "Our agile development approach and focus on rapid prototyping will help you validate your ideas, build a MVP, and enter the market quickly. We provide cost-effective solutions and flexible engagement models that easily adapt to your business needs."
    },
    {
      title: "Growing businesses",
      description: "We’re the ideal product development services company to fuel your expansion. Our expertise in cloud technologies and DevOps practices ensures your software remains adaptable and resilient in the face of growth."
    },
    {
      title: "Enterprises",
      description: "As a global software product development and IT services provider, we have the scale and expertise to handle complex enterprise projects. Our proven methodologies and focus on security and compliance ensure your software solutions meet the highest standards."
    },
    {
      title: "Innovators",
      description: "We’re passionate about working with innovators who are pushing the boundaries of technology. Whether you’re exploring emerging technologies like AI, blockchain, or IoT, or seeking to disrupt traditional industries, we have the expertise to help you bring your vision to life."
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
          Who Can Benefit From Our Software <br/>Product Development Solutions?
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

export default ServicesSection;