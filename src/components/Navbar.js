import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme }) => (
  <motion.nav
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-gray-800 dark:to-gray-700 shadow-lg"
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
      <a href="#home" className="text-3xl font-extrabold text-white tracking-wide">DINESHBABU M</a>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-indigo-100 transition"
      >
        {/** Simple sun/moon toggle */}
        <span role="img" aria-label="theme">🌓</span>
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
