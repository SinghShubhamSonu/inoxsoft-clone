import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClient = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  
  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      comment: '"Their most impressive quality is the number of hours they put into a project."',
      author: 'Russell Thomas',
      position: 'CEO, Maxfin Partners Limited',
      photo: "https://inoxoft.com/wp-content/uploads/2023/03/msg775698003-148785.webp",
    },
    {
      comment: 'They deliver what they promise, and I can\'t say that about other companies I\'ve worked with.',
      author: 'Eran Harel',
      position: 'CTO of Bos-Dimex (NASDAQ:BOSC).',
      photo: "https://inoxoft.com/wp-content/uploads/2023/03/1516588974540.webp",
    },
    {
      comment: 'INOXOFT has consultants of all flavors so finishing the product was a smooth process.',
      author: 'Roman Alifanov',
      position: 'CTO, InsideOut AS',
      photo: "https://inoxoft.com/wp-content/uploads/2023/03/msg775698003-148815.webp",
    },
    {
      comment: 'I was really comfortable working with them.',
      author: 'George Artyomenko',
      position: 'Senior Manager, Bambuk Design Studio',
      photo: "https://inoxoft.com/wp-content/uploads/2023/03/1637424995749-_1_.webp",
    },
    {
      comment: 'Their responsiveness and helpfulness make them impressive, and they were really amazing to work with.',
      author: 'Alexandra Assouad',
      position: 'Founder, Chirpi',
      photo: "https://inoxoft.com/wp-content/uploads/2023/03/1637424995749-_1_.webp",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="relative py-16 bg-gray-100">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4">
        {/* Added heading and text section */}
        <div className="text-start mb-16">
          <h1 className="text-4xl font-bold mb-6 text-[#173753]">OUR CLIENTS</h1>
          <p className="max-w-3xl  text-lg text-black">
            Inoxoft provides the best cost-effective custom website programming services. 
            We offer top project management support and cooperate with our clients to ensure 
            the product requirements are 100% met. Thus, our clients are glad to seek 
            Inoxoft's expertise in web development services more than once.
          </p>
        </div>
        
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="cursor-grab active:cursor-grabbing">
            {testimonials.map((testimonial, index) => (
              <div className="px-2 pb-16" key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
                  <div className="flex mb-6">
                    <i className="fas fa-quote-left fa-3x pr-5" style={{color: '#4a515e', opacity: '0.3'}}></i> 
                    <div className='text-[#00283b] text-lg mt-2'>
                      {testimonial.comment}
                    </div>
                  </div>
                  <div className="mt-auto flex flex-col md:flex-row items-center pl-6 gap-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.author}
                      width="70"
                      height="70"
                      className="rounded-full object-cover"
                    />
                    <div className="text-center md:text-left">
                      <div className="font-bold text-lg text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-[-70px] right-10 flex items-center space-x-3">
            <button 
              onClick={() => sliderRef.current.slickPrev()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              onClick={() => sliderRef.current.slickNext()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -35px;
        }
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .slick-slide > div {
          width: 100%;
          height: 100%;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default OurClient;