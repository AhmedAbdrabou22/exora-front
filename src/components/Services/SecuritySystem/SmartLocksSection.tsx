import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useTheme } from '../../../contexts/ThemeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const SmartLocksSection = () => {
  const { isDarkMode } = useTheme();

  const smartLockImages = [
    {
      id: 1,
      title: "قفل بالبصمة الذكي",
      description: "تقنية متطورة للتعرف على البصمة مع حماية عالية",
      image: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/67cae054aacec9f8ed5c5879_108.png",
      features: ["تعرف فوري على البصمة", "ذاكرة تخزين 1000 بصمة", "مقاوم للماء والغبار"]
    },
    {
      id: 2,
      title: "قفل الكارت الذكي",
      description: "نظام دخول متقدم باستخدام الكروت المشفرة",
      image: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/67cae05406c737860fd7c482_109.png",
      features: ["تشفير عالي الأمان", "سهولة في الاستخدام", "إدارة متقدمة للصلاحيات"]
    },
    {
      id: 3,
      title: "قفل الكود الرقمي",
      description: "حماية بكلمة مرور رقمية قابلة للتخصيص",
      image: "https://cdn.prod.website-files.com/6707a69c07dd409c1b24c384/67cae055ba2c9bcef4df29d3_105.png",
      features: ["كود قابل للتغيير", "إنذار ضد المحاولات الخاطئة", "تسجيل العمليات"]
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-500 ${isDarkMode
        ? 'bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128]'
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-white'
      }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse ${isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
          }`}></div>
        <div className={`absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl animate-bounce ${isDarkMode ? 'bg-[#1F3A93]' : 'bg-[#00A4FF]'
          }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-2xl animate-ping ${isDarkMode ? 'bg-[#00A4FF]/20' : 'bg-[#1F3A93]/20'
          }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 ${isDarkMode
              ? 'bg-gradient-to-r from-[#00A4FF]/20 to-[#1F3A93]/20 border-[#00A4FF]/30'
              : 'bg-gradient-to-r from-[#1F3A93]/10 to-[#00A4FF]/10 border-[#1F3A93]/30'
            }`}>
            <span className="text-3xl animate-spin-slow">🔐</span>
            <span className={`font-semibold transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
              }`}>الأقفال الذكية</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={`bg-clip-text text-transparent transition-all duration-500 ${isDarkMode
                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93]'
                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]'
              }`}>
              Smart Locks
            </span>
          </h2>

          <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            أحدث تقنيات الأمان للحماية المتقدمة - قفل وفتح الأبواب بطرق متعددة مع تسجيل شامل لجميع العمليات
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="smart-locks-carousel"
          >
            {smartLockImages.map((lock) => (
              <SwiperSlide key={lock.id}>
                <div className={`relative py-1 backdrop-blur-sm rounded-3xl p-8 border hover:scale-105 transition-all duration-500 h-[500px] group overflow-hidden ${isDarkMode
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-[#00A4FF]/50'
                    : 'bg-gradient-to-br from-white/90 to-white/70 border-gray-200 hover:border-[#1F3A93]/50 shadow-lg hover:shadow-xl'
                  }`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDarkMode
                      ? 'bg-gradient-to-br from-[#00A4FF]/5 to-[#1F3A93]/5'
                      : 'bg-gradient-to-br from-[#1F3A93]/5 to-[#00A4FF]/5'
                    }`}></div>

                  {/* Image Container */}
                  <div className={`relative mb-6 overflow-hidden rounded-2xl p-4 ${isDarkMode ? 'bg-white/5' : 'bg-gray-50/80'
                    }`}>
                    <img
                      src={lock.image}
                      alt={lock.title}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t to-transparent ${isDarkMode ? 'from-[#0A1128]/20' : 'from-gray-900/10'
                      }`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDarkMode
                        ? 'text-white group-hover:text-[#00A4FF]'
                        : 'text-gray-800 group-hover:text-[#1F3A93]'
                      }`}>
                      {lock.title}
                    </h3>

                    <p className={`mb-4 leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {lock.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {lock.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 text-sm transition-colors duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          <span className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                            }`}></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🛡️",
              title: "Always Secured",
              subtitle: "حماية مستمرة",
              description: "أمان على مدار الساعة مع تقنيات التشفير المتقدمة"
            },
            {
              icon: "📱",
              title: "Smart Control",
              subtitle: "تحكم ذكي",
              description: "إدارة شاملة عبر التطبيق مع إشعارات فورية"
            },
            {
              icon: "⚡",
              title: "Fast Access",
              subtitle: "وصول سريع",
              description: "فتح فوري للأبواب بأقل من ثانية واحدة"
            }
          ].map((feature, index) => (
            <div key={index} className={`text-center p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300 group ${isDarkMode
                ? 'bg-white/5 border-white/10 hover:border-[#00A4FF]/50'
                : 'bg-white/80 border-gray-200 hover:border-[#1F3A93]/50 shadow-md hover:shadow-lg'
              }`}>
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className={`text-xl font-bold mb-2 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                {feature.title}
              </h4>
              <p className={`font-semibold mb-3 transition-colors duration-500 ${isDarkMode ? 'text-[#00A4FF]' : 'text-[#1F3A93]'
                }`}>
                {feature.subtitle}
              </p>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .smart-locks-carousel {
          padding: 50px 0;
          overflow: visible;
        }

        .smart-locks-carousel .swiper-wrapper {
          align-items: center;
        }

        .smart-locks-carousel .swiper-slide {
          background: transparent;
          height: auto;
          transition: all 0.3s ease;
        }

        .smart-locks-carousel .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.9);
        }

        .smart-locks-carousel .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .smart-locks-carousel .swiper-button-next,
        .smart-locks-carousel .swiper-button-prev {
          color: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          transition: all 0.3s ease;
          border: 1px solid ${isDarkMode ? 'rgba(0, 164, 255, 0.3)' : 'rgba(31, 58, 147, 0.3)'};
          z-index: 10;
        }

               .smart-locks-carousel .swiper-button-next:hover,
        .smart-locks-carousel .swiper-button-prev:hover {
          background: ${isDarkMode ? 'rgba(0, 164, 255, 0.2)' : 'rgba(31, 58, 147, 0.2)'};
          transform: scale(1.1);
          box-shadow: 0 0 20px ${isDarkMode ? 'rgba(0, 164, 255, 0.4)' : 'rgba(31, 58, 147, 0.4)'};
        }

        .smart-locks-carousel .swiper-pagination {
          bottom: 10px;
          z-index: 10;
        }

        .smart-locks-carousel .swiper-pagination-bullet {
          background: ${isDarkMode ? '#1F3A93' : '#00A4FF'};
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }

        .smart-locks-carousel .swiper-pagination-bullet-active {
          background: ${isDarkMode ? '#00A4FF' : '#1F3A93'};
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 10px ${isDarkMode ? 'rgba(0, 164, 255, 0.6)' : 'rgba(31, 58, 147, 0.6)'};
        }

        .smart-locks-carousel .swiper-slide-shadow-left,
        .smart-locks-carousel .swiper-slide-shadow-right {
          background: linear-gradient(to right, ${isDarkMode ? 'rgba(10, 17, 40, 0.8)' : 'rgba(255, 255, 255, 0.8)'}, transparent);
        }

        @media (max-width: 768px) {
          .smart-locks-carousel .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default SmartLocksSection;

