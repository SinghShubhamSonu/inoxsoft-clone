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
        question: "How do you ensure that the product meets my requirements?",
        answer: (
          <div>
            <p>We believe in a collaborative approach throughout the development process. We start by thoroughly understanding your vision and goals through detailed discussions and requirement gathering. We then maintain open communication throughout the project, providing regular updates and demos. We encourage your feedback at every stage, ensuring that the final product aligns perfectly with your requirements.</p>
          </div>
        )
      },
      {
        question: "What is the typical timeline for developing a product?",
        answer: (
          <div>
            <p>The development timeline varies based on the product's complexity, features, and scope. Simple applications might take a few weeks, while more complex projects can span several months. We'll provide a detailed timeline during the initial consultation and remain flexible to accommodate any necessary adjustments during the development process.</p>
          </div>
        )
      },
      {
        question: "Can you handle both small and large-scale projects? Absolutely. Our experience spans a wide range of project sizes and complexities. Whet",
        answer: (
          <div>
            <p>Absolutely. Our experience spans a wide range of project sizes and complexities. Whether you're a startup with an MVP or an enterprise seeking a complex solution, we have the expertise and resources to meet your needs with our software product development services.</p>
          </div>
        )
      },
      {
        question: "How is the Spring Boot developer's fee calculated?",
        answer: (
          <div>
            <p>The fee depends on the developer’s experience, project complexity, and engagement duration. We offer both hourly and monthly pricing models. Transparent and upfront pricing ensures you know exactly what to expect, with no hidden costs.</p>
          </div>
        )
      },
      {
        question: "Will I receive support and maintenance after the product is launched?",
        answer: (
          <div>
            <p>Our managed product development services include comprehensive post-launch support to ensure your product remains functional, secure, and up-to-date. We'll address any issues, implement updates, and provide timely assistance, allowing you to focus on your core business.</p>
          </div>
        )
      },
      {
        question: "How do you handle changes or additional requests during the development process?",
        answer: (
          <div>
            <p>We understand that change is inevitable. Our agile development process is designed to accommodate evolving requirements. We'll work with you to assess the impact of any changes and adjust our plans accordingly, ensuring a successful outcome while minimizing disruptions. This flexibility is a key part of our software product development solutions.</p>
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