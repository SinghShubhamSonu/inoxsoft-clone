// src/components/header/TechnologiesDropdown.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function TechnologiesDropdown() {
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isWebOpen, setIsWebOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Refs to hold the timeout IDs
  const techTimeout = useRef(null);
  const webTimeout = useRef(null);
  const mobileTimeout = useRef(null);

  // Delay in milliseconds before closing the dropdown
  const delay = 100;

  const handleTechMouseEnter = () => {
    clearTimeout(techTimeout.current);
    setIsTechOpen(true);
  };

  const handleTechMouseLeave = () => {
    techTimeout.current = setTimeout(() => {
      setIsTechOpen(false);
      setIsWebOpen(false);
      setIsMobileOpen(false);
    }, delay);
  };

  const handleWebMouseEnter = () => {
    clearTimeout(webTimeout.current);
    setIsWebOpen(true);
  };

  const handleWebMouseLeave = () => {
    webTimeout.current = setTimeout(() => {
      setIsWebOpen(false);
    }, delay);
  };

  const handleMobileMouseEnter = () => {
    clearTimeout(mobileTimeout.current);
    setIsMobileOpen(true);
  };

  const handleMobileMouseLeave = () => {
    mobileTimeout.current = setTimeout(() => {
      setIsMobileOpen(false);
    }, delay);
  };

    // Function to close dropdowns
    const closeDropdowns = () => {
        setIsTechOpen(false);
        setIsWebOpen(false);
        setIsMobileOpen(false);
      };

      const handleLinkClick = () => {
        closeDropdowns();
      }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleTechMouseEnter}
      onMouseLeave={handleTechMouseLeave}
    >
      <Link to="/technologies"  className="hover:text-gray-400 text-black">
      Technologies
      </Link>
      {isTechOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-10">
          {/* Web Development */}
          <div 
            className="relative"
            onMouseEnter={handleWebMouseEnter}
            onMouseLeave={handleWebMouseLeave}
          >
            {/* <div className="block px-4 py-2 text-black hover:text-blue-800">
              Web Development
            </div>
            {isWebOpen && ( */}
              <div className="absolute  top-0 mt-1 w-48 bg-white shadow-lg rounded z-10"  onClick={closeDropdowns} >
                <Link to="/technologies/reactjs" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                  React Js
                </Link>
                <Link to="/technologies/reactnative" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                    React Native
                </Link>
                <Link to="/technologies/flutter" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                  Flutter
                </Link>
                <Link to="/technologies/nodejs" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                    Node Js 
                </Link>
                <Link to="/technologies/spring-boot" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                    SPRING BOOT 
                </Link>
                <Link to="/technologies/php" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                    PHP 
                </Link>
                <Link to="/technologies/sql" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                    DB 
                </Link>
                <Link to="/technologies/htmlcssjs" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleLinkClick}>
                    HTML/CSS/JS 
                </Link>
              </div>
            {/* )} */}
          </div>

          {/* Mobile Development */}
          <div 
            className="relative"
            onMouseEnter={handleMobileMouseEnter}
            onMouseLeave={handleMobileMouseLeave}
          >
            {/* <div className="block px-4 py-2 text-black hover:bg-gray-200">
              Mobile Development
            </div>
            {isMobileOpen && (
              <div className="absolute left-full top-0 mt-1 w-48 bg-white shadow-lg rounded z-10">
               
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default TechnologiesDropdown;
