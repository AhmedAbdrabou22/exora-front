import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { useTheme } from '../../../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();

  return (
    <footer className={`transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-[#0A1128] to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800'
    }`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <h1 className={`font-bold text-3xl transition-colors duration-500 ${
                isDarkMode 
                  ? 'text-[#00A4FF]' 
                  : 'text-[#1F3A93]'
              }`}>EXORA</h1>
            </div>
            <p className={`mb-4 transition-colors duration-500 ${
              isDarkMode 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Leading provider of IoT solutions, transforming businesses through innovative smart technology and connectivity.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/25 text-white' 
                    : 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/30 text-white'
                }`}
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com" 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/25 text-white' 
                    : 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/30 text-white'
                }`}
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com" 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/25 text-white' 
                    : 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/30 text-white'
                }`}
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://instagram.com" 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/25 text-white' 
                    : 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/30 text-white'
                }`}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-2 transition-colors duration-500 ${
              isDarkMode 
                ? 'after:bg-[#00A4FF] text-white' 
                : 'after:bg-[#1F3A93] text-gray-800'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/about" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a 
                  href="/solutions" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Our Solutions
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Products
                </a>
              </li>
              <li>
                <a 
                  href="/case-studies" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Blog
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-2 transition-colors duration-500 ${
              isDarkMode 
                ? 'after:bg-[#00A4FF] text-white' 
                : 'after:bg-[#1F3A93] text-gray-800'
            }`}>
              Our Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/solutions/smart-home" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Smart Home
                </a>
              </li>
              <li>
                <a 
                  href="/solutions/industrial-iot" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Industrial IoT
                </a>
              </li>
              <li>
                <a 
                  href="/solutions/energy-management" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Energy Management
                </a>
              </li>
              <li>
                <a 
                  href="/solutions/smart-agriculture" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Smart Agriculture
                </a>
              </li>
              <li>
                <a 
                  href="/solutions/smart-city" 
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="mr-2">›</span> Smart City
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-2 transition-colors duration-500 ${
              isDarkMode 
                ? 'after:bg-[#00A4FF] text-white' 
                : 'after:bg-[#1F3A93] text-gray-800'
            }`}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <HiLocationMarker className={`text-xl mt-1 mr-3 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-[#00A4FF] group-hover:text-white' 
                    : 'text-[#1F3A93] group-hover:text-[#00A4FF]'
                }`} />
                <span className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 group-hover:text-white' 
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  123 IoT Street, Smart City, 12345, Egypt
                </span>
              </li>
              <li className="flex items-center group">
                <HiPhone className={`text-xl mr-3 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-[#00A4FF] group-hover:text-white' 
                    : 'text-[#1F3A93] group-hover:text-[#00A4FF]'
                }`} />
                <span className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 group-hover:text-white' 
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>+20 123 456 7890</span>
              </li>
              <li className="flex items-center group">
                <HiMail className={`text-xl mr-3 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-[#00A4FF] group-hover:text-white' 
                    : 'text-[#1F3A93] group-hover:text-[#00A4FF]'
                }`} />
                <a 
                  href="mailto:info@exora.com" 
                  className={`transition-all duration-300 hover:underline ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-[#00A4FF]' 
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  info@exora.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className={`text-lg font-medium mb-3 transition-colors duration-500 ${
                isDarkMode 
                  ? 'text-white' 
                  : 'text-gray-800'
              }`}>Subscribe to our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                                   className={`px-4 py-2 rounded-l outline-none w-full transition-all duration-300 focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white focus:ring-[#00A4FF] border border-gray-700' 
                      : 'bg-white text-gray-800 focus:ring-[#1F3A93] border border-gray-300'
                  }`}
                />
                <button className={`px-4 py-2 rounded-r transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/25 text-white' 
                    : 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/30 text-white'
                }`}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className={`py-4 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gray-950 border-t border-gray-800' 
          : 'bg-gray-200 border-t border-gray-300'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm text-center md:text-left transition-colors duration-500 ${
              isDarkMode 
                ? 'text-gray-400' 
                : 'text-gray-600'
            }`}>
              © {currentYear} Exora. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <a 
                    href="/privacy-policy" 
                    className={`transition-all duration-300 hover:underline ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-[#00A4FF]' 
                        : 'text-gray-600 hover:text-[#1F3A93]'
                    }`}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms-of-service" 
                    className={`transition-all duration-300 hover:underline ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-[#00A4FF]' 
                        : 'text-gray-600 hover:text-[#1F3A93]'
                    }`}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="/cookies-policy" 
                    className={`transition-all duration-300 hover:underline ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-[#00A4FF]' 
                        : 'text-gray-600 hover:text-[#1F3A93]'
                    }`}
                  >
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

