import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

const BlogPostsCarousel = () => {
  const sliderRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      image: 'https://inoxoft.com/wp-content/uploads/2024/10/cover-2-scaled.jpg',
      title: "Implementing DevOps Outsourcing Team into Your Workflow: Benefits, Steps, and Best Practices",
      tags: ["Outsourcing"],
      readTime: "8 min read",
      date: "Oct 21 2024"
    },
    {
      id: 2,
      image: 'https://inoxoft.com/wp-content/uploads/2024/10/cover-1-1-1-scaled.jpg',
      title: "How to Outsource Machine Learning Development Successfully?",
      tags: ["AI & ML", "Outsourcing"],
      readTime: "8 min read",
      date: "Oct 8 2024"
    },
    {
      id: 3,
      image: 'https://inoxoft.com/wp-content/uploads/2024/05/unnamed-9-1.jpg',
      title: "Top 10 React.js Development Companies in the UK",
      tags: ["Outsourcing", "Software development"],
      readTime: "8 min read",
      date: "Jul 4 2024"
    },
    {
      id: 4,
      image: 'https://inoxoft.com/wp-content/uploads/2021/01/cover-18-min.jpg',
      title: "React vs Vue: which technology to choose this year?",
      tags: ["Software development", "Tools & Technologies"],
      readTime: "8 min read",
      date: "Nov 27 2024"
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
          <h2 className="text-2xl font-bold text-blue-900 ml-4">POSTS IN THE BLOG</h2>
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
                  <a href="#" className="block">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>
                <div className="p-5">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.tags.map((tag, index) => (
                      <React.Fragment key={index}>
                        <span className="hover:text-blue-600 cursor-pointer">{tag}</span>
                        {index < post.tags.length - 1 && <span className="mx-1">∙</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <h3 className="font-medium mb-3">
                    <a href="#" className="text-blue-900 hover:text-blue-600 line-clamp-2">
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

export default BlogPostsCarousel;