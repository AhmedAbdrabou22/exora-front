import { useState, useCallback, useMemo } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [brightness, setBrightness] = useState(50);
    const [imagesLoaded, setImagesLoaded] = useState({ light: false, dark: false });
    const { isDarkMode } = useTheme();

    const features = [
        {
            title: "التحكم الصوتي",
            description: "تحكم في الإضاءة باستخدام الأوامر الصوتية",
            icon: "🎤"
        },
        {
            title: "توفير الطاقة",
            description: "نظام ذكي لتوفير استهلاك الكهرباء",
            icon: "⚡"
        },
        {
            title: "التحكم عن بُعد",
            description: "تحكم في الإضاءة من أي مكان في العالم",
            icon: "📱"
        },
        {
            title: "الجدولة الذكية",
            description: "برمجة أوقات تشغيل وإطفاء الإضاءة",
            icon: "⏰"
        }
    ];

    // Image URLs
    const imageUrls = useMemo(() => ({
        light: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/67213aaceb3cc1433fee0df3_4.png",
        dark: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/6721231f79a18551f612ef8f_5.png"
    }), []);

    // Handle image load
    const handleImageLoad = useCallback((imageType) => {
        setImagesLoaded(prev => ({ ...prev, [imageType]: true }));
    }, []);

    // Optimized brightness change handler
    const handleBrightnessChange = useCallback((e) => {
        setBrightness(parseInt(e.target.value));
    }, []);

    // Determine which image to show based on brightness
    const isLightOn = brightness > 0;
    const currentImage = isLightOn ? imageUrls.light : imageUrls.dark;
    const imageOpacity = isLightOn ? brightness / 100 : 1;

    return (
        <section className={`py-20 transition-all duration-500 ${isDarkMode ? 'bg-[#0A1128]' : 'bg-gray-50'
            }`}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                        مميزات نظام الإضاءة الذكية
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        اكتشف كيف يمكن لنظام الإضاءة الذكية أن يغير حياتك ويجعل منزلك أكثر راحة وذكاءً
                    </p>
                </div>

                {/* Features List Section */}
                <div className="mb-20">
                    <h3 className={`text-3xl font-bold text-center mb-12 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>المميزات الرئيسية</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${activeFeature === index
                                        ? isDarkMode
                                            ? 'bg-[#1F3A93] border-[#00A4FF] transform scale-105'
                                            : 'bg-[#1F3A93] border-[#00A4FF] transform scale-105'
                                        : isDarkMode
                                            ? 'bg-gray-800/50 border-transparent hover:bg-gray-800 hover:scale-102'
                                            : 'bg-white border-gray-200 hover:bg-gray-50 hover:scale-102 shadow-md hover:shadow-lg'
                                    }`}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="text-center">
                                    <span className="text-4xl mb-4 block">{feature.icon}</span>
                                    <h4 className={`text-lg font-bold mb-3 transition-colors duration-500 ${activeFeature === index
                                            ? 'text-white'
                                            : isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                        {feature.title}
                                    </h4>
                                    <p className={`text-sm transition-colors duration-500 ${activeFeature === index
                                            ? 'text-gray-200'
                                            : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Preview Section */}
                <div>
                    <div className="text-center mb-8">
                        <h3 className={`text-3xl font-bold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>معاينة مباشرة</h3>
                        <p className={`transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>شاهد تأثير التحكم على المصباح الذكي</p>
                    </div>

                    <div className="mx-auto">
                        <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${isLightOn
                                ? `shadow-2xl shadow-yellow-400/${Math.floor(brightness / 4)}`
                                : isDarkMode
                                    ? 'shadow-xl shadow-black/50'
                                    : 'shadow-xl shadow-gray-500/30'
                            }`}>

                            {/* Image Container with Lazy Loading */}
                            <div className="relative w-full h-[500px]">
                                {/* Dark Image (Always loaded first) */}
                                <img
                                    src={imageUrls.dark}
                                    alt="Smart Lamp Off"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLightOn ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    loading="eager"
                                    onLoad={() => handleImageLoad('dark')}
                                />

                                {/* Light Image (Lazy loaded) */}
                                <img
                                    src={imageUrls.light}
                                    alt="Smart Lamp On"
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isLightOn ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    style={{
                                        filter: isLightOn ? `brightness(${0.7 + (brightness / 100) * 0.3}) contrast(${0.9 + (brightness / 100) * 0.2})` : 'brightness(0.7)'
                                    }}
                                    loading="lazy"
                                    onLoad={() => handleImageLoad('light')}
                                />

                                {/* Loading Placeholder */}
                                {(!imagesLoaded.dark || (isLightOn && !imagesLoaded.light)) && (
                                    <div className={`absolute inset-0 animate-pulse flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                                        }`}>
                                        <div className={`text-lg transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>جاري التحميل...</div>
                                    </div>
                                )}

                                {/* Brightness Overlay for smooth transitions */}
                                {isLightOn && (
                                    <div
                                        className="absolute inset-0 transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(circle at 60% 45%, rgba(255, 255, 255, ${brightness / 400}) 0%, transparent 50%)`,
                                            opacity: brightness / 100
                                        }}
                                    />
                                )}
                            </div>

                            {/* Brightness Indicator */}
                            <div className="absolute top-6 left-6">
                                <div className={`px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 ${isLightOn
                                        ? 'bg-white/80 text-gray-900'
                                        : isDarkMode
                                            ? 'bg-gray-700/80 text-gray-300'
                                            : 'bg-gray-600/80 text-gray-100'
                                    }`}>
                                    <span className="font-bold text-lg">{brightness}%</span>
                                </div>
                            </div>

                            {/* Status Indicator */}
                            <div className="absolute bottom-6 right-6">
                                <div className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 ${isLightOn ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'
                                    }`}>
                                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${isLightOn ? 'bg-green-200 animate-pulse' : 'bg-red-200'
                                        }`} />
                                    <span className="font-medium text-lg">
                                        {isLightOn ? 'مشغل' : 'مطفأ'}
                                    </span>
                                </div>
                            </div>

                            {/* Performance Indicator (Development only) */}
                            {process.env.NODE_ENV === 'development' && (
                                <div className="absolute top-6 right-6">
                                    <div className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded">
                                        {imagesLoaded.dark && imagesLoaded.light ? '✓ Loaded' : '⏳ Loading'}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Brightness Control */}
                <div className="mb-20 mt-12">
                    <div className="max-w-2xl mx-auto">
                        <div className="rounded-xl">
                            <div className="flex items-center justify-between mb-6">
                                <span className={`font-medium text-lg transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>شدة الإضاءة</span>
                                <span className={`font-bold text-2xl transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                    }`}>{brightness}%</span>
                            </div>

                            {/* Custom Range Slider */}
                            <div className="relative">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={brightness}
                                    onChange={handleBrightnessChange}
                                    className={`w-full h-4 rounded-lg appearance-none cursor-pointer mb-4 slider ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                        }`}
                                    style={{
                                        background: `linear-gradient(to right, ${isDarkMode ? '#00A4FF' : '#1F3A93'} 0%, ${isDarkMode ? '#00A4FF' : '#1F3A93'} ${brightness}%, ${isDarkMode ? '#374151' : '#D1D5DB'} ${brightness}%, ${isDarkMode ? '#374151' : '#D1D5DB'} 100%)`
                                    }}
                                />

                                {/* Quick Preset Buttons */}
                                <div className="flex justify-between mt-4 gap-2">
                                    {[0, 25, 50, 75, 100].map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => setBrightness(preset)}
                                            className={`px-3 py-1 rounded text-sm transition-all duration-200 ${brightness === preset
                                                    ? isDarkMode
                                                        ? 'bg-[#00A4FF] text-white'
                                                        : 'bg-[#1F3A93] text-white'
                                                    : isDarkMode
                                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            {preset}%
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={`flex justify-between text-sm mb-6 transition-colors duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                <span>مطفأ</span>
                                <span>ساطع</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preload images for better performance */}
            <div className="hidden">
                <link rel="preload" as="image" href={imageUrls.dark} />
                <link rel="preload" as="image" href={imageUrls.light} />
            </div>

            {/* Custom Slider Styles */}
            <style jsx global>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    border: 3px solid white;
                }

                .slider::-webkit-slider-thumb:hover {
                    transform: scale(1.3);
                    box-shadow: 0 0 20px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }

                .slider::-webkit-slider-thumb:active {
                    transform: scale(1.1);
                }

                .slider::-moz-range-thumb {
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                .slider::-moz-range-thumb:hover {
                    transform: scale(1.3);
                    box-shadow: 0 0 20px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }

                .slider::-moz-range-thumb:active {
                    transform: scale(1.1);
                }

                .slider:focus {
                    outline: none;
                }

                .slider:focus::-webkit-slider-thumb {
                    box-shadow: 0 0 25px ${isDarkMode ? 'rgba(0, 164, 255, 0.8)' : 'rgba(31, 58, 147, 0.8)'};
                }

                .slider:focus::-moz-range-thumb {
                    box-shadow: 0 0 25px ${isDarkMode ? 'rgba(0, 164, 255, 0.8)' : 'rgba(31, 58, 147, 0.8)'};
                }

                /* Smooth transitions for all interactive elements */
                .slider, .slider::-webkit-slider-thumb, .slider::-moz-range-thumb {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Performance optimizations */
                .slider {
                    will-change: background;
                }

                .slider::-webkit-slider-thumb {
                    will-change: transform, box-shadow;
                }

                .slider::-moz-range-thumb {
                    will-change: transform, box-shadow;
                }
            `}</style>
        </section>
    );
};

export default FeaturesSection;

