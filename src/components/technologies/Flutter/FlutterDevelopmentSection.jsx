import React from 'react';

const FlutterDevelopmentSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-20">
          {/* Left column with sticky positioning for larger screens */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 lg:self-start lg:h-fit">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#14375F] mb-6">
              FLUTTER DEVELOPMENT<br />AT INOXOFT
            </h2>
            <p className="text-base lg:text-lg mb-6 text-gray-800">
              Our flutter application development company 
              delivers software solutions for medium, small 
              businesses, and startups. The network of our 
              partnerships reaches the USA, the UK, Sweden, 
              Netherlands, Israel, Germany, and other countries 
              across the globe.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:w-3/5">
            <p className="text-base lg:text-lg mb-6 text-gray-800">
              We specialize in custom solutions and successfully resolved challenges for 
              narrow-specific projects in{' '}
              <a href="/industries/healthcare/" className="text-gray-800 underline">Healthcare</a>,{' '}
              <a href="/industries/fintech/" className="text-gray-800 underline">Finance</a>,{' '}
              <a href="/industries/logistics/" className="text-gray-800 underline">Logistics</a>,{' '}
              <a href="/industries/education-industry/" className="text-gray-800 underline">Education</a>.
            </p>
            <ul className="space-y-5">
              {[
                "80 projects delivered",
                <>Expertise in Flutter, <a href="/technologies/ios/" className="text-gray-800 underline">iOS</a>, <a href="/technologies/android/" className="text-gray-800 underline">Android</a></>,
                <>Full-stack <a href="/service/mobile-application-development/" className="text-gray-800 underline">mobile development</a> and <a href="/service/web-and-cloud-development/" className=" text-gray-800 underline">web development services</a></>,
                <><a href="/service/ui-and-ux-development/" className="text-gray-800 underline">UI/UX Design</a></>,
                <><a href="/service/quality-assurance-and-testing/" className="text-gray-800 underline">Automation Testing</a></>
              ].map((item, index, array) => (
                <li key={index} className="border-b border-gray-200 pb-4 pt-4 last:border-b-0">
                  <div className="flex items-start text-base lg:text-lg text-gray-800">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 mt-0.5">
                      <img 
                        src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/benefits.svg"
                        alt="Check icon"
                        className="w-full h-full"
                      />
                    </div>
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlutterDevelopmentSection;