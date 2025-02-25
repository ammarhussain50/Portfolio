import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Import icons

const SocialButtons = () => {
  return (
    <div className="flex space-x-4">
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-transparent text-gray-400 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-110 hover:shadow-lg"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>

      {/* GitHub Button */}
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-transparent text-gray-400 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-110 hover:shadow-lg"
      >
        <FaGithub className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-transparent text-gray-400 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-110 hover:shadow-lg"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialButtons;