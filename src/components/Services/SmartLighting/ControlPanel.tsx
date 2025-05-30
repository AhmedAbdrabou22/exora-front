import { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const ControlPanel = () => {
    const [rooms, setRooms] = useState([
        { id: 1, name: 'المطبخ', isOn: false, brightness: 75 },
        { id: 2, name: 'غرفة المعيشة', isOn: true, brightness: 60 },
        { id: 3, name: 'غرفة النوم', isOn: false, brightness: 40 },
        { id: 4, name: 'الحمام', isOn: true, brightness: 90 }
    ]);

    const { isDarkMode } = useTheme();

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
        <section className={`py-20 transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-b from-[#1F3A93] to-[#0A1128]' 
                : 'bg-gradient-to-b from-blue-50 to-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        لوحة التحكم الذكية
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        تحكم في إضاءة جميع غرف منزلك من مكان واحد
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Control Interface */}
                    <div className="space-y-6">
                        {rooms.map((room) => (
                            <div key={room.id} className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                                isDarkMode 
                                    ? 'bg-gray-800/50 border-gray-700 hover:border-[#00A4FF]/50' 
                                    : 'bg-white/80 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#1F3A93]/50'
                            }`}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`text-xl font-bold transition-colors duration-500 ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>{room.name}</h3>
                                    <button
                                        onClick={() => toggleRoom(room.id)}
                                        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${
                                            room.isOn 
                                                ? isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                                                : isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                                                room.isOn ? 'translate-x-9' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div className={`flex items-center justify-between text-sm transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        <span>شدة الإضاءة</span>
                                        <span>{room.brightness}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={room.brightness}
                                        onChange={(e) => updateBrightness(room.id, parseInt(e.target.value))}
                                        className={`w-full h-2 rounded-lg appearance-none cursor-pointer slider transition-all duration-300 ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                        }`}
                                        disabled={!room.isOn}
                                        style={{
                                            background: room.isOn 
                                                ? `linear-gradient(to right, ${isDarkMode ? '#00A4FF' : '#1F3A93'} 0%, ${isDarkMode ? '#00A4FF' : '#1F3A93'} ${room.brightness}%, ${isDarkMode ? '#374151' : '#D1D5DB'} ${room.brightness}%, ${isDarkMode ? '#374151' : '#D1D5DB'} 100%)`
                                                : isDarkMode ? '#374151' : '#D1D5DB'
                                        }}
                                    />
                                </div>

                                <div className={`mt-4 flex items-center gap-2 text-sm ${
                                    room.isOn 
                                        ? 'text-green-400' 
                                        : isDarkMode ? 'text-red-400' : 'text-red-500'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full ${
                                        room.isOn 
                                            ? 'bg-green-400' 
                                            : isDarkMode ? 'bg-red-400' : 'bg-red-500'
                                    }`} />
                                    <span>{room.isOn ? 'مشغل' : 'مطفأ'}</span>
                                </div>
                            </div>
                        ))}

                        {/* Master Control */}
                        <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                            isDarkMode 
                                ? 'bg-[#00A4FF]/10 border-[#00A4FF]/30' 
                                : 'bg-[#1F3A93]/10 border-[#1F3A93]/30'
                        }`}>
                            <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>التحكم العام</h3>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setRooms(rooms.map(room => ({ ...room, isOn: true })))}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    تشغيل الكل
                                </button>
                                <button
                                    onClick={() => setRooms(rooms.map(room => ({ ...room, isOn: false })))}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    إطفاء الكل
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Kitchen Demo Image */}
                    <div className="relative">
                        <div className="text-center mb-6">
                            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>معاينة المطبخ</h3>
                            <p className={`transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>شاهد التغيير المباشر في الإضاءة</p>
                        </div>

                        <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                            rooms[0].isOn 
                                ? isDarkMode 
                                    ? 'shadow-2xl shadow-yellow-400/30' 
                                    : 'shadow-2xl shadow-yellow-500/40'
                                : isDarkMode 
                                    ? 'shadow-xl shadow-black/50' 
                                    : 'shadow-xl shadow-gray-500/30'
                        }`}>
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Kitchen Lighting Control"
                                className={`w-full h-[500px] object-cover transition-all duration-500 ${
                                    rooms[0].isOn
                                        ? `brightness-${Math.max(50, rooms[0].brightness)}`
                                        : 'brightness-30 contrast-75'
                                }`}
                            />

                            {/* Dynamic Lighting Overlay */}
                            <div className={`absolute inset-0 transition-all duration-500 ${
                                rooms[0].isOn
                                    ? `bg-gradient-to-b from-yellow-200/${Math.floor(rooms[0].brightness / 5)} via-transparent to-yellow-100/${Math.floor(rooms[0].brightness / 10)}`
                                    : isDarkMode 
                                        ? 'bg-gradient-to-b from-blue-900/60 via-gray-900/40 to-black/30'
                                        : 'bg-gradient-to-b from-gray-700/40 via-gray-600/30 to-gray-800/20'
                            }`} />

                            {/* Brightness Indicator */}
                            <div className="absolute top-4 left-4">
                                <div className={`px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                                    rooms[0].isOn 
                                        ? 'bg-yellow-500/80 text-yellow-900' 
                                        : isDarkMode 
                                            ? 'bg-gray-700/80 text-gray-300'
                                            : 'bg-gray-600/80 text-gray-100'
                                }`}>
                                    <span className="font-bold">
                                        {rooms[0].isOn ? `${rooms[0].brightness}%` : 'مطفأ'}
                                    </span>
                                </div>
                            </div>

                            {/* Light Bulb Animation */}
                            <div className="absolute top-4 right-4">
                                <div className={`p-3 rounded-full transition-all duration-300 ${
                                    rooms[0].isOn
                                        ? 'bg-yellow-400 text-yellow-900 animate-pulse'
                                        : isDarkMode 
                                            ? 'bg-gray-700 text-gray-400'
                                            : 'bg-gray-600 text-gray-300'
                                }`}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM6 10a1 1 0 01-1 1H4a1 1 0 110-2h1a1 1 0 011 1zM10 16a4 4 0 004-4v-2a4 4 0 10-8 0v2a4 4 0 004 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className={`rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                                    : 'bg-white/80 shadow-md hover:shadow-lg'
                            }`}>
                                <div className={`text-2xl font-bold transition-colors duration-500 ${
                                    isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                                }`}>
                                    {rooms.filter(room => room.isOn).length}
                                </div>
                                <div className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>غرف مشغلة</div>
                            </div>
                            <div className={`rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                                    : 'bg-white/80 shadow-md hover:shadow-lg'
                            }`}>
                                <div className="text-2xl font-bold text-green-400">
                                    {Math.round(rooms.reduce((acc, room) => acc + (room.isOn ? room.brightness : 0), 0) / rooms.length)}%
                                </div>
                                <div className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>متوسط الإضاءة</div>
                            </div>
                                                    </div>
                    </div>
                </div>

                {/* Scene Presets */}
                <div className="mt-16">
                    <h3 className={`text-2xl font-bold text-center mb-8 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        الأوضاع المحفوظة
                    </h3>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: 'وضع المساء', icon: '🌙', brightness: 40 },
                            { name: 'وضع القراءة', icon: '📚', brightness: 80 },
                            { name: 'وضع الحفلات', icon: '🎉', brightness: 100 },
                            { name: 'وضع النوم', icon: '😴', brightness: 10 }
                        ].map((preset, index) => (
                            <button
                                key={index}
                                onClick={() => setRooms(rooms.map(room => ({ ...room, brightness: preset.brightness, isOn: preset.brightness > 0 })))}
                                className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                    isDarkMode 
                                        ? 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 hover:border-[#00A4FF]/50' 
                                        : 'bg-white/80 hover:bg-white shadow-md border border-gray-200 hover:border-[#1F3A93]/50'
                                }`}
                            >
                                <div className="text-3xl mb-3">{preset.icon}</div>
                                <div className={`font-bold mb-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>{preset.name}</div>
                                <div className={`text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>{preset.brightness}% إضاءة</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Energy Savings */}
                <div className={`mt-16 rounded-2xl p-8 text-center transition-all duration-500 ${
                    isDarkMode 
                        ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30' 
                        : 'bg-gradient-to-r from-green-50 to-blue-50 border border-green-200'
                }`}>
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        توفير في الطاقة
                    </h3>
                    <p className={`text-lg mb-6 transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        نظام الإضاءة الذكي يوفر حتى 60% من استهلاك الكهرباء
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className={`p-4 rounded-lg transition-all duration-300 ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white/80 shadow-md'
                        }`}>
                            <div className="text-2xl font-bold text-green-400 mb-2">60%</div>
                            <div className={`text-sm transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>توفير في الطاقة</div>
                        </div>
                        <div className={`p-4 rounded-lg transition-all duration-300 ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white/80 shadow-md'
                        }`}>
                            <div className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                                isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                            }`}>25 سنة</div>
                            <div className={`text-sm transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>عمر المصابيح</div>
                        </div>
                        <div className={`p-4 rounded-lg transition-all duration-300 ${
                            isDarkMode ? 'bg-gray-800/50' : 'bg-white/80 shadow-md'
                        }`}>
                            <div className="text-2xl font-bold text-yellow-400 mb-2">0</div>
                            <div className={`text-sm transition-colors duration-500 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>انبعاثات كربونية</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Slider Styles */}
            <style jsx global>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                .slider::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 15px ${isDarkMode ? 'rgba(0, 164, 255, 0.5)' : 'rgba(31, 58, 147, 0.5)'};
                }

                .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                .slider::-moz-range-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 15px ${isDarkMode ? 'rgba(0, 164, 255, 0.5)' : 'rgba(31, 58, 147, 0.5)'};
                }

                .slider:disabled::-webkit-slider-thumb {
                    background: ${isDarkMode ? '#6B7280' : '#9CA3AF'};
                    cursor: not-allowed;
                }

                .slider:disabled::-moz-range-thumb {
                    background: ${isDarkMode ? '#6B7280' : '#9CA3AF'};
                    cursor: not-allowed;
                }
            `}</style>
        </section>
    );
};

export default ControlPanel;

