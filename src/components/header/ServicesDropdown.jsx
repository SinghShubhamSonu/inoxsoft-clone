// src/components/header/ServicesDropdown.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function ServicesDropdown() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const delay = 100;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, delay);
  };

  // Function to close the dropdown when a link is clicked
  const handleLinkClick = () => {
    setIsServicesOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/" className="hover:text-gray-400 text-black">
        Services
      </Link>
      {isServicesOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded z-10">
          <Link
            to="/services/software-development"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            Software Development
          </Link>
          <Link
            to="/services/mobile-development"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            Mobile Development
          </Link>
          <Link
            to="/services/website-development"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            Website Development
          </Link>
          <Link
            to="/services/productdevelopment"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            PRODUCT DEVELOPMENT
          </Link>
          <Link
            to="/services/mvpdev"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            MVP DEVELOPMENT
          </Link>
          <Link
            to="/services/seo-digitalmarketing"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            SEO AND DIGITAL MARKETING
          </Link>          
          <Link
            to="/services/cross-platform"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            CROSS PLATFORM DEVELOPMENT
          </Link>
          <Link
            to="/services/uiuxdev"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            UI/UX DEVELOPMENT
          </Link>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;
