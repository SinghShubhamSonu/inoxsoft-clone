import React from 'react';

const ServiceSection = () => {
  const services = [
    {
        title: "Robust Backend for SPAs",
        description: "We develop scalable and secure PHP backends using modern frameworks like Laravel to support single-page applications. Our fast APIs ensure your frontend remains responsive and dynamic."
      },
      {
        title: "Backend for Progressive Web Apps",
        description: "Strengthen your PWAs with PHP-based backends that support real-time syncing, offline capabilities, and efficient background processing—all designed for smooth user experiences."
      },
      {
        title: "Enterprise Application Development",
        description: "We craft enterprise-grade PHP applications with high concurrency, modular architecture, and advanced security features, helping your business handle large-scale operations with confidence."
      },
      {
        title: "E-commerce Backend Solutions",
        description: "Create a powerful and secure e-commerce backend using PHP. Manage everything from payments and orders to inventory and customer data while ensuring performance and scalability."
      },
      {
        title: "Custom CMS Development",
        description: "We build flexible, feature-rich CMS platforms using PHP tailored to your content workflow. With role-based access, plugin support, and third-party integrations, you stay in full control."
      },
      {
        title: "Real-time Chat and Messaging Backends",
        description: "Enable real-time communication with PHP and WebSocket implementations. Our backends are secure, scalable, and optimized to keep your users connected around the clock."
      }
      
      
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
            PROJECTS YOU CAN ENTRUST OUR PHP SOFTWARE DEVELOPMENT COMPANY
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