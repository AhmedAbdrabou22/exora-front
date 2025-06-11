import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
    Smartphone, 
    Wifi, 
    Volume2, 
    Home, 
    Settings, 
    Headphones,
    Radio,
    Tv,
    Music,
    Mic,
    Speaker,
    Zap
} from 'lucide-react';

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const { isDarkMode } = useTheme();

    const features = [
        {
            id: 1,
            title: "التحكم الذكي المتقدم",
            subtitle: "Smart Control System",
            description: "تحكم كامل في نظام الصوت من تطبيق واحد، مع إمكانية التحكم الصوتي والجدولة الذكية لتشغيل الموسيقى حسب أوقات اليوم والمناسبات المختلفة.",
            icon: <Smartphone className="w-8 h-8" />,
            features: [
                "تطبيق موحد لجميع الغرف",
                "تحكم صوتي بالذكاء الاصطناعي", 
                "جدولة تلقائية للموسيقى",
                "تحكم عن بُعد من أي مكان"
            ],
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "توزيع صوتي متعدد المناطق",
            subtitle: "Multi-Zone Audio Distribution",
            description: "نظام توزيع متطور يسمح بتشغيل موسيقى مختلفة في كل غرفة، أو نفس الموسيقى في جميع الغرف، مع تحكم منفصل في مستوى الصوت لكل منطقة.",
            icon: <Speaker className="w-8 h-8" />,
            features: [
                "تشغيل مستقل لكل غرفة",
                "مزامنة الصوت بين الغرف",
                "تحكم منفصل في مستوى الصوت",
                "توزيع لاسلكي عالي الجودة"
            ],
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "جودة صوت استثنائية",
            subtitle: "Premium Audio Quality",
            description: "تقنيات صوتية متقدمة تضمن جودة صوت عالية الدقة مع إلغاء الضوضاء وتحسين الصوت تلقائياً حسب نوع المحتوى والبيئة المحيطة.",
            icon: <Headphones className="w-8 h-8" />,
            features: [
                "صوت عالي الدقة Hi-Fi",
                "إلغاء الضوضاء الذكي",
                "تحسين تلقائي للصوت",
                "دعم جميع صيغ الصوت"
            ],
            color: "from-orange-500 to-red-600"
        },
        {
            id: 4,
            title: "التكامل الذكي",
            subtitle: "Smart Integration",
            description: "تكامل سلس مع أنظمة المنزل الذكي الأخرى مثل الإضاءة والستائر والمناخ، لخلق تجربة ترفيهية شاملة ومتناغمة في جميع أنحاء المنزل.",
            icon: <Home className="w-8 h-8" />,
            features: [
                "تكامل مع أنظمة الإضاءة",
                "ربط مع أنظمة المناخ",
                "تحكم في الستائر الذكية",
                "سيناريوهات ترفيهية متكاملة"
            ],
            color: "from-purple-500 to-pink-600"
        }
    ];

    const components = [
        {
            name: "السماعات الذكية",
            description: "مُركبة في الأسقف والجدران",
            icon: <Speaker className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop&auto=format"
        },
        {
            name: "أجهزة التوزيع",
            description: "توزيع الإشارة لعدة غرف",
            icon: <Radio className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format"
        },
        {
            name: "شاشات العرض الذكية",
            description: "شاشات متصلة بالشبكة",
            icon: <Tv className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&auto=format"
        },
        {
            name: "أنظمة التحكم",
            description: "تطبيقات وأوامر صوتية",
            icon: <Mic className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format"
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
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                            : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                    }`}>
                        <Music className="w-5 h-5 animate-pulse" />
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>مميزات النظام</span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            تقنيات صوتية متطورة
                        </span>
                    </h2>

                    <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        اكتشف المميزات الفريدة التي تجعل نظام الصوت والميديا المنزلية تجربة استثنائية
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            ref={el => itemRefs.current[index] = el}
                            className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                                visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            onClick={() => setActiveFeature(index)}
                        >
                            <div className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                                activeFeature === index
                                    ? isDarkMode
                                        ? 'bg-gradient-to-br from-[#00A4FF]/20 to-[#1F3A93]/20 border-[#00A4FF]/50 shadow-2xl shadow-[#00A4FF]/20'
                                        : 'bg-gradient-to-br from-[#1F3A93]/20 to-[#00A4FF]/20 border-[#1F3A93]/50 shadow-2xl shadow-[#1F3A93]/20'
                                    : isDarkMode
                                        ? 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-[#00A4FF]/30'
                                        : 'bg-white/70 border-gray-200 hover:bg-white hover:border-[#1F3A93]/30'
                            }`}>
                                
                                {/* Icon & Badge */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                                        activeFeature === index
                                            ? isDarkMode 
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-[#00A4FF]/25' 
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-[#1F3A93]/25'
                                            : isDarkMode
                                                ? 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                                                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                    }`}>
                                        {feature.icon}
                                    </div>
                                    <div className={`backdrop-blur-sm border rounded-full px-4 py-2 transition-all duration-500 ${
                                        activeFeature === index
                                            ? isDarkMode 
                                                ? 'bg-[#00A4FF]/30 border-[#00A4FF]/50' 
                                                : 'bg-[#1F3A93]/30 border-[#1F3A93]/50'
                                            : isDarkMode 
                                                ? 'bg-gray-700/50 border-gray-600' 
                                                : 'bg-gray-100 border-gray-300'
                                    }`}>
                                        <span className={`font-semibold text-sm transition-colors duration-500 ${
                                            activeFeature === index
                                                ? isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                                : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>{feature.subtitle}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                                    activeFeature === index
                                        ? isDarkMode ? 'text-white' : 'text-gray-800'
                                        : isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                }`}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-lg leading-relaxed mb-6 transition-colors duration-500 ${
                                    activeFeature === index
                                        ? isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                        : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {feature.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-3">
                                    {feature.features.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="flex items-center gap-3 group/item"
                                        >
                                            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                activeFeature === index
                                                    ? isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                                    : isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                                            }`} />
                                            <span className={`transition-colors duration-300 ${
                                                activeFeature === index
                                                    ? isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                    : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Active Indicator */}
                                {activeFeature === index && (
                                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse ${
                                        isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                    }`} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Components Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>المكونات الأساسية للنظام</h3>
                        <p className={`text-lg transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>تعرف على العناصر الرئيسية التي تشكل نظام الصوت والميديا المتكامل</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {components.map((component, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                                    isDarkMode 
                                        ? 'bg-white/5 border border-white/20 hover:bg-white/10' 
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={component.image}
                                        alt={component.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                                        isDarkMode 
                                            ? 'from-[#0A1128]/80 via-transparent to-transparent' 
                                            : 'from-gray-900/60 via-transparent to-transparent'
                                    }`} />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                                            isDarkMode 
                                                ? 'bg-[#00A4FF]/20 text-[#00A4FF]' 
                                                : 'bg-[#1F3A93]/20 text-[#1F3A93]'
                                        }`}>
                                            {component.icon}
                                        </div>
                                        <h4 className={`font-bold transition-colors duration-500 ${
                                            isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {component.name}
                                        </h4>
                                    </div>
                                    <p className={`text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        {component.description}
                                    </p>
                                </div>

                                {/* Hover Effect */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                    isDarkMode 
                                        ? 'bg-gradient-to-t from-[#00A4FF]/20 to-transparent' 
                                        : 'bg-gradient-to-t from-[#1F3A93]/20 to-transparent'
                                }`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className={`backdrop-blur-md rounded-3xl p-12 border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-white/5 border-white/20' 
                            : 'bg-white/70 border-gray-200'
                    }`}>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Zap className={`w-8 h-8 transition-colors duration-500 ${
                                isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                            }`} />
                            <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                ابدأ تجربتك الصوتية الآن
                            </h3>
                        </div>
                        
                        <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            احصل على استشارة مجانية من خبرائنا وصمم نظام الصوت المثالي لمنزلك
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
                                شاهد العرض التوضيحي
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

