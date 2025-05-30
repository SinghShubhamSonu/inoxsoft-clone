
//         // <div className="bg-[#106f6f] text-white py-2 text-sm fixed w-full top-0 z-10  ">
//           // src/components/Header/TopBar.jsx
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// function TopBar() {
//   return (
//     <div className="bg-[#106f6f] text-white py-2 text-sm fixed w-full   ">
//       <div className="container mx-auto px-6 flex items-center justify-between">
//         {/* Centered Text */}
//         <div className="flex-grow text-center fixed-banner__text"> {/* Use flex-grow to center the text */}
//           Start building your software today.
//           <a
//             className="fixbanner-call-link underline ml-1" // Added margin-left for spacing
//             rel="nofollow"
//             href="https://calendly.com/inoxoft-team/project-discussion?month=2025-01"
//             data-wpel-link="external"
//             target="_blank"
//           >
//             Book a call
//           </a>
//         </div>

//         {/* Right-aligned Contacts */}
//         <div className="flex items-center fixed-banner__contacts"> {/* Flex container for contacts */}
//           <ul className="flex">
//             <li className="mr-4"> {/* Added margin for spacing */}
//               <a href="mailto:contact@inoxoft.com" className="flex items-center">
//                 <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
//                 contact@inoxoft.com
//               </a>
//             </li>
//             <li>
//               <a href="tel:+12673102646" data-wpel-link="internal" className="flex items-center">
//                 <FontAwesomeIcon icon={faPhone} className="mr-1" />
//                 (267) 310-2646
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopBar;
import React from 'react';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-teal-700 text-white z-50">
      {/* For larger screens - horizontal layout */}
      <div className="hidden lg:flex justify-center items-center w-full h-10 px-4">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <div className="flex-1"></div>
          <div className="text-center">
            <p className="text-sm font-medium">Start building your software today. Book a call</p>
          </div>
          <div className="flex-1 flex justify-end gap-6">
            <a href="mailto:service@codethics.parmansoft.com" className="flex items-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              service@codethics.parmansoft.com
            </a>
            <a href="tel:(+91)7976061773 " className="flex items-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+91)7976061773 
            </a>
          </div>
        </div>
      </div>

      {/* For mobile screens - stacked layout */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full py-2 px-4 text-center">
        <p className="text-sm font-medium mb-1">Start building your software today. Book a call</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="service@codethics.parmansoft.com" className="flex items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contact@inoxsoft.com
          </a>
          <a href="tel:+917976061773" className="flex items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (+91)7976061773 
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
