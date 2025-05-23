import { useState } from 'react';

const HeroSection = () => {
    const [isLightOn, setIsLightOn] = useState(false);

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1F3A93] flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Kitchen Image with Lighting Effect */}
                <div className="relative">
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${isLightOn ? 'shadow-2xl shadow-yellow-400/30' : 'shadow-xl shadow-black/50'
                        }`}>
                        <img
                            src="https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/671cfdd21567a8ca3fd2e0ea_standby-light-desktop-p-1600.jpg"
                            alt="Smart Kitchen"
                            className={`w-full h-[500px] object-cover transition-all duration-500 ${isLightOn ? 'brightness-110 contrast-105' : 'brightness-[0.2] contrast-50'
                                }`}
                        />
                        {/* Lighting Overlay */}
                        <div className={`absolute inset-0 transition-all duration-500 ${isLightOn
                            ? 'bg-gradient-to-b from-yellow-200/20 via-transparent to-yellow-100/10'
                            : 'bg-gradient-to-b from-black/70 via-gray-900/60 to-black/80'
                            }`} />
                        {/* Light Bulb Icon */}
                        <div className="absolute top-6 left-6">
                            <div className={`p-3 rounded-full transition-all duration-300 ${isLightOn ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-700 text-gray-400'
                                }`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM6 10a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zM10 16a4 4 0 004-4v-2a4 4 0 10-8 0v2a4 4 0 004 4z" />
                                </svg>
                            </div>
                        </div>
                        {/* Switch Button في وسط الصورة */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-4 bg-black/30 backdrop-blur-sm rounded-2xl p-6">
                                <button
                                    onClick={() => setIsLightOn(!isLightOn)}
                                    className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 ${isLightOn ? 'bg-[#00A4FF]' : 'bg-gray-600'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform duration-300 ${isLightOn ? 'translate-x-11' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                                <span className="text-lg font-medium text-white">
                                    {isLightOn ? 'مشغل' : 'مطفأ'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="text-white space-y-6 text-right">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        نظام الإضاءة <span className="text-[#00A4FF]">الذكية</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        هي أنظمة متطورة تتيح للمستخدم التحكم الكامل في وحدات الإضاءة
                        داخل المنشآت السكنية والتجارية عن بُعد أو بشكل أوتوماتيكي، وذلك من
                        خلال تطبيقات ذكية، أجهزة تحكم، أو أوامر صوتية.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
