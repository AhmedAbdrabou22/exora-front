// import React, { useState } from 'react';
// import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi';
// import { GB, EG } from 'country-flag-icons/react/3x2';
// import Logo from "../../../assets/logo.png"
// import logoLight from "../../../assets/logoLight.png"
// import { useTheme } from '../../../contexts/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [language, setLanguage] = useState('en');
//     const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//     const { isDarkMode, toggleTheme } = useTheme();
//     const { t, i18n } = useTranslation();

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const changeLanguage = (lng) => {
//         i18n.changeLanguage(lng);
//         setLanguage(lng);
//     };

//     const services = [
//         { ar: "أنظمة المراقبة الذكية", en: "Smart Surveillance Systems", route: "smart-surveillance-systems" },
//         { ar: "أنظمة الأمان المتكاملة", en: "Integrated Security Systems", route: "integrated-security-systems" },
//         { ar: "أنظمة التحكم في الإضاءة الذكية", en: "Smart Lighting Control", route: "smart-lighting-control" },
//         { ar: "أنظمة التكييف الذكي", en: "Smart HVAC Systems", route: "smart-hvac-systems" },
//         { ar: "خدمات صيانة ودعم فني 24/7", en: "Maintenance Support Services", route: "maintenance-support-services" },
//         { ar: "أنظمة الصوت والميديا المنزلية", en: "Home Audio Media Systems", route: "home-audio-media-systems" },
//         { ar: "البنية التحتية للشبكات", en: "Network Infrastructure", route: "network-infrastructure" }
//     ];

//     const isRTL = i18n.language === 'ar';

//     return (
//         <nav className={`sticky top-0 z-50 w-full shadow-lg transition-all duration-500 border-b ${isDarkMode
//             ? 'bg-gradient-to-r from-[#0A1128] via-[#1a1f3a] to-[#0A1128] border-gray-700 shadow-gray-900/50'
//             : 'bg-gradient-to-r from-blue-50 via-white to-blue-50 border-gray-200 shadow-gray-200/50'
//             }`}>
//             <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//                 <div className={`flex justify-between items-center h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
//                     {/* Logo Section */}
//                     <div className="flex-shrink-0">
//                         {
//                             isDarkMode ? (
//                                 <a href="/" className="flex items-center">
//                             <img
//                                 src={logoLight}
//                                 alt="Exora"
//                                 className="h-5 w-auto md:h-10 lg:h-10 object-contain"
//                             />
//                         </a>
//                             ):(
//                                 <a href="/" className="flex items-center">
//                             <img
//                                 src={Logo}
//                                 alt="Exora"
//                                 className="h-12 w-auto md:h-14 lg:h-16 object-contain"
//                             />
//                         </a>
//                             )
//                         }
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className={`md:hidden flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
//                         {/* Theme Toggle for Mobile */}
//                         <button
//                             onClick={toggleTheme}
//                             className={`${isRTL ? 'mr-3' : 'ml-3'} p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${isDarkMode
//                                 ? 'text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 bg-gray-700/50'
//                                 : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600 bg-gray-100/50'
//                                 }`}
//                             aria-label="Toggle theme"
//                         >
//                             {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//                         </button>
                        
//                         {/* Language Selector for Mobile */}
//                         <div className={`${isRTL ? 'mr-4' : 'ml-4'} flex ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
//                             <button
//                                 onClick={() => changeLanguage('en')}
//                                 className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70'}`}
//                                 aria-label="Switch to English"
//                             >
//                                 <GB title="United Kingdom" className="w-full h-full object-cover" />
//                             </button>
//                             <button
//                                 onClick={() => changeLanguage('ar')}
//                                 className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'ar' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70'}`}
//                                 aria-label="Switch to Arabic"
//                             >
//                                 <EG title="Egypt" className="w-full h-full object-cover" />
//                             </button>
//                         </div>
                        
//                         <button
//                             onClick={toggleMenu}
//                             className={`focus:outline-none text-2xl transition-all duration-300 transform hover:scale-110 ${isDarkMode
//                                 ? 'text-[#1F3A93] hover:text-[#00A4FF]'
//                                 : 'text-gray-700 hover:text-[#00A4FF]'
//                                 }`}
//                         >
//                             {isOpen ? <FiX /> : <FiMenu />}
//                         </button>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <div className={`hidden md:flex items-center justify-center flex-2 w-50 p-4 links-navbar rounded-xl transition-all duration-500 ${isDarkMode
//                         ? 'bg-gradient-to-br from-[#1F3A93] via-[#2a4fb3] to-[#00A4FF] shadow-lg shadow-blue-900/30'
//                         : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border border-gray-200 shadow-lg shadow-gray-200/50'
//                         }`}>
//                         <ul className={`flex ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
//                             <li>
//                                 <Link
//                                     to="/"
//                                     className={`font-medium relative py-2 transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:${isRTL ? 'left' : 'right'}-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isDarkMode
//                                         ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
//                                         : 'text-gray-700 hover:text-[#00A4FF]'
//                                         }`}
//                                 >
//                                     {isRTL ? 'الرئيسية' : 'Home'}
//                                 </Link>
//                             </li>
//                             <li className="relative group">
//                                 <div
//                                     className={`flex items-center font-medium relative transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:${isRTL ? 'left' : 'right'}-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer ${isDarkMode
//                                         ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
//                                         : 'text-gray-700 hover:text-[#00A4FF]'
//                                         }`}
//                                     onMouseEnter={() => setServicesDropdownOpen(true)}
//                                     onMouseLeave={() => setServicesDropdownOpen(false)}
//                                 >
//                                     {isRTL ? 'خدماتنا' : 'Services'}
//                                     <FiChevronDown className={`${isRTL ? 'ml-1' : 'mr-1'} transition-transform duration-300 group-hover:rotate-180`} />
//                                 </div>
//                                 {/* Services Dropdown */}
//                                 <div
//                                     className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-64 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top transform backdrop-blur-sm ${servicesDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
//                                         } ${isDarkMode
//                                             ? 'bg-gray-800/95 border border-gray-600 shadow-gray-900/50'
//                                             : 'bg-white/95 border border-gray-200 shadow-gray-300/50'
//                                         }`}
//                                     onMouseEnter={() => setServicesDropdownOpen(true)}
//                                     onMouseLeave={() => setServicesDropdownOpen(false)}
//                                 >
//                                     <div className="py-2">
//                                         {services.map((service, index) => (
//                                             <a
//                                                 key={index}
//                                                 href={`/service/${service.route}`}
//                                                 className={`block px-4 py-3 text-sm transition-all duration-200 ${isRTL ? 'text-left hover:-translate-x-1' : 'text-right hover:translate-x-1'} hover:transform ${isDarkMode
//                                                     ? 'text-gray-300 hover:bg-[#1F3A93] hover:text-white'
//                                                     : 'text-gray-700 hover:bg-blue-50 hover:text-[#1F3A93]'
//                                                     }`}
//                                             >
//                                                 {isRTL ? service.ar : service.en}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <a
//                                     href="/about"
//                                     className={`font-medium relative py-2 transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:${isRTL ? 'left' : 'right'}-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isDarkMode
//                                         ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
//                                         : 'text-gray-700 hover:text-[#00A4FF]'
//                                         }`}
//                                 >
//                                     {isRTL ? 'من نحن' : 'About'}
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="/contact"
//                                     className={`font-medium relative py-2 transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:${isRTL ? 'left' : 'right'}-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isDarkMode
//                                         ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
//                                         : 'text-gray-700 hover:text-[#00A4FF]'
//                                         }`}
//                                 >
//                                     {isRTL ? 'تواصل معنا' : 'Contact'}
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Login Button, Theme Toggle and Language Selector for Desktop */}
//                     <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
//                         {/* Theme Toggle Button */}
//                         <button
//                             onClick={toggleTheme}
//                             className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${isDarkMode
//                                 ? 'text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 bg-gray-700/50 shadow-lg shadow-gray-900/30'
//                                 : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600 bg-gray-100/50 shadow-lg shadow-gray-200/50'
//                                 }`}
//                             aria-label="Toggle theme"
//                         >
//                             {isDarkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
//                         </button>
                        
//                         {/* Language Selector */}
//                         <div className={`flex ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
//                             <button
//                                 onClick={() => changeLanguage('en')}
//                                 className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70 hover:opacity-100'}`}
//                                 aria-label="Switch to English"
//                             >
//                                 <GB title="United Kingdom" className="w-full h-full object-cover" />
//                             </button>
//                             <button
//                                 onClick={() => changeLanguage('ar')}
//                                 className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'ar' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70 hover:opacity-100'}`}
//                                 aria-label="Switch to Arabic"
//                             >
//                                 <EG title="Egypt" className="w-full h-full object-cover" />
//                             </button>
//                         </div>
                        
//                                                 {/* Login Button */}
//                         <a
//                             href="/login"
//                             className="bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//                         >
//                             {isRTL ? 'تسجيل الدخول' : 'Login'}
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'} shadow-xl ${isDarkMode
//                 ? 'bg-gradient-to-b from-gray-800 to-gray-900 shadow-gray-900/50'
//                 : 'bg-gradient-to-b from-white to-gray-50 shadow-gray-300/50'
//                 }`}>
//                 <ul className={`flex flex-col py-4 space-y-2 px-4 ${isRTL ? 'text-left' : 'text-right'}`}>
//                     <li>
//                         <a
//                             href="/"
//                             className={`block py-3 px-2 font-medium transition-all duration-300 rounded-lg ${isDarkMode
//                                 ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
//                                 : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
//                                 }`}
//                         >
//                             {isRTL ? 'الرئيسية' : 'Home'}
//                         </a>
//                     </li>
//                     <li>
//                         <div className="py-2">
//                             <button
//                                 onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
//                                 className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between w-full font-medium transition-all duration-300 py-3 px-2 rounded-lg ${isDarkMode
//                                     ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
//                                     : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
//                                     }`}
//                             >
//                                 <span>{isRTL ? 'خدماتنا' : 'Services'}</span>
//                                 <FiChevronDown className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                             <div className={`mt-2 space-y-1 ${isRTL ? 'pl-4' : 'pr-4'} transition-all duration-300 ${servicesDropdownOpen ? 'block' : 'hidden'}`}>
//                                 {services.map((service, index) => (
//                                     <a
//                                         key={index}
//                                         href={`/service/${service.route}`}
//                                         className={`block py-2 px-3 text-sm ${isRTL ? 'text-left' : 'text-right'} transition-all duration-300 rounded-lg ${isDarkMode
//                                             ? 'text-gray-400 hover:text-[#00A4FF] hover:bg-gray-700/30'
//                                             : 'text-gray-600 hover:text-[#00A4FF] hover:bg-blue-50'
//                                             }`}
//                                     >
//                                         {isRTL ? service.ar : service.en}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <a
//                             href="/about"
//                             className={`block py-3 px-2 font-medium transition-all duration-300 rounded-lg ${isDarkMode
//                                 ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
//                                 : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
//                                 }`}
//                         >
//                             {isRTL ? 'من نحن' : 'About Us'}
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/contact"
//                             className={`block py-3 px-2 font-medium transition-all duration-300 rounded-lg ${isDarkMode
//                                 ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
//                                 : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
//                                 }`}
//                         >
//                             {isRTL ? 'تواصل معنا' : 'Contact'}
//                         </a>
//                     </li>
//                     <li className="pt-2">
//                         <a
//                             href="/login"
//                             className="block w-full text-center bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//                         >
//                             {isRTL ? 'تسجيل الدخول' : 'Login'}
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi';
import { GB, EG } from 'country-flag-icons/react/3x2';
import Logo from "../../../assets/logo.png"
import logoLight from "../../../assets/logoLight.png"
import { useTheme } from '../../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('en');
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    const services = [
        { ar: "أنظمة المراقبة الذكية", en: "Smart Surveillance Systems", route: "smart-surveillance-systems" },
        { ar: "أنظمة الأمان المتكاملة", en: "Integrated Security Systems", route: "integrated-security-systems" },
        { ar: "أنظمة التحكم في الإضاءة الذكية", en: "Smart Lighting Control", route: "smart-lighting-control" },
        { ar: "أنظمة التكييف الذكي", en: "Smart HVAC Systems", route: "smart-hvac-systems" },
        { ar: "خدمات صيانة ودعم فني 24/7", en: "Maintenance Support Services", route: "maintenance-support-services" },
        { ar: "أنظمة الصوت والميديا المنزلية", en: "Home Audio Media Systems", route: "home-audio-media-systems" },
        // { ar: "البنية التحتية للشبكات", en: "Network Infrastructure", route: "network-infrastructure" }
    ];

    const isRTL = i18n.language === 'ar';

    return (
        <nav className={`sticky top-0 z-50 w-full shadow-lg transition-all duration-500 border-b ${isDarkMode
            ? 'bg-gradient-to-r from-[#0A1128] via-[#1a1f3a] to-[#0A1128] border-gray-700 shadow-gray-900/50'
            : 'bg-gradient-to-r from-blue-50 via-white to-blue-50 border-gray-200 shadow-gray-200/50'
            }`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section - Always on the right */}
                    <div className="flex-shrink-0 order-3 md:order-1">
                        {
                            isDarkMode ? (
                                <a href="/" className="flex items-center">
                            <img
                                src={logoLight}
                                alt="Exora"
                                className="h-5 w-auto md:h-10 lg:h-10 object-contain"
                            />
                        </a>
                            ):(
                                <a href="/" className="flex items-center">
                            <img
                                src={Logo}
                                alt="Exora"
                                className="h-12 w-auto md:h-14 lg:h-16 object-contain"
                            />
                        </a>
                            )
                        }
                    </div>

                    {/* Desktop Navigation Links - Center */}
                    <div className={`hidden md:flex items-center justify-center flex-2 w-50 p-4 links-navbar rounded-xl transition-all duration-500 order-2 ${isDarkMode
                        ? 'bg-gradient-to-br from-[#1F3A93] via-[#2a4fb3] to-[#00A4FF] shadow-lg shadow-blue-900/30'
                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border border-gray-200 shadow-lg shadow-gray-200/50'
                        }`}>
                        <ul className="flex space-x-8 space-x-reverse">
                            <li>
                                <Link
                                    to="/"
                                    className={`font-medium relative py-2 transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:right-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isDarkMode
                                        ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
                                        : 'text-gray-700 hover:text-[#00A4FF]'
                                        }`}
                                >
                                    {isRTL ? 'الرئيسية' : 'Home'}
                                </Link>
                            </li>
                            <li className="relative group">
                                <div
                                    className={`flex items-center font-medium relative transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:right-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer ${isDarkMode
                                        ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
                                        : 'text-gray-700 hover:text-[#00A4FF]'
                                        }`}
                                    onMouseEnter={() => setServicesDropdownOpen(true)}
                                    onMouseLeave={() => setServicesDropdownOpen(false)}
                                >
                                    {isRTL ? 'خدماتنا' : 'Services'}
                                    <FiChevronDown className="mr-1 transition-transform duration-300 group-hover:rotate-180" />
                                </div>
                                {/* Services Dropdown */}
                                <div
                                    className={`absolute right-0 mt-2 w-64 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top transform backdrop-blur-sm ${servicesDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                                        } ${isDarkMode
                                            ? 'bg-gray-800/95 border border-gray-600 shadow-gray-900/50'
                                            : 'bg-white/95 border border-gray-200 shadow-gray-300/50'
                                        }`}
                                    onMouseEnter={() => setServicesDropdownOpen(true)}
                                    onMouseLeave={() => setServicesDropdownOpen(false)}
                                >
                                    <div className="py-2">
                                        {services.map((service, index) => (
                                            <a
                                                key={index}
                                                href={`/service/${service.route}`}
                                                className={`block px-4 py-3 text-sm transition-all duration-200 text-right hover:-translate-x-1 hover:transform ${isDarkMode
                                                    ? 'text-gray-300 hover:bg-[#1F3A93] hover:text-white'
                                                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#1F3A93]'
                                                    }`}
                                            >
                                                {isRTL ? service.ar : service.en}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className={`font-medium relative py-2 transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:right-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isDarkMode
                                        ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
                                        : 'text-gray-700 hover:text-[#00A4FF]'
                                        }`}
                                >
                                    {isRTL ? 'من نحن' : 'About'}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className={`font-medium relative py-2 transition-all duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:right-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isDarkMode
                                        ? 'text-white hover:text-[#00A4FF] hover:drop-shadow-lg'
                                        : 'text-gray-700 hover:text-[#00A4FF]'
                                        }`}
                                >
                                    {isRTL ? 'تواصل معنا' : 'Contact'}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Login Button, Theme Toggle and Language Selector for Desktop - Left */}
                    <div className="hidden md:flex items-center space-x-4 space-x-reverse order-3 md:order-3">
                        {/* Login Button */}
                        <a
                            href="/login"
                            className="bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            {isRTL ? 'تسجيل الدخول' : 'Login'}
                        </a>

                        {/* Language Selector */}
                        <div className="flex space-x-2 space-x-reverse">
                            <button
                                onClick={() => changeLanguage('ar')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'ar' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70 hover:opacity-100'}`}
                                aria-label="Switch to Arabic"
                            >
                                <EG title="Egypt" className="w-full h-full object-cover" />
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70 hover:opacity-100'}`}
                                aria-label="Switch to English"
                            >
                                <GB title="United Kingdom" className="w-full h-full object-cover" />
                            </button>
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${isDarkMode
                                ? 'text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 bg-gray-700/50 shadow-lg shadow-gray-900/30'
                                : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600 bg-gray-100/50 shadow-lg shadow-gray-200/50'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center flex-row-reverse order-1">
                        <button
                            onClick={toggleMenu}
                            className={`focus:outline-none text-2xl transition-all duration-300 transform hover:scale-110 ${isDarkMode
                                ? 'text-[#1F3A93] hover:text-[#00A4FF]'
                                : 'text-gray-700 hover:text-[#00A4FF]'
                                }`}
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>

                        {/* Language Selector for Mobile */}
                        <div className="mr-4 flex space-x-2 space-x-reverse">
                            <button
                                onClick={() => changeLanguage('ar')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'ar' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70'}`}
                                aria-label="Switch to Arabic"
                            >
                                <EG title="Egypt" className="w-full h-full object-cover" />
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70'}`}
                                aria-label="Switch to English"
                            >
                                <GB title="United Kingdom" className="w-full h-full object-cover" />
                            </button>
                        </div>

                        {/* Theme Toggle for Mobile */}
                        <button
                            onClick={toggleTheme}
                            className={`mr-3 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${isDarkMode
                                ? 'text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 bg-gray-700/50'
                                : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600 bg-gray-100/50'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'} shadow-xl ${isDarkMode
                ? 'bg-gradient-to-b from-gray-800 to-gray-900 shadow-gray-900/50'
                : 'bg-gradient-to-b from-white to-gray-50 shadow-gray-300/50'                }`}>
                <ul className="flex flex-col py-4 space-y-2 px-4 text-right">
                    <li>
                        <a
                            href="/"
                            className={`block py-3 px-2 font-medium transition-all duration-300 rounded-lg ${isDarkMode
                                ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
                                : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
                                }`}
                        >
                            {isRTL ? 'الرئيسية' : 'Home'}
                        </a>
                    </li>
                    <li>
                        <div className="py-2">
                            <button
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                className={`flex items-center flex-row-reverse justify-between w-full font-medium transition-all duration-300 py-3 px-2 rounded-lg ${isDarkMode
                                    ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
                                    : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
                                    }`}
                            >
                                <FiChevronDown className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                                <span>{isRTL ? 'خدماتنا' : 'Services'}</span>
                            </button>
                            <div className={`mt-2 space-y-1 pr-4 transition-all duration-300 ${servicesDropdownOpen ? 'block' : 'hidden'}`}>
                                {services.map((service, index) => (
                                    <a
                                        key={index}
                                        href={`/service/${service.route}`}
                                        className={`block py-2 px-3 text-sm text-right transition-all duration-300 rounded-lg ${isDarkMode
                                            ? 'text-gray-400 hover:text-[#00A4FF] hover:bg-gray-700/30'
                                            : 'text-gray-600 hover:text-[#00A4FF] hover:bg-blue-50'
                                            }`}
                                    >
                                        {isRTL ? service.ar : service.en}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className={`block py-3 px-2 font-medium transition-all duration-300 rounded-lg ${isDarkMode
                                ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
                                : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
                                }`}
                        >
                            {isRTL ? 'من نحن' : 'About Us'}
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className={`block py-3 px-2 font-medium transition-all duration-300 rounded-lg ${isDarkMode
                                ? 'text-gray-300 hover:text-[#00A4FF] hover:bg-gray-700/50'
                                : 'text-gray-800 hover:text-[#00A4FF] hover:bg-blue-50'
                                }`}
                        >
                            {isRTL ? 'تواصل معنا' : 'Contact'}
                        </a>
                    </li>
                    <li className="pt-2">
                        <a
                            href="/login"
                            className="block w-full text-center bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {isRTL ? 'تسجيل الدخول' : 'Login'}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

