import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
    User, 
    Award, 
    MapPin, 
    Clock, 
    Star,
    Phone,
    MessageCircle,
    Wrench,
    Zap,
    Shield
} from 'lucide-react';

const TechnicalTeam = () => {
    const { isDarkMode } = useTheme();
    const [activeTeamMember, setActiveTeamMember] = useState(0);

    const teamMembers = [
        {
            id: 0,
            name: "أحمد محمد الخبير",
            title: "كبير المهندسين",
            specialization: "أنظمة التكييف والتبريد",
            experience: "12+ سنة",
            location: "الرياض",
            rating: 4.9,
            completedJobs: 850,
            certifications: ["HVAC المعتمد", "ISO 9001", "تقنيات الطاقة المتجددة"],
            languages: ["العربية", "الإنجليزية"],
            availability: "متاح الآن",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80"
        },
        {
            id: 1,
            name: "سارة أحمد التقني",
            title: "مهندسة أنظمة ذكية",
            specialization: "الأتمتة والتحكم الذكي",
            experience: "8+ سنوات",
            location: "جدة",
            rating: 4.8,
            completedJobs: 620,
            certifications: ["IoT المعتمدة", "أنظمة التحكم", "الأمان السيبراني"],
            languages: ["العربية", "الإنجليزية", "الفرنسية"],
            availability: "متاحة الآن",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format&q=80"
        },
        {
            id: 2,
            name: "محمد علي الفني",
            title: "فني صيانة متقدم",
            specialization: "الصيانة الوقائية والإصلاح",
            experience: "10+ سنوات",
            location: "الدمام",
            rating: 4.9,
            completedJobs: 1200,
            certifications: ["صيانة متقدمة", "السلامة المهنية", "إدارة الجودة"],
            languages: ["العربية", "الإنجليزية"],
            availability: "في مهمة - متاح بعد ساعتين",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80"
        },
        {
            id: 3,
            name: "فاطمة حسن المستشارة",
            title: "مستشارة تقنية",
            specialization: "التخطيط والاستشارات الفنية",
            experience: "15+ سنة",
            location: "الرياض",
            rating: 5.0,
            completedJobs: 450,
            certifications: ["استشارات تقنية", "إدارة المشاريع", "التطوير المستدام"],
            languages: ["العربية", "الإنجليزية", "الألمانية"],
            availability: "متاحة للاستشارات",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=80"
        }
    ];

    // Auto-rotate team members
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTeamMember(prev => (prev + 1) % teamMembers.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [teamMembers.length]);

    const getAvailabilityColor = (availability) => {
        if (availability.includes('متاح الآن') || availability.includes('متاحة الآن')) {
            return 'text-green-500 bg-green-500/20';
        } else if (availability.includes('متاح بعد') || availability.includes('للاستشارات')) {
            return 'text-yellow-500 bg-yellow-500/20';
        } else {
            return 'text-red-500 bg-red-500/20';
        }
    };

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
        }`}>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                            : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                    }`}>
                        <User className="w-5 h-5" />
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>فريق الخبراء</span>
                    </div>

                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            تعرف على فريقنا المتخصص
                        </span>
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        مهندسون وفنيون معتمدون مع سنوات من الخبرة في خدمتك
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Team Member Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                onClick={() => setActiveTeamMember(index)}
                                className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
                                    activeTeamMember === index
                                        ? isDarkMode
                                            ? 'border-[#00A4FF] bg-[#00A4FF]/10 shadow-lg shadow-[#00A4FF]/25'
                                            : 'border-[#1F3A93] bg-[#1F3A93]/10 shadow-lg shadow-[#1F3A93]/25'
                                        : isDarkMode
                                            ? 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                                            : 'border-gray-200 bg-white/50 hover:border-gray-300'
                                }`}
                            >
                                <div className="text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                                    />
                                    <h4 className={`font-bold text-sm mb-1 transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {member.name.split(' ').slice(0, 2).join(' ')}
                                    </h4>
                                    <p className={`text-xs transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {member.title}
                                    </p>
                                    <div className="flex items-center justify-center gap-1 mt-2">
                                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                        <span className={`text-xs transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            {member.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Member Details */}
                    <div className={`p-8 rounded-3xl border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700' 
                            : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200'
                    }`}>
                        <div className="flex items-start gap-6 mb-6">
                            <img
                                src={teamMembers[activeTeamMember].image}
                                alt={teamMembers[activeTeamMember].name}
                                className="w-20 h-20 rounded-2xl object-cover"
                            />
                            <div className="flex-1">
                                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    {teamMembers[activeTeamMember].name}
                                </h3>
                                <p className={`text-lg font-medium mb-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                }`}>
                                    {teamMembers[activeTeamMember].title}
                                </p>
                                <p className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    {teamMembers[activeTeamMember].specialization}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className={`text-2xl font-bold transition-colors duration-500 ${
                                    isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                }`}>
                                    {teamMembers[activeTeamMember].rating}
                                </div>
                                <div className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    تقييم
                                </div>
                            </div>
                            <div className="text-center">
                                <div className={`text-2xl font-bold transition-colors duration-500 ${
                                    isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                }`}>
                                    {teamMembers[activeTeamMember].completedJobs}
                                </div>
                                <div className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    مهمة مكتملة
                                </div>
                            </div>
                            <div className="text-center">
                                <div className={`text-2xl font-bold transition-colors duration-500 ${
                                    isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                }`}>
                                    {teamMembers[activeTeamMember].experience}
                                </div>
                                <div className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    خبرة
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3">
                                <MapPin className={`w-5 h-5 transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`} />
                                <span className={`transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {teamMembers[activeTeamMember].location}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <Clock className={`w-5 h-5 transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`} />
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    getAvailabilityColor(teamMembers[activeTeamMember].availability)
                                }`}>
                                    {teamMembers[activeTeamMember].availability}
                                </span>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="mb-6">
                            <h4 className={`font-bold mb-3 transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                الشهادات والاعتمادات:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {teamMembers[activeTeamMember].certifications.map((cert, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                                            isDarkMode 
                                                ? 'bg-[#00A4FF]/20 text-[#00A4FF]' 
                                                : 'bg-[#1F3A93]/20 text-[#1F3A93]'
                                        }`}
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="mb-6">
                            <h4 className={`font-bold mb-3 transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                اللغات:
                            </h4>
                            <div className="flex gap-2">
                                {teamMembers[activeTeamMember].languages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 rounded-lg text-sm transition-all duration-500 ${
                                            isDarkMode 
                                                ? 'bg-gray-700 text-gray-300' 
                                                : 'bg-gray-200 text-gray-700'
                                        }`}
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex gap-3">
                            <button className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                    : 'bg-green-500/20 text-green-600 hover:bg-green-500/30'
                            }`}>
                                <Phone className="w-4 h-4" />
                                اتصال
                            </button>
                            <button className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                                    : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30'
                            }`}>
                                <MessageCircle className="w-4 h-4" />
                                دردشة
                            </button>
                        </div>
                    </div>
                </div>

                {/* Team Stats */}
                <div className="mt-16">
                    <div className={`backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-white/5 border-white/20' 
                            : 'bg-white/70 border-gray-200'
                    }`}>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {[
                                { icon: <User className="w-6 h-6" />, number: "50+", label: "فني متخصص" },
                                { icon: <Award className="w-6 h-6" />, number: "15+", label: "سنة خبرة" },
                                { icon: <Wrench className="w-6 h-6" />, number: "5000+", label: "مهمة مكتملة" },
                                { icon: <Star className="w-6 h-6" />, number: "4.9", label: "تقييم العملاء" }
                            ].map((stat, index) => (
                                <div key={index} className="group">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 bg-gradient-to-r ${
                                        isDarkMode 
                                            ? 'from-[#00A4FF] to-[#1F3A93] shadow-[#00A4FF]/25' 
                                            : 'from-[#1F3A93] to-[#00A4FF] shadow-[#1F3A93]/25'
                                    } text-white shadow-lg group-hover:scale-110`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
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

export default TechnicalTeam;