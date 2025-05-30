import React, { useState } from 'react';

const NodeFAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "How will the developer communicate with my team?",
      answer: (
        <div>
          <p>Our developer will join your team’s preferred communication channels, whether it's Slack, Teams, or email, and adapt to your existing processes. You’ll be able to connect with them in real-time, schedule regular check-ins, and participate in any necessary video meetings to stay aligned on progress and priorities. If you need a specific schedule or time zone, we can arrange that too.</p>
          {/* <p className="mt-3">It's important to find out how they manage state in their applications and ask for specific examples of when they used props to pass data between components. You should also ask about their methods for improving performance in React apps and any techniques they've used before.</p> */}
          {/* <p className="mt-3">Find out if they have experience with other tools, like Redux or React Router, and how they have used them. Testing and debugging are key in development, so ask how they test their components and what tools they use for that.</p> */}
        </div>
      )
    },
    {
      question: "How will the developer's work be managed and monitored?",
      answer: (
        <div>
          <p>We follow an organized workflow where you’ll have full visibility into the developer's tasks, progress, and timelines. You can opt to use tools like Jira, Trello, or Asana for project management, or we can work with the tools you prefer. Regular updates and progress reports on your Node.js development outsourcing keep you informed, and our team leads and project managers stay available to address any concerns, ensuring work stays on track.</p>
          {/* <p className="mt-3">We interview candidates to check their technical skills and see if they would fit well with your team. This way, we can present people who are not only qualified but also a good match for your work style. After interviews, we welcome your feedback, which helps us adjust our choices if necessary.</p> */}
        </div>
      )
    },
    {
      question: "Can I provide feedback and suggestions to the developer?",
      answer: (
        <div>
          <p>Absolutely. We encourage open communication and make feedback part of the development process. You’re welcome to provide input on tasks, suggest adjustments, or request changes as needed. Your feedback helps us refine the project and align it with your vision.</p>
        </div>
      )
    },
    {
      question: "How is the developer's fee calculated?",
      answer: (
        <div>
          <p>The developer’s fee when you outsource Node.js development typically depends on factors like their experience level, the project’s complexity, and the length of engagement. We offer clear, upfront pricing, often on a monthly or hourly rate basis, so there are no surprises.</p>
          {/* <p className="mt-3">After we present you with candidates, the interview process usually takes about a week, depending on everyone's schedules. Once you select a candidate, the offer and contract negotiations generally take a few days to a week. Onboarding the developer to your team may take another one to two weeks as they get used to your project.</p> */}
          {/* <p className="mt-3">Overall, the whole process from the first meeting to having a developer fully onboarded usually takes around four to 6 weeks, but we work hard to fit your timeline and needs.</p> */}
        </div>
      )
    },
    {
        question:"What is the minimum commitment period for hiring a dedicated developer?",
        answer:(
            <div>
                <p>For most cases, we have a minimum commitment period of three months. This allows the developer time to fully integrate with your team, understand the project requirements, and deliver meaningful progress. However, we can adjust based on specific project needs or timelines.</p>
            </div>
        )
    },
    {
        question:"Will there be a contract in place?",
        answer:(
            <div>
                <p>Yes, a formal contract is in place to outline the scope of work, terms, confidentiality, and other key details. The contract serves as a foundation, setting expectations on both sides, so everything runs smoothly and there’s clear accountability.</p>
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

export default NodeFAQ;