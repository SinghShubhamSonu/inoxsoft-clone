import React from 'react';

const DevTech = () => {
  const technologies = [
    {
      name: "Golang Development Company",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2023/08/Frame-10643.png.webp",
      iconWidth: 81,
      iconHeight: 80,
      alt: "Golang Development Company icon",
      spanTwo: false
    },
    {
      name: "Flutter App Development",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2020/03/flutter-ico.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Flutter App Development icon",
      spanTwo: false
    },
    {
      name: "Python (Django)",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2020/03/python-ico.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Python (Django) icon",
      spanTwo: false
    },
    {
      name: ".NET Development",
      href: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-ico.png.webp.svg",
      iconWidth: 80,
      iconHeight: 80,
      alt: ".NET Development icon",
      spanTwo: false
    },
    {
      name: "Node. JS",
      href: "https://inoxoft.com/wp-content/uploads/2023/05/flutter-ico.png.webp-1.svg",
      iconWidth: 80,
      iconHeight: 80,
      alt: "Node. JS icon",
      spanTwo: false
    },
    {
      name: "React JS Outsourcing",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2021/11/react-js-min.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "React JS Outsourcing icon",
      spanTwo: false
    },
    {
      name: "React Native App Development",
      href: "https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2021/11/react-native-min.png.webp",
      iconWidth: 80,
      iconHeight: 80,
      alt: "React Native App Development icon",
      spanTwo: true  // This will span two columns
    }
  ];

  return (
    <section className="relative bg-[#002639] py-16 md:py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - text content */}
          <div className="lg:w-1/3">
            <div className="text-start sticky top-8">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">TECHNOLOGIES WE<br/> WORK WITH</h2>
              <p className='text-white'>Multi platform mobile development has<br/> revolutionized the mobile app industry.<br/> Software engineers create native-like apps for<br/> both Android and iOS devices simultaneously <br/>using advances technologies and frameworks.</p>
            </div>
          </div>
          
          {/* Right side - technologies grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <a 
                  key={index} 
                  href={tech.href}
                  className={`flex flex-col items-center p-4 md:p-6 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 ${tech.spanTwo ? 'col-span-2' : ''}`}
                  data-wpel-link="internal"
                >
                  <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center mb-3 md:mb-4">
                    <img 
                      width={tech.iconWidth} 
                      height={tech.iconHeight}
                      src={`${tech.href}`}
                      alt={tech.alt}
                      className="max-w-full max-h-full"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-white text-sm md:text-lg font-medium text-center">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevTech;