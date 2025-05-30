import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002a3a] text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Description */}
          <div>
            <h1 className="text-3xl font-bold mb-3">Codethics Solutions</h1>
            <p className="text-sm">
              Codethics Solutions is an award-winning software development company with a
              proven track record of 200+ projects. We create cutting-edge
              digital solutions that empower startups and small to medium-sized
              companies to achieve their business goals.
            </p>
          </div>

          {/* Clutch Review */}
          <div className="flex flex-col justify-start items-center lg:items-center">
            <p className="uppercase text-xs mb-2">REVIEWED ON</p>
            <h2 className="text-3xl font-bold mb-2">Clutch</h2>
            <div className="flex mb-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="none"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-lg font-bold">59 REVIEWS</p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="flex items-center mb-4">
              <span className="text-sm mr-2">
                📧
              </span>
              <a
                href="mailto:service@codethics.parmansoft.com"
                className="text-white hover:text-blue-300"
              >
                service@codethics.parmansoft.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-sm mr-2">
                📞
              </span>
              <a
                href="tel:(+91)7976061773"
                className="text-white hover:text-blue-300"
              >
                (+91)7976061773
              </a>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white py-2 px-4 rounded-full hover:opacity-90">
              Support Ukraine
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Offices */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Offices</h2>
            <ul className="space-y-3">
              {[
                "1601 Market Street, 19th Floor, Philadelphia, USA, PA 19103",
                "112 Capitol Trail Suite A278, Newark, DE, USA, 19711",
                "Muchoborska 8, budynek b1, 1 pietro, Wroclaw, Poland, 54–424",
                "Narva mnt 5, Tallinn, Estonia, 10117",
                "Heroiv UPA 72, Lviv, Ukraine, 79018",
              ].map((office, index) => (
                <li key={index} className="flex items-start space-x-2">
                  📍<span>{office}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu & Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* Menu */}
            <div>
              <h2 className="text-xl font-semibold mb-4">MENU</h2>
              <ul className="space-y-3">
                {[ 
                  "About Us",
                  "Case Studies",
                  "Reviews",
                  "Vacancies",
                  "News & Events",
                  "Benefits",
                  "Blog",
                  "Scholarship",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-blue-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Technologies */}
            <div>
              {["Services", "Technologies", "Top Posts", "Industries"].map(
                (category, index) => (
                  <h3 key={index} className="font-semibold mb-3">
                    {category}
                  </h3>
                )
              )}
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Follow us</h2>
          <div className="flex space-x-4 text-lg">
            {["Facebook", "Twitter", "Instagram", "LinkedIn", "GitHub"].map(
              (platform, index) => (
                <a key={index} href="#" aria-label={platform}>
                  🌐
                </a>
              )
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-gray-600 my-6" />
        <p className="text-center text-sm text-gray-400">
          © 2025 Codethics Solutions ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
