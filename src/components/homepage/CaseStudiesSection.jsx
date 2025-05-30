// import React, { useState } from "react";

// const caseStudies = [
//     {
//       id: 1,
//       logo: "https://inoxoft.com/wp-content/uploads/2023/10/sandmilk-logo-svg.svg",
//       activeLogo:
//         "https://inoxoft.com/wp-content/uploads/2023/04/Logo-3-1.svg",
//       title: "NFT Marketplace Development",
//       description:
//         "How we helped a forward-thinking startup build a web-based NFT marketplace that removes blockchain complexity, making digital art authentication seamless.",
//       country: "The USA",
//       industries: ["e-Commerce", "NFT"],
//       technologies: [
//         "Node.js",
//         "ReactJS",
//         "AWS",
//         "AWS Key Management Service",
//         "DynamoDB",
//         "Elasticsearch",
//         "Serverless",
//         "Stripe",
//         "Typescript",
//         "Web3 / Blockchain / Crypto - Solidity; Polygon/Matic; ERC 1155; Pinata; Biconomy; Binance API; Alchemy",
//       ],
//       clientDetails:
//         "The client, a forward-thinking startup, aimed to revolutionize the digital art industry by providing a user-friendly, secure, and scalable NFT marketplace. Their vision was to create a platform where creators could showcase their work, collectors could easily discover valuable digital assets, and both parties could engage in a seamless, enjoyable experience.",
//       businessNeed:
//         "The client sought to create an NFT marketplace that not only allowed creators to mint and sell their digital assets but also created a vibrant community where collectors could effortlessly discover, purchase, and trade NFTs. The main challenge was creating a platform that was intuitive for users of all experience levels, offered secure transactions, and scaled as the market for NFTs expanded.",
//       image:
//         "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
//     },
//     {
//       id: 2,
//       logo: "https://inoxoft.com/wp-content/uploads/2023/02/Logo-5.svg",
//       activeLogo:
//         "https://inoxoft.com/wp-content/uploads/2023/02/Logo-5-1.svg",
//       title: "Equine registration platform for tracking racehorses’ welfare",
//       description:
//         "Equine platform which allow racehorse owners and all people involved in equestrian sport to manage, control and update information about the horses’ welfare, activities and any issues occurring.",
//       country: "Australia",
//       industries: ["Sports", "Animal Care"],
//       technologies: ["ReactJS", "Node.js", "AWS", "Stripe"],
//       clientDetails:
//         "The client wanted a platform to manage horse welfare and activities efficiently.",
//       businessNeed:
//         "The main challenge was creating a user-friendly platform for horse owners and equestrian professionals.",
//       image:
//         "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
//     },
//     {
//       id: 3,
//       logo: "https://inoxoft.com/wp-content/uploads/2023/02/refuels_logo_black.svg",
//       activeLogo:
//         "https://inoxoft.com/wp-content/uploads/2023/02/refuels_logo_color.svg",
//       title: "ReFuels",
//       description:
//         "This success story unveils how Inoxoft developed a custom supply chain management solution for ReFuels, optimizing delivery operations and promoting sustainable practices.",
//       country: "England",
//       industries: ["Supply Chain", "Transportation"],
//       technologies: ["ReactJS", "Node.js", "AWS"],
//       clientDetails:
//         "ReFuels, a company focused on providing sustainable fuel solutions, needed an efficient system to manage their supply chain.",
//       businessNeed:
//         "They required a comprehensive solution to handle fuel deliveries, track vehicle locations, and optimize routes, ensuring sustainability and reducing operational costs.",
//       image:
//         "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
//     },
//     {
//       id: 4,
//       logo: "https://inoxoft.com/wp-content/uploads/2023/02/Logo-3.svg",
//       activeLogo:
//         "https://inoxoft.com/wp-content/uploads/2023/02/Logo-3-1.svg",
//       title: "Tribely",
//       description:
//         "This case study highlights how Inoxoft built a community-driven sports platform that connects fans, athletes, and organizations while enhancing engagement and fostering team spirit.",
//       country: "The USA",
//       industries: ["Sports", "Community"],
//       technologies: ["ReactJS", "Node.js", "AWS"],
//       clientDetails:
//         "Tribely, a forward-thinking sports platform, sought to create a space where sports enthusiasts could connect and engage.",
//       businessNeed:
//         "They needed a solution that allowed fans to interact with athletes, teams, and sports organizations, fostering a vibrant community and enhancing team spirit.",
//       image:
//         "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
//     },
//     {
//       id: 5,
//       logo: "https://inoxoft.com/wp-content/uploads/2023/02/elite_logo_black.svg",
//       activeLogo:
//         "https://inoxoft.com/wp-content/uploads/2023/02/elite_logo_color.svg",
//       title: "ELITE",
//       description:
//         "The client aimed to build a digital platform that streamlined and transformed their sales processes by integrating AI-powered solutions.",
//       country: "England",
//       industries: ["Finance", "CRM"],
//       technologies: ["ReactJS", "Node.js", "AWS", "AI"],
//       clientDetails:
//         "The client aimed to build a digital platform that streamlined and transformed their sales processes by integrating AI-powered solutions.",
//       businessNeed:
//         "They required a solution that automated various CRM tasks, provided intelligent insights through AI, and enhanced overall sales efficiency.",
//       image:
//         "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
//     },
//     {
//       id: 6,
//       logo: "https://inoxoft.com/wp-content/uploads/2023/02/bintracker_logo_black.svg",
//       activeLogo:
//         "https://inoxoft.com/wp-content/uploads/2023/02/bintracker_logo_color.svg",
//       title: "Bintracker",
//       description:
//         "Streamlining logistics and enhancing management for waste pickup operations with tailored software development solutions for Bintracker.",
//       country: "Spain",
//       industries: ["Logistics", "Waste Management"],
//       technologies: ["ReactJS", "Node.js", "AWS"],
//       clientDetails:
//         "The client sought to improve operational efficiency and management of waste pickup operations using technology.",
//       businessNeed:
//         "The main need was to streamline logistics, reduce manual processes, and enhance tracking and reporting capabilities in their waste management processes.",
//       image:
//         "https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp",
//     },
//   ];
  
  






