import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Captivating Websites",
      description: "We seamlessly integrate your brand elements into web experiences that resonate with your target audience. Flawlessly adapting to any device, the designs made through our UI/UX web design services ensure a seamless journey for users on any platform."
    },
    {
      title: "Engaging Mobile Apps",
      description: "Creating captivating user experiences is at the heart of our mobile app UI/UX design services. We leverage our expertise to maximize user engagement and ensure your app adheres to the latest platform UI/UX guidelines for a frictionless experience."
    },
    {
      title: "Inspiring Graphic Design ",
      description: "Our team creates stunning visuals based on best practices, cutting-edge design trends, and a touch of our own creativity. We collaborate closely with you to ensure every element design aligns with your brand identity and elevates your visual presence."
    },
  
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3050]">
          OUR DESIGN AND DEVELOPMENT <br/>SOLUTIONS
          </h2>
          <p className='mt-10 text-lg text-[#0d3050]'>Inoxoft offers a comprehensive suite of UX/UI design services to empower your brand across all <br/>touchpoints and equip you with the visual tools you need to thrive.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-[#0d3050] rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg relative">
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