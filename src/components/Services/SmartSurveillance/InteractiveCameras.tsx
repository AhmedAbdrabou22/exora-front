


// import React, { useRef, useEffect, useState } from 'react';

// const MOTION_IMAGE = "https://cdn-icons-png.flaticon.com/512/565/565547.png";

// const InteractiveCameras = () => {
//     const containerRef = useRef(null);
//     const animationRef = useRef(null);
//     const [isUserControlling, setIsUserControlling] = useState(false);

//     const [cameras, setCameras] = useState([
//         {
//             id: 1,
//             name: "كاميرا المدخل الرئيسي",
//             position: { x: 0, y: 0, rotation: 0 },
//             src: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-footage-of-a-parking-lot-at-night-34652-large.mp4",
//             fallbackImage: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//             autoPan: { direction: 1, speed: 0.05, maxAngle: 15 }
//         },
//         {
//             id: 2,
//             name: "كاميرا الممر",
//             position: { x: 0, y: 0, rotation: 0 },
//             src: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-footage-of-a-lobby-34658-large.mp4",
//             fallbackImage: "https://images.unsplash.com/photo-1541278107931-e006523892df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//             autoPan: { direction: 1, speed: 0.03, maxAngle: 10 }
//         },
//         {
//             id: 3,
//             name: "كاميرا المكتب",
//             position: { x: 0, y: 0, rotation: 0 },
//             src: "https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-an-office-space-4220-large.mp4",
//             fallbackImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//             autoPan: { direction: 1, speed: 0.04, maxAngle: 12 }
//         },
//         {
//             id: 4,
//             name: "كاميرا الباب الخلفي",
//             position: { x: 0, y: 0, rotation: 0 },
//             src: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-footage-of-a-house-entrance-34655-large.mp4",
//             fallbackImage: "https://images.unsplash.com/photo-1564604761388-83eafc96f668?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//             autoPan: { direction: 1, speed: 0.06, maxAngle: 18 }
//         }
//     ]);

//     const [activeCamera, setActiveCamera] = useState(1);
//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('ar-EG'));
//     const [motionDetected, setMotionDetected] = useState({});
//     const [recordingStatus, setRecordingStatus] = useState(true);

//     // Auto-panning animation
//     useEffect(() => {
//         if (isUserControlling) return;

//         const animate = () => {
//             setCameras(prevCameras =>
//                 prevCameras.map(camera => {
//                     if (camera.id !== activeCamera) return camera;

//                     const { autoPan, position } = camera;
//                     let newX = position.x + (autoPan.speed * autoPan.direction);

//                     // Reverse direction if reached max angle
//                     if (Math.abs(newX) > autoPan.maxAngle) {
//                         autoPan.direction *= -1;
//                         newX = position.x + (autoPan.speed * autoPan.direction);
//                     }

//                     return {
//                         ...camera,
//                         position: {
//                             ...position,
//                             x: newX,
//                             rotation: newX * 2
//                         },
//                         autoPan: {
//                             ...autoPan
//                         }
//                     };
//                 })
//             );

//             animationRef.current = requestAnimationFrame(animate);
//         };

//         animationRef.current = requestAnimationFrame(animate);

//         return () => {
//             if (animationRef.current) {
//                 cancelAnimationFrame(animationRef.current);
//             }
//         };
//     }, [activeCamera, isUserControlling]);

//     // Update time every second
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date().toLocaleString('ar-EG'));
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     // Simulate motion detection for each camera
//     useEffect(() => {
//         // Initialize motion detection for all cameras
//         const initialMotionState = {};
//         cameras.forEach(camera => {
//             initialMotionState[camera.id] = false;
//         });
//         setMotionDetected(initialMotionState);

//         // Simulate random motion detection
//         const motionInterval = setInterval(() => {
//             setMotionDetected(prev => {
//                 const newState = { ...prev };
//                 // Randomly toggle motion detection for each camera
//                 cameras.forEach(camera => {
//                     if (Math.random() > 0.7) { // 30% chance to change state
//                         newState[camera.id] = !newState[camera.id];
//                     }
//                 });
//                 return newState;
//             });
//         }, 3000); // Check for motion every 3 seconds

