// import React from "react";
// import { useEffect } from "react";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS import zaroori hai
// import { motion } from "framer-motion";

const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100, // Odd cards left se, even cards right se aaye
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, // Smooth animation
      },
    },
  };
const faqs = [
    {
      question: "Why would a company choose to outsource software development?",
      answer:
        "Outsourcing is an efficient working model for most businesses that want to develop software for several reasons. There is no point to recruit an in-house software development team to solve a specific business need. It requires a lot of effort, time, and costs to find, hire, and train the team. With a software project outsourcing company, you don’t have to invest resources in project management, setting up a workplace, or HR activities. All of it will be taken care of by the vendor.",
    },
    {
      question: "What are the benefits of working with a software outsourcing company?",
      answer: `
        Among the benefits of outsourcing software development services is the ability to quickly attract specialists from any industry and the ability to optimize costs. And also:
        - Access to a larger talent pool
        - Ability to pick the most efficient offshore dev team
        - Time to concentrate only on core processes
        - A choice between hiring the whole development team or separate specialists
        - Cost optimization
        - Reduction of risks.
      `,
    },
    {
      question: "How does communication work with a software outsourcing company?",
      answer: `
        Communication in a software outsourcing company usually follows the following approach:
        1. Both parties engage in detailed discussions to define project requirements, goals, and expectations.
        2. Teams establish communication channels: e.g., emails, video conferences, instant messaging platforms.
        3. Weekly or bi-weekly status meetings to discuss progress and make decisions.
        4. Detailed documentation, including project requirements and progress reports, is shared and updated regularly.
      `,
    },
  ];

const technologies = [
  {
    title: "Golang Development Company",
    img: "https://inoxoft.com/wp-content/uploads/2023/08/Frame-10643.png",
    link: "https://inoxoft.com/technologies/golang-development-company/",
  },
  {
    title: "Flutter App Development",
    img: "https://inoxoft.com/wp-content/uploads/2020/03/flutter-ico.png",
    link: "https://inoxoft.com/technologies/flutter/",
  },
  {
    title: "Python (Django)",
    img: "https://inoxoft.com/wp-content/uploads/2020/03/python-ico.png",
    link: "https://inoxoft.com/technologies/python-django/",
  },
  {
    title: ".NET Development",
    img: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-ico.png.webp.svg",
    link: "https://inoxoft.com/technologies/net-core/",
  },
  {
    title: "Node.js",
    img: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-ico.png.webp-1.svg",
    link: "https://inoxoft.com/technologies/node-js/",
  },
  {
    title: "React JS Outsourcing",
    img: "https://inoxoft.com/wp-content/uploads/2021/11/react-js-min.png",
    link: "https://inoxoft.com/technologies/reactjs/",
  },
  {
    title: "React Native App Development",
    img: "https://inoxoft.com/wp-content/uploads/2021/11/react-native-min.png",
    link: "https://inoxoft.com/technologies/react-native/",
  },
  {
    title: "Custom iOS App Development",
    img: "https://inoxoft.com/wp-content/uploads/2021/11/ios-min.png",
    link: "https://inoxoft.com/technologies/ios/",
  },
  {
    title: "Custom Android Application Development",
    img: "https://inoxoft.com/wp-content/uploads/2020/03/android-ico.png",
    link: "https://inoxoft.com/technologies/android/",
  },
];

