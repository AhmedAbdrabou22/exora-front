import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface FaqItem {
    question: string;
    answer: string;
}

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { isDarkMode } = useTheme();

    const faqItems: FaqItem[] = [
        {
            question: "ما هي خدمات إكسورا الرئيسية؟",
            answer: "تقدم إكسورا مجموعة متنوعة من الخدمات تشمل تطوير المواقع الإلكترونية، تطبيقات الهاتف المحمول، حلول التجارة الإلكترونية، والتسويق الرقمي. نحن نساعد الشركات على النمو من خلال حلول تقنية مبتكرة."
        },
        {
            question: "كيف يمكنني التواصل مع فريق الدعم الفني؟",
            answer: "يمكنك التواصل مع فريق الدعم الفني لدينا عبر البريد الإلكتروني support@exora.com أو من خلال رقم الهاتف المخصص للدعم. نحن متاحون على مدار الساعة لمساعدتك في حل أي مشكلة قد تواجهها."
        },
        {
            question: "ما هي مدة تنفيذ المشروع؟",
            answer: "تختلف مدة تنفيذ المشروع حسب حجمه ومتطلباته. عادة ما نقوم بتقديم جدول زمني تفصيلي بعد الاجتماع الأولي ومناقشة متطلبات المشروع. نحن نلتزم بالمواعيد النهائية المتفق عليها مع عملائنا."
        },
        {
            question: "هل تقدمون خدمات الصيانة بعد إطلاق المشروع؟",
            answer: "نعم، نقدم خدمات صيانة وتحديث مستمرة لجميع مشاريعنا. نحن نؤمن بأهمية الدعم المستمر لضمان أداء مثالي وتحديثات أمنية دورية لحماية استثمارك."
        },
        {
            question: "ما هي تكلفة تطوير موقع إلكتروني أو تطبيق؟",
            answer: "تعتمد التكلفة على متطلبات المشروع الخاصة بك. نحن نقدم تسعيرًا شفافًا وتنافسيًا يتناسب مع ميزانيتك واحتياجاتك. يمكنك التواصل معنا للحصول على عرض سعر مخصص لمشروعك."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`py-16 transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
                : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
        }`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className={`bg-gradient-to-r inline-block text-transparent bg-clip-text transition-all duration-500 ${
                            isDarkMode 
                                ? 'from-[#00A4FF] to-[#1F3A93]' 
                                : 'from-[#1F3A93] to-[#00A4FF]'
                        }`}>الأسئلة الشائعة</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto transition-colors duration-500 ${
                        isDarkMode 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                    }`}>
                        نجيب على استفساراتكم الأكثر شيوعًا. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا مباشرة.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqItems.map((faq, index) => (
                        <div
                            key={index}
                            className={`mb-4 rounded-lg overflow-hidden shadow-md transition-all duration-300 border ${
                                isDarkMode 
                                    ? 'border-[#1F3A93]/30 shadow-[#00A4FF]/5 hover:shadow-[#00A4FF]/10 hover:border-[#00A4FF]/50' 
                                    : 'border-gray-300/50 shadow-gray-200/50 hover:shadow-blue-200/30 hover:border-blue-300/50'
                            }`}
                        >
                            <button
                                className={`w-full text-right px-6 py-4 flex justify-between items-center transition-all duration-200 ${
                                    isDarkMode 
                                        ? 'bg-[#0A1128] hover:bg-[#1F3A93]/10' 
                                        : 'bg-white hover:bg-blue-50/50'
                                }`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={`transform transition-transform duration-300 ${
                                    activeIndex === index ? 'rotate-180' : ''
                                }`}>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-5 w-5 transition-colors duration-300 ${
                                            isDarkMode 
                                                ? 'text-[#00A4FF]' 
                                                : 'text-[#1F3A93]'
                                        }`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                                <span className={`font-semibold transition-colors duration-300 ${
                                    isDarkMode 
                                        ? 'text-[#00A4FF]' 
                                        : 'text-[#1F3A93]'
                                }`}>{faq.question}</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                                } ${
                                    isDarkMode 
                                        ? 'bg-[#0A1128]' 
                                        : 'bg-white'
                                }`}
                            >
                                <p className={`px-6 text-right transition-colors duration-300 leading-relaxed ${
                                    isDarkMode 
                                        ? 'text-gray-300' 
                                        : 'text-gray-700'
                                }`}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                
            </div>
        </div>
    );
};

export default Faqs;
