import React, { useState } from 'react';

const SecuritySystemTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "الأقفال الذكية",
            subtitle: "Smart Locks",
            icon: "🔐",
            description: "قفل وفتح الأبواب عن طريق بصمة، كارت، موبايل، أو كود",
            features: [
                "تسجيل كل عمليات الدخول والخروج",
                "إتاحة الدخول لأشخاص محددين في أوقات معينة",
                "التحكم عن بُعد عبر التطبيق",
                "نظام إنذار ضد التلاعب"
            ],
            images: [
                {
                    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                    title: "قفل بالبصمة"
                },
                {
                    url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
                    title: "قفل بالكارت"
                },
                {
                    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                    title: "قفل بالكود"
                }
            ]
        },
        {
            id: 1,
            title: "أنظمة الإنتركم الذكي",
            subtitle: "Smart Video Intercom",
            icon: "📹",
            description: "التواصل مع الزوار عن طريق صوت وصورة",
            features: [
                "الرد من خلال شاشة داخلية أو موبايل",
                "فتح الباب عن بُعد",
                "تسجيل فيديو للمكالمات مع الزوار",
                "رؤية ليلية واضحة"
            ],
            images: [
                {
                    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
                    title: "شاشة إنتركم داخلية"
                },
                {
                    url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
                    title: "وحدة خارجية"
                },
                {
                    url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop",
                    title: "تطبيق الموبايل"
                }
            ]
        },
        {
            id: 2,
            title: "أنظمة البصمة والكارت",
            subtitle: "Access Control",
            icon: "👆",
            description: "تنظيم الدخول والخروج في المؤسسات أو المباني",
            features: [
                "إمكانية التحكم في السماح بالدخول لأشخاص محددين",
                "تسجيل وقت الحضور والانصراف للموظفين",
                "تقارير مفصلة عن الحضور",
                "إدارة الصلاحيات حسب المستوى"
            ],
            images: [
                {
                    url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop",
                    title: "جهاز البصمة"
                },
                {
                    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                    title: "قارئ الكروت"
                },
                {
                    url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
                    title: "نظام الإدارة"
                }
            ]
        },
        {
            id: 3,
            title: "الحساسات الأمنية",
            subtitle: "Security Sensors",
            icon: "🚨",
            description: "كشف أي حركة أو محاولة اقتحام",
            features: [
                "حساسات حركة متطورة",
                "حساسات فتح أبواب ونوافذ",
                "حساسات دخان وغاز",
                "إطلاق إنذار فوري وتنبيه على الموبايل"
            ],
            images: [
                {
                    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                    title: "حساس الحركة"
                },
                {
                    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
                    title: "حساس الأبواب"
                },
                {
                    url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop",
                    title: "حساس الدخان"
                }
            ]
        }
    ];

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
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 backdrop-blur-sm border border-[#00A4FF]/30 rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300">
                        <span className="text-3xl animate-spin-slow">🛡️</span>
                        <span className="text-[#00A4FF] font-semibold">مكونات أنظمة الأمان المتكاملة</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent">
                            Security Systems
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        حلول أمنية شاملة ومتطورة لحماية منزلك أو مؤسستك بأحدث التقنيات
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${activeTab === index
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25 scale-105'
                                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/15 hover:text-white border border-white/20'
                                }`}
                        >
                            <span className="text-2xl">{tab.icon}</span>
                            <div className="text-left">
                                <div className="text-sm font-bold">{tab.title}</div>
                                <div className="text-xs opacity-80">{tab.subtitle}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content Side */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-5xl">{tabs[activeTab].icon}</span>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {tabs[activeTab].title}
                                    </h3>
                                    <p className="text-[#00A4FF] font-semibold">
                                        {tabs[activeTab].subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                {tabs[activeTab].description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {tabs[activeTab].features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#00A4FF] rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="px-8 py-4 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#00A4FF]/25 hover:scale-105 transition-all duration-300">
                                طلب استشارة مجانية
                            </button>
                        </div>

                        {/* Images Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tabs[activeTab].images.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 border border-white/20 hover:border-[#00A4FF]/50 transition-all duration-500 hover:scale-105"
                                >
                                    <div className="relative overflow-hidden rounded-xl">
                                        <img
                                            src={image.url}
                                            alt={image.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 via-transparent to-transparent"></div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <h4 className="text-white font-semibold group-hover:text-[#00A4FF] transition-colors duration-300">
                                            {image.title}
                                        </h4>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                </div>
                            ))}
                        </div>
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
      `}</style>
        </section>
    );
};

export default SecuritySystemTabs;
