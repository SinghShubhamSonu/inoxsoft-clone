import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Single Page Apps",
      description: "Our SPAs deliver a seamless, app-like experience within the browser, with fast transitions and interactions. Each click flows naturally, creating a connected and responsive journey for your users."
    },
    {
      title: "Progressive Web Apps",
      description: "We build PWAs that work online or offline and feel just like native apps. PWAs combine the best of the web and mobile experiences, letting users access your app anytime, anywhere with high performance."
    },
    {
      title: "Enterprise Solutions",
      description: "For businesses that don't settle, we create enterprise applications that support complex operations and adapt as you grow. Our solutions are built for scale, delivering robust functionality and easy integration with all your existing systems."
    },
    {
      title: "E-commerce Platforms",
      description: "Take your e-commerce to the next level with platforms that keep users engaged and shopping. Designed for high traffic and security, our platforms create a smooth, enjoyable experience—from first click to checkout."
    },
    {
      title: "Content Management Systems",
      description: "Need a CMS that simplifies content updates, makes data management simpler, and adapts to your changing needs? You can have it all in one. Also, our systems integrate easily with your tools and give you full control over your operations."
    },
    {
      title: "Chat and Messaging Apps",
      description: "Keep the conversation going with chat apps with instant connections, security, and user-friendly features. We create messaging apps that handle everything from private chats to group conversations, so your users stay connected all the time."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
            PROJECTS YOU CAN ENTRUST OUR REACT SOFTWARE DEVELOPMENT COMPANY
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
                <h3 className="text-xlfont-semibold text-[#0d3050] mb-3 text-lg sm:text-xl">{service.title}</h3>
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