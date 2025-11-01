import React from 'react';
import Logo from '@mui/icons-material/AutoStoriesOutlined';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const navItems = [
    { name: 'Study Material', path: '/choose-course' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 shadow-sm z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Logo fontSize="large" className="text-teal-700" />
          <span className="text-2xl font-extrabold text-teal-700 tracking-tight">
            Learnify Verse
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-semibold transition-colors ${isActive
                  ? 'text-teal-700 border-b-2 border-teal-700'
                  : 'text-gray-800 hover:text-teal-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Header\Header.jsx