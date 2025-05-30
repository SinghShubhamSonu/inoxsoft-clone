import React from 'react';

const ServiceSection = () => {
  const services = [
    {
        title: "Robust Backend for SPAs",
        description: "We build scalable, secure Spring Boot backends to power single-page applications. With fast APIs and optimized architecture, your frontend stays lightning-fast and fully responsive."
      },
      {
        title: "Backend for Progressive Web Apps",
        description: "Support your PWAs with a reliable, high-performance backend. Our Spring Boot solutions ensure smooth offline support, real-time syncing, and seamless background processes."
      },
      {
        title: "Enterprise Application Development",
        description: "We create powerful, enterprise-grade solutions using Spring Boot that support high concurrency, security, and complex workflows—built to scale with your business."
      },
      {
        title: "E-commerce Backend Solutions",
        description: "Build a secure and scalable backend for your e-commerce platform with Spring Boot. Handle transactions, inventory, payments, and user data with ease while ensuring top-tier performance and security."
      },
      {
        title: "Custom CMS Development",
        description: "Our Spring Boot-based CMS solutions offer flexible content management, easy user roles and permissions, and seamless integration with third-party services—giving you full control over your digital content."
      },
      {
        title: "Real-time Chat and Messaging Backends",
        description: "Power your chat and messaging apps with Spring Boot's real-time communication support. We implement WebSocket-based, secure and scalable backends to keep users connected 24/7."
      }
      
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
            PROJECTS YOU CAN ENTRUST OUR SPRING BOOT SOFTWARE DEVELOPMENT COMPANY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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