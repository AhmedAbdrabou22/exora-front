import React, { useEffect, useRef, useState } from 'react';
import {
    Thermometer,
    Smartphone,
    Leaf,
    ChevronRight,
    Zap,
    Clock
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const FeaturesSection = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const { isDarkMode } = useTheme();

    const features = [
        {
            id: 1,
            title: "تحكم ذكي عن بُعد",
            subtitle: "Smart Remote Control",
            description: "تحكم كامل في نظام التكييف من أي مكان في العالم عبر تطبيق الهاتف الذكي. يمكنك ضبط درجة الحرارة، تغيير الأوضاع، وجدولة أوقات التشغيل بكل سهولة.",
            features: [
                "تطبيق سهل الاستخدام لجميع الأجهزة",
                "إشعارات فورية عن حالة النظام",
                "تحكم صوتي مع Alexa و Google",
                "مشاركة التحكم مع أفراد العائلة"
            ],
            icon: <Smartphone className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
            direction: "left" // Text left, Image right
        },
        {
            id: 2,
            title: "توفير الطاقة الذكي",
            subtitle: "Smart Energy Saving",
            description: "نظام ذكي لتوفير الطاقة يتعلم من عاداتك اليومية ويضبط درجة الحرارة تلقائياً لتحقيق أقصى راحة مع أقل استهلاك للكهرباء، مما يوفر حتى 40% من فاتورة الكهرباء.",
            features: [
                "خوارزميات ذكية لتحليل الاستهلاك",
                "ضبط تلقائي حسب وجود الأشخاص",
                "تقارير مفصلة عن التوفير",
                "وضع الطاقة الاقتصادية المتقدم"
            ],
            icon: <Leaf className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format",
            direction: "right" // Text right, Image left
        },
        {
            id: 3,
            title: "مراقبة ذكية متقدمة",
            subtitle: "Advanced Smart Monitoring",
            description: "نظام مراقبة شامل يتتبع جودة الهواء، درجة الحرارة، الرطوبة، وأداء النظام على مدار الساعة. يقدم تحليلات مفصلة وتنبيهات مبكرة لأي مشاكل محتملة.",
            features: [
                "مراقبة جودة الهواء في الوقت الفعلي",
                "تنبيهات الصيانة الذكية",
                "تحليل الأداء والكفاءة",
                "تسجيل البيانات التاريخية"
            ],
            icon: <Thermometer className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop&auto=format",
            direction: "left" // Text left, Image right
        }
    ];

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => [...prev, index]);
                    }
                },
                { threshold: 0.2 }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
        }`}>
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                }`}></div>
                <div className={`absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl animate-bounce transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
                }`}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-2xl animate-ping transition-colors duration-500 ${
                    isDarkMode ? 'bg-[#00A4FF]/20' : 'bg-[#1F3A93]/20'
                }`}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                            : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                    }`}>
                        <span className="text-3xl animate-spin-slow">⚡</span>
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>مميزات متقدمة</span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            تقنيات ذكية متطورة
                        </span>
                    </h2>

                    <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        اكتشف المميزات الثورية التي تجعل أنظمة التكييف الذكية الخيار الأمثل للمستقبل
                    </p>
                </div>

                {/* Features */}
                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            ref={el => itemRefs.current[index] = el}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${feature.direction === 'right' ? 'lg:grid-flow-col-dense' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div
                                className={`${feature.direction === 'right' ? 'lg:col-start-2' : ''
                                    } transform transition-all duration-1000 ${visibleItems.includes(index)
                                        ? 'translate-x-0 opacity-100'
                                        : feature.direction === 'left'
                                            ? '-translate-x-20 opacity-0'
                                            : 'translate-x-20 opacity-0'
                                    }`}
                            >
                                <div className="space-y-6">
                                    {/* Icon & Badge */}
                                    <div className="flex items-center gap-4">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                                            isDarkMode 
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25' 
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] shadow-[#1F3A93]/25'
                                        }`}>
                                            {feature.icon}
                                        </div>
                                        <div className={`backdrop-blur-sm border rounded-full px-4 py-2 transition-all duration-500 ${
                                            isDarkMode 
                                                ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                                                : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                                        }`}>
                                            <span className={`font-semibold text-sm transition-colors duration-500 ${
                                                isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                            }`}>{feature.subtitle}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        {feature.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-3">
                                        {feature.features.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="flex items-start gap-3 group"
                                                style={{
                                                    animationDelay: `${itemIndex * 100}ms`
                                                }}
                                            >
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-all duration-300 ${
                                                    isDarkMode 
                                                        ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]' 
                                                        : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
                                                }`}>
                                                    <ChevronRight className="w-3 h-3 text-white" />
                                                </div>
                                                <span className={`leading-relaxed group-hover:text-opacity-100 transition-all duration-300 ${
                                                    isDarkMode 
                                                        ? 'text-gray-300 group-hover:text-white' 
                                                        : 'text-gray-600 group-hover:text-gray-800'
                                                }`}>
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                        isDarkMode
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white hover:shadow-[#00A4FF]/25'
                                            : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:shadow-[#1F3A93]/25'
                                    }`}>
                                        <Zap className="w-5 h-5" />
                                        اعرف المزيد
                                    </button>
                                </div>
                            </div>

                            {/* Image */}
                            <div
                                className={`${feature.direction === 'right' ? 'lg:col-start-1' : ''
                                    } transform transition-all duration-1000 delay-300 ${visibleItems.includes(index)
                                        ? 'translate-x-0 opacity-100'
                                        : feature.direction === 'left'
                                            ? 'translate-x-20 opacity-0'
                                            : '-translate-x-20 opacity-0'
                                    }`}
                            >
                                <div className="relative group">
                                    <div className={`relative overflow-hidden rounded-3xl p-6 border transition-all duration-500 hover:border-opacity-50 ${
                                        isDarkMode 
                                            ? 'bg-white/5 border-white/20 hover:border-[#00A4FF]/50' 
                                                                                        : 'bg-white/50 border-gray-200 hover:border-[#1F3A93]/50'
                                    }`}>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                        />
                                        
                                        {/* Overlay Effect */}
                                        <div className={`absolute inset-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                            isDarkMode 
                                                ? 'bg-gradient-to-t from-[#0A1128]/60 via-transparent to-[#00A4FF]/20' 
                                                : 'bg-gradient-to-t from-gray-800/40 via-transparent to-[#1F3A93]/20'
                                        }`}></div>
                                        
                                        {/* Floating Icon */}
                                        <div className={`absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 ${
                                            isDarkMode 
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25' 
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] shadow-[#1F3A93]/25'
                                        }`}>
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60 animate-ping ${
                                        isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                    }`}></div>
                                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-40 animate-bounce ${
                                        isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
                                    }`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-32 text-center">
                    <div className={`backdrop-blur-md rounded-3xl p-12 border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-white/5 border-white/20' 
                            : 'bg-white/70 border-gray-200'
                    }`}>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Clock className={`w-8 h-8 transition-colors duration-500 ${
                                isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                            }`} />
                            <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                جاهز للبدء؟
                            </h3>
                        </div>
                        
                        <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكن لأنظمة التكييف الذكية أن تحول منزلك أو مكتبك
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white hover:shadow-[#00A4FF]/25'
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:shadow-[#1F3A93]/25'
                            }`}>
                                احجز استشارة مجانية
                            </button>
                            
                            <button className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF]/10'
                                    : 'border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93]/10'
                            }`}>
                                تواصل معنا
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

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default FeaturesSection;

