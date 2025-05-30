import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const SurveillanceIntro = () => {
    const { isDarkMode } = useTheme();

    return (
        <section className={`py-16 transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-b from-[#0A1128] to-[#1A2B45]' 
                : 'bg-gradient-to-b from-gray-50 to-white'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-center">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-500 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>أنظمة المراقبة الذكية</h2>
                        <p className={`mb-6 text-right leading-relaxed transition-colors duration-500 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            أنظمة المراقبة الذكية هي أنظمة تعتمد على كاميرات وأجهزة مساعدة لمتابعة ما يحدث داخل أو خارج المكان (منزل أو شركة) بشكل لحظي أو مسجّل، والهدف منها الحفاظ على الأمان، منع السرقات، ومراقبة الأنشطة.
                        </p>
                        <div className={`p-6 rounded-lg shadow-lg transition-all duration-500 ${
                            isDarkMode 
                                ? 'bg-[#0D1C36] border border-blue-500/20' 
                                : 'bg-white border border-gray-200 shadow-md'
                        }`}>
                            <h3 className={`text-xl font-bold mb-4 text-right transition-colors duration-500 ${
                                isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                            }`}>مميزات أنظمة المراقبة الذكية:</h3>
                            <ul className="space-y-3 text-right">
                                <li className={`flex items-center justify-end gap-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-700'
                                }`}>
                                    <span>تأمين المكان من السرقة أو التعدي</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors duration-500 ${
                                        isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                                    }`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </li>
                                <li className={`flex items-center justify-end gap-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-700'
                                }`}>
                                    <span>مراقبة حية من أي مكان في العالم عبر تطبيق على الموبايل أو الكمبيوتر</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors duration-500 ${
                                        isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                                    }`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </li>
                                <li className={`flex items-center justify-end gap-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-700'
                                }`}>
                                    <span>تسجيل الفيديوهات لمراجعة الأحداث لاحقًا</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors duration-500 ${
                                        isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                                    }`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </li>
                                <li className={`flex items-center justify-end gap-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-700'
                                }`}>
                                    <span>إرسال تنبيهات فورية عند اكتشاف حركة أو أي نشاط غير طبيعي</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors duration-500 ${
                                        isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                                    }`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </li>
                                <li className={`flex items-center justify-end gap-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-700'
                                }`}>
                                    <span>راحة بال لصاحب المكان لأنه عارف إيه اللي بيحصل في أي وقت</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors duration-500 ${
                                        isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                                    }`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className={`absolute -inset-1 rounded-lg blur transition-all duration-500 ${
                                isDarkMode ? 'bg-blue-500/20' : 'bg-[#1F3A93]/20'
                            }`}></div>
                            <div className={`relative p-6 rounded-lg shadow-lg transition-all duration-500 ${
                                isDarkMode 
                                    ? 'bg-[#0D1C36]' 
                                    : 'bg-white border border-gray-200'
                            }`}>
                                <img
                                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="أنظمة المراقبة الذكية"
                                    className="w-full h-auto rounded-lg shadow-lg mb-4"
                                />
                                <div className="flex justify-center">
                                    <button className={`px-6 py-3 rounded-lg transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:scale-105 ${
                                        isDarkMode 
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25' 
                                            : 'bg-[#1F3A93] hover:bg-[#00A4FF] text-white hover:shadow-[#1F3A93]/30'
                                    }`}>
                                        <span>احصل على استشارة مجانية</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SurveillanceIntro;
