import React from 'react';

const ProjectOutSource = () => {
  const services = [
    {
        title: "Real-Time Applications",
        description: "For chat systems, streaming platforms, or collaboration tools, we build real-time features that keep users engaged and connected, handling multiple users, live updates, and continuous data flow with efficiency."
    },
    {
      title: "Single-Page Applications",
      description: "We develop SPAs that provide a fluid, responsive experience, with fast navigation and transitions that create the feel of a native app in a web browser. Every click feels like a natural extension of the previous one, making the user journey connected."
    },
    {
      title: "CMSs",
      description: "Need a custom CMS? We create user-friendly, secure systems that integrate seamlessly with your tools and adapt as you grow."
    },
    {
      title: "APIs",
      description: "We design APIs that support smooth data exchange between applications and third-party services. Our numerous experts prioritize security and resilience, providing robust connections that expand your application's functionality."
    },
    {
      title: "eCommerce Platforms",
      description: "From product management to checkout processes, we create eCommerce platforms that handle high volumes of traffic and transactions without disruption, building a consistent shopping experience from A to Z."
    },
    {
      title: "Event-Driven Systems",
      description: "For applications that rely on notifications and real-time alerts, we build event-driven systems that distribute updates via email, SMS, or push notifications. Our approach keeps users informed and engaged with prompt, consistent updates."
    },
    {
      title: "Serverless Applications",
      description: "Using serverless architecture, we can make applications that dynamically adjust to demand, optimizing both costs and performance for fluctuating usage."
    },
    {
      title: "Enterprise Systems",
      description: "Creating complex business software like ERPs and CRMs, our team delivers software that supports workflows, manages data, and provides analytical insights, all while being adaptable to your organization's processes."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
            PROJECTS YOU CAN OUTSOURCE TO OUR <br/> NODE.JS DEVELOPMENT COMPANY
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
                <h3 className="text-lg font-bold text-[#0d3050] mb-3 sm:text-xl">{service.title}</h3>
                <p className="text-[#0d3050] leading-relaxed text-base sm:text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOutSource;