import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '../../contexts/ThemeContext';

const brandLogos = [
    { id: 1, name: 'Samsung', logo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=100&fit=crop' },
    { id: 2, name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop' },
    { id: 3, name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop' },
    { id: 4, name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1642784353782-91bfdd66777a?w=200&h=100&fit=crop' },
    { id: 5, name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop' },
    { id: 6, name: 'Sony', logo: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=200&h=100&fit=crop' },
    { id: 7, name: 'LG', logo: 'https://images.unsplash.com/photo-1662947995584-a0f0cc9f3be4?w=200&h=100&fit=crop' },
    { id: 8, name: 'Philips', logo: 'https://images.unsplash.com/photo-1551818176-60579e574b91?w=200&h=100&fit=crop' },
    { id: 9, name: 'Siemens', logo: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=200&h=100&fit=crop' },
    { id: 10, name: 'Bosch', logo: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=200&h=100&fit=crop' },
    { id: 11, name: 'Honeywell', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop' },
    { id: 12, name: 'Schneider', logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=100&fit=crop' },
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
                        }`}>Our Partners</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto transition-colors duration-500 ${
                        isDarkMode 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                    }`}>
                        We collaborate with leading brands to deliver the best IoT solutions
                    </p>
                </div>

                {/* Brands Carousel with Swiper */}
                <div className="px-8 md:px-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ 
                            clickable: true,
                            bulletClass: `swiper-pagination-bullet ${isDarkMode ? 'swiper-pagination-bullet-dark' : 'swiper-pagination-bullet-light'}`,
                            bulletActiveClass: `swiper-pagination-bullet-active ${isDarkMode ? 'swiper-pagination-bullet-active-dark' : 'swiper-pagination-bullet-active-light'}`
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
                                <div className={`h-24 md:h-32 rounded-lg shadow-md flex items-center justify-center p-4 mx-auto transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                                    isDarkMode 
                                        ? 'bg-[#0A1128] border border-[#1F3A93]/30 hover:shadow-[#00A4FF]/20 hover:border-[#00A4FF]/50' 
                                        : 'bg-white border border-gray-200 hover:shadow-blue-200/50 hover:border-blue-300/50'
                                }`}>
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                                            isDarkMode 
                                                ? 'filter brightness-75 hover:brightness-100' 
                                                : 'filter grayscale hover:grayscale-0'
                                        }`}
                                        onError={(e) => {
                                            // e.target.src = `https://via.placeholder.com/150x80?text=${brand.name}`;
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Styles for Swiper Navigation and Pagination */}
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

                .swiper-pagination-bullet-dark {
                    background: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                }

                .swiper-pagination-bullet-active-dark {
                    background: #00A4FF;
                }

                .swiper-pagination-bullet-light {
                    background: rgba(31, 58, 147, 0.3);
                    opacity: 1;
                }

                .swiper-pagination-bullet-active-light {
                    background: #1F3A93;
                }

                .brands-swiper .swiper-pagination {
                    bottom: -10px;
                }

                .brands-swiper .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    margin: 0 6px;
                    transition: all 0.3s ease;
                }

                .brands-swiper .swiper-pagination-bullet:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    );
};

export default Brands;