const cardData = [
  {
    title: "Agile & Adaptable",
    text: "We embrace agile methodology, breaking down development into short sprints. This fosters flexibility, allowing us to quickly incorporate feedback and deliver the perfect solution for your unique needs.",
    img: "https://imgs.search.brave.com/kV9fjUZdGeXmaFFcxatsEgA2Ti0dWa50h4zvz99D7vw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFyLXZpZXctcHJv/Z3JhbW1lci13b3Jr/aW5nLWFsbC1uaWdo/dC1sb25nXzEwOTgt/MTg2OTcuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA",
},
  {
    title: "Dedicated Project Management",
    text: "Each client receives a dedicated project manager – your central contact point. They ensure your project stays on track, within budget, and exceeding expectations.",
    img: "https://imgs.search.brave.com/MHitvsS0q-QNP4mjdcGsBxwIp-eTUqs2IreZGvvH9c0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yZW1vdGUtaXQt/d29ya2VyLXRlc3Rp/bmctZGVidWdnaW5n/LWNvZGUtc29mdHdh/cmUtYXBwbGljYXRp/b25zLWNsb3NlLXVw/XzQ4MjI1Ny0xMDA4/MTAuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
},
  {
    title: "Prioritizing Client Success",
    text: "Your satisfaction is paramount. Our impressive 9/10 client satisfaction score reflects our commitment to clear communication, exceeding service standards, and delivering clean, functional code.",
    img: "https://imgs.search.brave.com/D36wyyN_FUIyH8SynXaAA9D73Lw9y44iksmt5kIc7-8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/dG1sLWNzcy1jb2xs/YWdlLWNvbmNlcHRf/MjMtMjE1MDA2MTk1/NS5qcGc_c2VtdD1h/aXNfaHlicmlk",
},
  {
    title: "A Team of Experts",
    text: "Our powerhouse of experience ensures you’ll be collaborating with seasoned professionals capable of tackling even the most intricate challenges.",
    img: "https://imgs.search.brave.com/G3JtAD7G-6qqBUME5_R20aRI4U5nvAbPAJSw_ipOwO0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cm9ncmFtbWluZy1i/YWNrZ3JvdW5kLXdp/dGgtcGVyc29uLXdv/cmtpbmctd2l0aC1j/b2Rlcy1jb21wdXRl/cl8yMy0yMTUwMDEw/MTE1LmpwZz9zZW10/PWFpc19oeWJyaWQ",
},
  {
    title: "Proactive Risk Management",
    text: "With 8+ years of experience, Inoxoft implements a comprehensive risk management process for all our IT outsourcing solutions. We proactively identify and address potential risks, ensuring your project stays on course for success.",
    img: "https://imgs.search.brave.com/UlVxeaSLvoWDSiIlSVTuEuH2JZw0C1k6uMdNUqNhE2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1pbWFn/ZS1wcm9ncmFtZXIt/d29ya2luZy1oaXMt/ZGVzay1vZmZpY2Vf/MTA5OC0xODcwNy5q/cGc_c2VtdD1haXNf/aHlicmlk",
},
];

const services = [
  {
    title: "Software product discovery",
    img: "https://inoxoft.com/wp-content/uploads/2024/04/Card_element.svg",
    link: "",
    description:
      "Сonsult Inoxoft experts and get the best solutions to satisfy your target users’ needs.",
  },
  {
    title: "Web Development",
    img: "https://inoxoft.com/wp-content/uploads/2024/04/MVP.svg",
    link: "",
    description:
      "Develop from scratch or upgrade scalable, fully-functional web solutions.",
  },
  {
    title: "Mobile Application Development",
    img: "https://inoxoft.com/wp-content/uploads/2024/03/integration-1.svg",
    link: "",
    description:
      "Transform promising ideas into industry-specific first-class mobile applications.",
  },
  {
    title: "UI/UX Design",
    img: "https://inoxoft.com/wp-content/uploads/2024/04/Group-1.svg",
    link: "",
    description: "Succeed with great user experience and persuasive design.",
  },
  {
    title: "Software Testing",
    img: "https://inoxoft.com/wp-content/uploads/2023/05/ui-ux-design.svg.svg",
    link: "",
    description:
      "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
  },
  {
    title: "Software Integration",
    img: "https://inoxoft.com/wp-content/uploads/2023/05/autom-testing.svg.svg",
    link: "",
    description:
      "Integrate enterprise apps, data, and processes in the most efficient way.",
  },
  {
    title: "Data Analytics",
    img: "https://inoxoft.com/wp-content/uploads/2019/10/disc-fase.svg",
    link: "",
    description:
      "Apply advanced analytics and data-driven decisions to leverage the quality of processes.",
  },
];

