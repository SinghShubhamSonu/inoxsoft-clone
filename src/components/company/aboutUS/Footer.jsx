import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6"> {/* Add a container */}
        <p className="text-center">&copy; {new Date().getFullYear()} Codethics Solutions Clone. All rights reserved.</p> {/* Add copyright text */}
      </div>
    </footer>
  );
}

export default Footer;
