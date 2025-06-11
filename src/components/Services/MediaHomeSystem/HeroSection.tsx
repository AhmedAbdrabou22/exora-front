import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Play, Pause, Volume2, VolumeX, Wifi, Home, Music } from 'lucide-react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const speakersRef = useRef(null);
    const soundWavesRef = useRef(null);
    const { isDarkMode } = useTheme();
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(75);
    const [currentRoom, setCurrentRoom] = useState('living-room');
    const [soundWaves, setSoundWaves] = useState(Array(12).fill(0));

    const rooms = [
        { id: 'living-room', name: 'غرفة المعيشة', icon: '🛋️', active: true },
        { id: 'bedroom', name: 'غرفة النوم', icon: '🛏️', active: false },
        { id: 'kitchen', name: 'المطبخ', icon: '🍳', active: false },
        { id: 'bathroom', name: 'الحمام', icon: '🚿', active: false }
    ];

    // Animate sound waves
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setSoundWaves(prev => prev.map(() => Math.random() * 100));
            }, 150);
        } else {
            setSoundWaves(Array(12).fill(0));
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Mouse parallax effect
    useEffect(() => {
        const container = containerRef.current;
        const speakers = speakersRef.current;
        const waves = soundWavesRef.current;

        if (!container || !speakers || !waves) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            speakers.style.transform = `translate(${x * 20}px, ${y * 20}px) rotateY(${x * 10}deg)`;
            waves.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center transition-all duration-500 ${
                isDarkMode 
                    ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                    : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
            }`}
        >
            {/* Animated Background Circles */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full transition-all duration-1000 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10' 
                                : 'bg-gradient-to-r from-[#1F3A93]/15 to-[#00A4FF]/15'
                        }`}
                        style={{
                            width: `${300 + i * 150}px`,
                            height: `${300 + i * 150}px`,
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) scale(${isPlaying ? 1.1 : 1})`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            {/* Sound Waves Animation */}
            <div
                ref={soundWavesRef}
                className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
            >
                <div className="flex items-end gap-2">
                    {soundWaves.map((height, index) => (
                        <div
                            key={index}
                            className={`w-2 rounded-full transition-all duration-150 ${
                                isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                            }`}
                            style={{
                                height: `${isPlaying ? height + 20 : 20}px`,
                                opacity: isPlaying ? 0.8 : 0.3,
                                transform: `scaleY(${isPlaying ? 1 : 0.3})`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="text-center lg:text-right space-y-8">
                        <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                            isDarkMode 
                                ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                                : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                        }`}>
                            <Music className="w-5 h-5" />
                            <span className={`font-semibold transition-colors duration-500 ${
                                isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                            }`}>أنظمة الصوت والميديا</span>
                        </div>

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            <span className={`transition-colors duration-500 ${
                                isDarkMode 
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                            }`}>
                                تجربة صوتية
                            </span>
                            <br />
                            استثنائية في كل غرفة
                        </h1>

                        <p className={`text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            نظام صوتي ذكي متكامل يوزع الموسيقى والصوت بجودة عالية في جميع أنحاء منزلك، 
                            مع تحكم كامل من تطبيق واحد وتخصيص فريد لكل غرفة
                        </p>

                        {/* Control Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white hover:shadow-[#00A4FF]/25'
                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white hover:shadow-[#1F3A93]/25'
                            }`}>
                                <Home className="w-5 h-5" />
                                احجز استشارة مجانية
                            </button>
                            
                            <button className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF]/10'
                                    : 'border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93]/10'
                            }`}>
                                <Wifi className="w-5 h-5" />
                                شاهد العرض التوضيحي
                            </button>
                        </div>
                    </div>

                    {/* Interactive Speaker System */}
                    <div
                        ref={speakersRef}
                        className="relative transition-transform duration-300 ease-out"
                    >
                        {/* Main Speaker System */}
                        <div className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 shadow-2xl shadow-[#00A4FF]/10' 
                                : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-200 shadow-2xl shadow-gray-500/20'
                        }`}>
                            
                            {/* Speaker Grilles */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {[1, 2, 3, 4].map((speaker) => (
                                    <div
                                        key={speaker}
                                        className={`relative w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                                            isPlaying 
                                                ? isDarkMode
                                                    ? 'border-[#00A4FF] bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 shadow-lg shadow-[#00A4FF]/30'
                                                    : 'border-[#1F3A93] bg-gradient-to-r from-[#1F3A93]/20 to-[#00A4FF]/20 shadow-lg shadow-[#1F3A93]/30'
                                                : isDarkMode
                                                    ? 'border-gray-600 bg-gray-700/50'
                                                    : 'border-gray-300 bg-gray-200/50'
                                        }`}
                                        style={{
                                            transform: isPlaying ? `scale(${1 + Math.sin(Date.now() / 1000 + speaker) * 0.1})` : 'scale(1)'
                                        }}
                                    >
                                        {/* Speaker Cone */}
                                        <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                            isPlaying 
                                                ? isDarkMode ? 'border-[#00A4FF] bg-[#00A4FF]/10' : 'border-[#1F3A93] bg-[#1F3A93]/10'
                                                : isDarkMode ? 'border-gray-500 bg-gray-600/30' : 'border-gray-400 bg-gray-300/30'
                                        }`}>
                                            <div className={`w-8 h-8 rounded-full transition-all duration-300 ${
                                                isPlaying 
                                                    ? isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                                    : isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                                            }`} />
                                        </div>

                                        {/* Sound Ripples */}
                                        {isPlaying && (
                                            <div className="absolute inset-0">
                                                {[1, 2, 3].map((ripple) => (
                                                    <div
                                                        key={ripple}
                                                        className={`absolute inset-0 rounded-full border-2 animate-ping ${
                                                            isDarkMode ? 'border-[#00A4FF]/30' : 'border-[#1F3A93]/30'
                                                        }`}
                                                        style={{
                                                            animationDelay: `${ripple * 0.5}s`,
                                                            animationDuration: '2s'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Control Panel */}
                            <div className={`p-6 rounded-2xl transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-gray-800/70 border border-gray-700' 
                                    : 'bg-white/70 border border-gray-200'
                            }`}>
                                
                                {/* Play/Pause & Volume */}
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                                            isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25'
                                        }`}
                                    >
                                                                                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                                    </button>

                                    <div className="flex items-center gap-3 flex-1 ml-6">
                                        <button
                                            onClick={() => setVolume(volume > 0 ? 0 : 75)}
                                            className={`transition-colors duration-300 ${
                                                isDarkMode ? 'text-gray-300 hover:text-[#00A4FF]' : 'text-gray-600 hover:text-[#1F3A93]'
                                            }`}
                                        >
                                            {volume > 0 ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                                        </button>
                                        
                                        <div className="flex-1">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={volume}
                                                onChange={(e) => setVolume(parseInt(e.target.value))}
                                                className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                                                    isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                                }`}
                                                style={{
                                                    background: `linear-gradient(to right, ${isDarkMode ? '#00A4FF' : '#1F3A93'} 0%, ${isDarkMode ? '#00A4FF' : '#1F3A93'} ${volume}%, ${isDarkMode ? '#374151' : '#D1D5DB'} ${volume}%, ${isDarkMode ? '#374151' : '#D1D5DB'} 100%)`
                                                }}
                                            />
                                        </div>
                                        
                                        <span className={`text-sm font-medium min-w-[3rem] text-center transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            {volume}%
                                        </span>
                                    </div>
                                </div>

                                {/* Room Selection */}
                                <div className="space-y-3">
                                    <h4 className={`text-sm font-semibold transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        الغرف المتصلة
                                    </h4>
                                    
                                    <div className="grid grid-cols-2 gap-2">
                                        {rooms.map((room) => (
                                            <button
                                                key={room.id}
                                                onClick={() => setCurrentRoom(room.id)}
                                                className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                                    currentRoom === room.id
                                                        ? isDarkMode
                                                            ? 'bg-[#00A4FF]/20 text-[#00A4FF] border border-[#00A4FF]/30'
                                                            : 'bg-[#1F3A93]/20 text-[#1F3A93] border border-[#1F3A93]/30'
                                                        : isDarkMode
                                                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                            >
                                                <span className="text-lg">{room.icon}</span>
                                                <span>{room.name}</span>
                                                {isPlaying && currentRoom === room.id && (
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Now Playing */}
                                <div className={`mt-6 p-4 rounded-xl transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'bg-gray-900/50 border border-gray-600' 
                                        : 'bg-gray-50 border border-gray-200'
                                }`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                                            isDarkMode ? 'bg-[#00A4FF]/20' : 'bg-[#1F3A93]/20'
                                        }`}>
                                            <Music className={`w-6 h-6 transition-colors duration-500 ${
                                                isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                            }`} />
                                        </div>
                                        <div className="flex-1">
                                            <p className={`font-semibold text-sm transition-colors duration-500 ${
                                                isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>
                                                {isPlaying ? 'موسيقى هادئة للاسترخاء' : 'لا يوجد تشغيل حالياً'}
                                            </p>
                                            <p className={`text-xs transition-colors duration-500 ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                                {isPlaying ? `يتم التشغيل في ${rooms.find(r => r.id === currentRoom)?.name}` : 'اختر أغنية للبدء'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
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

            {/* Custom Styles */}
            <style jsx global>{`
                .volume-slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    border: 2px solid white;
                }

                .volume-slider::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 15px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }
            `}</style>
        </div>
    );
};

export default HeroSection;

