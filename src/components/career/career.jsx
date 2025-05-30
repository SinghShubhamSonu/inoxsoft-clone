import React from "react";
// import { motion } from "framer-motion";
import { useState } from 'react';
import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";




const cards = [
  {
    name: 'Natalia',
    role: 'Recruiter',
    image: 'https://inoxoft.com/wp-content/uploads/2023/09/career-person-1.jpg',
    email: 'nataliia.yarynich@inoxoft.com',
    telegram: 'https://t.me/Nataliia2209',
    linkedin: 'https://www.linkedin.com/in/nataliayarynich/'
  },
  {
    name: 'Khrystyna',
    role: 'Recruiter',
    image: 'https://inoxoft.com/wp-content/uploads/2023/09/career-person-2.jpg',
    email: 'khrystyna.bahlai@inoxoft.com',
    telegram: 'https://t.me/khrysty_inoxoft',
    linkedin: 'https://www.linkedin.com/in/khrystyna-bahlai-314a68188/'
  },
  {
    name: 'Mykola',
    role: 'Recruiter',
    image: 'https://inoxoft.com/wp-content/uploads/2023/09/career-person-3.jpg',
    email: 'mykola.motrya@inoxoft.com',
    telegram: 'https://t.me/thisRecruiter',
    linkedin: 'https://www.linkedin.com/in/mykola-motrya/'
  }
];


const steps = [
  {
    title: "CV Application",
    description:
      "Ready to leap into new opportunities? Submit your CV through our Contact Form, E-mail, or LinkedIn, and let the magic begin. Our expert recruiters will review your application, aligning it with our exciting job opportunities. Once approved, we’ll schedule a dynamic Google Meet interview within 3 business days, tailored to your schedule. Your time matters to us, and we’re committed to a seamless experience.",
    image: "https://inoxoft.com/wp-content/uploads/2023/09/vac-img-1.jpg",
  },
  {
    title: "Welcome Interview",
    description:
      "During the Welcome Interview, you’ll connect with our recruiter on a personal level to share your story and learn about our company, culture, and the opportunity you’re interested in. It’s all about you, your skills, and values. This interview sets the stage for a candidate-centered experience, focusing on your potential and fit with our organization.",
    image: "https://inoxoft.com/wp-content/uploads/2023/09/vac-img-2.jpg",
  },
  {
    title: "Tech Interview",
    description:
      "The Tech Interview is a crucial step where our tech experts assess your skills and knowledge. Be ready for discussions and practical exercises related to the role. We’ll evaluate your technical proficiency and fit for the position in our tech-driven environment. Show your passion for technology as we explore this exciting stage.",
    image: "https://inoxoft.com/wp-content/uploads/2023/09/vac-img-3.jpg",
  },
  {
    title: "Final (Hiring Manager) Interview",
    description:
      "The Final Interview, led by our hiring managers, is the ultimate step. Connect with key decision-makers, demonstrate your alignment with our vision and culture, and discuss your fit within the team. We’ll assess your overall suitability, contribution potential, and long-term growth.",
    image: "https://inoxoft.com/wp-content/uploads/2023/09/vac-img-4.jpg",
  },
  {
    title: "Job Offer",
    description:
      "Once the decision and feedback from our dedicated interviewers have been considered, our recruiter will promptly send you the offer. It will provide comprehensive information about the terms and conditions that will govern our partnership. Please sign the offer at your earliest convenience, allowing us to commence preparations for your exciting debut on our team.",
    image: "https://inoxoft.com/wp-content/uploads/2023/09/vac-img-5.jpg",
  },
];

const AnimatedButton = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block"
    >
      <span
        className="inline-flex items-center px-4 py-2 border border-blue-900 text-blue-900 rounded-full 
      overflow-hidden transition duration-300 hover:bg-blue-900 hover:text-white"
      >
        Read more →
      </span>
      <motion.div
        className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-900"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </a>
  );
};

