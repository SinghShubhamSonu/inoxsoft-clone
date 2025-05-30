// import React from 'react';

// const OurTech = () => {
//   const techCategories = [
//     {
//       name: "Frameworks and libraries:",
//       items: [
//         { name: "React Router", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-58.png.webp' },
//         { name: "Redux Toolkit", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-59.png.webp' },
//         { name: "Nest.js", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-25.png.webp' },
//         { name: "Gatsby", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-60.png.webp'}
//       ]
//     },
//     {
//       name: "Styling and UI libraries:",
//       items: [
//         { name: "CSS-in-JS", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-61.png.webp' },
//         { name: "CSS preprocessors", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-62.png.webp' },
//         { name: "Material-UI", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-63.png.webp' },
//         { name: "Bootstrap", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-64.png.webp' }
//       ]
//     },
//     {
//       name: "Backend communication and APIs:",
//       items: [
//         { name: "Axios", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-65.png.webp' },
//         { name: "Fetch API", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-66.png.webp' },
//         { name: "GraphQL", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-13.png.webp' },
//         { name: "Apollo Client", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-67.png.webp'}
//       ]
//     },
//     {
//       name: "Testing and debugging:",
//       items: [
//         { name: "Jest", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-35.png.webp' },
//         { name: "React Testing Library", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-69.png.webp' },
//         { name: "Enzyme", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-70.png.webp' },
//         { name: "Selenium", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-71.png.webp' }
//       ]
//     },
//     {
//       name: "Build and development tools:",
//       items: [
//         { name: "Webpack", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-72.png.webp' },
//         { name: "Docker", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-40.png.webp' },
//         { name: "Babel", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-73.png.webp'}
//       ]
//     },
//     {
//       name: "Performance optimization tools:",
//       items: [
//         { name: "React Profiler", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/image-210.png.webp' },
//         { name: "Lighthouse", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/image-211.png.webp' },
//         { name: "Bundle Analyzer", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-74.png.webp' }
//       ]
//     },
//     {
//       name: "Deployment and hosting",
//       items: [
//         { name: "Vercel", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-74.png.webp' },
//         { name: "AWS", logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-12.png.webp' },
//         { name: "Azure", logo:'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-53.png.webp'},
//         { name: "Google Cloud Platform", logo:'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-76.png.webp'},
//         { name: "Heroku", logo: '	https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-42.png.webp'}
//       ]
//     }
//   ];

//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-start ml-10 mb-12">
//           <h2 className="text-4xl font-bold text-black text-opacity-20">OUR NODE.JS TECH</h2>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           {techCategories.map((category, index) => (
//             <div key={index} className="mb-12">
//               <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6 mb-6">
//                 <div className="w-full md:w-1/4 font-medium text-lg mb-4 md:mb-0">
//                   {category.name}
//                 </div>
//                 <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//                   {category.items.map((item, itemIndex) => (
//                     <div key={itemIndex} className="flex flex-col items-center">
//                       <div className="bg-white rounded-lg p-2 w-32 h-32 flex items-center justify-center shadow-sm mb-2">
//                         <img 
//                           src={item.logo} 
//                           alt={item.name} 
//                           className="max-w-16 max-h-16 object-contain"
//                         />
//                       </div>
//                       <p className="text-center text-sm">{item.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTech;



import React from 'react';

const OurTech = () => {
  const techCategories = [
    {
      name: "Languages:",
      items: [
        { 
          name: "JavaScript", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-23.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "TypeScript", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/image-160.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "Frameworks and libraries",
      items: [
        { 
          name: "Express.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-24.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Nest.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-25.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Koa.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-26.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Socket.io", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-27.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Hapi.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-28.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "Databases:",
      items: [
        { 
          name: "MongoDB", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-29.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "MySQL", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-30.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "PostgreSQL", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-31.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Redis", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-32.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "SQLite", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-8.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "Testing and debugging tools",
      items: [
        { 
          name: "Mocha", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-33.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Chai", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-34.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Jest", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-35.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Sinon.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-36.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "Authentication and security",
      items: [
        { 
          name: "Passport.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-37.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "JWT", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-38.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Helmet.js", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-39.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "Cloud and DevOps",
      items: [
        { 
          name: "AWS", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-12.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Docker", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-40.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Kubernetes", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-41.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Heroku", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-42.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "API development",
      items: [
        { 
          name: "GraphQL", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-13.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "REST", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-43.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "gRPC", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-44.png.webp',
          width: 100,
          height: 100
        }
      ]
    },
    {
      name: "CI/CD tools",
      items: [
        { 
          name: "Jenkins", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-21.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "CircleCI", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/Frame-10712-20.png.webp',
          width: 100,
          height: 100
        },
        { 
          name: "Travis CI", 
          logo: 'https://inoxoft.com/wp-content/webp-express/webp-images/uploads/2024/12/image-182.png.webp',
          width: 100,
          height: 100
        }
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800">OUR NODE.JS TECH</h2>
        </div>

        <div className="tech-stack-table">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-stack-table__line flex flex-col md:flex-row border-b border-gray-200 py-6">
              <div className="tech-stack-table__left w-full md:w-1/4 text-2xl font-medium mb-4 md:mb-0">
                {category.name}
              </div>
              <div className="tech-stack-table__right w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="tech-stack-table__right_item flex flex-col items-center">
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      width={item.width}
                      height={item.height}
                      className="mb-2"
                    />
                    <p className="text-center">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="hidden" 
          data-post_type="technologies" 
          data-cat="" 
          data-modified="120" 
          data-title="Node. JS" 
          data-home="https://inoxoft.com"
        ></div>
      </div>
    </section>
  );
};

export default OurTech;