import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

const NodeBlog = () => {
  const sliderRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/10/cover-2-scaled.jpg.webp',
      title: "Implementing DevOps Outsourcing Team into Your Workflow: Benefits, Steps, and Best Practices",
      tags: ["Outsourcing"],
      readTime: "8 min read",
      date: "Oct 18 2024",
      link: "https://inoxoft.com/blog/3-best-practices-of-implementing-devops-outsourcing-team-into-your-workflow/"
    },
    {
      id: 2,
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/08/Top-Companies-That-Use-Node.js-and-Why-They-Choose-It-1-scaled.jpg.webp',
      title: "Top Companies That Use Node.js and Why They Choose It",
      tags: ["Tools & Technologies"],
      readTime: "8 min read",
      date: "Aug 9 2024",
      link: "https://inoxoft.com/blog/which-companies-use-nodejs-and-why-they-do-that/"
    },
    {
      id: 3,
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/10/cover-1-1-1-scaled.jpg.webp',
      title: "How to Outsource Machine Learning Development Successfully?",
      tags: ["AI & ML", "Outsourcing"],
      readTime: "8 min read",
      date: "Sep 22 2024",
      link: "https://inoxoft.com/blog/how-to-outsource-machine-learning-development-successfully/"
    },
    {
      id: 4,
      image: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/06/image-13.jpg.webp',
      title: "Top App Development Companies in Chicago",
      tags: ["Outsourcing", "Software development"],
      readTime: "8 min read",
      date: "Jun 25 2024",
      link: "https://inoxoft.com/blog/top-app-development-companies-in-chicago/"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#00283b] ml-4 text-start w-full">POSTS IN THE BLOG</h2>
          <div className="flex space-x-2 mr-4">
            <button 
              onClick={() => sliderRef.current.slickPrev()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => sliderRef.current.slickNext()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {blogPosts.map((post) => (
            <div key={post.id} className="px-3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                <div className="overflow-hidden">
                  <a href={post.link} className="block">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      width="355"
                      height="130"
                    />
                  </a>
                </div>
                <div className="p-5">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.tags.map((tag, index) => (
                      <React.Fragment key={index}>
                        <a href="#" className="hover:text-[#00283b] cursor-pointer">{tag}</a>
                        {index < post.tags.length - 1 && <span className="mx-1">∙</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <h3 className="font-medium mb-3">
                    <a href={post.link} className="text-[#00283b] hover:text-[#00283b] line-clamp-2">
                      {post.title}
                    </a>
                  </h3>
                  <div className="text-xs text-gray-400 flex items-center">
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NodeBlog;