// const CaseStudiesSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold">Case Studies</h2>
//           <div className="flex gap-4">
//             <button className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100">
//               All Reviews
//             </button>
//             <button className="px-4 py-2 text-sm font-medium border rounded-lg bg-blue-900 text-white hover:bg-blue-800">
//               All Case Studies
//             </button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Tab List */}
//           <div className="flex flex-col gap-4 w-full lg:w-1/4">
//             {caseStudies.map((study, index) => (
//               <button
//                 key={study.id}
//                 onClick={() => setActiveTab(index)}
//                 className={`flex items-center gap-4 p-4 rounded-lg border ${
//                   activeTab === index
//                     ? "bg-blue-900 text-white"
//                     : "bg-white text-gray-800"
//                 }`}
//               >
//                 <img
//                   src={
//                     activeTab === index ? study.activeLogo : study.logo
//                   }
//                   alt={study.title}
//                   className="w-10 h-auto"
//                 />
//                 <span className="font-medium">{study.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-8">
//             {/* Top Section */}
//             <div className="flex flex-col lg:flex-row gap-8 mb-8">
//               {/* Details */}
//               <div className="lg:w-1/2">
//                 <span className="text-sm uppercase text-gray-500">
//                   Case Study
//                 </span>
//                 <h3 className="text-xl font-bold mb-4">
//                   {caseStudies[activeTab].title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   {caseStudies[activeTab].description}
//                 </p>
//                 <ul className="text-sm text-gray-600 space-y-2">
//                   <li>
//                     <strong>Country:</strong> {caseStudies[activeTab].country}
//                   </li>
//                   <li>
//                     <strong>Industries:</strong>{" "}
//                     {caseStudies[activeTab].industries.join(", ")}
//                   </li>
//                   <li>
//                     <strong>Technologies:</strong>{" "}
//                     {caseStudies[activeTab].technologies.join(", ")}
//                   </li>
//                 </ul>
//               </div>

