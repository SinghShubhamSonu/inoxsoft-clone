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
        question: "How much does MVP development cost?",
        answer: (
          <div>
            <p>MVP development costs can vary depending on several factors, including:<br/>
                Features and functionalities: The number and complexity of features included in your MVP will impact the development time and cost.<br/>
                Development team location and experience: Rates can vary depending on the location and seniority of your development team.<br/>
                Design needs: A basic user interface (UI) design will be less expensive than a highly customized and visually complex design.<br/>
                It's always best to get a quote from a qualified development partner who can assess your specific needs and provide an accurate estimate. Inoxoft offers free consultations to estimate your project cost — don't hesitate to contact our team.</p>
          </div>
        )
      },
      {
        question: "What happens after the MVP launch?",
        answer: (
          <div>
            <p>Launching your MVP is just the beginning — you must focus on gathering user feedback and data. Pay close attention to how users interact with your MVP: identify areas of confusion, bugs, and features that resonate most with your target audience.<br/>
                Based on user feedback, prioritize improvements and new features for your MVP. This iterative process is crucial for refining your product and ensuring it meets user needs. And depending on the success of your MVP and your business goals, you might decide to:<br/>

                Continue iterating and developing your MVP into a full-fledged product.<br/>
                Pivot your idea based on user feedback and develop a new MVP in a different direction.</p>
          </div>
        )
      },
      {
        question: "Can I turn my MVP into a full-fledged product?",
        answer: (
          <div>
            <p>Your MVP's codebase serves as a foundation for further development — you can build upon it to add <br/>
                new features and functionalities. User insights gathered during the MVP phase will ensure you're<br/>
                building a product that resonates with your target audience.<br/>
                As your user base grows, you can scale up your development team and resources to accommodate 
                the needs of a full-fledged product.</p>
          </div>
        )
      },
      {
        question: "How can I choose the right MVP development partner?",
        answer: (
          <div>
            <p>1. Experience: Look for a company with a proven track record of successful MVP development<br/> projects.<br/>
               2. Expertise: Choose a partner with experience in your specific industry or technology stack.<br/>
               3. Methodology: Ensure the company follows a well-defined MVP development methodology that <br/>emphasizes user research, prototyping, and iteration.<br/>
               4. Communication & transparency: Open communication and transparency are vital throughout the <br/>development process. Choose a partner who keeps you informed and involved.<br/>
               5. Scalability: Consider whether the development partner can scale alongside your MVP as it <br/>evolves into a full-fledged product.<br/>
               <br/>
                  Don't hesitate to ask questions and get quotes from multiple developers before making your <br/>decision.<br/>
                  At Inoxoft, we're passionate about helping businesses turn innovative ideas into successful <br/>products. Schedule a free consultation to gain valuable insights and explore how Inoxoft can be your <br/>partner in achieving MVP success. We're confident we can help you turn your vision into a reality.</p>
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