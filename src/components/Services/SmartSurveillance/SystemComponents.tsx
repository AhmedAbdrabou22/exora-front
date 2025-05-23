import React from 'react';

const SystemComponents = () => {
  const components = [
    {
      id: 1,
      title: "كاميرات المراقبة",
      description: "تتوفر بنوعين: كاميرات سلكية تحتاج لتمديد كابلات، وكاميرات لاسلكية تعمل عن طريق الواي فاي.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
      image: "https://images.unsplash.com/photo-1563770557593-978a5a2b7513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "مراقبة حية من أي مكان",
        "إشعارات فورية عند اكتشاف حركة",
        "التحكم في زوايا الكاميرا",
        "مشاركة الوصول مع أفراد العائلة"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0D1C36] to-[#0A1128]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">مكونات نظام المراقبة الذكي</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            تعرف على المكونات الأساسية لأنظمة المراقبة الذكية وكيفية عملها معًا لتوفير أقصى درجات الأمان والحماية لمنزلك أو شركتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component) => (
            <div key={component.id} className="bg-gradient-to-br from-[#1A2B45] to-[#0D1C36] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{component.title}</h3>
                <p className="text-gray-300 mb-4">{component.description}</p>
                
                <h4 className="text-blue-400 font-semibold mb-2">المميزات:</h4>
                <ul className="space-y-2">
                  {component.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center">
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">كيفية تركيب النظام</h2>
          
          <div className="bg-[#1A2B45] rounded-lg shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0D1C36] p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.03]">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">اختيار أماكن الكاميرات</h3>
                <p className="text-gray-300 text-center">
                  تحديد المواقع الاستراتيجية مثل المداخل، المخارج، والأماكن الحساسة لتركيب الكاميرات.
                </p>
              </div>
              
              <div className="bg-[#0D1C36] p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.03]">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">توصيل الكاميرات</h3>
                <p className="text-gray-300 text-center">
                  توصيل الكاميرات إما بشكل سلكي عن طريق كابلات أو لاسلكيًا عبر شبكة الواي فاي.
                </p>
              </div>
              
              <div className="bg-[#0D1C36] p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.03]">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">ربط النظام وتشغيله</h3>
                <p className="text-gray-300 text-center">
                  ربط الكاميرات بجهاز التسجيل (DVR أو NVR) وإعداد التطبيق للمراقبة عن بعد.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">هل أنت جاهز لتأمين منزلك أو شركتك؟</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              فريقنا من الخبراء جاهز لمساعدتك في اختيار وتركيب نظام المراقبة المناسب لاحتياجاتك. احصل على استشارة مجانية اليوم!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg">
                احصل على عرض سعر
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-bold transition-colors duration-300">
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

