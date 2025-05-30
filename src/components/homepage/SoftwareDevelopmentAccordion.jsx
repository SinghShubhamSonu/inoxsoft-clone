// import React, { useState } from 'react';

// const SoftwareDevelopmentAccordion = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section className="py-8 bg-white">
//       <div className="container mx-auto max-w-4xl px-4">
//         <div className="border border-gray-200 rounded-md shadow-sm">
//           <div 
//             className="cursor-pointer p-5 flex justify-between items-center"
//             onClick={toggleAccordion}
//           >
//             <span className="text-xl font-medium text-gray-800">Our Software Development Process</span>
//             <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
//               <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M15 17L0 2L2 0L15 13L28 0L30 2L15 17Z" fill="#333333"/>
//               </svg>
//             </span>
//           </div>
          
//           {isOpen && (
//             <div className="p-5 border-t border-gray-200">
//               <p className="text-gray-600 mb-6">
//                 Engaging in software development projects entails a complex and iterative process, necessitating meticulous planning, skillful execution, and continuous improvement. At Inoxoft, we recognize the significance of extracting insights from each stage of the software development lifecycle, encompassing business analysis and the development of a software project, to effectively navigate from inception to launch while managing development costs.
//               </p>
              
//               <ul className="space-y-6">
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">1</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Project initiation</p>
//                     <p className="text-gray-600">
//                       During the <a href="#" className="text-blue-600 hover:underline">discovery phase</a>, as part of our software consulting services, we delve deeply into gaining comprehensive insights into your business needs, uncovering opportunities, and defining clear goals for the project. In-depth consultations, market research, and stakeholder interviews, integral to our software consulting approach, help us identify pain points and lay the foundation for a transformative software solution tailored to your project.
//                     </p>
//                   </div>
//                 </li>
                
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">2</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Project Planning</p>
//                     <p className="text-gray-600">
//                       To guarantee a successful and efficient execution of software products, we emphasize meticulous planning. Collaborating with our team, you formulate a detailed roadmap, delineate the project scope, set deadlines, and allocate resources. The process is accompanied by clear communication and effective coordination to promptly achieve the best results.
//                     </p>
//                   </div>
//                 </li>
                
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">3</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Design</p>
//                     <p className="text-gray-600">
//                       The design phase bridges the gap between concept and reality. Our design team creates wireframes, mockups, and prototypes that visualize the final product. This stage include User Experience (UX) Design, User Interface (UI) Design and prototyping.
//                     </p>
//                   </div>
//                 </li>
                
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">4</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Agile Development</p>
//                     <p className="text-gray-600">
//                       Agile development, with its emphasis on iterative and incremental progress, along with continuous feedback and course correction throughout the development process, showcases a fascinating ability to adapt to changes. This, coupled with the collaborative approach fostered by agile methodologies, contributes to successful project outcomes. The end result is a product that genuinely aligns with the evolving needs of the target audience. This approach is further enhanced when guided by effective technology consulting.
//                     </p>
//                   </div>
//                 </li>
                
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">5</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Quality Assurance Testing</p>
//                     <p className="text-gray-600">
//                       Inoxoft is committed to delivering a seamless user experience, and to ensure this, we implement rigorous quality assurance testing, leveraging a robust quality management system. Our QA engineers meticulously evaluate every aspect of the web product, conducting comprehensive tests to identify and resolve potential issues or bugs. As part of our custom web app development services, we also offer <a href="#" className="text-blue-600 hover:underline">QA automation testing services</a> for both mobile and web applications.
//                     </p>
//                   </div>
//                 </li>
                
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">6</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Delivery and Deployment</p>
//                     <p className="text-gray-600">
//                       In this pivotal stage of software development process, our dedicated team meticulously configures your software for deployment, considering all technical specifications and requirements. Our goal is not just to deliver software but to ensure a successful launch that aligns seamlessly with your business objectives.
//                     </p>
//                   </div>
//                 </li>
                
