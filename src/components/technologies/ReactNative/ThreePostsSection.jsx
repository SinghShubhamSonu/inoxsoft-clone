import React, { useState } from 'react';

const ThreePostsSection = () => {
  const posts = [
    {
      title: "Delegate the whole process to professionals",
      description: "Want to develop a new product but have no prior experience in software development? Provide us a vision, business need, and accept our work on an iterative basis.",
      link: "/service/product-development-services/",
      linkText: "PRODUCT DEVELOPMENT"
    },
    {
      title: "Extend your tech team with our top-notch talents",
      description: "Let Inoxoft seamlessly integrate with your existing team to provide you with the required expertise. Achieve your business objectives faster, scaling up or down per need.",
      link: "/service/it-staff-augmentation-services/",
      linkText: "TEAM EXTENSION"
    },
    {
      title: "Scale up with a professional team",
      description: "Stay engaged in the development of your product: create, view and deliver side-by-side with a team of experienced people.",
      link: "/service/dedicated-development-team/",
      linkText: "DEDICATED TEAM"
    }
  ];

  // Using hover states for individual cards
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {posts.map((post, index) => (
            <a 
              key={index}
              href={post.link}
              className="flex-1 rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-[#003047] mb-10">
                    {post.title.includes('Scale up with') ? (
                      <>Scale up with <br />a professional team</>
                    ) : (
                      post.title
                    )}
                  </h3>
                  <p className="text-[#5a6f79] mb-10 leading-relaxed text-lg">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center text-[#00283B] font-medium text-lg group">
                  <span>{post.linkText}</span>
                  <div className="ml-2 flex items-center overflow-hidden">
                    {/* First arrow (always visible) */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="transition-all duration-300"
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    
                    {/* Second arrow (gray, hidden by default) */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#8A9CA5" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`transition-all duration-300 -ml-3 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'}`}
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    
                    {/* Third arrow (hidden by default) */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`transition-all duration-300 -ml-3 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'}`}
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePostsSection;