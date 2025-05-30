import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const HeroSmartSurv = () => {
    const containerRef = useRef(null);
    const circlesRef = useRef(null);
    const imageRef = useRef(null);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const container = containerRef.current;
        const circles = circlesRef.current;
        const image = imageRef.current;

        if (!container || !circles || !image) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            // Move the circles and image in slightly different directions for parallax
            circles.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            image.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-screen overflow-hidden flex items-center justify-center transition-all duration-500 ${
                isDarkMode 
                    ? 'bg-[#0A1128]' 
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
            }`}
        >
            {/* Concentric circles container */}
            <div
                ref={circlesRef}
                className="absolute transition-transform duration-300 ease-out"
            >
                {/* Outermost circle - 4th layer */}
                <div className={`absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/5 to-[#00A4FF]/5' 
                        : 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10'
                }`}></div>
                
                {/* 3rd layer circle */}
                <div className={`absolute top-1/2 left-1/2 w-[750px] h-[750px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10' 
                        : 'bg-gradient-to-r from-[#1F3A93]/15 to-[#00A4FF]/15'
                }`}></div>
                
                {/* 2nd layer circle */}
                <div className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/15 to-[#00A4FF]/15' 
                        : 'bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20'
                }`}></div>
                
                {/* Innermost circle - 1st layer */}
                <div className={`absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20' 
                        : 'bg-gradient-to-r from-[#1F3A93]/25 to-[#00A4FF]/25'
                }`}></div>
            </div>

            {/* TV-shaped container with surveillance camera display */}
            <div
                ref={imageRef}
                className="relative z-10 transition-transform duration-300 ease-out"
            >
                {/* TV outer frame */}
                <div className={`w-[500px] h-[350px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[450px] rounded-[30px] p-[15px] flex flex-col transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-gradient-to-b from-[#333] to-[#111] shadow-[0_0_40px_rgba(0,164,255,0.3)]' 
                        : 'bg-gradient-to-b from-gray-300 to-gray-600 shadow-[0_0_40px_rgba(31,58,147,0.4)]'
                }`}>
                    {/* TV screen */}
                    <div className={`flex-1 rounded-[15px] overflow-hidden relative transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-black' 
                            : 'bg-gray-900'
                    }`}>
                        {/* Surveillance grid display */}
                        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1 p-2">
                            {/* Camera feed 1 */}
                            <div className={`relative overflow-hidden rounded-md transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-[#0A1128]' 
                                    : 'bg-gray-800'
                            }`}>
                                <img 
                                    src="/images/surveillance-1.jpg" 
                                    alt="Surveillance Camera 1"
                                    className="w-full h-full object-cover opacity-90"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1610800643993-70c6f63b4d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                                    }}
                                />
                                <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'text-white/70 bg-black/50' 
                                        : 'text-white/90 bg-black/70'
                                }`}>CAM 01</div>
                                <div className="absolute bottom-2 right-2 text-xs text-red-500 flex items-center">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                                    REC
                                </div>
                            </div>
                            
                            {/* Camera feed 2 */}
                            <div className={`relative overflow-hidden rounded-md transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-[#0A1128]' 
                                    : 'bg-gray-800'
                            }`}>
                                <img 
                                    src="/images/surveillance-2.jpg" 
                                    alt="Surveillance Camera 2"
                                    className="w-full h-full object-cover opacity-90"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1616578492900-ea5d76128eac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                                    }}
                                />
                                <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'text-white/70 bg-black/50' 
                                        : 'text-white/90 bg-black/70'
                                }`}>CAM 02</div>
                                <div className="absolute bottom-2 right-2 text-xs text-red-500 flex items-center">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                                    REC
                                </div>
                            </div>
                            
                            {/* Camera feed 3 */}
                            <div className={`relative overflow-hidden rounded-md transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-[#0A1128]' 
                                    : 'bg-gray-800'
                            }`}>
                                <img 
                                    src="/images/surveillance-3.jpg" 
                                    alt="Surveillance Camera 3"
                                    className="w-full h-full object-cover opacity-90"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1595079986998-83b8bc32c1f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                                    }}
                                />
                                <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'text-white/70 bg-black/50' 
                                        : 'text-white/90 bg-black/70'
                                }`}>CAM 03</div>
                                <div className="absolute bottom-2 right-2 text-xs text-red-500 flex items-center">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                                    REC
                                </div>
                            </div>
                            
                            {/* Camera feed 4 */}
                            <div className={`relative overflow-hidden rounded-md transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-[#0A1128]' 
                                    : 'bg-gray-800'
                            }`}>
                                <img 
                                    src="/images/surveillance-4.jpg" 
                                    alt="Surveillance Camera 4"
                                    className="w-full h-full object-cover opacity-90"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80";
                                    }}
                                />
                                <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'text-white/70 bg-black/50' 
                                        : 'text-white/90 bg-black/70'
                                }`}>CAM 04</div>
                                <div className="absolute bottom-2 right-2 text-xs text-red-500 flex items-center">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                                    REC
                                </div>
                            </div>
                        </div>
                        
                        {/* Date/time overlay */}
                        <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded transition-all duration-500 ${
                            isDarkMode 
                                ? 'text-white/70 bg-black/50' 
                                : 'text-white/90 bg-black/70'
                        }`}>
                            {new Date().toLocaleString()}
                        </div>
                    </div>
                    
                    {/* TV controls/stand */}
                    <div className="h-[20px] mt-2 flex justify-center">
                        <div className={`w-[100px] h-full rounded-b-lg transition-all duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-b from-[#333] to-[#111]' 
                                : 'bg-gradient-to-b from-gray-300 to-gray-600'
                        }`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSmartSurv;
