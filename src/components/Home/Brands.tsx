import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ClientImage from "../../assets/client.png";
import ClientImage2 from "../../assets/brand2.png";
import { useTheme } from '../../contexts/ThemeContext';

const brandLogos = [
    { id: 1, name: 'سامسونج', logo: ClientImage },
    { id: 2, name: 'مايكروسوفت', logo: ClientImage2 },
    { id: 3, name: 'أمازون', logo: ClientImage },
    { id: 4, name: 'سوني', logo: ClientImage2 },
    { id: 5, name: 'إل جي', logo: ClientImage },
    { id: 6, name: 'فيليبس', logo: ClientImage2 },
    { id: 7, name: 'سيمنز', logo: ClientImage },
    { id: 8, name: 'بوش', logo: ClientImage2 },
    { id: 9, name: 'هانيويل', logo: ClientImage },
    { id: 10, name: 'شنايدر', logo: ClientImage2 },
];

const Brands = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`py-16 transition-all duration-500 ${
            isDarkMode
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]'
                : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
        }`}>
            <div className="container mx-auto px-4">
                {/* Section Heading with Gradient */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className={`bg-gradient-to-r inline-block text-transparent bg-clip-text transition-all duration-500 ${
                            isDarkMode
                                ? 'from-[#00A4FF] to-[#1F3A93]'
                                : 'from-[#1F3A93] to-[#00A4FF]'
                        }`}>شركاؤنا</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto transition-colors duration-500 ${
                        isDarkMode
                            ? 'text-gray-300'
                            : 'text-gray-600'
                    }`}>
                        نتعاون مع العلامات التجارية الرائدة لتقديم أفضل حلول إنترنت الأشياء
                    </p>
                </div>

                {/* Brands Carousel with Swiper */}
                <div className="px-8 md:px-12">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className={`brands-swiper ${isDarkMode ? 'brands-swiper-dark' : 'brands-swiper-light'}`}
                    >
                        {brandLogos.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="h-24 md:h-32 flex items-center justify-center p-4 mx-auto transition-all duration-300 transform hover:scale-105">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-full max-h-full object-contain transition-all duration-300 hover:opacity-80"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Styles for Swiper Navigation */}
            <style jsx>{`
                .brands-swiper-dark .swiper-button-next,
                .brands-swiper-dark .swiper-button-prev {
                    color: #00A4FF;
                    background: rgba(26, 31, 58, 0.8);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    margin-top: -20px;
                    transition: all 0.3s ease;
                }
                .brands-swiper-dark .swiper-button-next:hover,
                .brands-swiper-dark .swiper-button-prev:hover {
                    background: rgba(0, 164, 255, 0.2);
                    transform: scale(1.1);
                }
                .brands-swiper-light .swiper-button-next,
                .brands-swiper-light .swiper-button-prev {
                    color: #1F3A93;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    margin-top: -20px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                .brands-swiper-light .swiper-button-next:hover,
                .brands-swiper-light .swiper-button-prev:hover {
                    background: rgba(31, 58, 147, 0.1);
                    transform: scale(1.1);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </div>
    );
};

export default Brands;
