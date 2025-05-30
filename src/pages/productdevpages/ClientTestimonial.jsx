import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientTestimonial = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(2);
  
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

  const videoTestimonials = [
    {
      id: 1,
      youtubeUrl: "https://www.youtube.com/watch?v=B6ew8UH9Hzs",
      imageUrl: "https://inoxoft.com/wp-content/uploads/2025/02/Group-10387.png",
      alt: "Thumbnail 1"
    },
    {
      id: 2,
      youtubeUrl: "https://www.youtube.com/watch?v=G-dwVUA_veM",
      imageUrl: "https://inoxoft.com/wp-content/uploads/2025/02/Group-10386.png",
      alt: "Thumbnail 2"
    },
    {
      id: 3,
      youtubeUrl: "https://www.youtube.com/watch?v=mbYcVwRs7uI",
      imageUrl: "https://inoxoft.com/wp-content/uploads/2025/02/Group-10387-1.png",
      alt: "Thumbnail 3"
    },
    {
      id: 4,
      youtubeUrl: "https://www.youtube.com/watch?v=vamfk2CTN4U",
      imageUrl: "https://inoxoft.com/wp-content/uploads/2025/02/Group-10386-1.png",
      alt: "Thumbnail 4"
    },
    {
      id: 5,
      youtubeUrl: "https://www.youtube.com/watch?v=E2m4eMvBpxk",
      imageUrl: "https://inoxoft.com/wp-content/uploads/2025/02/Group-10388@2x.png",
      alt: "Thumbnail 5"
    }
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
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
    <section className="other-section-class relative pb-0 h-full pt-20">
      <div className="section-shadow absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]"></div>
      
      <div className="container mx-auto px-4 relative gsp_dc">
        <div className="other-section-header text-start mb-8">
          <h2 className="text-4xl font-bold">CLIENT TESTIMONIALS</h2>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="video-reviews-slider">
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="item px-2">
                <a
                  href={testimonial.youtubeUrl}
                  className="video-popup block relative"
                  data-wpel-link="external"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <img
                    width="1290"
                    height="726"
                    src={testimonial.imageUrl}
                    alt={testimonial.alt}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                    data-lazy-src={testimonial.imageUrl}
                  />
                </a>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons - Updated to match reference */}
          <div className="absolute top-[-70px] right-10 flex items-center space-x-3">
            <button 
              onClick={() => sliderRef.current.slickPrev()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => sliderRef.current.slickNext()} 
              className="flex items-center justify-center border border-black rounded-full w-12 h-12 hover:cursor-pointer"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="gsp_post_data hidden" 
          data-post_type="services" 
          data-cat="" 
          data-modified="120" 
          data-title="Product Development Services" 
          data-home="https://inoxoft.com">
        </div>
      </div>

      {/* <style jsx global>{`
        .slick-slide {
          padding: 0 15px;
        }
        .slick-list {
          margin: 0 -15px;
        }
        .slick-dots {
          bottom: -35px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #cbd5e0;
        }
        .slick-dots li.slick-active button:before {
          color: #4a5568;
        }
        .video-reviews-slider .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style> */}
    </section>
  );
};

export default ClientTestimonial;