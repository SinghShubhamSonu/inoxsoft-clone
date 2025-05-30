import React from 'react';

const ServiceSection = () => {
  const services = [
    {
        "title": "Robust Front-end for SPAs",
        "description": "We design and implement scalable, high-performance front-end architectures using HTML, CSS, and JavaScript to power your single-page applications. With fast rendering, responsive layouts, and optimized code, your application remains fast, engaging, and user-friendly."
    },
    {
        "title": "Front-end for Progressive Web Apps",
        "description": "Support your Progressive Web Apps (PWAs) with a reliable and high-performance front-end. Our HTML, CSS, and JavaScript solutions ensure smooth offline experiences, real-time updates, and efficient background processes for a seamless user experience."
    },
    {
        "title": "Enterprise Web Application Development",
        "description": "We create powerful, enterprise-grade front-end solutions using HTML, CSS, and JavaScript that handle complex UI components, high user concurrency, and robust user interactions. Our solutions are designed to scale with your business and support sophisticated workflows."
    },
    {
        "title": "E-commerce Front-end Solutions",
        "description": "Build a secure, responsive, and visually appealing front-end for your e-commerce platform using HTML, CSS, and JavaScript. We optimize the user experience for product listings, transactions, and payments, ensuring top-tier performance and security."
    },
    {
        "title": "Custom CMS Development with HTML/CSS/JS",
        "description": "We design flexible and efficient front-end solutions for Content Management Systems (CMS) using HTML, CSS, and JavaScript. With easy content management, dynamic user roles, and seamless integration with third-party services, our CMS solutions empower your business with complete control over digital content."
    },
    {
        "title": "Real-time Chat and Messaging Front-end Solutions",
        "description": "Build powerful, real-time chat and messaging apps using HTML, CSS, and JavaScript. We ensure efficient data management, WebSocket integration, and a seamless user interface for instant messaging and real-time communication."
    }
    
    
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
            PROJECTS YOU CAN ENTRUST OUR HTML/CSS/JS SOFTWARE DEVELOPMENT COMPANY
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