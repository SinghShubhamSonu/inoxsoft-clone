// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import InoxoftLogo from '../../assets/images/inoxoft_logo.svg'; 
import TopBar from './TopBar';

function Header() {
  return (
    <header  className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <div className="bg-white shadow-md " style={{ marginTop: '36px' }}>
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://codethics.parmansoft.com/assets/img/K.png" alt="Codethics Solutions Logo" className="h-10 mr-2" />
            
          </Link>

          <Navbar />

          {/* Request for Proposal Button */}
          <Link to="/contact">
  <button className="bg-[#003047] hover:bg-blue-700 text-white  py-2 px-4 rounded-full"> {/* Updated button style */}
    Request for proposal
  </button>
</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
