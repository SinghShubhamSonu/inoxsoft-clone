import React, { useState } from 'react';

const ReactFaqSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "What questions should I ask a React.js developer during an interview?",
      answer: (
        <div>
          <p>When interviewing a React.js developer, it's good to ask questions that reveal their skills and fit for your project. Start by asking about their experience with React.js and the types of projects they have worked on. This helps you understand what they know. You can also ask them to explain key concepts like components, state management, and props to see how well they understand React.</p>
          <p className="mt-3">It's important to find out how they manage state in their applications and ask for specific examples of when they used props to pass data between components. You should also ask about their methods for improving performance in React apps and any techniques they've used before.</p>
          <p className="mt-3">Find out if they have experience with other tools, like Redux or React Router, and how they have used them. Testing and debugging are key in development, so ask how they test their components and what tools they use for that.</p>
        </div>
      )
    },
    {
      question: "How do you ensure that the React.js developers you place are a good fit for my specific project requirements?",
      answer: (
        <div>
          <p>To make sure the React.js developers we place match your needs, we start by talking to you about your project. We want to understand your goals, the technologies you're using, and the specific skills you need from the developer. With this information, we can find candidates who have the right experience.</p>
          <p className="mt-3">We interview candidates to check their technical skills and see if they would fit well with your team. This way, we can present people who are not only qualified but also a good match for your work style. After interviews, we welcome your feedback, which helps us adjust our choices if necessary.</p>
        </div>
      )
    },
    {
      question: "What level of support do you provide after a React.js developer is placed on my project?",
      answer: (
        <div>
          <p>After placing a React.js developer on your project, we provide support to make sure everything runs smoothly. We start with onboarding, helping the developer get familiar with your project goals, tools, and team culture so they can start strong.</p>
          <p className="mt-3">We keep in touch with both you and the developer, checking in on progress and addressing any issues that come up. If the developer needs to learn more, we can provide additional training resources to help them improve their skills. If any problems arise with their performance or fitting in with your team, we are here to help resolve those issues quickly.</p>
        </div>
      )
    },
    {
      question: "What is the typical timeline for hiring a React.js developer through your company?",
      answer: (
        <div>
          <p>The timeline for hiring a React.js developer can vary, but here's a general idea. It begins with an initial consultation that usually takes a couple of days to discuss your project needs. Once we understand what you're looking for, finding and screening candidates typically takes one to two weeks. This includes reviewing resumes, doing initial interviews, and checking references.</p>
          <p className="mt-3">After we present you with candidates, the interview process usually takes about a week, depending on everyone's schedules. Once you select a candidate, the offer and contract negotiations generally take a few days to a week. Onboarding the developer to your team may take another one to two weeks as they get used to your project.</p>
          <p className="mt-3">Overall, the whole process from the first meeting to having a developer fully onboarded usually takes around four to 6 weeks, but we work hard to fit your timeline and needs.</p>
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

export default ReactFaqSection;