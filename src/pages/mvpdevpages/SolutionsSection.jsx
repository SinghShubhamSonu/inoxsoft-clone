import React from 'react';

const SolutionsSection = () => {
  return (
    <section className="py-16  bg-[#14375F]">
      <div className="container mx-auto  ">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 px-6 ">
          {/* Left column with sticky positioning for larger screens */}
          <div className="lg:flex-1 lg:sticky  lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">MVP DEVELOPMENT SERVICES <br/>WE PROVIDE</h2>
            <p className="font-medium text-base lg:text-lg mb-6 text-white">
            Our MVP app development company offers a flexible and tailored approach to product building, providing various services to satisfy your specific requirements.
            </p>
            {/* <p className="text-base lg:text-lg mb-8 text-[#14375F]">
              We are an outsourcing company and deliver solutions for clients from the USA, the UK, Germany, 
              Sweden, Netherlands, Canada. Inoxoft developers have solid experience in React Native application 
              development. We deliver tailor-made solutions that fulfill particular business needs and help businesses 
              grow.
            </p> */}
          </div>

          {/* Right column for larger screens */}
          <div className="lg:flex-1">
            {/* <p className="text-base lg:text-lg mb-6 text-[#14375F]">
              Hundreds of enterprise owners give preference to Inoxoft, its best team of React Native developers, and a wide range of available services. Partnering with Inoxoft you receive:
            </p> */}
            <ul className="space-y-4">
              {[
                "Market Analysis",
                "Prototyping",
                "MVP Consulting",
                "MVP Development",
                "QA Automation Testing",
                "MVP Improvement",
                "AI/ML Services",
                "Comprehensive Product Development",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-base lg:text-2xl font-bold text-white">
                  <div className="flex-shrink-0 w-5 h-5 mr-3">
                    {/* <img 
                      src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/benefits.svg" 
                      alt="Check icon" 
                      className="w-full h-full"
                    /> */}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="mt-12 border-t border-gray-300 mx-6"></div> */}
      </div>
    </section>
  );
};

export default SolutionsSection;