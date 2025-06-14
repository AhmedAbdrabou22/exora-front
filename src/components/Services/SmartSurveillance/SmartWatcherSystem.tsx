import React from 'react';
import { FaLock, FaDesktop, FaShieldAlt, FaFingerprint, FaCheck, FaBrain, FaNetworkWired } from 'react-icons/fa';
import { useTheme } from '../../../contexts/ThemeContext';

const SmartWatcherSystem = () => {
    const { isDarkMode } = useTheme();

    const basicFeatures = [
        {
            icon: <FaLock size="2em" />,
            title: "تنبيهات فورية",
            description: "استلم إشعارات فورية على هاتفك عند اكتشاف حركة غير عادية أو عند فتح الأبواب.",
            color: isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
        },
        {
            icon: <FaShieldAlt size="2em" />,
            title: "تخزين آمن",
            description: "تخزين مشفر للتسجيلات على السحابة أو محليا مع إمكانية الوصول إليها في أي وقت.",
            color: isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
        },
        {
            icon: <FaDesktop size="2em" />,
            title: "مراقبة عن بعد",
            description: "راقب منزلك أو شركتك من أي مكان في العالم عبر تطبيق سهل الاستخدام على هاتفك.",
            color: isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
        }
    ];

    const advancedFeatures = [
        {
            icon: <FaBrain size="2em" />,
            title: "تقنية الذكاء الاصطناعي",
            description: "تقنية الذكاء الاصطناعي المتقدمة تساعد في تحليل الفيديو وتمييز الأشخاص والأشياء والسلوكيات المشبوهة تلقائيا.",
            features: [
                "التعرف على الوجوه وتحديد هوية الأشخاص",
                "اكتشاف السلوكيات المشبوهة والتنبيه الفوري",
                "تتبع الأشياء والأشخاص عبر مناطق متعددة"
            ],
            color: isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
        },
        {
            icon: <FaNetworkWired size="2em" />,
            title: "تكامل مع أنظمة الأمان",
            description: "يتكامل نظام المراقبة الذكي مع أنظمة الأمان الأخرى لتوفير حماية شاملة لمنزلك أو شركتك.",
            features: [
                "ربط مع أنظمة الإنذار وأجهزة استشعار الحركة",
                "التحكم في الأبواب والأقفال الإلكترونية",
                "اتصال مباشر بخدمات الطوارئ عند الحاجة"
            ],
            color: isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
        }
    ];

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
        }`}>
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#00A4FF]/30' : 'bg-[#1F3A93]/30'
                }`} />
                <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-2xl opacity-20 transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#1F3A93]/30' : 'bg-[#00A4FF]/30'
                }`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            مميزات نظام المراقبة الذكي
                        </span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto text-right transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        اكتشف المميزات المتقدمة لأنظمة المراقبة الذكية التي توفر حماية شاملة وراحة بال كاملة
                    </p>
                </div>

                {/* Basic Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {basicFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                                isDarkMode 
                                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-[#00A4FF]/50 hover:shadow-[#00A4FF]/20' 
                                    : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200 hover:border-[#1F3A93]/50 hover:shadow-[#1F3A93]/20'
                            }`}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20' 
                                    : 'bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20'
                            } blur-xl`} />
                            
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'bg-[#1F3A93]/20 group-hover:bg-[#00A4FF]/20' 
                                        : 'bg-[#1F3A93]/10 group-hover:bg-[#00A4FF]/10'
                                }`}>
                                    <div className={`transition-colors duration-500 ${feature.color}`}>
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-xl font-bold mb-4 text-right transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-right leading-relaxed transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-br from-[#00A4FF] to-[#1F3A93]' 
                                    : 'bg-gradient-to-br from-[#1F3A93] to-[#00A4FF]'
                            }`} />
                        </div>
                    ))}
                </div>

                {/* Advanced Features - Full Width */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {advancedFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                                isDarkMode 
                                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-[#00A4FF]/50 hover:shadow-[#00A4FF]/20' 
                                    : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200 hover:border-[#1F3A93]/50 hover:shadow-[#1F3A93]/20'
                            }`}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20' 
                                    : 'bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20'
                            } blur-xl`} />
                            
                            <div className="relative z-10">
                                {/* Header with Icon and Title */}
                                <div className="flex items-center justify-start gap-4 mb-6">
                                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                        isDarkMode 
                                            ? 'bg-[#1F3A93]/20 group-hover:bg-[#00A4FF]/20' 
                                            : 'bg-[#1F3A93]/10 group-hover:bg-[#00A4FF]/10'
                                    }`}>
                                        <div className={`transition-colors duration-500 ${feature.color}`}>
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl font-bold text-right transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className={`text-right leading-relaxed mb-6 text-lg transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {feature.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-4">
                                    {feature.features.map((item, itemIndex) => (
                                        <div key={itemIndex} className={`flex items-center justify-start gap-4 p-3 rounded-lg transition-all duration-300 ${
                                            isDarkMode 
                                                ? 'bg-gray-700/30 hover:bg-gray-700/50' 
                                                : 'bg-gray-50 hover:bg-gray-100'
                                        }`}>
                                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                isDarkMode 
                                                    ? 'bg-green-500/20 text-green-400' 
                                                    : 'bg-green-500/20 text-green-600'
                                            }`}>
                                                <FaCheck className="text-sm" />
                                            </div>
                                            <span className={`text-right justify-start text-base transition-colors duration-500 ${
                                                isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                            }`}>
                                                {item}
                                            </span>
                                            
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-br from-[#00A4FF] to-[#1F3A93]' 
                                    : 'bg-gradient-to-br from-[#1F3A93] to-[#00A4FF]'
                            }`} />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-sm border transition-all duration-500 hover:scale-105 cursor-pointer ${
                        isDarkMode 
                            ? 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] border-white/20 text-white hover:shadow-2xl hover:shadow-[#00A4FF]/25'                            : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] border-white/50 text-white hover:shadow-2xl hover:shadow-[#1F3A93]/25'
                    }`}>
                        <span className="text-lg font-semibold">احصل على استشارة مجانية الآن</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartWatcherSystem;

