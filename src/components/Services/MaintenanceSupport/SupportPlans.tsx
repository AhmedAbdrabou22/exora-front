import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
    Check, 
    X, 
    Star, 
    Crown, 
    Shield,
    Zap,
    Clock,
    Phone,
    Settings,
    Award
} from 'lucide-react';

const SupportPlans = () => {
    const { isDarkMode } = useTheme();
    const [selectedPlan, setSelectedPlan] = useState(1);

    const plans = [
        {
            id: 0,
            name: "الأساسي",
            nameEn: "Basic",
            price: "299",
            period: "شهرياً",
            icon: <Shield className="w-8 h-8" />,
            color: "gray",
            popular: false,
            description: "مثالي للمنازل الصغيرة والشقق",
            features: [
                { name: "دعم فني خلال ساعات العمل", included: true },
                { name: "صيانة دورية كل 6 أشهر", included: true },
                { name: "استجابة خلال 4 ساعات", included: true },
                { name: "دعم عبر الهاتف والإيميل", included: true },
                { name: "تقارير الصيانة الأساسية", included: true },
                { name: "دعم 24/7", included: false },
                { name: "زيارات طوارئ مجانية", included: false },
                { name: "تحديثات البرمجيات المتقدمة", included: false },
                { name: "مدير حساب مخصص", included: false }
            ]
        },
        {
            id: 1,
            name: "المتقدم",
            nameEn: "Advanced",
            price: "599",
            period: "شهرياً",
            icon: <Star className="w-8 h-8" />,
            color: "blue",
            popular: true,
            description: "الأنسب للمنازل الكبيرة والمكاتب",
            features: [
                { name: "دعم فني 24/7", included: true },
                { name: "صيانة دورية كل 3 أشهر", included: true },
                { name: "استجابة خلال ساعة واحدة", included: true },
                { name: "دعم متعدد القنوات", included: true },
                { name: "تقارير مفصلة وتحليلات", included: true },
                { name: "زيارات طوارئ مجانية (2 شهرياً)", included: true },
                { name: "تحديثات البرمجيات المتقدمة", included: true },
                { name: "مراقبة عن بُعد", included: true },
                { name: "مدير حساب مخصص", included: false }
            ]
        },
        {
            id: 2,
            name: "المميز",
            nameEn: "Premium",
            price: "999",
            period: "شهرياً",
            icon: <Crown className="w-8 h-8" />,
            color: "gold",
            popular: false,
            description: "للشركات والمشاريع الكبيرة",
            features: [
                { name: "دعم فني مخصص 24/7", included: true },
                { name: "صيانة دورية شهرية", included: true },
                { name: "استجابة فورية (30 دقيقة)", included: true },
                { name: "دعم متعدد القنوات + دردشة مباشرة", included: true },
                { name: "تقارير متقدمة وذكاء اصطناعي", included: true },
                { name: "زيارات طوارئ غير محدودة", included: true },
                { name: "تحديثات وترقيات مجانية", included: true },
                { name: "مراقبة متقدمة وتنبيهات ذكية", included: true },
                { name: "مدير حساب مخصص + استشارات", included: true }
            ]
        }
    ];

    const getColorClasses = (color, isDark) => {
        const colors = {
            gray: isDark 
                ? 'from-gray-500 to-gray-600 shadow-gray-500/25' 
                : 'from-gray-400 to-gray-500 shadow-gray-400/25',
            blue: isDark 
                ? 'from-blue-500 to-blue-600 shadow-blue-500/25' 
                : 'from-blue-400 to-blue-500 shadow-blue-400/25',
            gold: isDark 
                ? 'from-yellow-500 to-orange-500 shadow-yellow-500/25' 
                : 'from-yellow-400 to-orange-400 shadow-yellow-400/25'
        };
        return colors[color] || colors.blue;
    };

    const getBorderColor = (color) => {
        const colors = {
            gray: 'border-gray-500/30',
            blue: 'border-blue-500/30',
            gold: 'border-yellow-500/30'
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
        }`}>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                            : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                    }`}>
                        <Award className="w-5 h-5" />
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>خطط الدعم</span>
                    </div>

                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            اختر الخطة المناسبة لك
                        </span>
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        خطط دعم مرنة تناسب جميع الاحتياجات مع ضمان أفضل خدمة
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                                selectedPlan === plan.id ? 'scale-105' : ''
                            } ${plan.popular ? 'md:-mt-8' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg bg-gradient-to-r ${
                                    getColorClasses(plan.color, isDarkMode)
                                }`}>
                                    الأكثر شعبية
                                </div>
                            )}

                            <div className={`relative p-8 rounded-3xl border-2 transition-all duration-500 ${
                                selectedPlan === plan.id
                                    ? `${getBorderColor(plan.color)} ${
                                        isDarkMode 
                                            ? 'bg-gradient-to-br from-gray-800/70 to-gray-900/70 shadow-2xl' 
                                            : 'bg-gradient-to-br from-white to-gray-50 shadow-2xl'
                                    }`
                                    : isDarkMode 
                                        ? 'border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50' 
                                        : 'border-gray-200 bg-gradient-to-br from-white/90 to-gray-100/90'
                            }`}>
                                
                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 bg-gradient-to-r ${
                                        getColorClasses(plan.color, isDarkMode)
                                    } text-white shadow-lg`}>
                                        {plan.icon}
                                    </div>
                                    
                                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {plan.name}
                                    </h3>
                                    
                                    <p className={`text-sm mb-4 transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {plan.description}
                                    </p>
                                    
                                    <div className="mb-6">
                                        <span className={`text-4xl font-bold transition-colors duration-500 ${
                                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                        }`}>
                                            {plan.price}
                                        </span>
                                        <span className={`text-lg transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {' '}ر.س / {plan.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start gap-3"
                                        >
                                            {feature.included ? (
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            ) : (
                                                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                            )}
                                            <span className={`text-sm leading-relaxed transition-colors duration-500 ${
                                                feature.included
                                                    ? isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                                    : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                            }`}>
                                                {feature.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                    selectedPlan === plan.id
                                        ? `bg-gradient-to-r ${getColorClasses(plan.color, isDarkMode)} text-white`
                                        : isDarkMode
                                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}>
                                    {selectedPlan === plan.id ? 'الخطة المختارة' : 'اختر هذه الخطة'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className={`backdrop-blur-md rounded-2xl p-8 border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-white/5 border-white/20' 
                            : 'bg-white/70 border-gray-200'
                    }`}>
                        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            جميع الخطط تشمل:
                        </h3>
                        
                        <div className="grid md:grid-cols-4 gap-6 mt-8">
                            {[
                                { icon: <Shield className="w-6 h-6" />, text: "ضمان شامل" },
                                { icon: <Clock className="w-6 h-6" />, text: "استجابة سريعة" },
                                { icon: <Phone className="w-6 h-6" />, text: "دعم متعدد القنوات" },
                                { icon: <Settings className="w-6 h-6" />, text: "صيانة دورية" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 justify-center">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 bg-gradient-to-r ${
                                        isDarkMode 
                                            ? 'from-[#00A4FF] to-[#1F3A93]' 
                                            : 'from-[#1F3A93] to-[#00A4FF]'
                                    } text-white`}>
                                        {item.icon}
                                    </div>
                                    <span className={`font-medium transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <p className={`text-sm transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                * يمكن إلغاء الاشتراك في أي وقت | * أسعار خاصة للعقود السنوية | * استشارة مجانية لاختيار الخطة المناسبة
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportPlans;