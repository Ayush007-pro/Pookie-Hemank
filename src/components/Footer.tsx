
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-xl mb-4 md:mb-0">
            Portfolio
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
