import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const HeroSection = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
        }`}>
            {/* Gradient Background */}
            <div className={`absolute inset-0 transition-all duration-500 ${
                isDarkMode 
                    ? 'bg-gradient-to-br from-[#0A1128]/30 to-[#00A4FF]/30 opacity-90' 
                    : 'bg-gradient-to-br from-blue-200/40 to-indigo-300/40 opacity-60'
            }`}></div>
            
            {/* Optional: Background Pattern or Overlay */}
            <div className={`absolute inset-0 bg-[url('/src/assets/pattern.png')] bg-repeat transition-opacity duration-500 ${
                isDarkMode ? 'opacity-10' : 'opacity-5'
            }`}></div>
            
            {/* Concentric circles for background effect */}
            <div className="absolute">
                {/* Outermost circle - 4th layer */}
                <div className={`absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/5 to-[#00A4FF]/5' 
                        : 'bg-gradient-to-r from-blue-200/20 to-indigo-200/20'
                }`}></div>
                
                {/* 3rd layer circle */}
                <div className={`absolute top-1/2 left-1/2 w-[750px] h-[750px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10' 
                        : 'bg-gradient-to-r from-blue-300/25 to-indigo-300/25'
                }`}></div>
                
                {/* 2nd layer circle */}
                <div className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/15 to-[#00A4FF]/15' 
                        : 'bg-gradient-to-r from-blue-400/30 to-indigo-400/30'
                }`}></div>
                
                {/* Innermost circle - 1st layer */}
                <div className={`absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20' 
                        : 'bg-gradient-to-r from-blue-500/35 to-indigo-500/35'
                }`}></div>
            </div>
            
            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <p className={`text-2xl md:text-2xl lg:text-2xl font-bold mb-4 animate-fadeIn transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                    مرحبا بك في 
                </p>
                <p className={`text-8xl md:text-8xl lg:text-8xl font-bold mb-4 animate-fadeIn transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Exora</p>
                
                <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed transition-colors duration-500 ${
                    isDarkMode 
                        ? 'text-white opacity-90' 
                        : 'text-gray-700 opacity-95'
                }`}>
                   تجربة مستقبل المعيشة، حلول منزلية ذكية سلسة لحياة متصلة
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <a 
                        href="/explore" 
                        className={`font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:opacity-90 hover:shadow-blue-500/25' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:opacity-90 hover:shadow-blue-600/30'
                        }`}
                    >
                        استكشف الآن
                    </a>
                    <a 
                        href="/use" 
                        className={`font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 ${
                            isDarkMode 
                                ? 'bg-transparent border-[#00A4FF] text-white hover:bg-[#00A4FF]/20 hover:shadow-blue-400/25' 
                                : 'bg-transparent border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93]/10 hover:shadow-blue-600/20'
                        }`}
                    >
                        استخدم الآن
                    </a>
                </div>
            </div>
            
            {/* Optional: Decorative Elements */}
            <div className={`absolute -bottom-16 -right-16 w-64 h-64 rounded-full transition-all duration-700 ${
                isDarkMode 
                    ? 'bg-[#00A4FF]/10' 
                    : 'bg-blue-300/20'
            }`}></div>
            <div className={`absolute -top-20 -left-20 w-80 h-80 rounded-full transition-all duration-700 ${
                isDarkMode 
                    ? 'bg-[#1F3A93]/10' 
                    : 'bg-indigo-300/20'
            }`}></div>
        </div>
    );
}

export default HeroSection;
