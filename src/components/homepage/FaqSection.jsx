import React, { useState } from 'react';

const FaqSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "May I hire a dedicated team of developers for my startup from Inoxoft?",
      answer: <p>Yes, we specialize in providing dedicated development teams tailored to the unique needs of startups. Whether you're looking to build a custom software solution, a cutting-edge web app, or a mobile application (iOS, Android, or cross-platform), our experienced team can help you bring your vision to life. We offer flexible engagement models to suit your budget and project requirements.</p>
    },
    {
      question: "Is Inoxoft a full-cycle software development company?",
      answer: (
        <div>
          <p>Yes, Inoxoft is a full-cycle software development company. We guide you through every stage of your software project:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li><b>Project Initiation: </b>We collaborate with you to define your vision, goals, and requirements, ensuring a shared understanding of the project scope.   </li>
            <li><b>Project Planning:</b> We create a detailed project plan outlining timelines, milestones, and resource allocation, ensuring a structured and organized approach.   </li>
            <li><b>Design:</b> Our experienced UI/UX designers create intuitive and visually appealing interfaces that enhance user experience and drive engagement.   </li>
            <li><b>Agile Development:</b> We follow Agile methodologies to promote flexibility, collaboration, and rapid iteration, allowing you to see tangible progress and provide feedback throughout the development process.   </li>
            <li><b>Quality Assurance Testing:</b> Our rigorous testing procedures ensure your software is reliable, bug-free, and performs optimally across different platforms and devices. </li>
            <li><b>Delivery and Deployment:</b>We deploy your software to your preferred environment, whether it's on-premises, cloud-based, or a hybrid model.   </li>
            <li><b>Maintenance and Support:</b> We provide ongoing maintenance and support to ensure your software remains up-to-date, secure, and scalable as your business evolves.  </li>
          </ul>
        </div>
      )
    },
    {
      question: "What industries does your software product development company have experience in?",
      answer: (
        <div>
          <p>Inoxoft has a proven track record of delivering successful software solutions across a variety of industries, using our expertise to solve unique challenges and meet specific needs. Our core expertise is in:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li><b>Real Estate: </b>We have developed cutting-edge solutions for property management, MLS & IDX software, virtual tours, and smart home automation systems.</li>
            <li><b>Healthcare: </b>Our experience includes developing telemedicine platforms, electronic health records (EHR) systems, patient portals, medical imaging software, and health monitoring applications.   </li>
            <li><b>Education:</b> We've created innovative e-learning platforms, learning management systems (LMS), educational games, and student information systems.   </li>
            <li><b>Finance: </b>Our expertise covers developing online banking platforms, payment gateways, trading platforms, personal finance management apps, and fraud detection systems.</li>
            <li><b>Logistics: </b>We've built custom solutions for warehouse management, transportation management, fleet tracking, inventory management, and supply chain optimization.</li>
          </ul>
        </div>
      )
    },
    {
      question: "What custom software solutions does your company offer?",
      answer: (
        <div>
          <p>Inoxoft offers a wide range of custom software solutions, emphasizing open communication and transparency throughout the development process to ensure the final product perfectly aligns with your vision. Our expertise includes:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li><b>Custom websites & web apps </b>tailored to your business goals, built by our skilled software developers. We create user-friendly, high-performing web solutions that focus on driving customer engagement and achieving your desired outcomes.</li>
            <li><b>Native iOS & Android, cross-platform apps</b> designed and developed intuitive and feature-rich mobile applications to help you reach your target audience on their preferred devices.</li>
            <li><b>Customer relationship management solutions</b> to streamline your sales and marketing processes, improve customer engagement, and drive growth.</li>
            <li><b>Enterprise resource planning systems</b> to automate and integrate your core business functions, leading to increased efficiency and productivity.</li>
            <li><b>Business intelligence solutions</b> to gain valuable insights from data. We create BI tools that empower you to make data-driven decisions and gain a competitive edge.</li>
            <li><b>Cloud consulting, migration, and optimization </b>services to ensure your systems are reliable, secure, and scalable.</li>
            <li><b>IT consulting </b>on developing software to guide you through the software development process, helping you choose the right technologies, architectures, and approaches for your specific needs.</li>
          </ul>
        </div>
      )
    },
    {
      question: "What methodologies do you use when working with your clients?",
      answer: (
        <div>
          <p>Inoxoft primarily uses Agile methodologies, that prioritize flexibility, collaboration, and iterative development. These methods help us work together closely with our clients, adapt to changes easily, and deliver valuable results faster. We also use DevOps practices to streamline development, testing, and deployment processes, ensuring faster and more reliable software delivery.</p>
          <p className="mt-3">We understand that each project is unique, so we work closely with our clients to determine the most suitable methodology and tailor our approach to their specific needs and preferences.</p>
        </div>
      )
    },
    {
      question: "What are your pricing models?",
      answer: (
        <div>
          <p>Inoxoft offers flexible collaboration models to fit your project's specific needs and budget:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li><b>Product Development: </b>Ideal if you have a vision for a new product but lack the technical expertise to bring it to life. We'll guide you through the entire development process, from concept to launch, ensuring a comprehensive solution that meets your business goals.</li>
            <li><b>Team Extension: </b>If you already have a project underway and need to augment your team with specific skills or expertise, our Team Extension model allows you to seamlessly integrate our experts into your existing workflow.</li>
            <li><b>Dedicated Team: </b>For long-term projects or ongoing development needs, a dedicated team provides you with a group of experienced professionals who work exclusively on your project, functioning as a seamless extension of your company.</li>
          </ul>
          <p className="mt-3">We'll work closely with you to understand your specific needs and recommend the most suitable collaboration model. Contact us today to discuss your project and receive a personalized pricing proposal.</p>
        </div>
      )
    },
    {
      question: "How long does a typical project take?",
      answer: (
        <div>
          <p>Simple projects can be completed in a few weeks, while more complex projects may take several months — the duration depends on its complexity, scope, and specific requirements. We work with our clients to establish realistic timelines and milestones during the project planning phase.</p>
          <p className="mt-3">We also prioritize transparency and communication, providing regular updates on project progress and ensuring that you are always informed about the status of your project.</p>
        </div>
      )
    },
    {
      question: "How do I start a project with you?",
      answer: (
        <div>
          <p>Ready to embark on your software development journey with Inoxoft? Here's how to get started:</p>
          <ol className="list-decimal pl-5 mt-3 space-y-1">
            <li>Contact us through our website to share your project ideas or requirements. We're eager to hear your vision and discuss how we can help you achieve it.</li>
            <li>We'll schedule a free consultation to delve deeper into your project goals, challenges, and budget. This is an opportunity for us to get to know each other and explore potential solutions.</li>
            <li>Based on our initial discussions, we'll provide you with a detailed proposal outlining the project scope, timeline, and estimated cost. This gives you a clear understanding of our approach and ensures we're aligned on expectations.</li>
            <li>Once you've approved the proposal, we'll assemble a dedicated team of experts tailored to your project's specific needs. We'll then kick off the project, diving into the design and development phases while keeping you informed every step of the way.</li>
          </ol>
          <p className="mt-3">We're committed to transparent communication, collaborative teamwork, and delivering high-quality software solutions that exceed your expectations. Let's start building something great together!</p>
        </div>
      )
    }
  ];

  return (
    <>
    <div className="bg-[#002a3a] text-white py-20">
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
    <div><hr className=' text-gray-300'/></div>
    </>
  );
};

export default FaqSection;