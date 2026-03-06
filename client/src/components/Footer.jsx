import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* About Us */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3 text-lg">About Us</h4>
          <p className="text-sm">
            Ornexa is a digital financial services platform focused on providing simple, transparent, and accessible solutions. We aim to help individuals and businesses connect with trusted financial services through modern technology.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3 text-lg">Useful Links</h4>
          <div className="text-sm space-y-1 flex flex-col">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <Link to="/about" className="hover:text-gray-900">About Us</Link>
            <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>

            <Link to="/becomepartner" className="hover:text-gray-900">Become Partner</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3 text-lg">Office Address</h4>
          <p className="text-sm mb-1">Ornexa</p>
          <p className="text-sm mb-1">Kabir Ward, Near doonda Seoni square - Seoni (MP) 480661</p>
          <p className="text-sm mb-1">Mobile: +91-7974-894201</p>
          <p className="text-sm">Email:contact@ornexa.in</p>
        </div>

      </div>

      <div className="text-center text-sm py-4 border-t text-gray-500">
        © 2025 | Ornexa — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
