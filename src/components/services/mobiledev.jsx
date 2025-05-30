import React from "react";



const services = [
    {
      title: "Moblie Application Development",
      img: "https://inoxoft.com/wp-content/uploads/2024/04/Card_element.svg",
      link: "",
      description:
        "Codethics Solutions is an outsourcing software company with experience in mobile app development services.",
    },
    {
      title: "Prototype and MVP Development",
      img: "https://inoxoft.com/wp-content/uploads/2024/04/MVP.svg",
      link: "",
      description:
        "Begin your mobile app journey with prototyping and an MVP to validate your concept before committing to a full-scale implementation.",
    },
    {
      title: "Mobile Web Optimization",
      img: "https://inoxoft.com/wp-content/uploads/2024/03/integration-1.svg",
      link: "",
      description:
        "Ensure accessibility on the go with our mobile web development services. We optimize your web application to deliver an excellent experience across various mobile devices.",
    },
    {
      title: "Cross-Platform Compatibility",
      img: "https://inoxoft.com/wp-content/uploads/2024/04/Group-1.svg",
      link: "",
      description: "Reach a wider audience with cross-platform compatibility for your app: we offer a hassle-free deployment across various operating systems and devices.",
    },
    {
      title: "UI/UX design",
      img: "https://inoxoft.com/wp-content/uploads/2023/05/ui-ux-design.svg.svg",
      link: "",
      description:
        "Our UI UX design company helps to support any business and gives startups a chance to differentiate and earn the attention of investors",
    },
    {
      title: "Quality Assurance",
      img: "https://inoxoft.com/wp-content/uploads/2023/05/autom-testing.svg.svg",
      link: "",
      description:
        "We design custom solutions for different qa business goals. Starting with discussion and improvements of an idea, we aim to embody the client’s exact vision.",
    },
    {
      title: "Discovery phase",
      img: "https://inoxoft.com/wp-content/uploads/2019/10/disc-fase.svg",
      link: "",
      description:
        "Implement your business idea consulting Codethics Solutions experts and you get the best solutions ever to satisfy your target users’ needs.",
    },
    {
        title: "IT System & Software Integration Services",
        img: "https://inoxoft.com/wp-content/uploads/2023/05/Card_element-8.svg",
        link: "",
        description:
          "Codethics Solutions is a software integration company that can help you integrate enterprise applications, data, and processes in the most efficient way.",
      },
  ];
  


const MobileDev = () => {
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
          MOBILE APP DEVELOPMENT <br /> SERVICES AND SOLUTIONS
            {/* Outsourcing Software <br /> Development Services */}
          </h1>
          <p className="mt-6 text-lg text-white max-w-2xl mx-auto">
          Our mobile app development company has certified developers to design and build custom solutions engineered for long-term success.
          </p>
          <button className="mt-8 px-8 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
            ESTIMATE YOUR MOBILE APP
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
    
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white text-center">
        {/* Shadow Layer */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative container mx-auto px-6" data-aos="fade-up">
          {/* Header */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-semibold">
            Request a free consultation and estimate from Codethics Solutions ASAP
            </p>
          </div>

          {/* Button */}
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Request a free consultation{" "}
            <i className="fa fa-angle-right ml-2"></i>
          </button>
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










      <section className="other-section-class relative">
      <div className="section-shadow absolute inset-0"></div>
      <div className="container relative z-10">
        

        <div className="joint-section grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="joint-section__left">
          <h2 className="text-3xl font-bold mb-6">Mobile Application Platforms</h2>
          </div>
          <div className="joint-section__right">
            <ul className="big-not-numbers-mini space-y-6">
              {[
                {
                  title: "Native Apps",
                  description:
                    "Codethics Solutions creates apps for a specific mobile operating system, such as iOS or Android, using platform-specific programming languages and development tools."
                },
                {
                  title: "Cross-Platform Apps",
                  description:
                    "Our team builds apps that can run on multiple platforms using frameworks like React Native or Flutter, allowing for faster development cycles and code reusability across different operating systems."
                },
                {
                  title: "Web Apps",
                  description:
                    "We develop web-based mobile applications, accessible through a mobile browser, to offer flexibility in deployment and accessibility across various devices."
                },
                {
                  title: "Hybrid Apps",
                  description:
                    "Combining elements of both native and web applications, our team develops hybrid apps using web technologies but packaged as native apps."
                }
              ].map((item, index) => (
                <li key={index} className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index !== 3 && <hr className="border-gray-300 my-4" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default MobileDev;