//         return () => clearInterval(motionInterval);
//     }, [cameras]);

//     // Handle mouse movement to control camera
//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         const handleMouseEnter = () => {
//             setIsUserControlling(true);
//             if (animationRef.current) {
//                 cancelAnimationFrame(animationRef.current);
//             }
//         };

//         const handleMouseLeave = () => {
//             setIsUserControlling(false);
//         };

//         const handleMouseMove = (e) => {
//             const { left, top, width, height } = container.getBoundingClientRect();
//             const x = ((e.clientX - left) / width - 0.5) * 20; // Scale for rotation
//             const y = ((e.clientY - top) / height - 0.5) * 20; // Scale for rotation

//             setCameras(prevCameras =>
//                 prevCameras.map(camera =>
//                     camera.id === activeCamera
//                         ? {
//                             ...camera,
//                             position: {
//                                 x: x,
//                                 y: y,
//                                 rotation: x * 2 // Slight rotation effect
//                             }
//                         }
//                         : camera
//                 )
//             );
//         };

//         container.addEventListener('mouseenter', handleMouseEnter);
//         container.addEventListener('mouseleave', handleMouseLeave);
//         container.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             container.removeEventListener('mouseenter', handleMouseEnter);
//             container.removeEventListener('mouseleave', handleMouseLeave);
//             container.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, [activeCamera]);

//     const activeVideoStyle = (camera) => {
//         const { x, y, rotation } = camera.position;
//         return {
//             transform: `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg) rotate(${rotation}deg) scale(1.05)`,
//             transition: isUserControlling ? 'transform 0.2s ease-out' : 'transform 0.8s ease-out'
//         };
//     };

//     const toggleRecording = () => {
//         setRecordingStatus(!recordingStatus);
//     };

//     return (
//         <section className="py-16 bg-[#0A1128]" dir="rtl">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تحكم في كاميرات المراقبة</h2>
//                     <p className="text-gray-300 max-w-3xl mx-auto">
//                         حرك الماوس فوق الكاميرا لتغيير زاوية الرؤية. جرب التحكم في كاميرات المراقبة الذكية واستكشف كيف يمكنك مراقبة منزلك أو شركتك من أي مكان.
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     <div className="lg:col-span-2">
//                         <div
//                             ref={containerRef}
//                             className="relative bg-gradient-to-b from-[#1A2B45] to-[#0D1C36] rounded-lg shadow-lg overflow-hidden aspect-video"
//                         >
//                             {/* Active camera display */}
//                             <div className="absolute inset-0 p-4">
//                                 <div className="relative w-full h-full overflow-hidden rounded-md">
//                                     {cameras.map(camera => (
//                                         camera.id === activeCamera && (
//                                             <div key={camera.id} className="w-full h-full">
//                                                 <video
//                                                     src={camera.src}
//                                                     style={activeVideoStyle(camera)}
//                                                     className="w-full h-full object-cover"
//                                                     autoPlay
//                                                     muted
//                                                     loop
//                                                     playsInline
//                                                     onError={(e) => {
//                                                         e.target.onerror = null;
//                                                         const img = document.createElement('img');
//                                                         img.src = camera.fallbackImage;
//                                                         img.className = "w-full h-full object-cover";
//                                                         Object.assign(img.style, activeVideoStyle(camera));
//                                                         e.target.parentNode.replaceChild(img, e.target);
//                                                     }}
//                                                 ></video>

//                                                 {/* Camera overlay effects */}
//                                                 <div className="absolute inset-0 pointer-events-none">
//                                                     {/* Scanlines effect */}
//                                                     <div className="absolute inset-0 bg-scanlines opacity-10"></div>

//                                                     {/* Vignette effect */}
//                                                     <div className="absolute inset-0 bg-radial-gradient opacity-40"></div>