//               {/* Image */}
//               <div className="lg:w-1/2 flex justify-center items-center">
//                 <img
//                   src={caseStudies[activeTab].image}
//                   alt={caseStudies[activeTab].title}
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Client Details */}
//               <div>
//                 <h4 className="font-bold text-lg mb-2">The Client</h4>
//                 <p className="text-gray-600">
//                   {caseStudies[activeTab].clientDetails}
//                 </p>
//               </div>

//               {/* Business Need */}
//               <div>
//                 <h4 className="font-bold text-lg mb-2">Business Need</h4>
//                 <p className="text-gray-600">
//                   {caseStudies[activeTab].businessNeed}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesSection;

// import React, { useState } from 'react';

// const CaseStudiesSection = () => {
//   const [activeTab, setActiveTab] = useState(0);
  
//   const caseStudies = [
//     {
//       id: 0,
//       logo: "/api/placeholder/150/80",
//       title: "NFT Marketplace Development",
//       description: "How we helped a forward-thinking startup build a web-based NFT marketplace that ensures blockchain operability, making digital art authentication seamless.",
//       clientInfo: "The Client is a forward-thinking startup, aimed to revolutionize the digital art industry by providing a user-friendly, secure, and popular NFT marketplace. Their vision was to create a platform where artists could showcase their work, collectors could easily discover valuable digital assets, and both parties could engage in a seamless, enjoyable experience.",
//       businessNeed: "The client sought to create an NFT marketplace that not only allowed creators to mint and sell their digital assets but also created a vibrant community where collectors could discover new artists. They wanted to create a platform that had much more than just trading a platform that can nurture fan bases of all experience levels, offered secure transactions, and suited as the market for NFT enthusiast.",
//       usa: "The USA",
//       category: "E-Commerce, NFT",
//       technologies: "Node.JS, ReactJS, AWS, AWS IAM Management Services, DynamoDB, ElasticSearch, Serverless, Stripe, Typescript, Web3.JS, Blockchain, Crypto, Solidity, Polygon Magic SDK, IPFS, Pinata, Random, Braintree API, Alchemy"
//     },
//     {
//       id: 1,
//       logo: "/api/placeholder/150/80",
//       title: "Case Study 2",
//       description: "Sample description for case study 2.",
//       clientInfo: "Client information for case study 2.",
//       businessNeed: "Business need for case study 2.",
//       usa: "The USA",
//       category: "Example Category",
//       technologies: "React, Node.js, AWS"
//     },
//     {
//       id: 2,
//       logo: "/api/placeholder/150/80",
//       title: "Case Study 3",
//       description: "Sample description for case study 3.",
//       clientInfo: "Client information for case study 3.",
//       businessNeed: "Business need for case study 3.",
//       usa: "The USA",
//       category: "Example Category",
//       technologies: "React, Node.js, AWS"
//     },
//     {
//       id: 3,
//       logo: "/api/placeholder/150/80",
//       title: "Case Study 4",
//       description: "Sample description for case study 4.",
//       clientInfo: "Client information for case study 4.",
//       businessNeed: "Business need for case study 4.",
//       usa: "The USA",
//       category: "Example Category",
//       technologies: "React, Node.js, AWS"
//     },
//     {
//       id: 4,
//       logo: "/api/placeholder/150/80",
//       title: "Case Study 5",
//       description: "Sample description for case study 5.",
//       clientInfo: "Client information for case study 5.",
//       businessNeed: "Business need for case study 5.",
//       usa: "The USA",
//       category: "Example Category",
//       technologies: "React, Node.js, AWS"
//     },
//     {
//       id: 5, 
//       logo: "/api/placeholder/150/80",
//       title: "Case Study 6",
//       description: "Sample description for case study 6.",
//       clientInfo: "Client information for case study 6.",
//       businessNeed: "Business need for case study 6.",
//       usa: "The USA",
//       category: "Example Category",
//       technologies: "React, Node.js, AWS"
//     }
//   ];

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">CASE STUDIES</h2>
//           <div className="flex space-x-4">
//             <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-blue-800 hover:bg-gray-100">
//               ALL REVIEWS <span className="ml-1">›</span>
//             </a>
//             <a href="#" className="inline-flex items-center px-4 py-2 bg-[#013a55] border border-transparent rounded-full text-sm font-medium text-white hover:bg-blue-800">
//               ALL CASE STUDIES <span className="ml-1">›</span>
//             </a>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//           <div className="flex">
//             {/* Left sidebar with tabs */}
//             <div className="w-1/6 bg-blue-900 min-h-full">
//               {caseStudies.map((study, index) => (
//                 <div 
//                   key={study.id}
//                   className={`p-6 cursor-pointer ${activeTab === index ? 'bg-blue-800' : ''} hover:bg-blue-800 transition-colors`}
//                   onClick={() => setActiveTab(index)}
//                 >
//                   <div className="flex items-center justify-center h-20">
//                     <img 
//                       src={study.logo} 
//                       alt={`${study.title} logo`} 
//                       className="max-h-full max-w-full object-contain" 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Main content area */}
//             <div className="w-5/6 p-8">
//               <div className="text-sm text-gray-500 mb-2">Case studies</div>
//               <h3 className="text-2xl font-semibold text-blue-800 mb-4">{caseStudies[activeTab].title}</h3>
              
