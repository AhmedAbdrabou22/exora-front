import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import watcher2 from "../../../assets/watcher2.png"
import watcher3 from "../../../assets/watcher3.png"
import watcher4 from "../../../assets/watcher4.png"
import watcher5 from "../../../assets/watcher5.png"
const SystemComponents = () => {
  const { isDarkMode } = useTheme();

  const components = [
    {
      id: 1,
      title: "كاميرات المراقبة",
      description: "تتوفر بنوعين: كاميرات سلكية تحتاج لتمديد كابلات، وكاميرات لاسلكية تعمل عن طريق الواي فاي.",
      image: watcher2,
      features: [
        "دقة عالية تصل إلى 4K",
        "رؤية ليلية واضحة",
        "مقاومة للعوامل الجوية",
        "زوايا رؤية واسعة"
      ]
    },
    {
      id: 2,
      title: "جهاز تسجيل DVR",
      description: "العقل المدبر في نظام المراقبة السلكي. يوصل بالكاميرات السلكية عن طريق كابلات، ويستقبل الصورة ويسجلها ويخزنها على هارد داخله.",
      image: watcher3,
      features: [
        "تسجيل مستمر 24/7",
        "سهولة استرجاع التسجيلات",
        "دعم عدة كاميرات في وقت واحد",
        "تخزين آمن للبيانات"
      ]
    },
    {
      id: 3,
      title: "جهاز تسجيل NVR",
      description: "يعمل مع كاميرات المراقبة الشبكية (IP Cameras) ويسجل الفيديو الذي ترسله الكاميرات عن طريق شبكة الإنترنت أو شبكة داخلية (LAN).",
      image: watcher4,
      features: [
        "دعم كاميرات IP عالية الدقة",
        "إمكانية الوصول عن بعد",
        "تحليلات ذكية للفيديو",
        "تكامل مع أنظمة الأمان الأخرى"
      ]
    },
    {
      id: 4,
      title: "تطبيقات المراقبة",
      description: "تطبيقات للهواتف الذكية وأجهزة الكمبيوتر تتيح متابعة الكاميرات بشكل مباشر من أي مكان في العالم.",
      image: watcher5,
      features: [
        "مراقبة حية من أي مكان",
        "إشعارات فورية عند اكتشاف حركة",
        "التحكم في زوايا الكاميرا",
        "مشاركة الوصول مع أفراد العائلة"
      ]
    }
  ];

  return (
    <section className={`py-16 transition-all duration-500 ${isDarkMode
        ? 'bg-gradient-to-b from-[#0D1C36] to-[#0A1128]'
        : 'bg-gradient-to-b from-white to-gray-50'
      }`} dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>مكونات نظام المراقبة الذكي</h2>
          <p className={`max-w-3xl mx-auto transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            تعرف على المكونات الأساسية لأنظمة المراقبة الذكية وكيفية عملها معًا لتوفير أقصى درجات الأمان والحماية لمنزلك أو شركتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component) => (
            <div key={component.id} className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDarkMode
                ? 'bg-gradient-to-br from-[#1A2B45] to-[#0D1C36] hover:shadow-blue-500/20'
                : 'bg-white border border-gray-200 hover:shadow-gray-300/50'
              }`}>
              <div className="h-56 overflow-hidden">
                <img
                  src={component.image}
                  alt={component.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{component.title}</h3>
                <p className={`mb-4 transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{component.description}</p>

                <h4 className={`font-semibold mb-2 transition-colors duration-500 ${isDarkMode ? 'text-blue-400' : 'text-[#1F3A93]'
                  }`}>المميزات:</h4>
                <ul className="space-y-2">
                  {component.features.map((feature, index) => (
                    <li key={index} className={`flex items-center transition-colors duration-500 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center transform hover:scale-105 ${isDarkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'bg-[#1F3A93] hover:bg-[#00A4FF] text-white hover:shadow-lg hover:shadow-[#1F3A93]/30'
                    }`}>
                    <span>المزيد من التفاصيل</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Process */}
        <div className="mt-16">
          <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>كيفية تركيب النظام</h2>

          <div className={`rounded-lg shadow-lg p-6 md:p-8 transition-all duration-500 ${isDarkMode
              ? 'bg-[#1A2B45]'
              : 'bg-white border border-gray-200'
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-5 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] ${isDarkMode
                  ? 'bg-[#0D1C36] hover:shadow-blue-500/20'
                  : 'bg-gray-50 border border-gray-100 hover:shadow-gray-300/50'
                }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors duration-500 ${isDarkMode ? 'bg-blue-600' : 'bg-[#1F3A93]'
                  }`}>
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 text-center transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>اختيار أماكن الكاميرات</h3>
                <p className={`text-center transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  تحديد المواقع الاستراتيجية مثل المداخل، المخارج، والأماكن الحساسة لتركيب الكاميرات.
                </p>
              </div>

              <div className={`p-5 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] ${isDarkMode
                  ? 'bg-[#0D1C36] hover:shadow-blue-500/20'
                  : 'bg-gray-50 border border-gray-100 hover:shadow-gray-300/50'
                }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors duration-500 ${isDarkMode ? 'bg-blue-600' : 'bg-[#1F3A93]'
                  }`}>
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 text-center transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>توصيل الكاميرات</h3>
                <p className={`text-center transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  توصيل الكاميرات إما بشكل سلكي عن طريق كابلات أو لاسلكيًا عبر شبكة الواي فاي.
                </p>
              </div>

              <div className={`p-5 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] ${isDarkMode
                  ? 'bg-[#0D1C36] hover:shadow-blue-500/20'
                  : 'bg-gray-50 border border-gray-100 hover:shadow-gray-300/50'
                }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors duration-500 ${isDarkMode ? 'bg-blue-600' : 'bg-[#1F3A93]'
                  }`}>
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 text-center transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>ربط النظام وتشغيله</h3>
                <p className={`text-center transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  ربط الكاميرات بجهاز التسجيل (DVR أو NVR) وإعداد التطبيق للمراقبة عن بعد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`rounded-lg shadow-lg p-8 md:p-10 transition-all duration-500 ${isDarkMode
              ? 'bg-gradient-to-r from-blue-600 to-blue-800'
              : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
            }`}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">هل أنت جاهز لتأمين منزلك أو شركتك؟</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              فريقنا من الخبراء جاهز لمساعدتك في اختيار وتركيب نظام المراقبة المناسب لاحتياجاتك. احصل على استشارة مجانية اليوم!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg transform hover:scale-105 ${isDarkMode
                  ? 'bg-white text-blue-800 hover:bg-gray-100 hover:shadow-white/20'
                  : 'bg-white text-[#1F3A93] hover:bg-gray-100 hover:shadow-white/30'
                }`}>
                احصل على عرض سعر
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                تواصل مع خبير
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemComponents;