//                                                     {/* Noise effect */}
//                                                     <div className="absolute inset-0 bg-noise opacity-5"></div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     ))}
//                                 </div>

//                                 {/* Camera movement indicators */}
//                                 <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
//                                     <div className={`bg-black/40 text-white p-2 rounded-full transition-opacity duration-300 ${cameras.find(c => c.id === activeCamera)?.position.x < -2 ? 'opacity-70' : 'opacity-0'}`}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                     <div className={`bg-black/40 text-white p-2 rounded-full transition-opacity duration-300 ${cameras.find(c => c.id === activeCamera)?.position.x > 2 ? 'opacity-70' : 'opacity-0'}`}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 </div>

//                                 {/* Camera info overlay */}
//                                 <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-2 rounded-md text-sm">
//                                     {cameras.find(c => c.id === activeCamera)?.name}
//                                 </div>

//                                 {/* Recording indicator */}
//                                 <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-2 rounded-md text-sm flex items-center">
//                                     <span className={`w-2 h-2 ${recordingStatus ? 'bg-red-500 animate-pulse' : 'bg-gray-500'} rounded-full ml-2`}></span>
//                                     {recordingStatus ? 'جاري التسجيل' : 'التسجيل متوقف'}
//                                 </div>

//                                 {/* Time overlay */}
//                                 <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-md text-sm flex items-center">
//                                     <span className="w-2 h-2 bg-blue-500 rounded-full ml-2 animate-pulse"></span>
//                                     {currentTime}
//                                 </div>

//                                 {/* Motion detection simulation */}
//                                 {motionDetected[activeCamera] && (
//                                     <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
//                                         <img
//                                             src={MOTION_IMAGE}
//                                             alt="تم رصد حركة"
//                                             className="w-24 h-24 animate-pulse opacity-90 drop-shadow-lg"
//                                         />
//                                         <div className="mt-2 bg-green-500/80 text-white text-xs px-2 py-1 rounded shadow">
//                                             تم رصد حركة
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Control instructions */}
//                                 <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-md text-xs">
//                                     حرك الماوس لتغيير زاوية الكاميرا
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Camera controls */}
//                         <div className="mt-4 bg-[#0D1C36] p-4 rounded-lg shadow-lg">
//                             <div className="flex flex-wrap justify-between items-center gap-3">
//                                 <div className="flex space-x-2 rtl:space-x-reverse">
//                                     <button
//                                         className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm transition-colors"
//                                         onClick={() => alert('تم تصدير الفيديو بنجاح')}
//                                     >
//                                         تصدير الفيديو
//                                     </button>
//                                     <button
//                                         className={`${recordingStatus ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white px-3 py-1.5 rounded text-sm transition-colors flex items-center`}
//                                         onClick={toggleRecording}
//                                     >
//                                         <span className={`w-2 h-2 ${recordingStatus ? 'bg-white' : 'bg-white'} rounded-full ml-1.5`}></span>
//                                         {recordingStatus ? 'إيقاف التسجيل' : 'بدء التسجيل'}
//                                     </button>
//                                     <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm transition-colors">
//                                         إعدادات
//                                     </button>
//                                 </div>

//                                 <div className="flex items-center space-x-3 rtl:space-x-reverse">
//                                     <div className="text-white/70 text-xs">دقة: 4K Ultra HD</div>
//                                     <div className="text-white/70 text-xs">التخزين: 1.2TB/2TB</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:col-span-1">
//                         <div className="bg-[#0D1C36] rounded-lg shadow-lg overflow-hidden">
//                             <div className="p-4 bg-[#1A2B45] border-b border-blue-900/50">
//                                 <h3 className="text-xl font-bold text-white">اختر الكاميرا</h3>
//                             </div>

