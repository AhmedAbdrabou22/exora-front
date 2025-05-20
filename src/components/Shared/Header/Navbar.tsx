

// import React, { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { GB, EG } from 'country-flag-icons/react/3x2';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const changeLanguage = (lang) => {
//         setLanguage(lang);
//         // Here you would implement your language change logic
//         // For example, using i18n or a context provider
//     };

//     return (
//         <nav className="sticky top-0 z-50 w-full bg-white shadow">
//             <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//                 <div className="flex justify-between items-center h-20">
//                     {/* Logo Section */}
//                     <div className="flex-shrink-0">
//                         <a href="/" className="flex items-center">
//                             <h1 className="text-[#1F3A93] font-bold text-2xl">EXORA</h1>
//                             {/* Replace with your actual logo: <img src="/logo.png" alt="Exora Logo" className="h-10" /> */}
//                         </a>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden flex items-center">
//                         {/* Language Selector for Mobile */}
//                         <div className="mr-4 flex space-x-2">
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
//                             className="text-[#1F3A93] hover:text-[#00A4FF] focus:outline-none text-2xl"
//                         >
//                             {isOpen ? <FiX /> : <FiMenu />}
//                         </button>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <div className="hidden md:flex items-center justify-center flex-2 bg-gradient-to-br from-[#1F3A93] to-[#00A4FF] w-50 p-4 links-navbar">
//                         <ul className="flex space-x-8">
//                             <li>
//                                 <a
//                                     href="/"
//                                     className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
//                                 >
//                                     Home
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="/solutions"
//                                     className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
//                                 >
//                                     Services
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="/about"
//                                     className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
//                                 >
//                                     About
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="/contact"
//                                     className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
//                                 >
//                                     Contact
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Login Button and Language Selector for Desktop */}
//                     <div className="hidden md:flex items-center space-x-4">
//                         {/* Language Selector */}
//                         <div className="flex space-x-2">
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
                        
//                         {/* Login Button */}
//                         <a
//                             href="/login"
//                             className="bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-2 px-6 rounded transition-colors duration-300"
//                         >
//                             Login
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
//                 <ul className="flex flex-col py-4 space-y-2 px-4">
//                     <li>
//                         <a
//                             href="/"
//                             className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/solutions"
//                             className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
//                         >
//                             Solutions
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/products"
//                             className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
//                         >
//                             Products
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/about"
//                             className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
//                         >
//                             About Us
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/contact"
//                             className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
//                         >
//                             Contact
//                         </a>
//                     </li>
//                     <li className="pt-2">
//                         <a
//                             href="/login"
//                             className="block w-full text-center bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-2 px-4 rounded transition-colors duration-300"
//                         >
//                             Login
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { GB, EG } from 'country-flag-icons/react/3x2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        // Here you would implement your language change logic
        // For example, using i18n or a context provider
    };

    const services = [
        "أنظمة المراقبة الذكية",
        "أنظمة الأمان المتكاملة",
        "أنظمة التحكم في الإضاءة الذكية",
        "أنظمة التكييف الذكي",
        "خدمات صيانة ودعم فني 24/7",
        "أنظمة الصوت والميديا المنزلية",
        "البنية التحتية للشبكات"
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white shadow">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <h1 className="text-[#1F3A93] font-bold text-2xl">EXORA</h1>
                            {/* Replace with your actual logo: <img src="/logo.png" alt="Exora Logo" className="h-10" /> */}
                        </a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {/* Language Selector for Mobile */}
                        <div className="mr-4 flex space-x-2">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70'}`}
                                aria-label="Switch to English"
                            >
                                <GB title="United Kingdom" className="w-full h-full object-cover" />
                            </button>
                            <button
                                onClick={() => changeLanguage('ar')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'ar' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70'}`}
                                aria-label="Switch to Arabic"
                            >
                                <EG title="Egypt" className="w-full h-full object-cover" />
                            </button>
                        </div>
                        
                        <button
                            onClick={toggleMenu}
                            className="text-[#1F3A93] hover:text-[#00A4FF] focus:outline-none text-2xl"
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center justify-center flex-2 bg-gradient-to-br from-[#1F3A93] to-[#00A4FF] w-50 p-4 links-navbar">
                        <ul className="flex space-x-8">
                            <li>
                                <a
                                    href="/"
                                    className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="relative group">
                                <div 
                                    className="flex items-center text-white hover:text-[#00A4FF] font-medium relative  transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer"
                                    onMouseEnter={() => setServicesDropdownOpen(true)}
                                    onMouseLeave={() => setServicesDropdownOpen(false)}
                                >
                                    Services
                                    <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                                </div>
                                {/* Services Dropdown */}
                                <div 
                                    className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top transform ${
                                        servicesDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                                    }`}
                                    onMouseEnter={() => setServicesDropdownOpen(true)}
                                    onMouseLeave={() => setServicesDropdownOpen(false)}
                                >
                                    <div className="py-2">
                                        {services.map((service, index) => (
                                            <a 
                                                key={index}
                                                href={`/services/${index + 1}`}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1F3A93] hover:text-white transition-colors duration-200 text-right"
                                            >
                                                {service}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-white hover:text-[#00A4FF] font-medium relative py-2 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#00A4FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Login Button and Language Selector for Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="flex space-x-2">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70 hover:opacity-100'}`}
                                aria-label="Switch to English"
                            >
                                <GB title="United Kingdom" className="w-full h-full object-cover" />
                            </button>
                            <button
                                onClick={() => changeLanguage('ar')}
                                className={`w-8 h-6 rounded overflow-hidden transition-all duration-300 ${language === 'ar' ? 'ring-2 ring-[#00A4FF] scale-110' : 'opacity-70 hover:opacity-100'}`}
                                aria-label="Switch to Arabic"
                            >
                                <EG title="Egypt" className="w-full h-full object-cover" />
                            </button>
                        </div>
                        
                        {/* Login Button */}
                        <a
                            href="/login"
                            className="bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
                <ul className="flex flex-col py-4 space-y-2 px-4">
                    <li>
                        <a
                            href="/"
                            className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="py-2">
                            <button 
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                className="flex items-center justify-between w-full text-gray-800 hover:text-[#00A4FF] font-medium"
                            >
                                <span>Services</span>
                                <FiChevronDown className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`mt-2 space-y-1 pl-4 ${servicesDropdownOpen ? 'block' : 'hidden'}`}>
                                {services.map((service, index) => (
                                    <a
                                        key={index}
                                        href={`/services/${index + 1}`}
                                        className="block py-1 text-gray-600 hover:text-[#00A4FF] text-sm text-right"
                                    >
                                        {service}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="block py-2 text-gray-800 hover:text-[#00A4FF] font-medium"
                        >
                            Contact
                        </a>
                    </li>
                    <li className="pt-2">
                        <a
                            href="/login"
                            className="block w-full text-center bg-[#1F3A93] hover:bg-[#00A4FF] text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                        >
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