//               <div className="flex mb-12">
//                 <div className="w-1/2 pr-6">
//                   <p className="mb-6 text-gray-700">{caseStudies[activeTab].description}</p>
                  
//                   <div className="mb-3">
//                     <div className="flex items-center mb-2">
//                       <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <span className="text-gray-700">{caseStudies[activeTab].usa}</span>
//                     </div>
                    
//                     <div className="flex items-center mb-2">
//                       <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
//                         </svg>
//                       </div>
//                       <span className="text-gray-700">{caseStudies[activeTab].category}</span>
//                     </div>
                    
//                     <div className="flex items-start mb-2">
//                       <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                         </svg>
//                       </div>
//                       <span className="text-gray-700">{caseStudies[activeTab].technologies}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="w-1/2">
//                   <div className="rounded-lg overflow-hidden shadow-lg">
//                     <img src="/api/placeholder/400/320" alt="Case study screenshot" className="w-full h-auto" />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-8 mt-8">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-3">The Client</h4>
//                   <p className="text-gray-700">{caseStudies[activeTab].clientInfo}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-3">Business Need</h4>
//                   <p className="text-gray-700">{caseStudies[activeTab].businessNeed}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudiesSection;

import React, { useState } from 'react';

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const caseStudies = [
    {
      id: 0,
      logo: "https://inoxoft.com/wp-content/uploads/2023/04/Logo-3-1.svg",
      title: "NFT Marketplace Development",
      description: "How we helped a forward-thinking startup build a web-based NFT marketplace that ensures blockchain operability, making digital art authentication seamless.",
      clientInfo: "The Client is a forward-thinking startup, aimed to revolutionize the digital art industry by providing a user-friendly, secure, and popular NFT marketplace. Their vision was to create a platform where artists could showcase their work, collectors could easily discover valuable digital assets, and both parties could engage in a seamless, enjoyable experience.",
      businessNeed: "The client sought to create an NFT marketplace that not only allowed creators to mint and sell their digital assets but also created a vibrant community where collectors could discover new artists. They wanted to create a platform that had much more than just trading a platform that can nurture fan bases of all experience levels, offered secure transactions, and suited as the market for NFT enthusiast.",
      usa: "The USA",
      category: "E-Commerce, NFT",
      technologies: "Node.JS, ReactJS, AWS, AWS IAM Management Services, DynamoDB, ElasticSearch, Serverless, Stripe, Typescript, Web3.JS, Blockchain, Crypto, Solidity, Polygon Magic SDK, IPFS, Pinata, Random, Braintree API, Alchemy"
    },
    {
      id: 1,
      logo: "https://inoxoft.com/wp-content/uploads/2023/02/Logo-5.svg",
      title: "Case Study 2",
      description: "Sample description for case study 2.",
      clientInfo: "Client information for case study 2.",
      businessNeed: "Business need for case study 2.",
      usa: "The USA",
      category: "Example Category",
      technologies: "React, Node.js, AWS"
    },
    {
      id: 2,
      logo: "https://inoxoft.com/wp-content/uploads/2023/02/Logo-6.svg",
      title: "Case Study 3",
      description: "Sample description for case study 3.",
      clientInfo: "Client information for case study 3.",
      businessNeed: "Business need for case study 3.",
      usa: "The USA",
      category: "Example Category",
      technologies: "React, Node.js, AWS"
    },
    {
      id: 3,
      logo: "https://inoxoft.com/wp-content/uploads/2023/02/Logo-7.svg",
      title: "Case Study 4",
      description: "Sample description for case study 4.",
      clientInfo: "Client information for case study 4.",
      businessNeed: "Business need for case study 4.",
      usa: "The USA",
      category: "Example Category",
      technologies: "React, Node.js, AWS"
    },
    {
      id: 4,
      logo: "https://inoxoft.com/wp-content/uploads/2023/05/Frame-214_2-1.svg",
      title: "Case Study 5",
      description: "Sample description for case study 5.",
      clientInfo: "Client information for case study 5.",
      businessNeed: "Business need for case study 5.",
      usa: "The USA",
      category: "Example Category",
      technologies: "React, Node.js, AWS"
    },
    {
      id: 5, 
      logo: " https://inoxoft.com/wp-content/uploads/2023/05/Path_2942-2.svg",
      title: "Case Study 6",
      description: "Sample description for case study 6.",
      clientInfo: "Client information for case study 6.",
      businessNeed: "Business need for case study 6.",
      usa: "The USA",
      category: "Example Category",
      technologies: "React, Node.js, AWS"
    }
  ];

  return (
    <div className="bg-[#f9fbfb] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">CASE STUDIES</h2>
          <div className="flex space-x-4">
            <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-blue-800 hover:bg-gray-100">
              ALL REVIEWS <span className="ml-1">›</span>
            </a>
            <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-900 border border-transparent rounded-full text-sm font-medium text-white hover:bg-blue-800">
              ALL CASE STUDIES <span className="ml-1">›</span>
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex">
            {/* Left sidebar with tabs */}
            <div className="w-1/6 bg-[#00283b] min-h-full">
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id}
                  className={`p-6 cursor-pointer ${activeTab === index ? 'bg-[#013a55]' : ''} transition-colors`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center justify-center h-20">
                    <img 
                      src={study.logo} 
                      alt={`${study.title} logo`} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Main content area */}
            <div className="w-5/6 p-8 ">
              <div className="text-sm text-gray-500 mb-2">Case studies</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">{caseStudies[activeTab].title}</h3>
              
              <div className="flex mb-12">
                <div className="w-1/2 pr-6">
                  <p className="mb-6 text-gray-700">{caseStudies[activeTab].description}</p>
                  
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{caseStudies[activeTab].usa}</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{caseStudies[activeTab].category}</span>
                    </div>
                    
                    <div className="flex items-start mb-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{caseStudies[activeTab].technologies}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-1/2">
                  <div className="rounded-lg overflow-hidden -mt-6">
                    <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/case-studies/macbook_new-min.webp" alt="Case study screenshot" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">The Client</h4>
                  <p className="text-gray-700">{caseStudies[activeTab].clientInfo}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Business Need</h4>
                  <p className="text-gray-700">{caseStudies[activeTab].businessNeed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;