//                             <div className="p-4">
//                                 <div className="space-y-3">
//                                     {cameras.map(camera => (
//                                         <div
//                                             key={camera.id}
//                                             onClick={() => setActiveCamera(camera.id)}
//                                             className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center ${camera.id === activeCamera
//                                                 ? 'bg-blue-600 text-white'
//                                                 : 'bg-[#1A2B45] text-gray-300 hover:bg-[#243B61]'
//                                                 }`}
//                                         >
//                                             <div className="w-12 h-12 rounded-md overflow-hidden ml-3 flex-shrink-0 relative">
//                                                 <video
//                                                     src={camera.src}
//                                                     className="w-full h-full object-cover"
//                                                     autoPlay
//                                                     muted
//                                                     loop
//                                                     playsInline
//                                                     onError={(e) => {
//                                                         e.target.onerror = null;
//                                                         const img = document.createElement('img');
//                                                         img.src = camera.fallbackImage;
//                                                         img.className = "w-full h-full object-cover";
//                                                         e.target.parentNode.replaceChild(img, e.target);
//                                                     }}
//                                                 ></video>
//                                                 {/* Overlay for thumbnail */}
//                                                 <div className="absolute inset-0 bg-black/20"></div>
//                                             </div>
//                                             <div>
//                                                 <div className="font-medium">{camera.name}</div>
//                                                 <div className="text-xs opacity-70 flex items-center mt-1">
//                                                     <span className={`w-1.5 h-1.5 ${motionDetected[camera.id] ? 'bg-red-500 animate-pulse' : 'bg-green-500'} rounded-full ml-1`}></span>
//                                                     {motionDetected[camera.id] ? 'حركة نشطة' : 'متصل'}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="mt-6 space-y-4">
//                                     <div className="bg-[#1A2B45] p-3 rounded-lg">
//                                         <h4 className="text-white font-medium mb-2">إحصائيات النظام</h4>
//                                         <div className="space-y-2">
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-400">الكاميرات النشطة:</span>
//                                                 <span className="text-white">4/4</span>
//                                             </div>
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-400">مساحة التخزين:</span>
//                                                 <span className="text-white">60% متاح</span>
//                                             </div>
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-400">آخر تنبيه:</span>
//                                                 <span className="text-white">منذ 5 دقائق</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="bg-[#1A2B45] p-3 rounded-lg">
//                                         <h4 className="text-white font-medium mb-2">حالة الشبكة</h4>
//                                         <div className="space-y-2">
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-400">سرعة الاتصال:</span>
//                                                 <span className="text-green-400">ممتازة</span>
//                                             </div>
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-400">جودة الإشارة:</span>
//                                                 <span className="text-white">95%</span>
//                                             </div>
//                                             <div className="flex justify-between text-sm">
//                                                 <span className="text-gray-400">حالة السيرفر:</span>
//                                                 <span className="text-green-400">متصل</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
//                                         </svg>
//                                         إضافة كاميرا جديدة
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Additional features section */}
//                 <div className="mt-16">
//                     <h3 className="text-2xl font-bold text-white mb-8 text-center">مميزات نظام المراقبة الذكي</h3>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-gradient-to-br from-[#1A2B45] to-[#0D1C36] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
//                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                             </div>
//                             <h4 className="text-xl font-bold text-white mb-2">تنبيهات فورية</h4>
//                             <p className="text-gray-300">
//                                 استلم إشعارات فورية على هاتفك عند اكتشاف حركة غير عادية أو عند فتح الأبواب.
//                             </p>
//                         </div>

//                         <div className="bg-gradient-to-br from-[#1A2B45] to-[#0D1C36] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
//                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                 </svg>
//                             </div>
//                             <h4 className="text-xl font-bold text-white mb-2">تخزين آمن</h4>
//                             <p className="text-gray-300">
//                                 تخزين مشفر للتسجيلات على السحابة أو محليًا مع إمكانية الوصول إليها في أي وقت.
//                             </p>
//                         </div>

