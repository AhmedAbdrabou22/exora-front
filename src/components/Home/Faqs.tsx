import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#1F3A93] mb-4">الأسئلة الشائعة</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نجيب على استفساراتكم الأكثر شيوعًا. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا مباشرة.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqItems.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        >
                            <button
                                className="w-full text-right bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00A4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                                <span className="font-semibold text-[#1F3A93]">{faq.question}</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-6 text-right text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