//                 <li className="flex">
//                   <div className="mr-4 flex-shrink-0 flex items-start">
//                     <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">7</div>
//                   </div>
//                   <div>
//                     <p className="font-medium text-lg text-gray-800 mb-2">Maintenance and Support</p>
//                     <p className="text-gray-600">
//                       Your software is in good hands. We understand that software development is an ongoing process. Once your software is deployed, we offer a comprehensive maintenance and support service to ensure that it continues to meet your needs and perform at its best.
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SoftwareDevelopmentAccordion;

import React, { useState } from 'react';

const SoftwareDevelopmentAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="border border-gray-200 rounded-md shadow-sm w-full">
          <div 
            className="cursor-pointer p-6 flex justify-between items-center h-24"
            onClick={toggleAccordion}
          >
            <span className="text-2xl font-bold text-[#173753] ">Our Software Development Process</span>
            <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <svg width="30" height="20" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17L0 2L2 0L15 13L28 0L30 2L15 17Z" fill="#333333"/>
              </svg>
            </span>
          </div>
          
          {isOpen && (
            <div className="p-6 border-t border-gray-200">
              <p className="text-gray-600 mb-8 text-lg">
                Engaging in software development projects entails a complex and iterative process, necessitating meticulous planning, skillful execution, and continuous improvement. At Inoxoft, we recognize the significance of extracting insights from each stage of the software development lifecycle, encompassing business analysis and the development of a software project, to effectively navigate from inception to launch while managing development costs.
              </p>
              
              <ul className="space-y-8">
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">1</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Project initiation</p>
                    <p className="text-gray-600 text-lg">
                      During the <a href="#" className=" underline">discovery phase</a>, as part of our software consulting services, we delve deeply into gaining comprehensive insights into your business needs, uncovering opportunities, and defining clear goals for the project. In-depth consultations, market research, and stakeholder interviews, integral to our software consulting approach, help us identify pain points and lay the foundation for a transformative software solution tailored to your project.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">2</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Project Planning</p>
                    <p className="text-gray-600 text-lg">
                      To guarantee a successful and efficient execution of software products, we emphasize meticulous planning. Collaborating with our team, you formulate a detailed roadmap, delineate the project scope, set deadlines, and allocate resources. The process is accompanied by clear communication and effective coordination to promptly achieve the best results.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">3</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Design</p>
                    <p className="text-gray-600 text-lg">
                      The design phase bridges the gap between concept and reality. Our design team creates wireframes, mockups, and prototypes that visualize the final product. This stage include User Experience (UX) Design, User Interface (UI) Design and prototyping.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">4</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Agile Development</p>
                    <p className="text-gray-600 text-lg">
                      Agile development, with its emphasis on iterative and incremental progress, along with continuous feedback and course correction throughout the development process, showcases a fascinating ability to adapt to changes. This, coupled with the collaborative approach fostered by agile methodologies, contributes to successful project outcomes. The end result is a product that genuinely aligns with the evolving needs of the target audience. This approach is further enhanced when guided by effective technology consulting.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">5</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Quality Assurance Testing</p>
                    <p className="text-gray-600 text-lg">
                      Inoxoft is committed to delivering a seamless user experience, and to ensure this, we implement rigorous quality assurance testing, leveraging a robust quality management system. Our QA engineers meticulously evaluate every aspect of the web product, conducting comprehensive tests to identify and resolve potential issues or bugs. As part of our custom web app development services, we also offer <a href="#" className="underline">QA automation testing services</a> for both mobile and web applications.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">6</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Delivery and Deployment</p>
                    <p className="text-gray-600 text-lg">
                      In this pivotal stage of software development process, our dedicated team meticulously configures your software for deployment, considering all technical specifications and requirements. Our goal is not just to deliver software but to ensure a successful launch that aligns seamlessly with your business objectives.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">7</div>
                  </div>
                  <div>
                    <p className="font-medium text-xl text-gray-800 mb-3">Maintenance and Support</p>
                    <p className="text-gray-600 text-lg">
                      Your software is in good hands. We understand that software development is an ongoing process. Once your software is deployed, we offer a comprehensive maintenance and support service to ensure that it continues to meet your needs and perform at its best.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentAccordion;