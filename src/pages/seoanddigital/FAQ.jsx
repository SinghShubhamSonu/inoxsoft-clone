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
      question: "How do you ensure that my digital marketing campaigns meet my business goals?",
      answer: (
        <div>
          <p>We start by deeply understanding your business objectives, target audience, and market trends. Through detailed discussions and research, we craft tailored digital marketing strategies. We maintain constant communication throughout the campaign, providing regular updates and performance reports, and adjusting strategies based on your feedback to ensure alignment with your goals.</p>
        </div>
      )
    },
    {
      question: "What is the typical timeline for SEO results?",
      answer: (
        <div>
          <p>SEO is a long-term strategy, and results can take a few months to become noticeable. The timeline depends on various factors like your website’s current state, keyword competitiveness, and content optimization. We provide a detailed timeline during the initial SEO consultation and work to ensure sustained progress with ongoing efforts to improve rankings over time.</p>
        </div>
      )
    },
    {
      question: "Can you handle both small and large-scale digital marketing campaigns?",
      answer: (
        <div>
          <p>Absolutely. We have the expertise to handle campaigns of all sizes, whether you’re a small business looking to drive local traffic or an enterprise seeking global reach. Our strategies are scalable, ensuring we can cater to your specific needs with precision and efficiency.</p>
        </div>
      )
    },
    {
      question: "How are your digital marketing services priced?",
      answer: (
        <div>
          <p>Our pricing depends on the services you require, the complexity of your campaigns, and the level of engagement. We offer flexible pricing models, including monthly retainers or project-based pricing. We provide clear, upfront pricing with no hidden fees, ensuring full transparency in your investment.</p>
        </div>
      )
    },
    {
      question: "Will I receive ongoing support after my digital marketing campaigns are launched?",
      answer: (
        <div>
          <p>Yes, we provide continuous support after the launch of your campaigns. This includes regular performance reviews, optimization of strategies, and addressing any challenges that arise. Our aim is to ensure that your campaigns continue to perform well and deliver the desired results over time.</p>
        </div>
      )
    },
    {
      question: "How do you handle changes or new requests during a digital marketing campaign?",
      answer: (
        <div>
          <p>We understand that the digital marketing landscape can evolve quickly. Our approach is flexible and agile, allowing us to adjust strategies as new opportunities or challenges arise. We’ll work closely with you to assess the impact of any changes, ensuring that we adapt our tactics effectively without disrupting your campaign's success.</p>
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

