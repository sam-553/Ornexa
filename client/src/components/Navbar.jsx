import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-22">
      <div className="flex justify-between items-center px-6 h-full">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.jpeg"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-900 transition">About Us</Link>
          <Link to="/privacy-policy" className="hover:text-gray-900 transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-900 transition">
            Terms & Conditions
          </Link>
          <Link to="/becomepartner" className="hover:text-gray-900 transition">
            Become Partner
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/privacy-policy" onClick={() => setOpen(false)}>
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={() => setOpen(false)}>Terms</Link>
            <Link to="/becomepartner" onClick={() => setOpen(false)}>
              Become Partner
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;