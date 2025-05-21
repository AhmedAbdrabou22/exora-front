// import React from 'react';

// const HeroSection = () => {
//     return (
//         <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//             {/* Gradient Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A93] to-[#00A4FF] opacity-90"></div>
            
//             {/* Optional: Background Pattern or Overlay */}
//             <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] opacity-20 bg-repeat"></div>
            
//             {/* Content Container */}
//             <div className="container mx-auto px-4 relative z-10 text-center">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
//                     Welcome to <span className="bg-gradient-to-r from-white to-[#00A4FF] inline-block text-transparent bg-clip-text drop-shadow-lg">Exora</span>
//                 </h1>
                
//                 <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
//                     Experience the Future of Living, Seamless Smart Home Solutions for a Connected Life
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//                     <a 
//                         href="/explore" 
//                         className="bg-white text-[#1F3A93] hover:bg-opacity-90 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//                     >
//                         استكشف الآن
//                     </a>
//                     <a 
//                         href="/use" 
//                         className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1F3A93] font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//                     >
//                         استخدم الآن
//                     </a>
//                 </div>
//             </div>
            
//             {/* Optional: Decorative Elements */}
//             <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white opacity-10 rounded-full"></div>
//             <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full"></div>
//         </div>
//     );
// }

// export default HeroSection;

import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1128]">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A93]/30 to-[#00A4FF]/30 opacity-90"></div>
            
            {/* Optional: Background Pattern or Overlay */}
            <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] opacity-10 bg-repeat"></div>
            
            {/* Concentric circles for background effect */}
            <div className="absolute">
                {/* Outermost circle - 4th layer */}
                <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-[#1F3A93]/5 to-[#00A4FF]/5 -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* 3rd layer circle */}
                <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10 -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* 2nd layer circle */}
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#1F3A93]/15 to-[#00A4FF]/15 -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Innermost circle - 1st layer */}
                <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
                    Welcome to <span className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] inline-block text-transparent bg-clip-text drop-shadow-lg">Exora</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
                    Experience the Future of Living, Seamless Smart Home Solutions for a Connected Life
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <a 
                        href="/explore" 
                        className="bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:opacity-90 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        استكشف الآن
                    </a>
                    <a 
                        href="/use" 
                        className="bg-transparent border-2 border-[#00A4FF] text-white hover:bg-[#00A4FF]/20 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        استخدم الآن
                    </a>
                </div>
            </div>
            
            {/* Optional: Decorative Elements */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#00A4FF]/10 rounded-full"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#1F3A93]/10 rounded-full"></div>
        </div>
    );
}

export default HeroSection;
