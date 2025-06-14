import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const MOTION_IMAGE = "https://cdn-icons-png.flaticon.com/512/565/565547.png";

const InteractiveCameras = () => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const [isUserControlling, setIsUserControlling] = useState(false);
    const { isDarkMode } = useTheme();

    const [cameras, setCameras] = useState([
        {
            id: 1,
            name: "كاميرا المدخل الرئيسي",
            position: { x: 0, y: 0, rotation: 0 },
            src: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-footage-of-a-parking-lot-at-night-34652-large.mp4",
            fallbackImage: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            autoPan: { direction: 1, speed: 0.05, maxAngle: 15 }
        },
        {
            id: 2,
            name: "كاميرا الممر",
            position: { x: 0, y: 0, rotation: 0 },
            src: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-footage-of-a-lobby-34658-large.mp4",
            fallbackImage: "https://images.unsplash.com/photo-1541278107931-e006523892df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            autoPan: { direction: 1, speed: 0.03, maxAngle: 10 }
        },
        {
            id: 3,
            name: "كاميرا المكتب",
            position: { x: 0, y: 0, rotation: 0 },
            src: "https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-an-office-space-4220-large.mp4",
            fallbackImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            autoPan: { direction: 1, speed: 0.04, maxAngle: 12 }
        },
        {
            id: 4,
            name: "كاميرا الباب الخلفي",
            position: { x: 0, y: 0, rotation: 0 },
            src: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-footage-of-a-house-entrance-34655-large.mp4",
            fallbackImage: "https://images.unsplash.com/photo-1564604761388-83eafc96f668?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            autoPan: { direction: 1, speed: 0.06, maxAngle: 18 }
        }
    ]);

    const [activeCamera, setActiveCamera] = useState(1);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('ar-EG'));
    const [motionDetected, setMotionDetected] = useState({});
    const [recordingStatus, setRecordingStatus] = useState(true);

    // Auto-panning animation
    useEffect(() => {
        if (isUserControlling) return;

        const animate = () => {
            setCameras(prevCameras =>
                prevCameras.map(camera => {
                    if (camera.id !== activeCamera) return camera;

                    const { autoPan, position } = camera;
                    let newX = position.x + (autoPan.speed * autoPan.direction);

                    // Reverse direction if reached max angle
                    if (Math.abs(newX) > autoPan.maxAngle) {
                        autoPan.direction *= -1;
                        newX = position.x + (autoPan.speed * autoPan.direction);
                    }

                    return {
                        ...camera,
                        position: {
                            ...position,
                            x: newX,
                            rotation: newX * 2
                        },
                        autoPan: {
                            ...autoPan
                        }
                    };
                })
            );

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [activeCamera, isUserControlling]);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleString('ar-EG'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Simulate motion detection for each camera
    useEffect(() => {
        // Initialize motion detection for all cameras
        const initialMotionState = {};
        cameras.forEach(camera => {
            initialMotionState[camera.id] = false;
        });
        setMotionDetected(initialMotionState);

        // Simulate random motion detection
        const motionInterval = setInterval(() => {
            setMotionDetected(prev => {
                const newState = { ...prev };
                // Randomly toggle motion detection for each camera
                cameras.forEach(camera => {
                    if (Math.random() > 0.7) { // 30% chance to change state
                        newState[camera.id] = !newState[camera.id];
                    }
                });
                return newState;
            });
        }, 3000); // Check for motion every 3 seconds

        return () => clearInterval(motionInterval);
    }, [cameras]);

    // Handle mouse movement to control camera
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseEnter = () => {
            setIsUserControlling(true);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };

        const handleMouseLeave = () => {
            setIsUserControlling(false);
        };

        const handleMouseMove = (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 20; // Scale for rotation
            const y = ((e.clientY - top) / height - 0.5) * 20; // Scale for rotation

            setCameras(prevCameras =>
                prevCameras.map(camera =>
                    camera.id === activeCamera
                        ? {
                            ...camera,
                            position: {
                                x: x,
                                y: y,
                                rotation: x * 2 // Slight rotation effect
                            }
                        }
                        : camera
                )
            );
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [activeCamera]);

    const activeVideoStyle = (camera) => {
        const { x, y, rotation } = camera.position;
        return {
            transform: `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg) rotate(${rotation}deg) scale(1.05)`,
            transition: isUserControlling ? 'transform 0.2s ease-out' : 'transform 0.8s ease-out'
        };
    };

    const toggleRecording = () => {
        setRecordingStatus(!recordingStatus);
    };

    return (
        <section className={`py-16 transition-all duration-500 ${isDarkMode
                ? 'bg-[#0A1128]'
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
            }`} dir="rtl">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${isDarkMode
                            ? 'text-white'
                            : 'text-gray-800'
                        }`}>تحكم في كاميرات المراقبة</h2>
                    <p className={`max-w-3xl mx-auto transition-colors duration-500 ${isDarkMode
                            ? 'text-gray-300'
                            : 'text-gray-600'
                        }`}>
                        حرك الماوس فوق الكاميرا لتغيير زاوية الرؤية. جرب التحكم في كاميرات المراقبة الذكية واستكشف كيف يمكنك مراقبة منزلك أو شركتك من أي مكان.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div
                            ref={containerRef}
                            className={`relative rounded-lg shadow-lg overflow-hidden aspect-video transition-all duration-500 ${isDarkMode
                                    ? 'bg-gradient-to-b from-[#1A2B45] to-[#0D1C36]'
                                    : 'bg-gradient-to-b from-gray-200 to-gray-400'
                                }`}
                        >
                            {/* Active camera display */}
                            <div className="absolute inset-0 p-4">
                                <div className="relative w-full h-full overflow-hidden rounded-md">
                                    {cameras.map(camera => (
                                        camera.id === activeCamera && (
                                            <div key={camera.id} className="w-full h-full">
                                                <video
                                                    src={camera.src}
                                                    style={activeVideoStyle(camera)}
                                                    className="w-full h-full object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        const img = document.createElement('img');
                                                        img.src = camera.fallbackImage;
                                                        img.className = "w-full h-full object-cover";
                                                        Object.assign(img.style, activeVideoStyle(camera));
                                                        e.target.parentNode.replaceChild(img, e.target);
                                                    }}
                                                ></video>

                                                {/* Camera overlay effects */}
                                                <div className="absolute inset-0 pointer-events-none">
                                                    {/* Scanlines effect */}
                                                    <div className="absolute inset-0 bg-scanlines opacity-10"></div>

                                                    {/* Vignette effect */}
                                                    <div className="absolute inset-0 bg-radial-gradient opacity-40"></div>

                                                    {/* Noise effect */}
                                                    <div className="absolute inset-0 bg-noise opacity-5"></div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>

                                {/* Camera movement indicators */}
                                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                                    <div className={`text-white p-2 rounded-full transition-opacity duration-300 ${cameras.find(c => c.id === activeCamera)?.position.x < -2 ? 'opacity-70' : 'opacity-0'
                                        } ${isDarkMode ? 'bg-black/40' : 'bg-black/60'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className={`text-white p-2 rounded-full transition-opacity duration-300 ${cameras.find(c => c.id === activeCamera)?.position.x > 2 ? 'opacity-70' : 'opacity-0'
                                        } ${isDarkMode ? 'bg-black/40' : 'bg-black/60'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Camera info overlay */}
                                <div className={`absolute top-4 right-4 text-white px-3 py-2 rounded-md text-sm transition-all duration-500 ${isDarkMode ? 'bg-black/60' : 'bg-black/70'
                                    }`}>
                                    {cameras.find(c => c.id === activeCamera)?.name}
                                </div>

                                {/* Recording indicator */}
                                <div className={`absolute top-4 left-4 text-white px-3 py-2 rounded-md text-sm flex items-center transition-all duration-500 ${isDarkMode ? 'bg-black/60' : 'bg-black/70'
                                    }`}>
                                    <span className={`w-2 h-2 ${recordingStatus ? 'bg-red-500 animate-pulse' : 'bg-gray-500'} rounded-full ml-2`}></span>
                                    {recordingStatus ? 'تسجيل' : 'متوقف'}
                                </div>

                                {/* Motion detection indicator */}
                                {motionDetected[activeCamera] && (
                                    <div className={`absolute bottom-4 left-4 text-white px-3 py-2 rounded-md text-sm flex items-center animate-pulse transition-all duration-500 ${isDarkMode ? 'bg-red-600/80' : 'bg-red-600/90'
                                        }`}>
                                        <img src={MOTION_IMAGE} alt="Motion" className="w-4 h-4 ml-2 filter invert" />
                                        حركة مكتشفة
                                    </div>
                                )}

                                {/* Time overlay */}
                                <div className={`absolute bottom-4 right-4 text-white px-3 py-2 rounded-md text-sm transition-all duration-500 ${isDarkMode ? 'bg-black/60' : 'bg-black/70'
                                    }`}>
                                    {currentTime}
                                </div>
                            </div>
                        </div>

                        {/* Control instructions */}
                        <div className={`mt-4 p-4 rounded-lg transition-all duration-500 ${isDarkMode
                                ? 'bg-[#1A2B45] border border-[#00A4FF]/20'
                                : 'bg-white border border-gray-200 shadow-sm'
                            }`}>
                            <p className={`text-center transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                💡 حرك الماوس فوق الكاميرا للتحكم في زاوية الرؤية
                            </p>
                        </div>
                    </div>

                    {/* Camera list and controls */}
                    <div className="space-y-6">
                        {/* Camera selection */}
                        <div className={`p-6 rounded-lg transition-all duration-500 ${isDarkMode
                                ? 'bg-[#1A2B45] border border-[#00A4FF]/20'
                                : 'bg-white border border-gray-200 shadow-sm'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>الكاميرات المتاحة</h3>
                            <div className="space-y-3">
                                {cameras.map(camera => (
                                    <button
                                        key={camera.id}
                                        onClick={() => setActiveCamera(camera.id)}
                                        className={`w-full p-3 rounded-lg text-right transition-all duration-300 flex items-center justify-between ${activeCamera === camera.id
                                                ? isDarkMode
                                                    ? 'bg-[#00A4FF] text-white shadow-lg'
                                                    : 'bg-[#1F3A93] text-white shadow-lg'
                                                : isDarkMode
                                                    ? 'bg-[#0D1C36] text-gray-300 hover:bg-[#1A2B45]'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            {motionDetected[camera.id] && (
                                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse ml-2"></span>
                                            )}
                                            <span className="text-sm">{camera.name}</span>
                                        </div>
                                        <span className={`text-xs px-2 py-1 rounded ${activeCamera === camera.id
                                                ? 'bg-white/20'
                                                : isDarkMode
                                                    ? 'bg-[#00A4FF]/20 text-[#00A4FF]'
                                                    : 'bg-[#1F3A93]/20 text-[#1F3A93]'
                                            }`}>
                                            CAM {camera.id}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Recording controls */}
                        <div className={`p-6 rounded-lg transition-all duration-500 ${isDarkMode
                                ? 'bg-[#1A2B45] border border-[#00A4FF]/20'
                                : 'bg-white border border-gray-200 shadow-sm'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>التحكم في التسجيل</h3>
                            <button
                                onClick={toggleRecording}
                                className={`w-full p-3 rounded-lg font-medium transition-all duration-300 ${recordingStatus
                                        ? isDarkMode
                                            ? 'bg-red-600 hover:bg-red-700 text-white'
                                            : 'bg-red-500 hover:bg-red-600 text-white'
                                        : isDarkMode
                                            ? 'bg-green-600 hover:bg-green-700 text-white'
                                            : 'bg-green-500 hover:bg-green-600 text-white'
                                    }`}
                            >
                                {recordingStatus ? 'إيقاف التسجيل' : 'بدء التسجيل'}
                            </button>
                        </div>

                        {/* Camera status */}
                        <div className={`p-6 rounded-lg transition-all duration-500 ${isDarkMode
                                ? 'bg-[#1A2B45] border border-[#00A4FF]/20'
                                : 'bg-white border border-gray-200 shadow-sm'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>حالة النظام</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className={`transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>الكاميرات النشطة</span>
                                    <span className={`font-semibold transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                        }`}>{cameras.length}/4</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>حالة التسجيل</span>
                                    <span className={`font-semibold ${recordingStatus
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                        }`}>
                                        {recordingStatus ? 'نشط' : 'متوقف'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>كشف الحركة</span>
                                    <span className={`font-semibold ${Object.values(motionDetected).some(Boolean)
                                            ? 'text-orange-500'
                                            : 'text-green-500'
                                        }`}>
                                        {Object.values(motionDetected).some(Boolean) ? 'مكتشف' : 'طبيعي'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for effects */}
            <style jsx>{`
                .bg-scanlines {
                    background-image: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 255, 0.03) 2px,
                        rgba(255, 255, 255, 0.03) 4px
                    );
                }
                
                .bg-radial-gradient {
                    background: radial-gradient(
                        ellipse at center,
                        transparent 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    );
                }
                
                .bg-noise {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
            `}</style>
        </section>
    );
};

export default InteractiveCameras;

