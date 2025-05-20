import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <h1 className="text-[#00A4FF] font-bold text-3xl">EXORA</h1>
              {/* Replace with your actual logo: <img src="/logo.png" alt="Exora Logo" className="h-12" /> */}
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of IoT solutions, transforming businesses through innovative smart technology and connectivity.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="bg-[#1F3A93] hover:bg-[#00A4FF] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="bg-[#1F3A93] hover:bg-[#00A4FF] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="bg-[#1F3A93] hover:bg-[#00A4FF] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" className="bg-[#1F3A93] hover:bg-[#00A4FF] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-[#00A4FF] after:left-0 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Our Solutions
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Products
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-[#00A4FF] after:left-0 after:-bottom-2">
              Our Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/solutions/smart-home" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Smart Home
                </a>
              </li>
              <li>
                <a href="/solutions/industrial-iot" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Industrial IoT
                </a>
              </li>
              <li>
                <a href="/solutions/energy-management" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Energy Management
                </a>
              </li>
              <li>
                <a href="/solutions/smart-agriculture" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Smart Agriculture
                </a>
              </li>
              <li>
                <a href="/solutions/smart-city" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Smart City
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-[#00A4FF] after:left-0 after:-bottom-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <HiLocationMarker className="text-[#00A4FF] text-xl mt-1 mr-3" />
                <span className="text-gray-300">
                  123 IoT Street, Smart City, 12345, Egypt
                </span>
              </li>
              <li className="flex items-center">
                <HiPhone className="text-[#00A4FF] text-xl mr-3" />
                <span className="text-gray-300">+20 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <HiMail className="text-[#00A4FF] text-xl mr-3" />
                <a href="mailto:info@exora.com" className="text-gray-300 hover:text-[#00A4FF] transition-colors duration-300">
                  info@exora.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Subscribe to our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l outline-none focus:ring-2 focus:ring-[#00A4FF] w-full"
                />
                <button className="bg-[#1F3A93] hover:bg-[#00A4FF] px-4 py-2 rounded-r transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Exora. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li>
                  <a href="/privacy-policy" className="hover:text-[#00A4FF] transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-[#00A4FF] transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies-policy" className="hover:text-[#00A4FF] transition-colors duration-300">
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
