import React from 'react';

const TechnologiesStack = () => {
  const technologies = [
    {
      name: "Golang Development Company",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2023/08/Frame-10643.png.webp",
      iconWidth: 81,
      iconHeight: 80,
      alt: "Golang Development Company icon"
    },
    {
      name: "Flutter App Development",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2020/03/flutter-ico.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Flutter App Development icon"
    },
    {
      name: "Python (Django)",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2020/03/python-ico.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Python (Django) icon"
    },
    {
      name: ".NET Development",
      href: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-ico.png.webp.svg",
      iconWidth: 80,
      iconHeight: 80,
      alt: ".NET Development icon"
    },
    {
      name: "Node. JS",
      href: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-ico.png.webp-1.svg",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Node. JS icon"
    },
    {
      name: "React JS Outsourcing",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2021/11/react-js-min.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "React JS Outsourcing icon"
    },
    {
      name: "React Native App Development",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2021/11/react-native-min.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "React Native App Development icon"
    },
    {
      name: "Custom iOS App Development",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2021/11/ios-min.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Custom iOS App Development icon"
    },
    {
      name: "Custom Android Application Development",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2020/03/android-ico.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Custom Android Application Development icon"
    }
  ];

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">MVP DEVELOPMENT TECHNOLOGIES IN OUR STACK</h2>
        </div>
        
        {/* Technologies grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <a 
              key={index} 
              href={tech.href}
              className="flex flex-col items-center p-6 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105"
              data-wpel-link="internal"
            >
              <div className="w-32 h-32 flex items-center justify-center mb-4">
                <img 
                  width={tech.iconWidth} 
                  height={tech.iconHeight}
                  src={`${tech.href}`}
                  alt={tech.alt}
                  className="max-w-full max-h-full"
                />
              </div>
              <span className="text-white text-lg font-medium text-center">{tech.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesStack;