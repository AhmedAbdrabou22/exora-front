import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
    Clock, 
    Shield, 
    Wrench, 
    Phone, 
    Users, 
    CheckCircle,
    AlertTriangle,
    Settings,
    Zap,
    Calendar,
    MessageSquare,
    Award
} from 'lucide-react';

const FeaturesSection = () => {
    const { isDarkMode } = useTheme();
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);

    const features = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "دعم 24/7",
            description: "فريق دعم فني متاح على مدار الساعة طوال أيام الأسبوع",
            details: [
                "استجابة فورية للطوارئ",
                "دعم عبر الهاتف والدردشة",
                "تتبع حالة الطلبات مباشرة",
                "فريق متخصص متعدد اللغات"
            ],
            color: "blue"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "صيانة دورية",
            description: "برامج صيانة مجدولة لضمان الأداء الأمثل لأنظمتك",
            details: [
                "فحص شامل للأنظمة",
                "تنظيف وتشحيم المكونات",
                "تحديث البرمجيات",
                "تقارير مفصلة بعد كل زيارة"
            ],
            color: "green"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "ضمان شامل",
            description: "ضمان كامل على جميع الخدمات والقطع المستبدلة",
            details: [
                "ضمان لمدة سنتين على الأجهزة",
                "ضمان 6 أشهر على الخدمات",
                "استبدال مجاني للقطع المعيبة",
                "تغطية شاملة للأعطال"
            ],
            color: "purple"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "فريق خبراء",
            description: "مهندون وفنيون معتمدون مع خبرة واسعة",
            details: [
                "شهادات معتمدة دولياً",
                "تدريب مستمر على أحدث التقنيات",
                "خبرة أكثر من 10 سنوات",
                "تخصص في جميع الأنظمة الذكية"
            ],
            color: "orange"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "استجابة سريعة",
            description: "وقت استجابة أقل من 30 دقيقة للطوارئ",
            details: [
                "فرق متنقلة في جميع المناطق",
                "تشخيص سريع للمشاكل",
                "حلول فورية للأعطال البسيطة",
                "جدولة مرنة للمواعيد"
            ],
            color: "red"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "جودة معتمدة",
            description: "خدمات معتمدة وفقاً لأعلى المعايير الدولية",
            details: [
                "شهادة ISO 9001",
                "معايير الجودة الأوروبية",
                "اختبارات دورية للأداء",
                "تحسين مستمر للخدمات"
            ],
            color: "teal"
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

    const getColorClasses = (color, isDark) => {
        const colors = {
            blue: isDark 
                ? 'from-blue-500 to-blue-600 shadow-blue-500/25' 
                : 'from-blue-400 to-blue-500 shadow-blue-400/25',
            green: isDark 
                ? 'from-green-500 to-green-600 shadow-green-500/25' 
                : 'from-green-400 to-green-500 shadow-green-400/25',
            purple: isDark 
                ? 'from-purple-500 to-purple-600 shadow-purple-500/25' 
                : 'from-purple-400 to-purple-500 shadow-purple-400/25',
            orange: isDark 
                ? 'from-orange-500 to-orange-600 shadow-orange-500/25' 
                : 'from-orange-400 to-orange-500 shadow-orange-400/25',
            red: isDark 
                ? 'from-red-500 to-red-600 shadow-red-500/25' 
                : 'from-red-400 to-red-500 shadow-red-400/25',
            teal: isDark 
                ? 'from-teal-500 to-teal-600 shadow-teal-500/25' 
                : 'from-teal-400 to-teal-500 shadow-teal-400/25'
        };
        return colors[color] || colors.blue;
    };

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
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                            : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                    }`}>
                        <Settings className="w-5 h-5 animate-spin" />
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>خدمات متميزة</span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            لماذا تختار خدماتنا؟
                        </span>
                    </h2>

                    <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        نقدم خدمات صيانة ودعم فني شاملة تضمن عمل أنظمتك الذكية بأفضل أداء على مدار الساعة
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => itemRefs.current[index] = el}
                            className={`group transform transition-all duration-1000 ${
                                visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={`relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-600' 
                                    : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200 hover:border-gray-300'
                            }`}>
                                
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-gradient-to-r ${
                                    getColorClasses(feature.color, isDarkMode)
                                } text-white shadow-lg group-hover:scale-110`}>
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-lg mb-6 leading-relaxed transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {feature.description}
                                </p>

                                {/* Details List */}
                                <div className="space-y-3">
                                    {feature.details.map((detail, detailIndex) => (
                                        <div
                                            key={detailIndex}
                                            className="flex items-start gap-3 group/item"
                                        >
                                            <CheckCircle className={`w-5 h-5 mt-0.5 transition-all duration-300 group-hover/item:scale-110 ${
                                                feature.color === 'blue' ? 'text-blue-500' :
                                                feature.color === 'green' ? 'text-green-500' :
                                                feature.color === 'purple' ? 'text-purple-500' :
                                                feature.color === 'orange' ? 'text-orange-500' :
                                                feature.color === 'red' ? 'text-red-500' :
                                                'text-teal-500'
                                            }`} />
                                            <span className={`text-sm leading-relaxed transition-colors duration-300 ${
                                                isDarkMode 
                                                    ? 'text-gray-400 group-hover/item:text-gray-300' 
                                                    : 'text-gray-600 group-hover/item:text-gray-800'
                                            }`}>
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${
                                    getColorClasses(feature.color, isDarkMode)
                                } opacity-5`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20">
                    <div className={`backdrop-blur-md rounded-3xl p-12 border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-white/5 border-white/20' 
                            : 'bg-white/70 border-gray-200'
                    }`}>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "99.9%", label: "وقت التشغيل", icon: <Zap className="w-6 h-6" /> },
                                { number: "< 30", label: "دقيقة استجابة", icon: <Clock className="w-6 h-6" /> },
                                { number: "24/7", label: "دعم متواصل", icon: <Phone className="w-6 h-6" /> },
                                { number: "1000+", label: "عميل راضي", icon: <Users className="w-6 h-6" /> }
                            ].map((stat, index) => (
                                <div key={index} className="group">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 bg-gradient-to-r ${
                                        isDarkMode 
                                            ? 'from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25' 
                                            : 'from-[#1F3A93] to-[#00A4FF] shadow-[#1F3A93]/25'
                                    } text-white shadow-lg group-hover:scale-110`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-4xl font-bold mb-2 transition-colors duration-500 ${
                                        isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                    }`}>
                                        {stat.number}
                                    </div>
                                    <div className={`text-lg font-medium transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;