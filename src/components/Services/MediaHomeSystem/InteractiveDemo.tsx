import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { 
    Play, 
    Pause, 
    SkipForward, 
    SkipBack, 
    Volume2, 
    VolumeX,
    Shuffle,
    Repeat,
    Heart,
    MoreHorizontal,
    Smartphone,
    Tv,
    Speaker,
    Headphones
} from 'lucide-react';

const InteractiveDemo = () => {
    const { isDarkMode } = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [volume, setVolume] = useState(75);
    const [progress, setProgress] = useState(0);
    const [activeDevice, setActiveDevice] = useState('living-room');
    const [isLiked, setIsLiked] = useState(false);
    const [isShuffled, setIsShuffled] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one
    const progressRef = useRef(null);

    const playlist = [
        {
            id: 1,
            title: "موسيقى هادئة للاسترخاء",
            artist: "فريق الموسيقى الهادئة",
            duration: "4:32",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&auto=format"
        },
        {
            id: 2,
            title: "أنغام شرقية معاصرة",
            artist: "الفرقة الشرقية",
            duration: "3:45",
            cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&auto=format"
        },
        {
            id: 3,
            title: "موسيقى كلاسيكية راقية",
            artist: "الأوركسترا السيمفونية",
            duration: "5:18",
            cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop&auto=format"
        }
    ];

    const devices = [
        {
            id: 'living-room',
            name: 'غرفة المعيشة',
            icon: <Tv className="w-5 h-5" />,
            type: 'Smart TV + Soundbar',
            status: 'متصل',
            volume: 75
        },
        {
            id: 'bedroom',
            name: 'غرفة النوم',
            icon: <Speaker className="w-5 h-5" />,
            type: 'Smart Speakers',
            status: 'متصل',
            volume: 45
        },
        {
            id: 'kitchen',
            name: 'المطبخ',
            icon: <Speaker className="w-5 h-5" />,
            type: 'Ceiling Speakers',
            status: 'غير متصل',
            volume: 0
        },
        {
            id: 'phone',
            name: 'الهاتف الذكي',
            icon: <Smartphone className="w-5 h-5" />,
            type: 'Mobile Device',
            status: 'متصل',
            volume: 60
        }
    ];

    // Simulate progress
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        // Auto next song
                        setCurrentSong(prevSong => (prevSong + 1) % playlist.length);
                        return 0;
                    }
                    return prev + 0.5;
                });
            }, 200);
        }
        return () => clearInterval(interval);
    }, [isPlaying, playlist.length]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentSong((prev) => (prev + 1) % playlist.length);
        setProgress(0);
    };

    const handlePrevious = () => {
        setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
        setProgress(0);
    };

    const handleProgressClick = (e) => {
        if (progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const newProgress = (clickX / rect.width) * 100;
            setProgress(newProgress);
        }
    };

    const formatTime = (percentage) => {
        const totalSeconds = 272; // 4:32 in seconds
        const currentSeconds = Math.floor((percentage / 100) * totalSeconds);
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <section dir={"ltr"} className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
        }`}>
            {/* Background Effects */}
            <div className="absolute inset-0">
                {isPlaying && (
                    <>
                        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse transition-colors duration-500 ${
                            isDarkMode ? 'bg-[#00A4FF]/20' : 'bg-[#1F3A93]/20'
                        }`} />
                        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-2xl animate-bounce transition-colors duration-500 ${
                            isDarkMode ? 'bg-[#1F3A93]/20' : 'bg-[#00A4FF]/20'
                        }`} />
                    </>
                )}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            جرب النظام الآن
                        </span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        تفاعل مع واجهة التحكم الذكية واختبر مميزات النظام بنفسك
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Music Player */}
                    <div className="lg:col-span-2">
                        <div className={`p-8 rounded-3xl border transition-all duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 shadow-2xl' 
                                : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200 shadow-2xl'
                        }`}>
                            
                            {/* Now Playing */}
                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative">
                                    <img
                                        src={playlist[currentSong].cover}
                                        alt={playlist[currentSong].title}
                                        className={`w-24 h-24 rounded-2xl object-cover transition-all duration-500 ${
                                            isPlaying ? 'animate-pulse shadow-lg' : ''
                                        }`}
                                    />
                                    {isPlaying && (
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                                            <div className="w-8 h-8 border-2 border-white rounded-full border-t-transparent animate-spin" />
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {playlist[currentSong].title}
                                    </h3>
                                    <p className={`transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {playlist[currentSong].artist}
                                    </p>
                                    <div className="flex items-center gap-4 mt-3">
                                        <span className={`text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                            {formatTime(progress)}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full animate-pulse ${
                                                isPlaying 
                                                    ? isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                                    : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
                                            }`} />
                                            <span className={`text-xs transition-colors duration-500 ${
                                                isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                            }`}>
                                                {isPlaying ? 'يتم التشغيل' : 'متوقف'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                        isLiked
                                            ? isDarkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-500/20 text-red-500'
                                            : isDarkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                >
                                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div
                                    ref={progressRef}
                                    onClick={handleProgressClick}
                                    className={`w-full h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                        isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                    }`}
                                >
                                    <div
                                        className={`h-full rounded-full transition-all duration-300 ${
                                            isDarkMode 
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]' 
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
                                        }`}
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className={`text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        {formatTime(progress)}
                                    </span>
                                    <span className={`text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        {playlist[currentSong].duration}
                                    </span>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center gap-6 mb-8">
                                <button
                                    onClick={() => setIsShuffled(!isShuffled)}
                                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                                                                isShuffled
                                            ? isDarkMode ? 'bg-[#00A4FF]/20 text-[#00A4FF]' : 'bg-[#1F3A93]/20 text-[#1F3A93]'
                                            : isDarkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                >
                                    <Shuffle className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handlePrevious}
                                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                        isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                >
                                    <SkipBack className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={handlePlayPause}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                                        isDarkMode
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25'
                                            : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25'
                                    }`}
                                >
                                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                                </button>

                                <button
                                    onClick={handleNext}
                                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                        isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                >
                                    <SkipForward className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={() => setRepeatMode((prev) => (prev + 1) % 3)}
                                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                        repeatMode > 0
                                            ? isDarkMode ? 'bg-[#00A4FF]/20 text-[#00A4FF]' : 'bg-[#1F3A93]/20 text-[#1F3A93]'
                                            : isDarkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                >
                                    <Repeat className="w-5 h-5" />
                                    {repeatMode === 2 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                            1
                                        </span>
                                    )}
                                </button>
                            </div>

                            {/* Volume Control */}
                            <div className="flex items-center gap-4">
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
                    </div>

                    {/* Device Control Panel */}
                    <div className="space-y-6">
                        {/* Connected Devices */}
                        <div className={`p-6 rounded-2xl border transition-all duration-500 ${
                            isDarkMode 
                                ? 'bg-gray-800/50 border-gray-700' 
                                : 'bg-white/90 border-gray-200'
                        }`}>
                            <h3 className={`text-lg font-bold mb-4 transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                الأجهزة المتصلة
                            </h3>
                            
                            <div className="space-y-3">
                                {devices.map((device) => (
                                    <div
                                        key={device.id}
                                        onClick={() => setActiveDevice(device.id)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                            activeDevice === device.id
                                                ? isDarkMode
                                                    ? 'bg-[#00A4FF]/20 border border-[#00A4FF]/30'
                                                    : 'bg-[#1F3A93]/20 border border-[#1F3A93]/30'
                                                : isDarkMode
                                                    ? 'bg-gray-700/50 hover:bg-gray-700'
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                                activeDevice === device.id
                                                    ? isDarkMode ? 'bg-[#00A4FF] text-white' : 'bg-[#1F3A93] text-white'
                                                    : isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-300 text-gray-600'
                                            }`}>
                                                {device.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className={`font-semibold text-sm transition-colors duration-500 ${
                                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                                }`}>
                                                    {device.name}
                                                </h4>
                                                <p className={`text-xs transition-colors duration-500 ${
                                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}>
                                                    {device.type}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${
                                                    device.status === 'متصل' ? 'bg-green-500' : 'bg-red-500'
                                                }`} />
                                                <span className={`text-xs transition-colors duration-500 ${
                                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}>
                                                    {device.status}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {device.status === 'متصل' && (
                                            <div className="flex items-center gap-2">
                                                <Volume2 className={`w-4 h-4 transition-colors duration-500 ${
                                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`} />
                                                <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all duration-300 ${
                                                            isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                                        }`}
                                                        style={{ width: `${device.volume}%` }}
                                                    />
                                                </div>
                                                <span className={`text-xs transition-colors duration-500 ${
                                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}>
                                                    {device.volume}%
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="mt-12 text-center">
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-white/5 border-white/20' 
                            : 'bg-white/70 border-gray-200'
                    }`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                            isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                        }`} />
                        <span className={`text-sm font-medium transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            هذا عرض تفاعلي - جرب النقر على العناصر المختلفة
                        </span>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
                input[type="range"]::-webkit-slider-thumb {
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

                input[type="range"]::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 15px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }

                input[type="range"]::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                input[type="range"]::-moz-range-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 15px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }

                input[type="range"]:focus {
                    outline: none;
                }
            `}</style>
        </section>
    );
};

export default InteractiveDemo;


