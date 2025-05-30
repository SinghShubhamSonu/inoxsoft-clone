import React from 'react';

const NodeJsSkills = () => {
    const skills = [
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/08/Notifications-and-alerts.svg",
          title: "JavaScript expertise"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/12/programming.svg",
          title: "Asynchronous programming"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/12/frameworks.svg",
          title: "Node.js frameworks"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/08/Card_element-4.svg",
          title: "RESTful and GraphQL APIs"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/12/database.svg",
          title: "Database management"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-2-1.svg",
          title: "Testing and debugging"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/07/Learner-performance-reports.svg",
          title: "Performance optimization"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-3.svg",
          title: "Security"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/08/cloud.svg",
          title: "Cloud platforms"
        },
        {
          icon: "https://inoxoft.com/wp-content/uploads/2024/12/icon-7-1.svg",
          title: "DevOps and CI/CD"
        }
      ];
  
  return (
    <section className="relative py-20 bg-white">
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">OUR NODE.JS DEVELOPERS' SKILLS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#002a3a] text-white rounded-lg p-6 flex flex-col items-center justify-center h-56">
              <img 
                src={skill.icon} 
                alt={skill.title}
                width="54"
                height="54" 
                className="mb-4"
              />
              <p className="text-lg font-semibold text-center">{skill.title}</p>
            </div>
          ))}
        </div>
        <div 
          className="hidden" 
          data-post_type="technologies" 
          data-cat="" 
          data-modified="120" 
          data-title="Node. JS" 
          data-home="https://inoxoft.com"
        ></div>
      </div>
    </section>
  );
};

export default NodeJsSkills;