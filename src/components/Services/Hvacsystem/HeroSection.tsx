import React, { useState } from 'react';
import {
    Thermometer,
    Smartphone,
    Wifi,
    Clock,
    Leaf,
    Home,
    Mic,
    Settings,
    Plus,
    Minus,
    Power
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const HeroSection = () => {
    const [temperature, setTemperature] = useState(22);
    const [isOn, setIsOn] = useState(true);
    const [mode, setMode] = useState('cool'); // cool, heat, auto
    const { isDarkMode } = useTheme();

    const increaseTemp = () => {
        if (temperature < 30) {
            setTemperature(temperature + 1);
        }
    };

    const decreaseTemp = () => {
        if (temperature > 16) {
            setTemperature(temperature - 1);
        }
    };

    const togglePower = () => {
        setIsOn(!isOn);
    };

    const getModeIcon = () => {
        switch (mode) {
            case 'cool': return '❄️';
            case 'heat': return '🔥';
            case 'auto': return '🔄';
            default: return '❄️';
        }
    };

    const getModeColor = () => {
        switch (mode) {
            case 'cool': return 'from-blue-500 to-cyan-500';
            case 'heat': return 'from-red-500 to-orange-500';
            case 'auto': return 'from-green-500 to-emerald-500';
            default: return 'from-blue-500 to-cyan-500';
        }
    };

    return (
        <section className={`relative py-20 px-4 overflow-hidden transition-all duration-500 ${isDarkMode
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128]'
                : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
            }`}>
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse transition-colors duration-500 ${isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                    }`}></div>
                <div className={`absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl animate-bounce transition-colors duration-500 ${isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
                    }`}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-2xl animate-ping transition-colors duration-500 ${isDarkMode ? 'bg-[#00A4FF]/20' : 'bg-[#1F3A93]/20'
                    }`}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive AC Control Section */}
                    <div className="relative">
                        {/* Main AC Control Panel */}
                        <div className={`relative backdrop-blur-md rounded-3xl shadow-2xl p-8 mx-auto max-w-md border transition-all duration-500 ${isDarkMode
                                ? 'bg-white/10 border-white/20'
                                : 'bg-white/80 border-gray-200 shadow-xl'
                            }`}>

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl">{getModeIcon()}</div>
                                    <div>
                                        <h3 className={`text-lg font-semibold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>غرفة المعيشة</h3>
                                        <p className={`text-sm transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>تكييف ذكي</p>
                                    </div>
                                </div>
                                <button
                                    onClick={togglePower}
                                    className={`p-3 rounded-full transition-all duration-300 ${isOn
                                        ? isDarkMode
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-lg shadow-[#00A4FF]/25'
                                            : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] shadow-lg shadow-[#1F3A93]/25'
                                        : isDarkMode
                                            ? 'bg-gray-600'
                                            : 'bg-gray-400'
                                        }`}
                                >
                                    <Power className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Temperature Display */}
                            <div className="text-center py-8 mb-6">
                                <div className={`text-6xl font-bold mb-4 transition-all duration-500 ${isOn
                                    ? isDarkMode
                                        ? 'bg-gradient-to-r from-[#00A4FF] to-white bg-clip-text text-transparent'
                                        : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                                    : isDarkMode
                                        ? 'text-gray-500'
                                        : 'text-gray-400'
                                    }`}>
                                    {temperature}°C
                                </div>
                                <div className={`mb-6 transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>درجة الحرارة المطلوبة</div>

                                {/* Temperature Controls */}
                                <div className="flex items-center justify-center gap-6">
                                    <button
                                        onClick={decreaseTemp}
                                        disabled={!isOn || temperature <= 16}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOn && temperature > 16
                                            ? isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] hover:scale-110 shadow-lg shadow-[#00A4FF]/25'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] hover:scale-110 shadow-lg shadow-[#1F3A93]/25'
                                            : isDarkMode
                                                ? 'bg-gray-600 cursor-not-allowed'
                                                : 'bg-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        <Minus className="w-6 h-6 text-white" />
                                    </button>

                                    <div className={`font-semibold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                        {isOn ? 'تشغيل' : 'إيقاف'}
                                    </div>

                                    <button
                                        onClick={increaseTemp}
                                        disabled={!isOn || temperature >= 30}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOn && temperature < 30
                                            ? isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] hover:scale-110 shadow-lg shadow-[#00A4FF]/25'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] hover:scale-110 shadow-lg shadow-[#1F3A93]/25'
                                            : isDarkMode
                                                ? 'bg-gray-600 cursor-not-allowed'
                                                : 'bg-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        <Plus className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Mode Selection */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[
                                    { key: 'cool', label: 'تبريد', icon: '❄️' },
                                    { key: 'heat', label: 'تدفئة', icon: '🔥' },
                                    { key: 'auto', label: 'تلقائي', icon: '🔄' }
                                ].map((modeOption) => (
                                    <button
                                        key={modeOption.key}
                                        onClick={() => setMode(modeOption.key)}
                                        disabled={!isOn}
                                        className={`p-3 rounded-xl text-center transition-all duration-300 ${mode === modeOption.key && isOn
                                            ? isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg'
                                            : isOn
                                                ? isDarkMode
                                                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                : isDarkMode
                                                    ? 'bg-gray-600 text-gray-500 cursor-not-allowed'
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <div className="text-lg mb-1">{modeOption.icon}</div>
                                        <div className="text-xs font-semibold">{modeOption.label}</div>
                                    </button>
                                ))}
                            </div>

                            {/* Status Indicators */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className={`text-center p-3 backdrop-blur-sm rounded-lg border transition-all duration-500 ${isDarkMode
                                        ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30'
                                        : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                                    }`}>
                                    <Thermometer className={`w-6 h-6 mx-auto mb-2 transition-colors duration-500 ${isOn
                                            ? isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                            : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`} />
                                    <span className={`text-xs transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>درجة الحرارة</span>
                                </div>
                                <div className={`text-center p-3 backdrop-blur-sm rounded-lg border transition-all duration-500 ${isDarkMode
                                        ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30'
                                        : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                                    }`}>
                                    <Clock className={`w-6 h-6 mx-auto mb-2 transition-colors duration-500 ${isOn
                                            ? isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                            : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`} />
                                    <span className={`text-xs transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>المؤقت</span>
                                </div>
                                <div className={`text-center p-3 backdrop-blur-sm rounded-lg border transition-all duration-500 ${isDarkMode
                                        ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30'
                                        : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                                    }`}>
                                    <Wifi className={`w-6 h-6 mx-auto mb-2 transition-colors duration-500 ${isOn
                                            ? isDarkMode ? 'text-[#00A4FF] animate-pulse' : 'text-[#1F3A93] animate-pulse'
                                            : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`} />
                                    <span className={`text-xs transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>متصل</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className={`absolute -top-4 -right-4 p-3 rounded-full shadow-lg transition-all duration-300 ${isOn
                            ? isDarkMode
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25 animate-bounce'
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] shadow-[#1F3A93]/25 animate-bounce'
                            : isDarkMode
                                ? 'bg-gray-600'
                                : 'bg-gray-400'
                            }`}>
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className={`space-y-8 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                        {/* Header */}
                        <div className="space-y-4">
                            <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${isDarkMode
                                    ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30'
                                    : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                                }`}>
                                <span className="text-3xl animate-spin-slow">❄️</span>
                                <span className={`font-semibold transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                    }`}>أنظمة التكييف الذكي</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                تحكم ذكي في{' '}
                                <span className={`transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                    }`}>
                                    المناخ
                                </span>
                            </h1>

                            <p className={`text-xl leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                أنظمة تكييف ذكية متطورة توفر الراحة المثلى مع توفير الطاقة.
                                تحكم كامل عن بُعد مع جدولة تلقائية وتحليلات استهلاك ذكية.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: Smartphone, title: 'تحكم عن بُعد', desc: 'تطبيق ذكي سهل الاستخدام' },
                                { icon: Leaf, title: 'توفير الطاقة', desc: 'تقليل استهلاك الكهرباء بنسبة 40%' },
                                { icon: Mic, title: 'تحكم صوتي', desc: 'متوافق مع المساعدات الصوتية' },
                                { icon: Settings, title: 'جدولة ذكية', desc: 'برمجة تلقائية حسب الوقت' }
                            ].map((feature, index) => (
                                <div key={index} className={`flex items-start gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDarkMode
                                        ? 'bg-white/5 border-white/10 hover:bg-white/10'
                                        : 'bg-white/50 border-gray-200 hover:bg-white/80'
                                    }`}>
                                    <div className={`p-3 rounded-lg transition-colors duration-500 ${isDarkMode
                                            ? 'bg-[#00A4FF]/20 text-[#00A4FF]'
                                            : 'bg-[#1F3A93]/10 text-[#1F3A93]'
                                        }`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold mb-2 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>{feature.title}</h3>
                                        <p className={`text-sm transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
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

export default HeroSection;

