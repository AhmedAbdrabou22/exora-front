import React, { useState } from 'react';
import {
    Building2,
    Home,
    Factory,
    ChevronRight
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const ComponentsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { isDarkMode } = useTheme();

    const tabs = [
        {
            id: 0,
            title: "المكاتب التجارية",
            subtitle: "Commercial Offices",
            icon: <Building2 className="w-6 h-6" />,
            description: "حلول تكييف ذكية مصممة خصيصاً للمكاتب والمباني التجارية لضمان بيئة عمل مريحة ومنتجة",
            features: [
                "تحكم مركزي في جميع الطوابق والمكاتب",
                "توزيع هواء متوازن في جميع المساحات",
                "نظام توفير طاقة متقدم للمباني الكبيرة",
                "مراقبة جودة الهواء والرطوبة",
                "تحكم في درجات الحرارة حسب المناطق"
            ],
            image: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/675338d9b1cc516adb22c75f_office1s-p-1600.webp"
        },
        {
            id: 1,
            title: "المساحات المفتوحة",
            subtitle: "Open Spaces",
            icon: <Home className="w-6 h-6" />,
            description: "أنظمة تكييف متطورة للمساحات المفتوحة والصالات الكبيرة مع توزيع مثالي للهواء البارد",
            features: [
                "تغطية شاملة للمساحات الواسعة",
                "توزيع هواء متجانس بدون نقاط ساخنة",
                "تحكم ذكي في سرعة المراوح",
                "نظام تنقية هواء متقدم",
                "تشغيل هادئ ومريح"
            ],
            image: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/675338f1df323497b6362fe2_office2s-p-1600.webp"
        },
        {
            id: 2,
            title: "البيئات الصناعية",
            subtitle: "Industrial Environments",
            icon: <Factory className="w-6 h-6" />,
            description: "حلول تكييف قوية ومتينة مصممة للبيئات الصناعية والمصانع مع قدرة تحمل عالية",
            features: [
                "مقاومة للظروف الصناعية القاسية",
                "قدرة تبريد عالية للمساحات الكبيرة",
                "فلاتر متقدمة لتنقية الهواء من الغبار",
                "نظام صيانة ذكي وتنبيهات مبكرة",
                "كفاءة طاقة عالية لتوفير التكاليف"
            ],
            image: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/67533908840fa5c5f8d27597_office3s-p-1600.webp"
        }
    ];

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
        }`}>
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className={`absolute top-32 right-20 w-28 h-28 rounded-full blur-xl animate-pulse transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                }`}></div>
                <div className={`absolute bottom-32 left-20 w-36 h-36 rounded-full blur-xl animate-bounce transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
                }`}></div>
                <div className={`absolute top-1/3 left-1/3 w-32 h-32 rounded-full blur-2xl animate-ping transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#00A4FF]/30' : 'bg-[#1F3A93]/30'
                }`}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 border-[#00A4FF]/30' 
                            : 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10 border-[#1F3A93]/30'
                    }`}>
                        <span className="text-3xl animate-spin-slow">🏢</span>
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>حلول متنوعة</span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            أنظمة تكييف لكل بيئة
                        </span>
                    </h2>

                    <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        حلول تكييف ذكية مصممة خصيصاً لتناسب احتياجات البيئات المختلفة
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                                activeTab === index
                                    ? isDarkMode
                                        ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25 scale-105'
                                        : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25 scale-105'
                                    : isDarkMode
                                        ? 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/15 hover:text-white border border-white/20'
                                        : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 hover:text-gray-800 border border-gray-200'
                            }`}
                        >
                            {tab.icon}
                            <div className="text-left">
                                <div className="text-sm font-bold">{tab.title}</div>
                                <div className="text-xs opacity-80">{tab.subtitle}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className={`backdrop-blur-md rounded-3xl overflow-hidden border transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-white/10 border-white/20' 
                        : 'bg-white/70 border-gray-200 shadow-xl'
                }`}>
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-96 lg:h-auto">
                            <img
                                src={tabs[activeTab].image}
                                alt={tabs[activeTab].title}
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            <div className={`absolute inset-0 transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-r from-[#0A1128]/60 via-transparent to-transparent' 
                                    : 'bg-gradient-to-r from-gray-800/40 via-transparent to-transparent'
                            }`}></div>

                            {/* Overlay Content */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className={`backdrop-blur-md rounded-xl p-4 border transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'bg-white/10 border-white/20' 
                                        : 'bg-white/80 border-gray-200'
                                }`}>
                                    <div className={`flex items-center gap-3 transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {tabs[activeTab].icon}
                                        <div>
                                            <div className="font-bold">{tabs[activeTab].title}</div>
                                            <div className={`text-sm transition-colors duration-500 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>{tabs[activeTab].subtitle}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]' 
                                        : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
                                }`}>
                                    {tabs[activeTab].icon}
                                </div>
                                <div>
                                    <h3 className={`text-2xl lg:text-3xl font-bold transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {tabs[activeTab].title}
                                    </h3>
                                    <p className={`font-semibold transition-colors duration-500 ${
                                        isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                    }`}>
                                        {tabs[activeTab].subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className={`text-lg mb-8 leading-relaxed transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                {tabs[activeTab].description}
                            </p>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                <h4 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>المميزات الرئيسية:</h4>
                                {tabs[activeTab].features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                        }`} />
                                        <span className={`leading-relaxed transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white hover:shadow-[#00A4FF]/25'
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:shadow-[#1F3A93]/25'
                            }`}>
                                اطلب عرض سعر مخصص
                            </button>
                        </div>
                    </div>
                                </div>

                {/* Additional Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {[
                        {
                            icon: "🌡️",
                            title: "تحكم دقيق",
                            description: "ضبط درجة الحرارة بدقة ±0.5 درجة مئوية"
                        },
                        {
                            icon: "⚡",
                            title: "كفاءة عالية",
                            description: "توفير يصل إلى 50% في استهلاك الطاقة"
                        },
                        {
                            icon: "🔧",
                            title: "صيانة ذكية",
                            description: "تشخيص تلقائي وتنبيهات الصيانة المبكرة"
                        }
                    ].map((card, index) => (
                        <div key={index} className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 group ${
                            isDarkMode 
                                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#00A4FF]/50' 
                                : 'bg-white/50 border-gray-200 hover:bg-white/80 hover:border-[#1F3A93]/50'
                        }`}>
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                {card.title}
                            </h4>
                            <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className={`backdrop-blur-md rounded-3xl p-10 border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-gradient-to-r from-[#00A4FF]/10 to-[#1F3A93]/10 border-[#00A4FF]/30' 
                            : 'bg-gradient-to-r from-[#1F3A93]/5 to-[#00A4FF]/5 border-[#1F3A93]/30'
                    }`}>
                        <h3 className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            هل تحتاج حلاً مخصصاً؟
                        </h3>
                        
                        <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            فريقنا من المهندسين المتخصصين جاهز لتصميم نظام تكييف ذكي يناسب احتياجاتك الخاصة
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white hover:shadow-[#00A4FF]/25'
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:shadow-[#1F3A93]/25'
                            }`}>
                                احجز زيارة فنية مجانية
                            </button>
                            
                            <button className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF]/10'
                                    : 'border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93]/10'
                            }`}>
                                تحدث مع خبير
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ComponentsSection;

