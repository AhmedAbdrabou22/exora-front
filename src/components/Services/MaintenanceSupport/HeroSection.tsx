import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
    Wrench, 
    Clock, 
    Shield, 
    Phone, 
    MessageCircle, 
    Headphones,
    CheckCircle,
    AlertTriangle,
    Settings
} from 'lucide-react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const { isDarkMode } = useTheme();
    
    const [currentTime, setCurrentTime] = useState(new Date());
    const [supportStatus, setSupportStatus] = useState('متاح الآن');
    const [activeTickets, setActiveTickets] = useState(12);
    const [responseTime, setResponseTime] = useState('< 5 دقائق');

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Simulate support metrics updates
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTickets(prev => Math.max(8, Math.min(20, prev + Math.floor(Math.random() * 3) - 1)));
            const responses = ['< 2 دقيقة', '< 5 دقائق', '< 3 دقائق', '< 1 دقيقة'];
            setResponseTime(responses[Math.floor(Math.random() * responses.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('ar-EG', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center transition-all duration-500 ${
                isDarkMode 
                    ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                    : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
            }`}
            style={{ padding: "100px 50px" }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full transition-all duration-1000 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10' 
                                : 'bg-gradient-to-r from-[#1F3A93]/15 to-[#00A4FF]/15'
                        }`}
                        style={{
                            width: `${200 + i * 100}px`,
                            height: `${200 + i * 100}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animation: `float ${8 + i}s ease-in-out infinite`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="text-center lg:text-right space-y-8">
                        <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                            isDarkMode 
                                ? 'bg-green-500/20 border-green-500/30' 
                                : 'bg-green-500/10 border-green-500/30'
                        }`}>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-semibold text-green-600">دعم فني 24/7</span>
                        </div>

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            <span className={`transition-colors duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                            }`}>
                                صيانة ودعم فني
                            </span>
                            <br />
                            على مدار الساعة
                        </h1>

                        <p className={`text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            فريق متخصص من الخبراء جاهز لخدمتك في أي وقت. نوفر صيانة دورية وإصلاح فوري 
                            لضمان عمل أنظمتك الذكية بأفضل أداء دائماً
                        </p>

                        {/* Live Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                            <div className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-white/5 border-white/20'
                                    : 'bg-white/70 border-gray-200'
                            }`}>
                                <div className="text-center">
                                    <div className={`text-2xl font-bold transition-colors duration-500 ${
                                        isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                    }`}>
                                        {formatTime(currentTime)}
                                    </div>
                                    <div className={`text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        الوقت الحالي
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-white/5 border-white/20'
                                    : 'bg-white/70 border-gray-200'
                            }`}>
                                <div className="text-center">
                                    <div className={`text-2xl font-bold transition-colors duration-500 ${
                                        isDarkMode ? 'text-green-400' : 'text-green-600'
                                    }`}>
                                        {activeTickets}
                                    </div>
                                    <div className={`text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        طلبات نشطة
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-white/5 border-white/20'
                                    : 'bg-white/70 border-gray-200'
                            }`}>
                                <div className="text-center">
                                    <div className={`text-2xl font-bold transition-colors duration-500 ${
                                        isDarkMode ? 'text-orange-400' : 'text-orange-600'
                                    }`}>
                                        {responseTime}
                                    </div>
                                    <div className={`text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        وقت الاستجابة
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-red-500/25'
                                    : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-red-500/25'
                            }`}>
                                <Phone className="w-5 h-5" />
                                طوارئ - اتصل الآن
                            </button>
                            
                            <button className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF]/10'
                                    : 'border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93]/10'
                            }`}>
                                <MessageCircle className="w-5 h-5" />
                                دردشة مباشرة
                            </button>
                        </div>
                    </div>

                    {/* Support Dashboard Mockup */}
                    <div className="relative">
                        <div className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 shadow-2xl' 
                                : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200 shadow-2xl'
                        }`}>
                            
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                        isDarkMode 
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]' 
                                            : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
                                    }`}>
                                        <Headphones className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg transition-colors duration-500 ${
                                            isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            مركز الدعم الفني
                                        </h3>
                                        <p className={`text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {supportStatus}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            </div>

                            {/* Support Tickets */}
                            <div className="space-y-4 mb-6">
                                {[
                                    { id: '#2024-001', issue: 'مشكلة في نظام الإضاءة', status: 'قيد المعالجة', priority: 'عالية', time: '10:30 ص' },
                                    { id: '#2024-002', issue: 'صيانة دورية للتكييف', status: 'مجدولة', priority: 'متوسطة', time: '02:15 م' },
                                    { id: '#2024-003', issue: 'تحديث نظام الأمان', status: 'مكتملة', priority: 'منخفضة', time: '04:45 م' }
                                ].map((ticket, index) => (
                                    <div
                                        key={ticket.id}
                                        className={`p-4 rounded-xl border transition-all duration-300 hover:scale-102 ${
                                            isDarkMode 
                                                ? 'bg-gray-800/50 border-gray-600 hover:border-[#00A4FF]/50' 
                                                : 'bg-white/50 border-gray-200 hover:border-[#1F3A93]/50'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`text-sm font-mono transition-colors duration-500 ${
                                                        isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                                    }`}>
                                                        {ticket.id}
                                                    </span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        ticket.priority === 'عالية' 
                                                            ? 'bg-red-100 text-red-800' 
                                                            : ticket.priority === 'متوسطة'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-green-100 text-green-800'
                                                    }`}>
                                                        {ticket.priority}
                                                    </span>
                                                </div>
                                                <p className={`font-medium transition-colors duration-500 ${
                                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                                }`}>
                                                    {ticket.issue}
                                                </p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <span className={`text-sm flex items-center gap-1 transition-colors duration-500 ${
                                                        ticket.status === 'مكتملة' 
                                                            ? 'text-green-600' 
                                                            : ticket.status === 'قيد المعالجة'
                                                            ? 'text-orange-600'
                                                            : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                        {ticket.status === 'مكتملة' ? (
                                                            <CheckCircle className="w-4 h-4" />
                                                        ) : ticket.status === 'قيد المعالجة' ? (
                                                            <Settings className="w-4 h-4 animate-spin" />
                                                        ) : (
                                                            <Clock className="w-4 h-4" />
                                                        )}
                                                        {ticket.status}
                                                    </span>
                                                    <span className={`text-sm transition-colors duration-500 ${
                                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                        {ticket.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-3">
                                <button className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-blue-500/20 border-blue-500/30 text-blue-400 hover:bg-blue-500/30'
                                        : 'bg-blue-500/10 border-blue-500/30 text-blue-600 hover:bg-blue-500/20'
                                }`}>
                                    <Phone className="w-5 h-5 mx-auto mb-1" />
                                    <span className="text-sm font-medium">اتصال مباشر</span>
                                </button>
                                
                                <button className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30'
                                        : 'bg-green-500/10 border-green-500/30 text-green-600 hover:bg-green-500/20'
                                }`}>
                                    <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                                    <span className="text-sm font-medium">دردشة فورية</span>
                                </button>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce transition-colors duration-500 ${
                            isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                        }`} />
                        <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-ping transition-colors duration-500 ${
                            isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
                        }`} />
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }

                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </div>
    );
};

export default HeroSection;