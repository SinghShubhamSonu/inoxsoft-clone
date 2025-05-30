import React from 'react';

const CrossPlatformSection2 = () => {
  return (
    <section className="relative mt-20">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 py-10">
          {/* Left side - heading and first paragraph */}
          <div className="md:w-1/2">
            <div className="text-start mb-10">
              <h2 className="text-4xl font-bold mb-7 text-[#173753]">
                CROSS PLATFORM MOBILE APP<br />
                DEVELOPMENT COMPANY
              </h2>
              <p className="text-lg text-[#173753]">
                Create an application to target both Android and iOS mobile platforms and <br />
                reach the highest number of tech-savvy mobile users with a cross platform<br />
                app development company.
              </p>
            </div>
          </div>

          {/* Right side - three paragraphs */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <p className="text-[#173753] text-xl">
              Inoxoft is a multiplatform mobile app development company delivering advanced solutions for small startups, mid-sized businesses, and enterprises.
            </p>
            <p className="text-[#173753] text-xl">
              Our multi platform app development engineers create high-performing cross-platform applications that deliver excellent conversions across, devices, industries, and audiences.
            </p>
            <p className="text-[#173753] text-xl">
              We consider your requirements, pay attention to details, and select a technology stack depending on the project. Contact our experts to estimate the average price for cross-platform application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossPlatformSection2;