import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
        question: "How will the PHP developer communicate with my team?",
        answer: (
          <div>
            <p>Our PHP developer will align with your team’s communication preferences—whether that’s Slack, Microsoft Teams, or email. They’ll participate in your daily standups, sprint planning, and reviews as needed, and will be available during your preferred working hours. Communication can be handled via video calls, real-time chats, or asynchronous updates.</p>
          </div>
        )
      },
      {
        question: "How will the PHP developer's work be managed and monitored?",
        answer: (
          <div>
            <p>We utilize project management tools like Jira, Trello, or Asana to manage and monitor the developer’s progress. Tasks are regularly updated, milestones are tracked, and reports are shared to keep you fully informed. Our project managers and tech leads also stay involved to ensure quality and consistency throughout the engagement.</p>
          </div>
        )
      },
      {
        question: "Can I provide feedback and suggestions to the PHP developer?",
        answer: (
          <div>
            <p>Definitely! We encourage ongoing feedback and collaboration. You’re welcome to review work, share your thoughts, and request improvements at any point during the development process. Your input helps us deliver results that align perfectly with your expectations and vision.</p>
          </div>
        )
      },
      {
        question: "How is the PHP developer's fee calculated?",
        answer: (
          <div>
            <p>Fees are based on the developer’s experience, project scope, and duration. We offer both hourly and monthly pricing models. Our pricing is transparent—no hidden charges—so you can plan your budget with confidence.</p>
          </div>
        )
      },
      {
        question: "What is the minimum commitment period for hiring a dedicated PHP developer?",
        answer: (
          <div>
            <p>Generally, we recommend a minimum commitment of three months. This allows the PHP developer to understand your codebase, workflows, and goals, and start contributing effectively. However, we're flexible and can tailor this based on your project requirements.</p>
          </div>
        )
      },
      {
        question: "Will there be a contract in place?",
        answer: (
          <div>
            <p>Yes, a formal contract will be established outlining the scope, deliverables, terms, timeline, confidentiality, and other important details. This ensures a smooth, transparent, and secure engagement for both sides.</p>
          </div>
        )
      }
      
     
  ];

  return (
    <>
    <div className="bg-[#002a3a] text-[#fff] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold uppercase mb-2">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <div 
                className="py-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium pr-8">{item.question}</h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-200 ${openItems[index] ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] ? 'max-h-[2000px] pb-6' : 'max-h-0'
                }`}
              >
                <div className="text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div><hr className="text-gray-300"/></div>
    </>
  );
};

export default FAQ;