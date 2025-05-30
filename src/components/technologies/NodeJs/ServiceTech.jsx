
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Service1 from '../../../assets/images/services/Service1.webp';
import Service2 from '../../../assets/images/services/Service2.webp';
import Service3 from '../../../assets/images/services/service3.webp';
import Service4 from '../../../assets/images/services/service4.webp';
import Service5 from '../../../assets/images/services/service5.webp';
import Service6 from '../../../assets/images/services/service6.webp';
import Service7 from '../../../assets/images/services/service7.webp';
import Service8 from '../../../assets/images/services/service8.webp';
import Tech1 from '../../../assets/images/tech/tech1.webp';
import Tech2 from '../../../assets/images/tech/tech2.webp';
import Tech3 from '../../../assets/images/tech/tech3.webp';
import Tech4 from '../../../assets/images/tech/tech4.webp';
import Tech5 from '../../../assets/images/tech/tech5.webp';
import Tech6 from '../../../assets/images/tech/tech6.webp';
import Tech7 from '../../../assets/images/tech/tech7.webp';
import Tech8 from '../../../assets/images/tech/tech8.webp';

const ServiceTech = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: "Web Development",
      image: Service1,
      link: "/service/web-and-cloud-development/",
      description: "Ensure the increased potential of business ideas and enable its competitive abilities on the market with our custom web solutions."
    },
    {
      title: "Mobile Application Development",
      image: Service2,
      link: "/service/mobile-application-development/",
      description: "Elevate your brand's presence on the market with our experience in mobile app development services."
    },
    {
      title: "Discovery Phase",
      image: Service3,
      link: "/service/discovery-phase/",
      description: "Implement your business idea and create the best solutions ever to satisfy your target users' needs consulting with our experts."
    },
    {
      title: "UI/UX Design",
      image: Service4,
      link: "/service/ui-and-ux-development/",
      description: "Give your business a chance to differentiate and earn the attention of investors with the power of our eye-catching designs."
    },
    {
      title: "Quality Assurance",
      image: Service5,
      link: "/service/quality-assurance-and-testing/",
      description: "Embody your vision of QA business goals by starting with discussion and improvements of an idea with our team."
    },
    {
      title: "IT Security",
      image: Service6,
      link: "/service/it-security-services-and-solutions/",
      description: "Identify risks, limit damage, and avoid financial losses with a full range of cybersecurity services and solutions."
    },
    {
      title: "Data Science and Big Data Analytics",
      image: Service7,
      link: "/service/big-data-analytics-and-machine-learning-services/",
      description: "Extract valuable insights from data and apply effective solutions with our data science analytics services."
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      image: Service8,
      link: "/service/artificial-intelligence-and-machine-learning-services/",
      description: "Build the world's finest software solutions and thrive in an increasingly competitive landscape with our AI/ML development services."
    }
  ];

  const techStack = [
    {
      title: "Flutter App Development Services",
      image: Tech1,
      link: "/technologies/flutter/",
      description: "There are many opportunities that new technologies are giving to us."
    },
    {
      title: "Python & Django Development Services",
      image: Tech2,
      link: "/technologies/python-django/",
      description: "Inoxoft is a python web and mobile development company. We offer high-quality web solutions in this programming language."
    },
    {
      title: ".Net Development Services",
      image: Tech3,
      link: "/technologies/net-core/",
      description: "Inoxoft projects are mostly based on .NET and having realized 80 software solutions."
    },
    {
      title: "Node.Js Development Services",
      image: Tech4,
      link: "/technologies/node-js/",
      description: "Javascript has efficient frameworks and you can certainly take advantage of one of them, namely Node.js."
    },
    {
      title: "React JS Development Services",
      image: Tech5,
      link: "/technologies/reactjs/",
      description: "Rich user interfaces are the ones created with ReactJS development services."
    },
    {
      title: "React Native Development Services",
      image: Tech6,
      link: "/technologies/react-native/",
      description: "Though being a relatively new technology, React Native has earned a positive reputation."
    },
    {
      title: "iOS App Development Services",
      image: Tech7,
      link: "/technologies/ios/",
      description: "iOS mobile app development services significantly helps businesses thrive."
    },
    {
      title: "Android Application Development Services",
      image: Tech8,
      link: "/technologies/android/",
      description: "Our app development company helps clients worldwide to start mobile development for their business."
    }
  ];
  
  // Function to handle card animations
  const initCardAnimation = () => {
    // Get all card elements
    const cards = document.querySelectorAll('.card-item');
    
    cards.forEach(card => {
      // Get content elements
      const overlay = card.querySelector('.card-overlay');
      const title = card.querySelector('.card-title');
      const description = card.querySelector('.card-description');
      const contentWrapper = card.querySelector('.content-wrapper');
      
      // Set initial states
      gsap.set(overlay, {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        opacity: 0.3
      });
      
      gsap.set(description, { 
        opacity: 0,
        height: 0,
        overflow: 'hidden'
      });
      
      gsap.set(contentWrapper, {
        y: 0
      });
      
      // Create hover enter animation
      card.addEventListener('mouseenter', () => {
        gsap.to(overlay, { 
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          opacity: 1,
          duration: 0.3 
        });
        
        // First show the description
        gsap.to(description, { 
          opacity: 1,
          height: 'auto',
          duration: 0.3,
          ease: 'power2.out'
        });
        
        // Then move both title and description up together
        gsap.to(contentWrapper, {
          y: -20,
          duration: 0.4,
          delay: 0.1,
          ease: 'power2.out'
        });
      });
      
      // Create hover leave animation
      card.addEventListener('mouseleave', () => {
        gsap.to(overlay, { 
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          opacity: 0.3,
          duration: 0.3 
        });
        
        
        // First move the content wrapper back down
        gsap.to(contentWrapper, {
          y: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
        
        // Then hide the description
        gsap.to(description, { 
          opacity: 0,
          height: 0,
          duration: 0.3,
          delay: 0.1
        });
      });
    });
  };
  
  // Initialize animations after the component mounts or tab changes
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      initCardAnimation();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-12">
          <div 
            className={`cursor-pointer py-4 px-8 font-semibold text-xl ${activeTab === 'services' ? 'text-[#00283b] border-b-2 border-[#00283b]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('services')}
          >
            Services
          </div>
          <div 
            className={`cursor-pointer py-4 px-8 font-semibold text-xl ${activeTab === 'tech' ? 'text-[#00283b] border-b-2 border-[#00283b]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('tech')}
          >
            Tech stack
          </div>
        </div>

        {/* Services Content */}
        {activeTab === 'services' && (
          <div className="w-full">
            {/* First Row - Content on left, 2 cards on right, adjusted to match second row */}
            <div className="flex flex-col lg:flex-row mb-6">
              {/* Left side content - width adjusted to match size of 2 cards from second row */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold text-[#00283b] mb-6">SOFTWARE DEVELOPMENT SERVICES</h2>
                <p className="text-gray-700">
                  We offer a wide range of development services to meet the unique needs of our clients. 
                  Our dedicated development team delivers high-quality software solutions that exceed your expectations. 
                  We're passionate about helping businesses succeed and believe that the right software can make a world of difference.
                </p>
              </div>
              
              {/* Right side - first 2 cards, width adjusted to match second row cards */}
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0, 1].map((index) => (
                  <div key={index} className="card-item relative rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src={services[index].image} 
                      alt={services[index].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                      <div className="content-wrapper p-6">
                        <a href={services[index].link} className="card-title text-white text-xl font-bold block mb-2 hover:underline">
                          {services[index].title}
                        </a>
                        <div className="card-description text-white text-sm">
                          {services[index].description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second Row - 4 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[2, 3, 4, 5].map((index) => (
                <div key={index} className="card-item relative rounded-lg overflow-hidden shadow-md h-64">
                  <img 
                    src={services[index].image} 
                    alt={services[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                    <div className="content-wrapper p-6">
                      <a href={services[index].link} className="card-title text-white text-xl font-bold block mb-2 hover:underline">
                        {services[index].title}
                      </a>
                      <div className="card-description text-white text-sm">
                        {services[index].description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third Row - 2 wide cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[6, 7].map((index) => (
                <div key={index} className="card-item relative rounded-lg overflow-hidden shadow-md h-64">
                  <img 
                    src={services[index].image} 
                    alt={services[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                    <div className="content-wrapper p-6">
                      <a href={services[index].link} className="card-title text-white text-xl font-bold block mb-2 hover:underline">
                        {services[index].title}
                      </a>
                      <div className="card-description text-white text-sm">
                        {services[index].description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Content */}
        {activeTab === 'tech' && (
          <div className="w-full">
            {/* First Row - Content on left, 2 cards on right */}
            <div className="flex flex-col lg:flex-row mb-6">
              {/* Left side content */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold text-[#00283b] mb-6">THE TECHNOLOGY PLATFORMS WE USE</h2>
                <p className="text-gray-700">
                  We build robust solutions aligned with your client's business goals, using any tech stack you need. 
                  Our tech-agnostic experts speak every language (Python, React, and more!) and embrace cutting-edge tech to keep you ahead. 
                  From ideation to launch, we handle it all, saving you time and hassle.
                </p>
              </div>
              
              {/* Right side - first 2 cards */}
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0, 1].map((index) => (
                  <div key={index} className="card-item relative rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src={techStack[index].image} 
                      alt={techStack[index].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                      <div className="content-wrapper p-6">
                        <a href={techStack[index].link} className="card-title text-white text-xl font-bold block mb-2 hover:underline">
                          {techStack[index].title}
                        </a>
                        <div className="card-description text-white text-sm">
                          {techStack[index].description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second Row - 4 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[2, 3, 4, 5].map((index) => (
                <div key={index} className="card-item relative rounded-lg overflow-hidden shadow-md h-64">
                  <img 
                    src={techStack[index].image} 
                    alt={techStack[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                    <div className="content-wrapper p-6">
                      <a href={techStack[index].link} className="card-title text-white text-xl font-bold block mb-2 hover:underline">
                        {techStack[index].title}
                      </a>
                      <div className="card-description text-white text-sm">
                        {techStack[index].description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third Row - 2 wide cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[6, 7].map((index) => (
                <div key={index} className="card-item relative rounded-lg overflow-hidden shadow-md h-64">
                  <img 
                    src={techStack[index].image} 
                    alt={techStack[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
                    <div className="content-wrapper p-6">
                      <a href={techStack[index].link} className="card-title text-white text-xl font-bold block mb-2 hover:underline">
                        {techStack[index].title}
                      </a>
                      <div className="card-description text-white text-sm">
                        {techStack[index].description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; 

export default ServiceTech;