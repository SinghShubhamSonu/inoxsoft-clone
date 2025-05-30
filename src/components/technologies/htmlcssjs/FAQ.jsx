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
        "question": "How will the front-end developer communicate with my team?",
        "answer": (
            <div>
                <p>Our front-end developer will integrate seamlessly with your team’s preferred communication tools, whether it’s Slack, Microsoft Teams, or email. They’ll adapt to your workflows, attend daily standups or sprint reviews, and remain available during your working hours. Video calls, async updates, and real-time communication can all be arranged as needed.</p>
            </div>
        )
    },
    {
        "question": "How will the front-end developer's work be managed and monitored?",
        "answer": (
            <div>
                <p>We provide full transparency through project management tools like Jira, Trello, or Asana. The developer logs tasks, updates progress, and tracks milestones regularly. You can expect consistent communication, weekly reports, and check-ins to ensure everything stays on schedule and meets your expectations. Our technical leads and project managers are also available to support and supervise when required.</p>
            </div>
        )
    },
    {
        "question": "Can I provide feedback and suggestions to the front-end developer?",
        "answer": (
            <div>
                <p>Absolutely. We encourage open and regular feedback. You’re free to share suggestions, review implementations, and request changes at any stage of the project. Your input helps us align the front-end development with your technical goals and business vision, whether working with HTML, CSS, JavaScript, or frameworks like React and Angular.</p>
            </div>
        )
    },
    {
        "question": "How is the front-end developer's fee calculated?",
        "answer": (
            <div>
                <p>The fee depends on the developer’s experience, the complexity of your front-end project, and the engagement duration. We offer both hourly and monthly pricing models. Transparent and upfront pricing ensures you know exactly what to expect, with no hidden costs.</p>
            </div>
        )
    },
    {
        "question": "What is the minimum commitment period for hiring a dedicated front-end developer?",
        "answer": (
            <div>
                <p>Typically, the minimum commitment period is three months. This ensures the developer has ample time to get up to speed with your front-end codebase, understand your UI/UX design, and begin delivering results. We can also adjust based on your project timeline or scope.</p>
            </div>
        )
    },
    {
        "question": "Will there be a contract in place?",
        "answer": (
            <div>
                <p>Yes. We sign a formal agreement that outlines the scope of work, terms of engagement, timelines, confidentiality clauses, and more. This provides clarity and security for both parties, ensuring a smooth and professional collaboration, whether it’s for HTML, CSS, JavaScript, or full-stack development solutions.</p>
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