//                         <div className="bg-gradient-to-br from-[#1A2B45] to-[#0D1C36] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
//                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                             <h4 className="text-xl font-bold text-white mb-2">مراقبة عن بعد</h4>
//                             <p className="text-gray-300">
//                                 راقب منزلك أو شركتك من أي مكان في العالم عبر تطبيق سهل الاستخدام على هاتفك.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Advanced features section */}
//                 <div className="mt-12">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg">
//                             <h4 className="text-xl font-bold text-white mb-4 flex items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//                                 </svg>
//                                 تقنية الذكاء الاصطناعي
//                             </h4>
//                             <p className="text-gray-300 mb-4">
//                                 تقنية الذكاء الاصطناعي المتقدمة تساعد في تحليل الفيديو وتمييز الأشخاص والأشياء والسلوكيات المشبوهة تلقائيًا.
//                             </p>
//                             <ul className="space-y-2 text-gray-300">
//                                 <li className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                     التعرف على الوجوه وتحديد هوية الأشخاص
//                                 </li>
//                                 <li className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                     اكتشاف السلوكيات المشبوهة والتنبيه الفوري
//                                 </li>
//                                 <li className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                     تتبع الأشياء والأشخاص عبر مناطق متعددة
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg">
//                             <h4 className="text-xl font-bold text-white mb-4 flex items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
//                                 </svg>
//                                 تكامل مع أنظمة الأمان
//                             </h4>
//                             <p className="text-gray-300 mb-4">
//                                 يتكامل نظام المراقبة الذكي مع أنظمة الأمان الأخرى لتوفير حماية شاملة لمنزلك أو شركتك.
//                             </p>
//                             <ul className="space-y-2 text-gray-300">
//                                 <li className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                     ربط مع أنظمة الإنذار وأجهزة استشعار الحركة
//                                 </li>
//                                 <li className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                     التحكم في الأبواب والأقفال الإلكترونية
//                                 </li>
//                                 <li className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                     اتصال مباشر بخدمات الطوارئ عند الحاجة
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Testimonials */}
//                 <div className="mt-16">
//                     <h3 className="text-2xl font-bold text-white mb-8 text-center">ماذا يقول عملاؤنا</h3>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg">
//                             <div className="flex items-center mb-4">
//                                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl">
//                                     م
//                                 </div>
//                                 <div>
//                                     <h4 className="text-white font-bold">محمد عبدالله</h4>
//                                     <p className="text-gray-400 text-sm">صاحب متجر</p>
//                                 </div>
//                             </div>
//                             <p className="text-gray-300">
//                                 "نظام المراقبة الذكي غيّر طريقة إدارتي لمتجري. أستطيع الآن مراقبة المتجر من أي مكان، وتلقي تنبيهات فورية عند حدوث أي نشاط مشبوه."
//                             </p>
//                             <div className="mt-3 flex">
//                                 {[1, 2, 3, 4, 5].map((star) => (
//                                     <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                     </svg>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg">
//                             <div className="flex items-center mb-4">
//                                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl">
//                                     س
//                                 </div>
//                                 <div>
//                                     <h4 className="text-white font-bold">سارة محمد</h4>
//                                     <p className="text-gray-400 text-sm">صاحبة منزل</p>
//                                 </div>
//                             </div>
//                             <p className="text-gray-300">
//                                 "أشعر بالأمان التام مع نظام المراقبة الذكي. أستطيع التحقق من منزلي في أي وقت، ومراقبة أطفالي عندما أكون خارج المنزل. الجودة ممتازة والتطبيق سهل الاستخدام."
//                             </p>
//                             <div className="mt-3 flex">
//                                 {[1, 2, 3, 4, 5].map((star) => (
//                                     <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                     </svg>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="mt-16">
//                     <h3 className="text-2xl font-bold text-white mb-8 text-center">الأسئلة الشائعة</h3>

//                     <div className="space-y-4">
//                         <div className="bg-[#0D1C36] p-5 rounded-lg shadow-lg">
//                             <h4 className="text-white font-bold mb-2">كيف يمكنني الوصول إلى كاميرات المراقبة من هاتفي؟</h4>
//                             <p className="text-gray-300">
//                                 يمكنك الوصول إلى كاميرات المراقبة من خلال تطبيق خاص متوفر لأجهزة Android و iOS. يتيح لك التطبيق مشاهدة البث المباشر، واستعراض التسجيلات السابقة، وتلقي التنبيهات.
//                             </p>
//                         </div>

