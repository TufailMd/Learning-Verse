import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@mui/icons-material/AutoStoriesOutlined';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

function Footer() {
  return (
    <footer className=" w-full bg-white border-gray-300 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo fontSize="large" className="text-teal-700" />
          <span className="text-2xl font-extrabold text-teal-700">Learnify Verse</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/study-material" className="hover:text-teal-700 transition-colors">Study Material</Link>
          <Link to="/about" className="hover:text-teal-700 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-teal-700 transition-colors">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-teal-700">
            <Facebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-teal-700">
            <Instagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-teal-700">
            <LinkedIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-teal-700">
            <GitHub />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm border-gray-200">
        © {new Date().getFullYear()} Learnify Verse — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Footer\Footer.jsx