const SoftwareDevelopment = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  useEffect(() => {
    AOS.init({
      duration: 1050, // Global animation speed (ye 100 mat karo!)
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const collaborationData = [
    {
      title: "PRODUCT DEVELOPMENT",
      description:
        "Want to develop a new product but has no experience in software development? Provide us a need, vision, and get a comprehensive business solution.",
      link: "https://inoxoft.com/service/product-development-services/",
    },
    {
      title: "TEAM EXTENSION",
      description:
        "Already defined requirements, budget, and time-frames? Hire our software engineers and we’ll realize your vision planned in advance.",
      link: "https://inoxoft.com/service/it-staff-augmentation-services/",
    },
    {
      title: "DEDICATED TEAM",
      description:
        "Stay engaged in the development of your product: create, view, and deliver side-by-side with a team of experienced people.",
      link: "https://inoxoft.com/service/dedicated-development-team/",
    },
  ];

  return (
    <>
      <section
        className="relative flex items-center justify-center bg-cover bg-center min-h-screen pt-20"
        style={{
          backgroundImage:
            "url('https://inoxoft.com/wp-content/uploads/2023/06/image-40-17.jpg')",
        }}
      >
        <div className="container mx-auto p-12 text-center max-w-5xl">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Outsourcing Software <br /> Development Services
          </h1>
          <p className="mt-6 text-lg text-white max-w-2xl mx-auto">
            Need access to a world-class software development team without the
            headaches of in-house hiring? Codethics Solutions’s outsourcing software
            development services can be your game-changer. Let our outsourcing
            expertise turn your software vision into reality.
          </p>
          <button className="mt-8 px-8 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
            START YOUR OUTSOURCED PROJECT WITH US
          </button>

          <div className="mt-12 flex justify-center space-x-12 text-white text-lg">
            <div className="text-center">
              <div className="text-4xl font-extrabold">170+</div>
              <div>Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold">10+</div>
              <div>Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold">200+</div>
              <div>Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold">230+</div>
              <div>Projects</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            SOFTWARE OUTSOURCING SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up" // 🔥 Animation yaha add kiya
                data-aos-delay={index * 100} // 🔥 Thoda delay har card me (smooth effect)
                className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-14 h-14 mb-4"
                  />
                  <p className="text-lg font-semibold">{service.title}</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 text-white p-6 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center">
                  <a
                    href={service.link}
                    className="text-lg font-semibold underline"
                  >
                    {service.title}
                  </a>
                  <p className="mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            WHY CONSIDER INOXOFT FOR SOFTWARE DEVELOPMENT SERVICES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}

      {/* <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              WHY CONSIDER INOXOFT FOR SOFTWARE DEVELOPMENT SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                data-aos="flip-right" 
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


<section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            WHY CONSIDER INOXOFT FOR SOFTWARE DEVELOPMENT SERVICES
          </h2>
        </div>

        {/* Zig-Zag Layout */}
        <div className="flex flex-col gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6">
              {/* Agar odd index hai to card left aur image right */}
              {index % 2 === 0 ? (
                <>
                  <AnimatedCard title={card.title} text={card.text} direction="left" />
                  <AnimatedImage imgSrc={card.img} direction="right" />
                </>
              ) : (
                <>
                  <AnimatedImage imgSrc={card.img} direction="left" />
                  <AnimatedCard title={card.title} text={card.text} direction="right" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white text-center">
        {/* Shadow Layer */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative container mx-auto px-6" data-aos="fade-up">
          {/* Header */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-semibold">
              Request a free one-hour consultation and get an accurate estimate
              from the Codethics Solutions team ASAP
            </p>
          </div>

          {/* Button */}
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Request a free consultation{" "}
            <i className="fa fa-angle-right ml-2"></i>
          </button>
        </div>
      </section>

      <section className="bg-blue-500 py-16 text-white text-center relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Technologies we work with</h2>
          <p className="mb-8 text-lg">
            Improve your business outcomes with our tech expertise and
            cutting-edge technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-20 h-20 mb-4"
                />
                <p className="text-blue-600 font-semibold">{tech.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
          OUR COLLABORATION MODELS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collaborationData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>



    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};



function AnimatedCard({ title, text, direction }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
    return (
      <motion.div
        ref={ref}
        className="bg-white shadow-lg rounded-lg p-6        w-full md:w-1/2 min-h-64 flex items-center flex-col justify-center"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={direction}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </motion.div>
    );
  }
  
  function AnimatedImage({ imgSrc, direction }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
    return (
      <motion.div
        ref={ref}
        className="w-full md:w-1/2 h-64"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={direction}
      >
        <img src={imgSrc} alt="Illustration" className="w-full h-full object-cover rounded-lg shadow-md" />
      </motion.div>
    );
  }
  
export default SoftwareDevelopment;