//                         <div className="bg-[#0D1C36] p-5 rounded-lg shadow-lg">
//                             <h4 className="text-white font-bold mb-2">هل يمكن تخزين التسجيلات لفترة طويلة؟</h4>
//                             <p className="text-gray-300">
//                                 نعم، يوفر النظام خيارات متعددة للتخزين. يمكنك تخزين التسجيلات محليًا على جهاز التخزين أو على السحابة لفترات تصل إلى 90 يومًا أو أكثر حسب الباقة المختارة.
//                             </p>
//                         </div>

//                         <div className="bg-[#0D1C36] p-5 rounded-lg shadow-lg">
//                             <h4 className="text-white font-bold mb-2">هل النظام آمن ضد الاختراق؟</h4>
//                             <p className="text-gray-300">                                نعم، يستخدم النظام تقنيات تشفير متقدمة لحماية البيانات والتسجيلات. كما يتم تحديث النظام بشكل دوري لضمان الحماية ضد أحدث التهديدات الأمنية.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Call to action */}
//                 <div className="mt-16 text-center">
//                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8">
//                         <h3 className="text-2xl font-bold text-white mb-4">جاهز لتأمين منزلك أو شركتك؟</h3>
//                         <p className="text-white/80 mb-6 max-w-2xl mx-auto">
//                             احصل على استشارة مجانية اليوم واكتشف كيف يمكن لأنظمة المراقبة الذكية أن توفر لك الأمان والراحة.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors duration-300">
//                                 احصل على عرض سعر مجاني
//                             </button>
//                             <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-bold transition-colors duration-300">
//                                 تواصل مع فريق المبيعات
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Additional resources */}
//                 <div className="mt-16">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg text-center">
//                             <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                                 </svg>
//                             </div>
//                             <h4 className="text-lg font-bold text-white mb-2">دليل المستخدم</h4>
//                             <p className="text-gray-300 mb-4">
//                                 تعرف على كيفية استخدام نظام المراقبة الذكي بكفاءة
//                             </p>
//                             <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
//                                 تحميل الدليل
//                             </button>
//                         </div>

//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg text-center">
//                             <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
//                                 </svg>
//                             </div>
//                             <h4 className="text-lg font-bold text-white mb-2">فيديوهات توضيحية</h4>
//                             <p className="text-gray-300 mb-4">
//                                 شاهد فيديوهات توضح كيفية تركيب وإعداد النظام
//                             </p>
//                             <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
//                                 مشاهدة الفيديوهات
//                             </button>
//                         </div>

//                         <div className="bg-[#0D1C36] p-6 rounded-lg shadow-lg text-center">
//                             <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
//                                 </svg>
//                             </div>
//                             <h4 className="text-lg font-bold text-white mb-2">الدعم الفني</h4>
//                             <p className="text-gray-300 mb-4">
//                                 تواصل مع فريق الدعم الفني على مدار الساعة
//                             </p>
//                             <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
//                                 طلب المساعدة
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Custom CSS for camera effects */}
//                 <style jsx>{`
//                     .bg-scanlines {
//                         background-image: repeating-linear-gradient(
//                             0deg,
//                             rgba(255, 255, 255, 0.1),
//                             rgba(255, 255, 255, 0.1) 1px,
//                             transparent 1px,
//                             transparent 2px
//                         );
//                     }

//                     .bg-radial-gradient {
//                         background: radial-gradient(
//                             circle at center,
//                             transparent 0%,
//                             rgba(0, 0, 0, 0.8) 100%
//                         );
//                     }

//                     .bg-noise {
//                         background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
//                     }
//                 `}</style>
//             </div>
//         </section>
//     );
// };

// export default InteractiveCameras;

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

