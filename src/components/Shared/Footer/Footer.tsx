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
              }`}>إكسورا</h1>
            </div>
            <p className={`mb-4 transition-colors duration-500 ${
              isDarkMode
                ? 'text-gray-300'
                : 'text-gray-600'
            }`}>
              الرائدة في تقديم حلول إنترنت الأشياء، نحول الأعمال من خلال التكنولوجيا الذكية والاتصال المبتكر.
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
            <h3 className={`text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:right-0 after:-bottom-2 transition-colors duration-500 ${
              isDarkMode
                ? 'after:bg-[#00A4FF] text-white'
                : 'after:bg-[#1F3A93] text-gray-800'
            }`}>
              روابط سريعة
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
                  <span className="ml-2">‹</span> من نحن
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
                  <span className="ml-2">‹</span> حلولنا
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
                  <span className="ml-2">‹</span> المنتجات
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
                  <span className="ml-2">‹</span> دراسات الحالة
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
                  <span className="ml-2">‹</span> المدونة
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
                  <span className="ml-2">‹</span> اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:right-0 after:-bottom-2 transition-colors duration-500 ${
              isDarkMode
                ? 'after:bg-[#00A4FF] text-white'
                : 'after:bg-[#1F3A93] text-gray-800'
            }`}>
              خدماتنا
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/smart-lighting"
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-[#00A4FF]'
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="ml-2">‹</span> الإضاءة الذكية
                </a>
              </li>
              <li>
                <a
                  href="/services/hvac-system"
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-[#00A4FF]'
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="ml-2">‹</span> أنظمة التكييف الذكية
                </a>
              </li>
              <li>
                <a
                  href="/services/media-home-system"
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-[#00A4FF]'
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="ml-2">‹</span> أنظمة الصوت والميديا
                </a>
              </li>
              <li>
                <a
                  href="/services/security-system"
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-[#00A4FF]'
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="ml-2">‹</span> أنظمة الأمان الذكية
                </a>
              </li>
              <li>
                <a
                  href="/services/automation"
                  className={`flex items-center transition-all duration-300 hover:translate-x-2 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-[#00A4FF]'
                      : 'text-gray-600 hover:text-[#1F3A93]'
                  }`}
                >
                  <span className="ml-2">‹</span> أتمتة المنازل
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:right-0 after:-bottom-2 transition-colors duration-500 ${
              isDarkMode
                ? 'after:bg-[#00A4FF] text-white'
                : 'after:bg-[#1F3A93] text-gray-800'
            }`}>
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <HiLocationMarker className={`text-xl mt-1 ml-3 transition-colors duration-300 ${
                  isDarkMode
                    ? 'text-[#00A4FF] group-hover:text-white'
                    : 'text-[#1F3A93] group-hover:text-[#00A4FF]'
                }`} />
                <span className={`transition-colors duration-300 ${
                  isDarkMode
                    ? 'text-gray-300 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  شارع التكنولوجيا 123، المدينة الذكية، 12345، مصر
                </span>
              </li>
              <li className="flex items-center group">
                <HiPhone className={`text-xl ml-3 transition-colors duration-300 ${
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
                <HiMail className={`text-xl ml-3 transition-colors duration-300 ${
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
              }`}>اشترك في النشرة الإخبارية</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className={`px-4 py-2 rounded-r outline-none w-full transition-all duration-300 focus:ring-2 ${
                    isDarkMode
                      ? 'bg-gray-800 text-white focus:ring-[#00A4FF] border border-gray-700'
                      : 'bg-white text-gray-800 focus:ring-[#1F3A93] border border-gray-300'
                  }`}
                />
                <button className={`px-4 py-2 rounded-l transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/25 text-white'
                    : 'bg-[#1F3A93] hover:bg-[#00A4FF] hover:shadow-lg hover:shadow-blue-500/30 text-white'
                }`}>
                  اشتراك
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
            <p className={`text-sm text-center md:text-right transition-colors duration-500 ${
              isDarkMode
                ? 'text-gray-400'
                : 'text-gray-600'
            }`}>
              © {currentYear} إكسورا. جميع الحقوق محفوظة.
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
                    سياسة الخصوصية
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
                    شروط الخدمة
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
                    سياسة ملفات تعريف الارتباط
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

