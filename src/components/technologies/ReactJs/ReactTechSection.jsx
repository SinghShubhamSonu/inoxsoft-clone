import React from 'react';

const ReactTechSection = () => {
  const techCategories = [
    {
      name: "Frameworks and libraries:",
      items: [
        { name: "React Router", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-58.png.webp' },
        { name: "Redux Toolkit", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-59.png.webp' },
        { name: "Nest.js", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-25.png.webp' },
        { name: "Gatsby", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-60.png.webp'}
      ]
    },
    {
      name: "Styling and UI libraries:",
      items: [
        { name: "CSS-in-JS", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-61.png.webp' },
        { name: "CSS preprocessors", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-62.png.webp' },
        { name: "Material-UI", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-63.png.webp' },
        { name: "Bootstrap", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-64.png.webp' }
      ]
    },
    {
      name: "Backend communication and APIs:",
      items: [
        { name: "Axios", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-65.png.webp' },
        { name: "Fetch API", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-66.png.webp' },
        { name: "GraphQL", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-13.png.webp' },
        { name: "Apollo Client", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-67.png.webp'}
      ]
    },
    {
      name: "Testing and debugging:",
      items: [
        { name: "Jest", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-35.png.webp' },
        { name: "React Testing Library", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-69.png.webp' },
        { name: "Enzyme", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-70.png.webp' },
        { name: "Selenium", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-71.png.webp' }
      ]
    },
    {
      name: "Build and development tools:",
      items: [
        { name: "Webpack", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-72.png.webp' },
        { name: "Docker", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-40.png.webp' },
        { name: "Babel", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-73.png.webp'}
      ]
    },
    {
      name: "Performance optimization tools:",
      items: [
        { name: "React Profiler", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/image-210.png.webp' },
        { name: "Lighthouse", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/image-211.png.webp' },
        { name: "Bundle Analyzer", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-74.png.webp' }
      ]
    },
    {
      name: "Deployment and hosting",
      items: [
        { name: "Vercel", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-74.png.webp' },
        { name: "AWS", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-12.png.webp' },
        { name: "Azure", logo:'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-53.png.webp'},
        { name: "Google Cloud Platform", logo:'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-76.png.webp'},
        { name: "Heroku", logo: '	https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-42.png.webp'}
      ]
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">OUR REACT.JS TECH</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6 mb-6">
                <div className="w-full md:w-1/4 font-medium text-lg mb-4 md:mb-0">
                  {category.name}
                </div>
                <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col items-center">
                      <div className="bg-white rounded-lg p-2 w-32 h-32 flex items-center justify-center shadow-sm mb-2">
                        <img 
                          src={item.logo} 
                          alt={item.name} 
                          className="max-w-16 max-h-16 object-contain"
                        />
                      </div>
                      <p className="text-center text-sm">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactTechSection;