import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Kate",
    position: "Senior Project Manager",
    quote:
      "I value the possibility to grow together with smart and like-minded people. Working in such teams brings me motivation, great results and constant feeling of synergy that unite us.",
    avatar: "https://inoxoft.com/wp-content/uploads/2023/08/quote-img-2.png",
  },
  {
    id: 2,
    name: "Valeria",
    position: "Senior UI/UX Designer",
    quote:
      "Flexibility in working processes and approaches. Each team member has possibility to contribute into project and solution, propose own ideas and they will be implemented.",
    avatar: "https://inoxoft.com/wp-content/uploads/2023/08/quote-img-3.png",
  },
  {
    id: 3,
    name: "Victor",
    position: "Tech Project Coordinator",
    quote:
      "The level of responsibility and trust I get here, boosts my professional growth and makes it possible to be involved into communication with product owners and impact the product-related decisions.",
    avatar: "https://inoxoft.com/wp-content/uploads/2023/08/quote-img-1.png",
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Centered Title */}
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            FEEDBACK FROM OUR PEOPLE
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 w-full max-w-2xl">
            <div className="flex flex-col h-full transition-all duration-300">
              <div className="mb-8 relative">
                <span className="text-7xl text-gray-200 leading-none absolute -top-4 left-0">"</span>
                <p className="text-gray-600 ml-6 relative z-10">
                  {activeTestimonial.quote}
                </p>
              </div>

              <div className="flex items-center mt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-slate-700">{activeTestimonial.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel buttons placed on top right */}
          <div className="absolute top-16 right-8 flex">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mx-2 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-slate-800" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mx-2 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-slate-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
