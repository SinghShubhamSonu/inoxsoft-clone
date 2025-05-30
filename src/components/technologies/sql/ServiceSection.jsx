import React from 'react';

const ServiceSection = () => {
  const services = [
    {
        "title": "Robust SQL Backend for SPAs",
        "description": "We design and implement scalable, high-performance SQL databases to power your single-page applications. With fast queries, optimized schema design, and efficient data access, your frontend remains fast, responsive, and data-driven."
    },
    {
        "title": "SQL Backend for Progressive Web Apps",
        "description": "Support your Progressive Web Apps (PWAs) with a reliable, high-performance SQL backend. Our solutions ensure smooth offline data syncing, real-time updates, and efficient handling of background processes for seamless user experiences."
    },
    {
        "title": "Enterprise SQL Application Development",
        "description": "We build powerful, enterprise-grade SQL solutions that handle high volumes of transactions, complex queries, and ensure robust security. Our SQL databases are designed to scale with your business and support complex workflows."
    },
    {
        "title": "E-commerce SQL Backend Solutions",
        "description": "Create a secure and scalable SQL database to handle all aspects of your e-commerce platform. From transactions and inventory management to payments and user data, our SQL backend ensures top-tier performance and security."
    },
    {
        "title": "Custom SQL CMS Development",
        "description": "We design flexible and efficient SQL-based Content Management Systems (CMS) that enable easy content management, user roles, permissions, and integration with third-party services. Empower your business with complete control over digital content."
    },
    {
        "title": "Real-time SQL Chat and Messaging Backends",
        "description": "Build powerful, real-time chat and messaging apps using SQL databases that support WebSocket integration. We ensure secure, scalable, and efficient data management, enabling instant message delivery and real-time communication."
    }
    
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
            PROJECTS YOU CAN ENTRUST OUR SQL SOFTWARE DEVELOPMENT COMPANY
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