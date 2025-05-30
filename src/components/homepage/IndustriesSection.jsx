import React, { useState } from "react";

const industries = [
  {
    title: "Real Estate",
    description:
      "Inoxoft, a software development company, empowers real estate and construction businesses to thrive through custom software solutions. We have completed numerous projects that have helped companies streamline their business processes, enhance operational efficiency, and improve customer service.",
    links: [
      { name: "HOA Management Software Development", href: "#" },
      { name: "MLS Software Development Services for Real Estate", href: "#" },
      { name: "IDX Software Development and Integration", href: "#" },
      { name: "Property Management Software Development Company", href: "#" },
    ],
    icon: "https://inoxoft.com/wp-content/uploads/2024/07/logistic-1.svg",
    activeIcon:
      "https://inoxoft.com/wp-content/uploads/2024/07/logistic_hovered.svg",
  },
  {
    title: "Healthcare",
    description:
      "Transform patient experiences with custom software and mobile apps. Inoxoft crafts tailored solutions driven by high-skilled professionals and deep domain expertise.",
    links: [
      { name: "Telemedicine App Development", href: "#" },
      { name: "mHealth App Development Services", href: "#" },
      { name: "Medical Device Software Development Services", href: "#" },
      { name: "Healthcare Consulting", href: "#" },
    ],
    icon: "https://inoxoft.com/wp-content/uploads/2024/07/healthcare.svg",
    activeIcon:
      "https://inoxoft.com/wp-content/uploads/2024/07/healthcare_hovered.svg",
  },
  {
    title: "Education",
    description:
      "By embracing e-learning, corporations can reduce project costs significantly. App development provides a cost-effective way to meet the growing demand for flexible learning options.",
    links: [
      { name: "E-learning Software Development", href: "#" },
      { name: "LMS Development", href: "#" },
      { name: "School Management Software Development", href: "#" },
    ],
    icon: "https://inoxoft.com/wp-content/uploads/2024/07/education.svg",
    activeIcon:
      "https://inoxoft.com/wp-content/uploads/2024/07/education_hovered.svg",
  },
  {
    title: "Finance",
    description:
      "We provide expertise in crafting secure software applications that enhance efficiency, reliability, and user experience. Our focus on data security ensures valuable insights for informed decisions.",
    links: [
      { name: "Banking Software Development Services", href: "#" },
      { name: "Trading Software Development Services", href: "#" },
      { name: "Loan Processing Automation Platform Development", href: "#" },
      { name: "Lending Software Development Services", href: "#" },
    ],
    icon: "https://inoxoft.com/wp-content/uploads/2024/07/finance.svg",
    activeIcon:
      "https://inoxoft.com/wp-content/uploads/2024/07/finance_hovered.svg",
  },
  {
    title: "Logistic",
    description:
      "Inoxoft creates custom logistics software solutions to help with real-time fleet management, vehicle tracking, barcode scanning, and supply chain services.",
    links: [],
    icon: "https://inoxoft.com/wp-content/uploads/2024/07/real-estate.svg",
    activeIcon:
      "https://inoxoft.com/wp-content/uploads/2024/07/real-estate_hovered.svg",
  },
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We Provide IT Services to Various Industries
          </h2>
          <p className="text-gray-600">
            We specialize in crafting reliable software solutions tailored to
            diverse industries. Our custom development services are designed to
            streamline operations, boost efficiency, and drive profitability.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 p-4 rounded-lg border ${
                  activeTab === index
                    ? "bg-[#00283b] text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <img
                  src={activeTab === index ? industry.activeIcon : industry.icon}
                  alt={`${industry.title} Icon`}
                  className="w-10 h-10"
                />
                <span className="font-medium">{industry.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 bg-[#00283b] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{industries[activeTab].title}</h3>
            <p className="mb-6">{industries[activeTab].description}</p>
            <ul className="list-disc list-inside space-y-2">
              {industries[activeTab].links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-blue-400 underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