const ContactForm = () => {


  

  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <section className="relative flex justify-center items-center bg-gray-100 min-h-screen">
        {/* Background Image */}
        <picture className="absolute w-full h-full left-0 top-0 z-0">
          <source
            media="(max-width: 1023px)"
            srcSet="https://inoxoft.com/wp-content/uploads/2023/08/join-us-top-img-mob.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="https://inoxoft.com/wp-content/uploads/2023/11/join-us-img.png"
          />
          <img
            className="w-full h-full object-cover"
            src="https://inoxoft.com/wp-content/uploads/2023/11/join-us-img.png"
            alt="banner image"
          />
        </picture>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 py-20 md:py-32 text-left max-w-5xl">
          <h1 className="text-5xl font-bold text-white md:text-6xl">Join us</h1>
          <p className="mt-6 text-xl md:text-2xl text-white">
            At Codethics Solutions, we believe in the power of people and the impact they
            can make. Join our passionate team and embark on a fulfilling career
            where your skills, ideas, and ambitions will thrive. Join us at
            Codethics Solutions and experience the excitement of a dynamic and supportive
            workplace that fuels your professional growth. Together, let's
            innovate, inspire, and create a brighter future in the world of
            technology. Your journey starts here.
          </p>
        </div>
      </section>

      <div className="flex justify-center items-center my-10 ">
      <div className="max-w-lg bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 p-8 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-extrabold text-blue-800 text-center tracking-wide">
          Java Developer
        </h2>
        <div className="flex items-center justify-center mt-3 text-lg text-gray-900">
          <img
            src="https://inoxoft.com/wp-content/themes/inoxoft/images/USA-flag.svg"
            alt="USA flag"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="font-medium">USA</span>
        </div>
        <p className="text-gray-600 mt-4 text-base text-center leading-relaxed">
          We are looking for a Java Developer to work on legacy code and modernize it.
          Key responsibilities include updating components to Java 11 and Spring Framework,
          optimizing the system, writing technical documentation, supporting AWS integration,
          and contributing to Docker containerization efforts.
        </p>
        <div className="mt-6 text-center">
          <a
            href="https://inoxoft.com/vacancies/java-developer/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-all group"
          >
            Read more
            <i className="fa fa-angle-right ml-2 transition-transform transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>      <div className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-14">
            Simple Steps to Join Our Team
          </h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start"
              >
                <div className="md:w-1/2 text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900 flex items-center">
                    <span className="text-3xl font-bold mr-2">
                      {index + 1}.
                    </span>{" "}
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full max-w-sm rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#00283b] uppercase tracking-wide">
            Candidate's Experience
          </h2>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-[#5a6f79] leading-relaxed mb-6">
            At Codethics Solutions, we strive to create an open and comfortable atmosphere during our interviews.
            We understand the importance of flexibility, so we’ll work with you to find the most
            convenient time and method for the interview, tailored to your schedule and location.
          </p>
          <p className="text-lg md:text-xl text-[#5a6f79] leading-relaxed">
            After the interview, you can expect to receive feedback on your technical and soft skills
            within 3 business days. We value your time and want to ensure a timely and transparent
            communication process.
          </p>
        </div>
      </div>
    </section>




      <section className="bg-cover bg-left-center bg-no-repeat py-20">
      <div className="container mx-auto px-4">
        <div className="shadow-cards-section">
          <div className="flex flex-wrap justify-center -m-4">
            <div className="w-full md:w-1/2 p-4">
              <div className="flex flex-col p-8 shadow-lg rounded-lg h-full">
                <h3 className="font-black text-2xl text-[#1a5c8d]">benefits</h3>
                <p className="text-[#5a6f79] mt-5 mb-12 text-lg">
                  Explore the opportunities and ways to join our team
                </p>
                <div className="mt-auto">
                  <a
                    href="/benefits/"
                    className="block relative overflow-hidden text-lg text-[#00283b] border border-[#00283b] rounded-full py-3 px-10 w-fit min-w-[139px] transition-all hover:text-white hover:border-white"
                  >
                    Read more
                    <i className="fa fa-angle-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>










    <div className="relative w-full max-w-lg mx-auto p-4">
      <div className="overflow-hidden rounded-lg shadow-lg relative h-64 flex justify-center items-center bg-gray-100">
        <div className="absolute top-2 left-2 flex gap-2 z-10 bg-gray-900 bg-opacity-75 p-2 rounded-lg shadow-md">
          <button
            onClick={prevCard}
            className="bg-white text-gray-900 p-2 rounded-full shadow-md hover:bg-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextCard}
            className="bg-white text-gray-900 p-2 rounded-full shadow-md hover:bg-gray-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cards[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex flex-col items-center justify-center bg-white p-4 text-center rounded-lg shadow-xl"
          >
            <img
              src={cards[index].image}
              alt={cards[index].title}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{cards[index].title}</h2>
            <p className="text-gray-600">{cards[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
