import React from 'react';

const Hire = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 px-6">
          {/* Left column with sticky positioning for larger screens */}
          <div className="lg:flex-1 lg:sticky  lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-4xl lg:text-3xl font-bold text-[#173753] mb-6">HIRE CROSS PLATFORM APP DEVELOPMENT TEAM</h2>
            <p className="font-normal text-base lg:text-md mb-6 text-black">
            Our full-stack cross platform application development company leverages extensive knowledge in mobile development to create user-friendly, cost-effective, and intuitive cross-platform mobile apps customized for your business needs.
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
            <p className="text-bold lg:text-2xl mb-6 text-[#173753]">
            Inoxoft tech team:
            </p>
            <ul className="space-y-4">
              {[
                "Deeply understands industry standards, methodologies, and emerging trends",
                "Ensures smooth development and 100% quality product",
                "Develop tailored QA strategies and solutions",
                "Provide automation testing",
                "Optimize Clear Code"
               
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

export default Hire;