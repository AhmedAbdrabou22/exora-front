import React, { useEffect, useRef, useState } from 'react';
import {
    Thermometer,
    Smartphone,
    Leaf,
    ChevronRight,
    Zap,
    Clock
} from 'lucide-react';

const FeaturesSection = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        <section className="py-20 bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#00A4FF] rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#1F3A93] rounded-full blur-xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00A4FF]/20 rounded-full blur-2xl animate-ping"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 backdrop-blur-sm border border-[#00A4FF]/30 rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300">
                        <span className="text-3xl animate-spin-slow">⚡</span>
                        <span className="text-[#00A4FF] font-semibold">مميزات متقدمة</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent">
                            تقنيات ذكية متطورة
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                                        <div className="w-16 h-16 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00A4FF]/25">
                                            {feature.icon}
                                        </div>
                                        <div className="bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 backdrop-blur-sm border border-[#00A4FF]/30 rounded-full px-4 py-2">
                                            <span className="text-[#00A4FF] font-semibold text-sm">{feature.subtitle}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-gray-300 leading-relaxed">
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
                                                <div className="w-6 h-6 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                                                    <ChevronRight className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#00A4FF]/25 hover:scale-105 transition-all duration-300">
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
                                    <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 border border-white/20 hover:border-[#00A4FF]/50 transition-all duration-500">
                                        <div className="relative overflow-hidden rounded-2xl">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 via-transparent to-transparent"></div>

                                            {/* Floating Elements */}
                                            <div className="absolute top-4 right-4 bg-[#00A4FF]/20 backdrop-blur-sm rounded-full p-3 border border-[#00A4FF]/30 group-hover:scale-110 transition-transform duration-300">
                                                {feature.icon}
                                            </div>

                                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                                                <div className="text-white font-semibold text-sm">{feature.subtitle}</div>
                                            </div>
                                        </div>

                                        {/* Stats Overlay */}
                                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white p-4 rounded-2xl shadow-lg shadow-[#00A4FF]/25 group-hover:scale-105 transition-transform duration-300">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-5 h-5" />
                                                <div>
                                                    <div className="text-lg font-bold">24/7</div>
                                                    <div className="text-xs opacity-90">نشط</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 backdrop-blur-sm rounded-3xl p-8 border border-[#00A4FF]/30">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            جاهز لتجربة المستقبل؟
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            احصل على نظام تكييف ذكي متطور يوفر لك الراحة والكفاءة
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#00A4FF]/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                            <Smartphone className="w-5 h-5" />
                            شاهد فيديو توضيحي
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default FeaturesSection;

