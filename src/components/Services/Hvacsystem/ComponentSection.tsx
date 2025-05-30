import React, { useState } from 'react';
import {
    Building2,
    Home,
    Factory,
    ChevronRight
} from 'lucide-react';

const ComponentsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

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
        <section className="py-20 bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-32 right-20 w-28 h-28 bg-[#00A4FF] rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 left-20 w-36 h-36 bg-[#1F3A93] rounded-full blur-xl animate-bounce"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-[#00A4FF]/30 rounded-full blur-2xl animate-ping"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 backdrop-blur-sm border border-[#00A4FF]/30 rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300">
                        <span className="text-3xl animate-spin-slow">🏢</span>
                        <span className="text-[#00A4FF] font-semibold">حلول متنوعة</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent">
                            أنظمة تكييف لكل بيئة
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        حلول تكييف ذكية مصممة خصيصاً لتناسب احتياجات البيئات المختلفة
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${activeTab === index
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25 scale-105'
                                : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/15 hover:text-white border border-white/20'
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
                <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-96 lg:h-auto">
                            <img
                                src={tabs[activeTab].image}
                                alt={tabs[activeTab].title}
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/60 via-transparent to-transparent"></div>

                            {/* Overlay Content */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center gap-3 text-white">
                                        {tabs[activeTab].icon}
                                        <div>
                                            <div className="font-bold">{tabs[activeTab].title}</div>
                                            <div className="text-sm text-gray-300">{tabs[activeTab].subtitle}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-lg flex items-center justify-center">
                                    {tabs[activeTab].icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        {tabs[activeTab].title}
                                    </h3>
                                    <p className="text-[#00A4FF] font-semibold">
                                        {tabs[activeTab].subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                {tabs[activeTab].description}
                            </p>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                <h4 className="text-xl font-bold text-white mb-4">المميزات الرئيسية:</h4>
                                {tabs[activeTab].features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-[#00A4FF] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#00A4FF]/25 hover:scale-105 transition-all duration-300">
                                اطلب عرض سعر مخصص
                            </button>
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

export default ComponentsSection;
