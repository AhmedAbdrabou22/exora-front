import { useState } from 'react';

const ControlPanel = () => {
    const [rooms, setRooms] = useState([
        { id: 1, name: 'المطبخ', isOn: false, brightness: 75 },
        { id: 2, name: 'غرفة المعيشة', isOn: true, brightness: 60 },
        { id: 3, name: 'غرفة النوم', isOn: false, brightness: 40 },
        { id: 4, name: 'الحمام', isOn: true, brightness: 90 }
    ]);

    const toggleRoom = (id) => {
        setRooms(rooms.map(room =>
            room.id === id ? { ...room, isOn: !room.isOn } : room
        ));
    };

    const updateBrightness = (id, brightness) => {
        setRooms(rooms.map(room =>
            room.id === id ? { ...room, brightness } : room
        ));
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#1F3A93] to-[#0A1128]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        لوحة التحكم الذكية
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        تحكم في إضاءة جميع غرف منزلك من مكان واحد
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Control Interface */}
                    <div className="space-y-6">
                        {rooms.map((room) => (
                            <div key={room.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white">{room.name}</h3>
                                    <button
                                        onClick={() => toggleRoom(room.id)}
                                        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${room.isOn ? 'bg-[#00A4FF]' : 'bg-gray-600'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${room.isOn ? 'translate-x-9' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm text-gray-300">
                                        <span>شدة الإضاءة</span>
                                        <span>{room.brightness}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={room.brightness}
                                        onChange={(e) => updateBrightness(room.id, parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                        disabled={!room.isOn}
                                    />
                                </div>

                                <div className={`mt-4 flex items-center gap-2 text-sm ${room.isOn ? 'text-green-400' : 'text-red-400'
                                    }`}>
                                    <div className={`w-2 h-2 rounded-full ${room.isOn ? 'bg-green-400' : 'bg-red-400'
                                        }`} />
                                    <span>{room.isOn ? 'مشغل' : 'مطفأ'}</span>
                                </div>
                            </div>
                        ))}

                        {/* Master Control */}
                        <div className="bg-[#00A4FF]/10 backdrop-blur-sm rounded-xl p-6 border border-[#00A4FF]/30">
                            <h3 className="text-xl font-bold text-white mb-4">التحكم العام</h3>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setRooms(rooms.map(room => ({ ...room, isOn: true })))}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                                >
                                    تشغيل الكل
                                </button>
                                <button
                                    onClick={() => setRooms(rooms.map(room => ({ ...room, isOn: false })))}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                                >
                                    إطفاء الكل
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kitchen Demo Image */}
                    <div className="relative">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">معاينة المطبخ</h3>
                            <p className="text-gray-300">شاهد التغيير المباشر في الإضاءة</p>
                        </div>

                        <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${rooms[0].isOn ? 'shadow-2xl shadow-yellow-400/30' : 'shadow-xl shadow-black/50'
                            }`}>
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Kitchen Lighting Control"
                                className={`w-full h-[500px] object-cover transition-all duration-500 ${rooms[0].isOn
                                        ? `brightness-${Math.max(50, rooms[0].brightness)}`
                                        : 'brightness-30 contrast-75'
                                    }`}
                            />

                            {/* Dynamic Lighting Overlay */}
                            <div className={`absolute inset-0 transition-all duration-500 ${rooms[0].isOn
                                    ? `bg-gradient-to-b from-yellow-200/${Math.floor(rooms[0].brightness / 5)} via-transparent to-yellow-100/${Math.floor(rooms[0].brightness / 10)}`
                                    : 'bg-gradient-to-b from-blue-900/60 via-gray-900/40 to-black/30'
                                }`} />

                            {/* Brightness Indicator */}
                            <div className="absolute top-4 left-4">
                                <div className={`px-4 py-2 rounded-full backdrop-blur-sm ${rooms[0].isOn ? 'bg-yellow-500/80 text-yellow-900' : 'bg-gray-700/80 text-gray-300'
                                    }`}>
                                    <span className="font-bold">
                                        {rooms[0].isOn ? `${rooms[0].brightness}%` : 'مطفأ'}
                                    </span>
                                </div>
                            </div>

                            {/* Light Bulb Animation */}
                            <div className="absolute top-4 right-4">
                                <div className={`p-3 rounded-full transition-all duration-300 ${rooms[0].isOn
                                        ? 'bg-yellow-400 text-yellow-900 animate-pulse'
                                        : 'bg-gray-700 text-gray-400'
                                    }`}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM6 10a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zM10 16a4 4 0 004-4v-2a4 4 0 10-8 0v2a4 4 0 004 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-[#00A4FF]">
                                    {rooms.filter(room => room.isOn).length}
                                </div>
                                <div className="text-sm text-gray-300">غرف مشغلة</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-green-400">
                                    {Math.round(rooms.reduce((acc, room) => acc + (room.isOn ? room.brightness : 0), 0) / rooms.length)}%
                                </div>
                                <div className="text-sm text-gray-300">متوسط الإضاءة</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ControlPanel;

