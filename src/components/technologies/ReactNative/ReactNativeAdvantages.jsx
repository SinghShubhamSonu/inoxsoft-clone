// import React from 'react';

// const ReactNativeAdvantages = () => {
//   return (
//     <section className="relative py-16 bg-white overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white z-0"></div>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="w-full lg:w-1/2">
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">ADVANTAGES OF REACT NATIVE</h2>
//               <div className="mb-4">
//                 <p className="text-gray-700 font-medium">
//                   React Native is used for hybrid app development. It ensures mobile
//                   development on Android and iOS in a faster time and at fewer costs.
//                   We offer to see our services of React Native development company for
//                   those who are interested in <a href="#" className="text-blue-600 hover:underline">Android</a> and <a href="#" className="text-blue-600 hover:underline">iOS application development</a>.
//                 </p>
//               </div>
//               <div className="mb-6">
//                 <p className="text-gray-600">
//                   React Native, born from React, is the first-class framework that allows
//                   building great user interfaces within mobile app development. It is a
//                   powerful framework to build mobile apps that feel like "native".
//                 </p>
//               </div>
//             </div>
            
//             <ul className="space-y-4">
//               {[
//                 'React Native is cost-effective due to its cross-platform capabilities',
//                 'Its reusable code allows faster development',
//                 'Great performance – fast-loading applications'
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-gray-700">{item}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div className="w-full lg:w-1/2 flex items-center justify-center">
//             <div className="rounded-lg overflow-hidden shadow-xl">
//               <img 
//                 src='https://inoxoft.com/wp-content/uploads/2023/06/react-screen.jpg' 
//                 alt="React Native application interface" 
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReactNativeAdvantages;
import React from 'react';

const ReactNativeAdvantages = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0  z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#173753] mb-6">ADVANTAGES OF REACT NATIVE</h2>
              <div className="mb-4">
                <p className="text-gray-700 font-bold text-xl">
                  React Native is used for hybrid app development. It ensures mobile
                  development on Android and iOS in a faster time and at fewer costs.
                  We offer to see our services of React Native development company for
                  those who are interested in <a href="#" className="text-gray-700 underline">Android</a> and <a href="#" className="text-gray-700 underline">iOS application development</a>.
                </p>
              </div>
              <div className="mb-28-">
                <p className="text-gray-600 text-xl">
                  React Native, born from React, is the first-class framework that allows
                  building great user interfaces within mobile app development. It is a
                  powerful framework to build mobile apps that feel like "native".
                </p>
              </div>
            </div>
            
            <ul className="space-y-6">
              {[
                'React Native is cost-effective due to its cross-platform capabilities',
                'Its reusable code allows faster development',
                'Great performance – fast-loading applications'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <img 
                      src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/benefits.svg" 
                      alt="Checkmark" 
                      className="w-5 h-5" 
                    />
                  </div>
                  <p className="ml-3 text-gray-600 text-xl">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg w-full ">
              <img 
                src='https://inoxoft.com/wp-content/uploads/2023/06/react-screen.jpg' 
                alt="React Native application interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactNativeAdvantages;