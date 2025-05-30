import React from 'react';

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 px-6">
          {/* Left column with sticky positioning for larger screens */}
          <div className="lg:flex-1 lg:sticky  lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#14375F] mb-6">HOW WE DELIVER SOLUTIONS?</h2>
            <p className="font-medium text-base lg:text-lg mb-6 text-[#416186]">
              Custom React Native application development company that specializes in web and mobile 
              software in various fields is ready to realize your idea. Inoxoft is a company you can trust and form a 
              reliable partnership with benefits.
            </p>
            <p className="text-base lg:text-lg mb-8 text-[#14375F]">
              We are an outsourcing company and deliver solutions for clients from the USA, the UK, Germany, 
              Sweden, Netherlands, Canada. Inoxoft developers have solid experience in React Native application 
              development. We deliver tailor-made solutions that fulfill particular business needs and help businesses 
              grow.
            </p>
          </div>

          {/* Right column for larger screens */}
          <div className="lg:flex-1">
            <p className="text-base lg:text-lg mb-6 text-[#14375F]">
              Hundreds of enterprise owners give preference to Inoxoft, its best team of React Native developers, and a wide range of available services. Partnering with Inoxoft you receive:
            </p>
            <ul className="space-y-4">
              {[
                "Reliability and responsiveness",
                "Delivery that ensures 100% quality",
                "Delivery within requested timeframes",
                "Flexibility in solving challenges",
                "Full maintenance of the project",
                "Skilled project managers",
                "Proactive team of React Native app developers",
                "Clearly communicated results",
                "React Native consulting",
                "Complete idea realization",
                "Dedication to clients' success",
                "Attractive final product"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-base lg:text-lg text-[#14375F]">
                  <div className="flex-shrink-0 w-5 h-5 mr-3">
                    <img 
                      src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/benefits.svg" 
                      alt="Check icon" 
                      className="w-full h-full"
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 mx-6"></div>
      </div>
    </section>
  );
};

export default SolutionsSection;