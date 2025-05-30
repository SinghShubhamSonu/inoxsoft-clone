// src/components/header/CompanyDropdown.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function CompanyDropdown() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const delay = 100;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsCompanyOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsCompanyOpen(false);
    }, delay);
  };

  // Function to close the dropdown when a link is clicked
  const handleLinkClick = () => {
    setIsCompanyOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/" className="hover:text-gray-400 text-black">
        Company
      </Link>
      {isCompanyOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded z-10">
          <Link
            to="/company/about-us"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            onClick={handleLinkClick} // Close dropdown on click
          >
            About Us
          </Link>
          <Link
            to="/company/career"
            className="block px-4 py-2 text-black hover:bg-gray-200"
            
            onClick={handleLinkClick} // Close dropdown on click
          >
            Careers
          </Link>
        </div>
      )}
    </div>
  );
}

export default CompanyDropdown;
