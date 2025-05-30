import React from 'react';

const TechStackSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 shadow-md opacity-10"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* First Column */}
          <div className="bg-[#0A2E43] text-white p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <h2 className="text-5xl font-bold mb-8">1.</h2>
              <h3 className="text-xl font-semibold mb-4">How do we choose a tech stack for the project?</h3>
              <p className="text-gray-400 text-base font-medium leading-relaxed">
                Firstly, we analyze the requirements and business goals. We evaluate 
                whether the software has complex business logic, what are additional 
                features, etc. Peculiarities of the project influence what functionality we have 
                to create and what set of tools to use. Medium and large-size projects are 
                hardly built in only one programming language. It is never enough to say that 
                we use only this or that technology. Often, projects are built with the help of 
                various frameworks, 3rd party integrations, servers and more.
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="bg-[#0A2E43] text-white p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <h2 className="text-5xl font-bold mb-8">2.</h2>
              <h3 className="text-xl font-semibold mb-4">We find the solutions to match your business goals.</h3>
              <p className="text-gray-400 text-base font-medium leading-relaxed">
                The pre-implementation stage of the project is often underestimated, though 
                it influences the idea positively. It reveals things that can be improved when 
                the client could not notice them independently. Our offshore team of project 
                managers, engagement and delivery managers, team leaders, senior engineers 
                work on your idea, evaluate it, estimate risks, and areas for improvement. We 
                will learn your potential customers, what functionality they want to have in 
                the app and what their pain points are. Thus, we find better solutions that 
                match exactly your business goals, your wishes and meet all the 
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;