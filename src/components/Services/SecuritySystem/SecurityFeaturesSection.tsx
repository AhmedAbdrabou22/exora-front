import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const SecurityFeaturesSection = () => {
    const [visibleSections, setVisibleSections] = useState<number[]>([]);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const { isDarkMode } = useTheme();

    const features = [
        {
            id: 1,
            title: "الأقفال الذكية",
            subtitle: "Smart Locks Technology",
            description: "تقنية متطورة لقفل وفتح الأبواب بطرق متعددة آمنة ومريحة. يمكنك التحكم في منزلك أو مكتبك من أي مكان في العالم.",
            details: [
                "فتح بالبصمة، الكارت، الكود، أو التطبيق",
                "تسجيل شامل لجميع عمليات الدخول والخروج",
                "إمكانية تحديد أوقات الدخول لكل شخص",
                "إنذارات فورية في حالة محاولة الاختراق"
            ],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
            icon: "🔐",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "أنظمة الإنتركم الذكي",
            subtitle: "Smart Video Intercom",
            description: "تواصل آمن ومرئي مع الزوار قبل السماح لهم بالدخول. رؤية واضحة وصوت نقي مع إمكانية التسجيل والحفظ.",
            details: [
                "شاشة عالية الوضوح مع صوت نقي",
                "إمكانية الرد من الموبايل في أي مكان",
                "تسجيل تلقائي لجميع المكالمات",
                "رؤية ليلية متطورة للأمان الكامل"
            ],
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
            icon: "📹",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "أنظمة البصمة والكارت",
            subtitle: "Access Control Systems",
            description: "حلول متقدمة لإدارة الدخول في المؤسسات والشركات مع تتبع دقيق لأوقات الحضور والانصراف.",
            details: [
                "تسجيل دقيق لأوقات الحضور والانصراف",
                "إدارة الصلاحيات حسب المستوى الوظيفي",
                "تقارير مفصلة وإحصائيات شاملة",
                "ربط مع أنظمة الرواتب والموارد البشرية"
            ],
            image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop",
            icon: "👆",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 4,
            title: "الحساسات الأمنية",
            subtitle: "Security Sensors Network",
            description: "شبكة متكاملة من الحساسات الذكية لكشف أي تحرك مشبوه أو خطر محتمل مع إنذارات فورية.",
            details: [
                "حساسات حركة بتقنية الأشعة تحت الحمراء",
                "حساسات الأبواب والنوافذ المغناطيسية",
                "أجهزة كشف الدخان والغازات الضارة",
                "إنذارات فورية على الموبايل والشاشات"
            ],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
            icon: "🚨",
            color: "from-red-500 to-orange-500"
        }
    ];

    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleSections(prev =>
                                prev.includes(index) ? prev : [...prev, index]
                            );
                        }
                    });
                },
                { threshold: 0.3 }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${isDarkMode
                ? 'bg-gradient-to-br from-[#0A1128] via-[#001122] to-[#1F3A93]'
                : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
            }`}>
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className={`absolute top-32 right-20 w-64 h-64 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                    }`}></div>
                <div className={`absolute bottom-20 left-16 w-48 h-48 rounded-full blur-2xl animate-bounce ${isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
                    }`}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-xl animate-ping ${isDarkMode ? 'bg-[#00A4FF]/30' : 'bg-[#1F3A93]/30'
                    }`}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 ${isDarkMode
                            ? 'bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 border-[#00A4FF]/30'
                            : 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10 border-[#1F3A93]/30'
                        }`}>
                        <span className="text-3xl animate-pulse">⚡</span>
                        <span className={`font-semibold transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                            }`}>مميزات أنظمة الأمان</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className={`bg-clip-text text-transparent transition-all duration-500 ${isDarkMode
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]'
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
                            }`}>
                            تقنيات متطورة
                        </span>
                    </h2>

                    <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        اكتشف كيف تعمل أنظمة الأمان المتكاملة لحماية ممتلكاتك بأحدث التقنيات العالمية
                    </p>
                </div>

                {/* Features List */}
                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            ref={el => sectionRefs.current[index] = el}
                            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.includes(index)
                                ? 'opacity-100 translate-x-0'
                                : index % 2 === 0
                                    ? 'opacity-0 translate-x-20'
                                    : 'opacity-0 -translate-x-20'
                                }`}
                        >
                            {/* Content Side - Always on the right for Arabic */}
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl shadow-lg`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-3xl font-bold mb-2 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`font-semibold transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                            }`}>
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <p className={`text-xl leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {feature.description}
                                </p>

                                <div className="space-y-4">
                                    {feature.details.map((detail, detailIndex) => (
                                        <div
                                            key={detailIndex}
                                            className={`flex items-start gap-4 transition-all duration-500 ${visibleSections.includes(index)
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-10'
                                                }`}
                                            style={{ transitionDelay: `${detailIndex * 200}ms` }}
                                        >
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0 animate-pulse`}></div>
                                            <span className={`leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <button className={`px-8 py-4 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r ${feature.color}`}>
                                        اعرف المزيد
                                    </button>
                                </div>
                            </div>

                            {/* Image Side - Always on the left for Arabic */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative group`}>
                                <div className={`relative overflow-hidden rounded-3xl p-6 hover:border-[#00A4FF]/50 transition-all duration-500 ${isDarkMode
                                        ? 'bg-white/10 backdrop-blur-sm border border-white/20'
                                        : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl'
                                    }`}>
                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDarkMode ? 'from-[#0A1128]/60' : 'from-gray-900/40'
                                            }`}></div>

                                        {/* Floating Icon */}
                                        <div className={`absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Tech Specs Overlay */}
                                    <div className={`absolute bottom-6 left-6 right-6 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 ${isDarkMode ? 'bg-black/50' : 'bg-white/90'
                                        }`}>
                                        <h4 className={`font-bold mb-2 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>المواصفات التقنية</h4>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} animate-pulse`}></div>
                                            <span className={`text-sm transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>تقنية متطورة وموثوقة</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} opacity-20 animate-ping`}></div>
                                <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} opacity-30 animate-bounce`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-32 text-center">
                    <div className={`backdrop-blur-md rounded-3xl p-12 border transition-all duration-500 ${isDarkMode
                            ? 'bg-white/10 border-white/20'
                            : 'bg-white/80 border-gray-200 shadow-xl'
                        }`}>
                        <div className="flex justify-center mb-6">
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] flex items-center justify-center text-3xl shadow-lg animate-pulse ${isDarkMode ? '' : 'shadow-[#1F3A93]/20'
                                }`}>
                                🛡️
                            </div>
                        </div>

                        <h3 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                            جاهز لتأمين مكانك؟
                        </h3>

                        <p className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            احصل على استشارة مجانية من خبرائنا واكتشف الحل الأمني المثالي لاحتياجاتك
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className={`px-8 py-4 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isDarkMode
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] hover:shadow-[#00A4FF]/25'
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] hover:shadow-[#1F3A93]/25'
                                }`}>
                                احجز استشارة مجانية
                            </button>

                            <button className={`px-8 py-4 rounded-xl font-bold text-lg border-2 hover:scale-105 transition-all duration-300 ${isDarkMode
                                    ? 'border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF]/10'
                                    : 'border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93]/10'
                                }`}>
                                عرض الأسعار
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default SecurityFeaturesSection;

