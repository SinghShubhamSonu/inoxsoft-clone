import React from 'react';
import coreTechnologiesImage from '/src/assets/images/core-technologies.png';

const CoreTechnologies = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12 text-[#002a3a]">
          CORE TECHNOLOGIES
        </h2>

        <div className="flex justify-center">
          <img
            src={coreTechnologiesImage}
            alt="Core Technologies"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;