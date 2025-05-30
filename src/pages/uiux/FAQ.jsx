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
      question: "Why are UI/UX design and development services important?",
      answer: (
        <div>
          <p>Great UI/UX makes your app or website user-friendly, engaging, and effective, which translates it to higher conversion rates, brand loyalty, and satisfied users. What's more, a lot of research approves that a well-designed website or mobile application can positively influence a customer's first impression, making your brand memorable.</p>
          <p>Here's how a good UI/UX design can impact your project's success:</p>
          <ul>
            <li>Intuitive navigation. This keeps your users engaged and allows them to find what they need quickly, fostering long-term use.</li>
            <li>Reduced learning curve. When your interface is user-friendly, this reduces the time needed to learn how to use your product. As a result, you can achieve faster adoption and higher user satisfaction.</li>
            <li>Emotional connection. By using specific visual signs and colors, you can evoke positive emotions and create a sense of trust with your customers, strengthening brand perception.</li>
            <li>Accessibility for all. When opting for accessibility features like clear visuals, intuitive layouts, and keyboard navigation, you can ensure your product ensures inclusivity and caters a wider user base.</li>
            <li>Personalized experiences. By incorporating user data and preferences, you can personalize the user experience, making it feel more relevant and engaging</li>
          </ul>
        </div>
      )
    },
    {
      question: "What can I expect from your UI/UX design and development services?",
      answer: (
        <div>
          <p>We believe in a collaborative approach that starts by getting to know you, your business goals, and the audience you're trying to reach. Through user research, workshops, and in-depth discussions, we'll work together to understand your target users' needs, pain points, and aspirations. This collaborative spirit extends to crafting detailed user personas - fictional representations of your ideal users - that guide every design decision.</p>
        </div>
      )
    },
    {
      question: "Can I be involved in the design process?",
      answer: (
        <div>
          <p>Absolutely! We believe in open communication and keep you involved throughout the project.</p>
        </div>
      )
    },
    {
      question: "How long does the UI/UX design and development process take?",
      answer: (
        <div>
          <p>The time frame depends on project complexity. We'll provide a timeline during the initial consultation. Inoxoft offers free consultations to estimate your project cost — don't hesitate to <a href="https://inoxoft.com/contacts/" className="text-blue-600 hover:underline">contact our team.</a></p>
          <p>When estimating your project, we consider several factors, such as:</p>
          <ul>
            <li>Project complexity. For example, you may require advanced features or a high level of content volume which influence the final UI/UX design cost.</li>
            <li>Depth of user research. In some cases, this step may involve a detailed interview, surveys, and usability testing. While this approach is more beneficial, the initial phase will be longer.</li>
            <li>Number of interactions. The design process is iterative, meaning there might be multiple rounds of revisions based on user feedback. More design iterations ensure a user-friendly experience but extend the timeline.</li>
          </ul>
        </div>
      )
    },
    {
      question: "What types of projects do you work on?",
      answer: (
        <div>
          <p>We have experience across various industries, from logistics and healthcare to education and finance, which allows us to understand the unique challenges and user needs within each sector.</p>
          <p>This depth of industry knowledge translates into several key benefits for you:</p>
          <ul>
            <li>Understanding your challenges. We've been there. We understand the specific pain points and user needs that are unique to your industry. This allows us to tailor our design approach directly to your business goals and target audience.</li>
            <li>Proven design solutions. Based on our industry-specific experience, we can adapt proven strategies and user interface concepts to your specific requirements.</li>
            <li>Streamlined development. Understanding industry best practices and common functionalities allows us to reduce the need to reinvent the wheel and keep your project on track.</li>
          </ul>
        </div>
      )
    },
    {
      question: "What tools and technologies do you use?",
      answer: (
        <div>
          <p>We use industry-standard design and prototyping tools like Figma, Sketch Adobe XD to create cutting-edge and user-friendly interfaces. And while these tools are powerful, our human expertise is what truly sets us apart. Our team of experienced UI/UX designers possesses a deep understanding of user behavior, design principles, and the latest UI/UX trends. We combine all this knowledge with the latest technology to deliver exceptional results.</p>
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