import React from 'react';
import { FaHome, FaIndustry, FaLeaf } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Technologies = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`py-20 transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
        }`}>
            <div className="container mx-auto px-4">
                {/* Section Heading with Gradient */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className={`bg-gradient-to-r inline-block text-transparent bg-clip-text transition-all duration-500 ${
                            isDarkMode 
                                ? 'from-[#00A4FF] to-[#1F3A93]' 
                                : 'from-[#1F3A93] to-[#00A4FF]'
                        }`}>تقنياتنا</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto transition-colors duration-500 ${
                        isDarkMode 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                    }`}>
                        اكتشف تقنيات إنترنت الأشياء المتطورة التي تعمل على تحويل المنازل والصناعات والمدن.
                    </p>
                </div>

                {/* Technologies Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Technology 1 */}
                    <div className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                        isDarkMode 
                            ? 'bg-gradient-to-b from-[#1D439C] to-[#0A1128] border border-[#1F3A93]/30 hover:shadow-[#00A4FF]/20 hover:border-[#00A4FF]/50' 
                            : 'bg-white border border-gray-200 hover:shadow-blue-200/50 hover:border-blue-300/50'
                    }`}>
                        <div className="h-2 bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]"></div>
                        <div className="p-8">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                                isDarkMode 
                                    ? 'bg-[#1F3A93] bg-opacity-20' 
                                    : 'bg-blue-100'
                            }`}>
                                <FaHome className={`text-3xl transition-colors duration-300 ${
                                    isDarkMode 
                                        ? 'text-[#00A4FF]' 
                                        : 'text-[#1F3A93]'
                                }`} />
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-4 transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-white' 
                                    : 'text-gray-800'
                            }`}>المنزل الذكي</h3>
                            <p className={`text-center transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                حوّل مساحة معيشتك بأنظمة أتمتة المنازل الذكية. تحكم في الإضاءة والمناخ والأمان والترفيه بسهولة.
                            </p>
                            <div className="mt-6 text-center">
                                <a
                                    href="/technologies/smart-home"
                                    className={`inline-block font-medium transition-all duration-300 hover:scale-105 ${
                                        isDarkMode 
                                            ? 'text-[#00A4FF] hover:text-white' 
                                            : 'text-[#1F3A93] hover:text-[#00A4FF]'
                                    }`}
                                >
                                    اعرف المزيد ←
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Technology 2 */}
                    <div className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                        isDarkMode 
                            ? 'bg-gradient-to-b from-[#1D439C] to-[#0A1128] border border-[#1F3A93]/30 hover:shadow-[#00A4FF]/20 hover:border-[#00A4FF]/50' 
                            : 'bg-white border border-gray-200 hover:shadow-blue-200/50 hover:border-blue-300/50'
                    }`}>
                        <div className="h-2 bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]"></div>
                        <div className="p-8">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                                isDarkMode 
                                    ? 'bg-[#1F3A93] bg-opacity-20' 
                                    : 'bg-blue-100'
                            }`}>
                                <FaIndustry className={`text-3xl transition-colors duration-300 ${
                                    isDarkMode 
                                        ? 'text-[#00A4FF]' 
                                        : 'text-[#1F3A93]'
                                }`} />
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-4 transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-white' 
                                    : 'text-gray-800'
                            }`}>إنترنت الأشياء الصناعي</h3>
                            <p className={`text-center transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                حسّن العمليات وزد الكفاءة بحلول إنترنت الأشياء الصناعية. راقب المعدات وحلل البيانات وأتمت العمليات.
                            </p>
                            <div className="mt-6 text-center">
                                <a
                                    href="/technologies/industrial-iot"
                                    className={`inline-block font-medium transition-all duration-300 hover:scale-105 ${
                                        isDarkMode 
                                            ? 'text-[#00A4FF] hover:text-white' 
                                            : 'text-[#1F3A93] hover:text-[#00A4FF]'
                                    }`}
                                >
                                    اعرف المزيد ←
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Technology 3 */}
                    <div className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                        isDarkMode 
                            ? 'bg-gradient-to-b from-[#1D439C] to-[#0A1128] border border-[#1F3A93]/30 hover:shadow-[#00A4FF]/20 hover:border-[#00A4FF]/50' 
                            : 'bg-white border border-gray-200 hover:shadow-blue-200/50 hover:border-blue-300/50'
                    }`}>
                        <div className="h-2 bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]"></div>
                        <div className="p-8">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                                isDarkMode 
                                    ? 'bg-[#1F3A93] bg-opacity-20' 
                                    : 'bg-blue-100'
                            }`}>
                                <FaLeaf className={`text-3xl transition-colors duration-300 ${
                                    isDarkMode 
                                        ? 'text-[#00A4FF]' 
                                        : 'text-[#1F3A93]'
                                }`} />
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-4 transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-white' 
                                    : 'text-gray-800'
                            }`}>الزراعة الذكية</h3>
                            <p className={`text-center transition-colors duration-300 ${
                                isDarkMode 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                ثوّر الزراعة بتقنية الزراعة الدقيقة. راقب حالة التربة وأتمت الري وحسّن إنتاجية المحاصيل.
                            </p>
                            <div className="mt-6 text-center">
                                <a
                                    href="/technologies/smart-agriculture"
                                    className={`inline-block font-medium transition-all duration-300 hover:scale-105 ${
                                        isDarkMode 
                                            ? 'text-[#00A4FF] hover:text-white' 
                                            : 'text-[#1F3A93] hover:text-[#00A4FF]'
                                    }`}
                                >
                                    اعرف المزيد ←
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
