// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav>
//       <div className="hidden md:flex space-x-6">
//         <Link to="/company" className="hover:text-gray-400 text-black">Company</Link>
//         <Link to="/services" className="hover:text-gray-400 text-black">Services</Link>
//         <Link to="/industries" className="hover:text-gray-400 text-black">Industries</Link>
//         <Link to="/technologies" className="hover:text-gray-400 text-black">Technologies</Link>
//         <Link to="/clients" className="hover:text-gray-400 text-black">Clients</Link>
//         <Link to="/blog" className="hover:text-gray-400 text-black">Blog</Link>
//       </div>

//       {/* Hamburger menu (rest of the code remains the same) */}
//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           {/* Icon when menu is closed (replace with your icon) */}
//           <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//           {/* Icon when menu is open (replace with your icon) */}
//           <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Mobile menu (conditionally render) */}
//         {isOpen && (
//           <div className="mobile-menu">
//             <Link to="/company" className="block py-2 px-4 text-sm hover:bg-gray-700">Company</Link>
//             <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</Link>
//             <Link to="/industries" className="block py-2 px-4 text-sm hover:bg-gray-700">Industries</Link>
//             <Link to="/technologies" className="block py-2 px-4 text-sm hover:bg-gray-700">Technologies</Link>
//             <Link to="/clients" className="block py-2 px-4 text-sm hover:bg-gray-700">Clients</Link>
//             <Link to="/blog" className="block py-2 px-4 text-sm hover:bg-gray-700">Blog</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// src/components/Navbar.jsx
import React, { useState } from 'react';
 import CompanyDropdown from './CompanyDropdown';
import ServicesDropdown from './ServicesDropdown';
import TechnologiesDropdown from './TechnologiesDropdown';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="hidden md:flex space-x-6">
         <CompanyDropdown />
        <ServicesDropdown /> 
        {/* <Link to="/industries" className="hover:text-gray-400 text-black">Industries</Link> */}
        <TechnologiesDropdown />
        {/* <Link to="/clients" className="hover:text-gray-400 text-black">Clients</Link> */}
        {/* <Link to="/blog" className="hover:text-gray-400 text-black">Blog</Link> */}
      </div>

      {/* Hamburger menu (rest of the code remains the same) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {/* Icon when menu is closed */}
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* Icon when menu is open */}
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile menu (conditionally render) */}
        {isOpen && (
          <div className="mobile-menu">
            <Link to="/company" className="block py-2 px-4 text-sm hover:bg-gray-700">Company</Link>
            <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</Link>
            <Link to="/industries" className="block py-2 px-4 text-sm hover:bg-gray-700">Industries</Link>
            <Link to="/technologies" className="block py-2 px-4 text-sm hover:bg-gray-700">Technologies</Link>
            <Link to="/clients" className="block py-2 px-4 text-sm hover:bg-gray-700">Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

