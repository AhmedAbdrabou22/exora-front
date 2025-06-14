import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import {
    Mic,
    MicOff,
    Play,
    Pause,
    Volume2,
   VolumeIcon,
   
    Music,
    Waves,
    Bot,
    SkipForward,
    SkipBack
} from 'lucide-react';

const VoiceControlDemo = () => {
    const { isDarkMode } = useTheme();
    const [isListening, setIsListening] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentSong, setCurrentSong] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [audioWaves, setAudioWaves] = useState(Array(8).fill(0));
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [lastResponse, setLastResponse] = useState('');
    const [transcript, setTranscript] = useState('');
    
    const audioRef = useRef(null);
    const recognitionRef = useRef(null);

    // أغاني حقيقية من مصادر مجانية
    const songs = [
        // موسيقى هادئة
        {
            id: 1,
            name: 'Relaxing Piano Music',
            artist: 'Peaceful Sounds',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'هادئة'
        },
        {
            id: 2,
            name: 'Ocean Waves',
            artist: 'Nature Sounds',
            url: 'https://www.soundjay.com/nature/sounds/ocean-wave-1.wav',
            type: 'هادئة'
        },
        // موسيقى شرقية
        {
            id: 3,
            name: 'Arabian Nights',
            artist: 'Middle Eastern Orchestra',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'شرقية'
        },
        {
            id: 4,
            name: 'Desert Wind',
            artist: 'Oriental Music',
            url: 'https://www.soundjay.com/nature/sounds/wind-desert-1.wav',
            type: 'شرقية'
        },
        // موسيقى كلاسيكية
        {
            id: 5,
            name: 'Classical Symphony',
            artist: 'Orchestra Classic',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'كلاسيكية'
        },
        {
            id: 6,
            name: 'Piano Sonata',
            artist: 'Classical Masters',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'كلاسيكية'
        },
        // موسيقى صاخبة
        {
            id: 7,
            name: 'Party Beat',
            artist: 'DJ Energy',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'صاخبة'
        },
        {
            id: 8,
            name: 'Electronic Dance',
            artist: 'Beat Masters',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'صاخبة'
        },
        // جاز
        {
            id: 9,
            name: 'Smooth Jazz',
            artist: 'Jazz Ensemble',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'جاز'
        },
        {
            id: 10,
            name: 'Blue Note',
            artist: 'Jazz Masters',
            url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            type: 'جاز'
        }
    ];

    // Voice commands patterns
    const voiceCommands = {
        play: ['شغل', 'تشغيل', 'ابدأ', 'play', 'start'],
        pause: ['توقف', 'إيقاف', 'pause', 'stop', 'وقف'],
        next: ['التالي', 'التالية', 'next', 'skip'],
        previous: ['السابق', 'السابقة', 'previous', 'back'],
        volumeUp: ['علي الصوت', 'ارفع الصوت', 'زود الصوت', 'volume up', 'اعلى'],
        volumeDown: ['خفف الصوت', 'قلل الصوت', 'وطي الصوت', 'volume down', 'اقل'],
        songTypes: {
            'هادئة': ['هادئة', 'هادئ', 'استرخاء', 'relaxing', 'calm'],
            'صاخبة': ['صاخبة', 'حماسية', 'طاقة', 'loud', 'party'],
            'شرقية': ['شرقية', 'عربية', 'تراثية', 'oriental'],
            'كلاسيكية': ['كلاسيكية', 'كلاسيك', 'classical'],
            'جاز': ['جاز', 'jazz']
        }
    };

    // Text to Speech function
    const speak = (text) => {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel(); // إلغاء أي كلام سابق
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.8;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            speechSynthesis.speak(utterance);
        }
    };

    // Initialize Speech Recognition
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            
            // إعدادات محسنة للتعرف على الصوت
            recognitionRef.current.continuous = true; // استمرار الاستماع
            recognitionRef.current.interimResults = true; // عرض النتائج المؤقتة
            recognitionRef.current.lang = 'ar-SA';
            recognitionRef.current.maxAlternatives = 3;
            
            recognitionRef.current.onstart = () => {
                console.log('بدء الاستماع');
                setIsListening(true);
            };

            recognitionRef.current.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }

                setTranscript(interimTranscript || finalTranscript);

                if (finalTranscript) {
                    console.log('الأمر المسموع:', finalTranscript);
                    setIsProcessing(true);
                    
                    setTimeout(() => {
                        const response = processVoiceCommand(finalTranscript);
                        setLastResponse(response);
                        speak(response);
                        setIsProcessing(false);
                        setTranscript('');
                    }, 500);
                }
            };

            recognitionRef.current.onerror = (event) => {
                console.error('خطأ في التعرف على الصوت:', event.error);
                setIsListening(false);
                setIsProcessing(false);
                setTranscript('');
                
                if (event.error === 'no-speech') {
                    setLastResponse('لم أسمع شيئاً، جرب مرة أخرى');
                } else if (event.error === 'network') {
                    setLastResponse('مشكلة في الاتصال، تأكد من الإنترنت');
                }
            };

            recognitionRef.current.onend = () => {
                console.log('انتهى الاستماع');
                setIsListening(false);
                setTranscript('');
            };
        }
    }, []);

    // Audio player effects
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
            
            const updateTime = () => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                    setDuration(audioRef.current.duration || 0);
                }
            };

            const handleEnded = () => {
                setIsPlaying(false);
                const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
                const nextSong = songs[(currentIndex + 1) % songs.length];
                playSong(nextSong);
            };

            const handleLoadStart = () => {
                console.log('بدء تحميل الصوت');
            };

            const handleCanPlay = () => {
                console.log('الصوت جاهز للتشغيل');
            };

            const handleError = (e) => {
                console.error('خطأ في تشغيل الصوت:', e);
                setIsPlaying(false);
                setLastResponse('عذراً، حدث خطأ في تشغيل الأغنية');
            };

            audioRef.current.addEventListener('timeupdate', updateTime);
            audioRef.current.addEventListener('ended', handleEnded);
            audioRef.current.addEventListener('loadedmetadata', updateTime);
            audioRef.current.addEventListener('loadstart', handleLoadStart);
            audioRef.current.addEventListener('canplay', handleCanPlay);
            audioRef.current.addEventListener('error', handleError);

            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener('timeupdate', updateTime);
                    audioRef.current.removeEventListener('ended', handleEnded);
                    audioRef.current.removeEventListener('loadedmetadata', updateTime);
                    audioRef.current.removeEventListener('loadstart', handleLoadStart);
                    audioRef.current.removeEventListener('canplay', handleCanPlay);
                    audioRef.current.removeEventListener('error', handleError);
                }
            };
        }
    }, [currentSong, volume]);

    // Animate audio waves
    useEffect(() => {
        let interval;
        if (isListening || isProcessing || isPlaying) {
            interval = setInterval(() => {
                setAudioWaves(prev => prev.map(() => Math.random() * 100));
            }, 100);
        } else {
            setAudioWaves(Array(8).fill(0));
        }
        return () => clearInterval(interval);
    }, [isListening, isProcessing, isPlaying]);

    // Play song function
    const playSong = (song) => {
        if (audioRef.current && song) {
            setCurrentSong(song);
            audioRef.current.src = song.url;
            audioRef.current.load(); // إعادة تحميل الصوت
            
            const playPromise = audioRef.current.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        console.log('تم بدء التشغيل بنجاح');
                    })
                    .catch(error => {
                        console.error('خطأ في التشغيل:', error);
                        setIsPlaying(false);
                        setLastResponse('عذراً، لا يمكن تشغيل هذه الأغنية');
                    });
            }
        }
    };

    // Process voice command
    const processVoiceCommand = (command) => {
        const lowerCommand = command.toLowerCase();
        
        // Check for play commands
        if (voiceCommands.play.some(cmd => lowerCommand.includes(cmd))) {
            if (lowerCommand.includes('أغنية') || lowerCommand.includes('موسيقى')) {
                let selectedSongs = [];
                
                for (const [type, keywords] of Object.entries(voiceCommands.songTypes)) {
                    if (keywords.some(keyword => lowerCommand.includes(keyword))) {
                        selectedSongs = songs.filter(song => song.type === type);
                        break;
                    }
                }
                
                if (selectedSongs.length === 0) {
                    selectedSongs = songs;
                }
                
                const randomSong = selectedSongs[Math.floor(Math.random() * selectedSongs.length)];
                playSong(randomSong);
                return `تم تشغيل ${randomSong.name} للفنان ${randomSong.artist}`;
            } else if (currentSong) {
                audioRef.current?.play();
                setIsPlaying(true);
                return 'تم استئناف التشغيل';
            } else {
                const randomSong = songs[Math.floor(Math.random() * songs.length)];
                playSong(randomSong);
                return `تم تشغيل ${randomSong.name}`;
            }
        }
        
        // Check for pause commands
        if (voiceCommands.pause.some(cmd => lowerCommand.includes(cmd))) {
            audioRef.current?.pause();
            setIsPlaying(false);
            return 'تم إيقاف التشغيل';
        }

        // Check for next commands
        if (voiceCommands.next.some(cmd => lowerCommand.includes(cmd))) {
            const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
            const nextSong = songs[(currentIndex + 1) % songs.length];
            playSong(nextSong);
            return `تم تشغيل الأغنية التالية: ${nextSong.name}`;
        }

        // Check for previous commands
        if (voiceCommands.previous.some(cmd => lowerCommand.includes(cmd))) {
            const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
            const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
            playSong(prevSong);
            return `تم تشغيل الأغنية السابقة: ${prevSong.name}`;
        }
        
        // Check for volume up commands
        if (voiceCommands.volumeUp.some(cmd => lowerCommand.includes(cmd))) {
            const newVolume = Math.min(100, volume + 20);
            setVolume(newVolume);
            return `تم رفع مستوى الصوت إلى ${newVolume} بالمئة`;
        }
        
        // Check for volume down commands
        if (voiceCommands.volumeDown.some(cmd => lowerCommand.includes(cmd))) {
            const newVolume = Math.max(0, volume - 20);
            setVolume(newVolume);
            return `تم خفض مستوى الصوت إلى ${newVolume} بالمئة`;
        }
        
        return 'عذراً، لم أفهم الأمر. يمكنك قول شغل موسيقى هادئة أو علي الصوت أو توقف';
    };

    // Start/Stop listening
    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.start();
                } catch (error) {
                    console.error('خطأ في بدء الاستماع:', error);
                    setLastResponse('عذراً، لا يمكن بدء الاستماع. تأكد من السماح بالوصول للميكروفون');
                }
            }
        }
    };

    // Format time
    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <section className={`py-20 relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
        }`}>
            {/* Hidden Audio Element */}
            <audio 
                ref={audioRef} 
                preload="metadata" 
                crossOrigin="anonymous"
            />

            {/* Background Effects */}
            <div className="absolute inset-0">
                {(isListening || isProcessing || isPlaying) && (
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
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-all duration-300 ${
                        isDarkMode 
                            ? 'bg-[#00A4FF]/20 border-[#00A4FF]/30' 
                            : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                    }`}>
                        <Bot className="w-5 h-5" />
                        <span className={`font-semibold transition-colors duration-500 ${
                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                        }`}>التحكم الصوتي الذكي</span>
                    </div>

                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className={`transition-colors duration-500 ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] bg-clip-text text-transparent'
                        }`}>
                            تحدث مع نظامك الصوتي
                        </span>
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        جرب التحكم الصوتي الذكي - تحدث بطبيعية وسيفهم النظام ما تريد ويرد عليك صوتياً
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Control Panel */}
                    <div className={`p-8 rounded-3xl border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 shadow-2xl' 
                            : 'bg-gradient-to-br from-white/90 to-gray-100/90 border-gray-200 shadow-2xl'
                    }`}>
                        
                        {/* Microphone Button */}
                        <div className="text-center mb-8">
                            <button
                                onClick={toggleListening}
                                disabled={isProcessing}
                                className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed ${
                                    isListening
                                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 animate-pulse'
                                        : isProcessing
                                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/25'
                                            : isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25 hover:shadow-xl'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25 hover:shadow-xl'
                                }`}
                            >
                                {isListening ? (
                                    <MicOff className="w-12 h-12" />
                                ) : isProcessing ? (
                                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <Mic className="w-12 h-12" />
                                )}
                                
                                {/* Sound waves animation */}
                                {isListening && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {[1, 2, 3].map((ring) => (
                                            <div
                                                key={ring}
                                                className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"
                                                style={{
                                                    animationDelay: `${ring * 0.5}s`,
                                                    animationDuration: '2s'
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </button>
                            
                            <p className={`mt-4 text-lg font-medium transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                {isListening 
                                    ? 'جاري الاستماع... (اضغط لإيقاف)'
                                    : isProcessing 
                                        ? 'جاري المعالجة...'
                                        : 'اضغط للتحدث'
                                }
                            </p>
                            
                            {/* Live Transcript */}
                            {transcript && (
                                <div className={`mt-3 p-3 rounded-lg transition-all duration-500 ${
                                    isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
                                }`}>
                                    <p className="text-sm">تم سماع: "{transcript}"</p>
                                </div>
                            )}
                            
                            <p className={`text-sm mt-2 transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                جرب قول: "شغل موسيقى هادئة" أو "علي الصوت" أو "التالي"
                            </p>
                        </div>

                        {/* Audio Waves Visualization */}
                        <div className="flex items-end justify-center gap-1 mb-8 h-16">
                            {audioWaves.map((height, index) => (
                                <div
                                    key={index}
                                    className={`w-3 rounded-full transition-all duration-150 ${
                                        isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                    }`}
                                    style={{
                                        height: `${(isListening || isProcessing || isPlaying) ? height/2 + 20 : 20}px`,
                                        opacity: (isListening || isProcessing || isPlaying) ? 0.8 : 0.3
                                    }}
                                />
                            ))}
                        </div>

                        {/* Last Response */}
                        {lastResponse && (
                            <div className={`p-4 rounded-xl mb-6 transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-green-900/30 border border-green-700/50' 
                                    : 'bg-green-100 border border-green-200'
                            }`}>
                                <div className="flex items-center gap-3">
                                    <Bot className={`w-6 h-6 transition-colors duration-500 ${
                                        isDarkMode ? 'text-green-400' : 'text-green-600'
                                    }`} />
                                    <p className={`font-medium transition-colors duration-500 ${
                                        isDarkMode ? 'text-green-300' : 'text-green-800'
                                    }`}>
                                        {lastResponse}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Current Playing */}
                        {currentSong && (
                            <div className={`p-6 rounded-xl mb-6 transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-gray-800/70 border border-gray-700' 
                                    : 'bg-white/70 border border-gray-200'
                            }`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                        isDarkMode ? 'bg-[#00A4FF]/20' : 'bg-[#1F3A93]/20'
                                    }`}>
                                        <Music className={`w-8 h-8 transition-colors duration-500 ${
                                            isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                        }`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`font-bold text-lg transition-colors duration-500 ${
                                            isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {currentSong.name}
                                        </h3>
                                        <p className={`transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {currentSong.artist} • {currentSong.type}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {isPlaying ? (
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        ) : (
                                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                                        )}
                                        <span className={`text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {isPlaying ? 'يتم التشغيل' : 'متوقف'}
                                        </span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className={`w-full h-2 rounded-lg ${
                                        isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                    }`}>
                                        <div
                                            className={`h-full rounded-lg transition-all duration-300 ${
                                                isDarkMode 
                                                    ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]' 
                                                    : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
                                            }`}
                                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className={`text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {formatTime(currentTime)}
                                        </span>
                                        <span className={`text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {formatTime(duration)}
                                        </span>
                                    </div>
                                </div>

                                {/* Manual Controls */}
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={() => {
                                            const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
                                            const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
                                            playSong(prevSong);
                                        }}
                                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                            isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                    >
                                        <SkipBack className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (isPlaying) {
                                                audioRef.current?.pause();
                                                setIsPlaying(false);
                                            } else {
                                                audioRef.current?.play();
                                                setIsPlaying(true);
                                            }
                                        }}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                                            isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25'
                                        }`}
                                    >
                                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                                    </button>

                                    <button
                                        onClick={() => {
                                            const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
                                            const nextSong = songs[(currentIndex + 1) % songs.length];
                                            playSong(nextSong);
                                        }}
                                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                                            isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                    >
                                        <SkipForward className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Volume Control */}
                        <div className="flex items-center gap-4 mb-8">
                            <Volume2 className={`w-6 h-6 transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`} />
                            <div className="flex-1">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={volume}
                                    onChange={(e) => setVolume(parseInt(e.target.value))}
                                    className={`w-full h-3 rounded-lg appearance-none cursor-pointer ${
                                        isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                    }`}
                                    style={{
                                        background: `linear-gradient(to right, ${isDarkMode ? '#00A4FF' : '#1F3A93'} 0%, ${isDarkMode ? '#00A4FF' : '#1F3A93'} ${volume}%, ${isDarkMode ? '#374151' : '#D1D5DB'} ${volume}%, ${isDarkMode ? '#374151' : '#D1D5DB'} 100%)`
                                    }}
                                />
                            </div>
                            <span className={`text-lg font-bold min-w-[4rem] text-center transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                {volume}%
                            </span>
                        </div>

                        {/* Quick Commands */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { text: 'شغل موسيقى هادئة', icon: <Play className="w-4 h-4" /> },
                                { text: 'علي الصوت', icon: <VolumeIcon className="w-4 h-4" /> },
                                { text: 'وطي الصوت', icon: <VolumeIcon className="w-4 h-4" /> },
                                { text: 'توقف', icon: <Pause className="w-4 h-4" /> }
                            ].map((command, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        const response = processVoiceCommand(command.text);
                                        setLastResponse(response);
                                        speak(response);
                                    }}
                                    className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                        isDarkMode
                                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                                    }`}
                                >
                                    {command.icon}
                                    <span>{command.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Available Songs */}
                    <div className={`mt-8 p-6 rounded-2xl border transition-all duration-500 ${
                        isDarkMode 
                            ? 'bg-gray-800/50 border-gray-700' 
                            : 'bg-white/90 border-gray-200'
                    }`}>
                        <h3 className={`text-lg font-bold mb-4 transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            الأغاني المتاحة
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                            {songs.map((song) => (
                                <button
                                    key={song.id}
                                    onClick={() => playSong(song)}
                                    className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-300 hover:scale-102 ${
                                        currentSong?.id === song.id
                                            ? isDarkMode
                                                ? 'bg-[#00A4FF]/20 border border-[#00A4FF]/30'
                                                : 'bg-[#1F3A93]/20 border border-[#1F3A93]/30'
                                            : isDarkMode
                                                ? 'bg-gray-700/50 hover:bg-gray-700'
                                                : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                        currentSong?.id === song.id
                                            ? isDarkMode ? 'bg-[#00A4FF] text-white' : 'bg-[#1F3A93] text-white'
                                            : isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-300 text-gray-600'
                                    }`}>
                                        {currentSong?.id === song.id && isPlaying ? (
                                            <Pause className="w-5 h-5" />
                                        ) : (
                                            <Play className="w-5 h-5" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`font-semibold text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {song.name}
                                        </h4>
                                        <p className={`text-xs transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {song.artist} • {song.type}
                                        </p>
                                    </div>
                                    {currentSong?.id === song.id && (
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    )}
                                </button>
                            ))}
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
                            النظام يدعم التحكم الصوتي باللغة العربية - جرب الآن!
                        </span>
                    </div>
                </div>
            </div>

            {/* Custom Slider Styles */}
            <style jsx global>{`
                input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    border: 3px solid white;
                }

                input[type="range"]::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 20px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }

                input[type="range"]::-moz-range-thumb {
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                input[type="range"]::-moz-range-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 20px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
                }

                input[type="range"]:focus {
                    outline: none;
                }
            `}</style>
        </section>
    );
};

export default VoiceControlDemo;

