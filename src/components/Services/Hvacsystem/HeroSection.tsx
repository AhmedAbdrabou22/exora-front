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

const HeroSection = () => {
    const [temperature, setTemperature] = useState(22);
    const [isOn, setIsOn] = useState(true);
    const [mode, setMode] = useState('cool'); // cool, heat, auto

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
        <section className="relative bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128] py-20 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#00A4FF] rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#1F3A93] rounded-full blur-xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00A4FF]/20 rounded-full blur-2xl animate-ping"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive AC Control Section */}
                    <div className="relative">
                        {/* Main AC Control Panel */}
                        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 mx-auto max-w-md border border-white/20">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl">{getModeIcon()}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">غرفة المعيشة</h3>
                                        <p className="text-sm text-gray-300">تكييف ذكي</p>
                                    </div>
                                </div>
                                <button
                                    onClick={togglePower}
                                    className={`p-3 rounded-full transition-all duration-300 ${isOn
                                        ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-lg shadow-[#00A4FF]/25'
                                        : 'bg-gray-600'
                                        }`}
                                >
                                    <Power className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Temperature Display */}
                            <div className="text-center py-8 mb-6">
                                <div className={`text-6xl font-bold mb-4 transition-all duration-500 ${isOn
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-white bg-clip-text text-transparent'
                                    : 'text-gray-500'
                                    }`}>
                                    {temperature}°C
                                </div>
                                <div className="text-gray-300 mb-6">درجة الحرارة المطلوبة</div>

                                {/* Temperature Controls */}
                                <div className="flex items-center justify-center gap-6">
                                    <button
                                        onClick={decreaseTemp}
                                        disabled={!isOn || temperature <= 16}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOn && temperature > 16
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] hover:scale-110 shadow-lg shadow-[#00A4FF]/25'
                                            : 'bg-gray-600 cursor-not-allowed'
                                            }`}
                                    >
                                        <Minus className="w-6 h-6 text-white" />
                                    </button>

                                    <div className="text-white font-semibold">
                                        {isOn ? 'تشغيل' : 'إيقاف'}
                                    </div>

                                    <button
                                        onClick={increaseTemp}
                                        disabled={!isOn || temperature >= 30}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOn && temperature < 30
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] hover:scale-110 shadow-lg shadow-[#00A4FF]/25'
                                            : 'bg-gray-600 cursor-not-allowed'
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
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg'
                                            : isOn
                                                ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                                                : 'bg-gray-600 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <div className="text-lg mb-1">{modeOption.icon}</div>
                                        <div className="text-xs font-semibold">{modeOption.label}</div>
                                    </button>
                                ))}
                            </div>

                            {/* Status Indicators */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-[#00A4FF]/20 backdrop-blur-sm rounded-lg border border-[#00A4FF]/30">
                                    <Thermometer className={`w-6 h-6 mx-auto mb-2 ${isOn ? 'text-[#00A4FF]' : 'text-gray-500'}`} />
                                    <span className="text-xs text-gray-300">درجة الحرارة</span>
                                </div>
                                <div className="text-center p-3 bg-[#00A4FF]/20 backdrop-blur-sm rounded-lg border border-[#00A4FF]/30">
                                    <Clock className={`w-6 h-6 mx-auto mb-2 ${isOn ? 'text-[#00A4FF]' : 'text-gray-500'}`} />
                                    <span className="text-xs text-gray-300">المؤقت</span>
                                </div>
                                <div className="text-center p-3 bg-[#00A4FF]/20 backdrop-blur-sm rounded-lg border border-[#00A4FF]/30">
                                    <Wifi className={`w-6 h-6 mx-auto mb-2 ${isOn ? 'text-[#00A4FF] animate-pulse' : 'text-gray-500'}`} />
                                    <span className="text-xs text-gray-300">متصل</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className={`absolute -top-4 -right-4 p-3 rounded-full shadow-lg transition-all duration-300 ${isOn
                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25 animate-bounce'
                            : 'bg-gray-600'
                            }`}>
                            <Wifi className="w-6 h-6 text-white" />
                        </div>

                        <div className={`absolute -bottom-4 -left-4 p-3 rounded-full shadow-lg transition-all duration-300 ${isOn
                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25 animate-pulse'
                            : 'bg-gray-600'
                            }`}>
                            <Leaf className="w-6 h-6 text-white" />
                        </div>

                        <div className={`absolute top-1/2 -left-8 p-2 rounded-full shadow-lg transition-all duration-300 ${isOn
                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25'
                            : 'bg-gray-600'
                            }`}>
                            <Mic className="w-4 h-4 text-white" />
                        </div>

                    </div>
                    {/* Content Section */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 backdrop-blur-sm border border-[#00A4FF]/30 rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
                            <span className="text-2xl animate-spin-slow">❄️</span>
                            <span className="text-[#00A4FF] font-semibold">أنظمة التكييف الذكية</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                تحكم ذكي في
                                <span className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent block">
                                    أنظمة التكييف
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                أنظمة متطورة للتحكم في وحدات التكييف الهوائي داخل المباني السكنية والتجارية
                                عن بُعد أو بشكل أوتوماتيكي، من خلال تطبيقات ذكية وأوامر صوتية
                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-lg flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">توفير الطاقة</h3>
                                    <p className="text-sm text-gray-300">تشغيل ذكي وفقاً للحاجة</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-lg flex items-center justify-center">
                                    <Smartphone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">تحكم عن بُعد</h3>
                                    <p className="text-sm text-gray-300">من أي مكان في العالم</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-lg flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">جدولة ذكية</h3>
                                    <p className="text-sm text-gray-300">تشغيل في أوقات محددة</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] rounded-lg flex items-center justify-center">
                                    <Mic className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">أوامر صوتية</h3>
                                    <p className="text-sm text-gray-300">Alexa & Google Assistant</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#00A4FF]/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                <Home className="w-5 h-5" />
                                احصل على استشارة مجانية
                            </button>
                            <button className="border-2 border-[#00A4FF]/50 hover:border-[#00A4FF] text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#00A4FF]/10">
                                تعرف على المزيد
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

export default HeroSection;
