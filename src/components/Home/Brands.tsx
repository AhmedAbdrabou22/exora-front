// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const brandLogos = [
//     { id: 1, name: 'Samsung', logo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=100&fit=crop' },
//     { id: 2, name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop' },
//     { id: 3, name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop' },
//     { id: 4, name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1642784353782-91bfdd66777a?w=200&h=100&fit=crop' },
//     { id: 5, name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop' },
//     { id: 6, name: 'Sony', logo: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=200&h=100&fit=crop' },
//     { id: 7, name: 'LG', logo: 'https://images.unsplash.com/photo-1662947995584-a0f0cc9f3be4?w=200&h=100&fit=crop' },
//     { id: 8, name: 'Philips', logo: 'https://images.unsplash.com/photo-1551818176-60579e574b91?w=200&h=100&fit=crop' },
//     { id: 9, name: 'Siemens', logo: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=200&h=100&fit=crop' },
//     { id: 10, name: 'Bosch', logo: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=200&h=100&fit=crop' },
//     { id: 11, name: 'Honeywell', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop' },
//     { id: 12, name: 'Schneider', logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=100&fit=crop' },
// ];

// const Brands = () => {
//     return (
//         <div className="py-16 bg-white">
//             <div className="container mx-auto px-4">
//                 {/* Section Heading with Gradient */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         <span className="bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] inline-block text-transparent bg-clip-text">Our Partners</span>
//                     </h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         We collaborate with leading brands to deliver the best IoT solutions
//                     </p>
//                 </div>

//                 {/* Brands Carousel with Swiper */}
//                 <div className="px-8 md:px-12">
//                     <Swiper
//                         modules={[Navigation, Pagination, Autoplay]}
//                         spaceBetween={30}
//                         slidesPerView={2}
//                         navigation
//                         pagination={{ clickable: true }}
//                         autoplay={{
//                             delay: 3000,
//                             disableOnInteraction: false,
//                         }}
//                         loop={true}
//                         breakpoints={{
//                             640: {
//                                 slidesPerView: 3,
//                             },
//                             768: {
//                                 slidesPerView: 4,
//                             },
//                             1024: {
//                                 slidesPerView: 5,
//                             },
//                         }}
//                         className="brands-swiper"
//                     >
//                         {brandLogos.map((brand) => (
//                             <SwiperSlide key={brand.id}>
//                                 <div className="h-24 md:h-32 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center p-4 mx-auto transition-all duration-300 hover:shadow-md">
//                                     <img
//                                         src={brand.logo}
//                                         alt={brand.name}
//                                         className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
//                                         onError={(e) => {
//                                             // e.target.src = `https://via.placeholder.com/150x80?text=${brand.name}`;
//                                         }}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Brands;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    return (
        <div className="py-16 bg-[#0A1128]">
            <div className="container mx-auto px-4">
                {/* Section Heading with Gradient */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] inline-block text-transparent bg-clip-text">Our Partners</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We collaborate with leading brands to deliver the best IoT solutions
                    </p>
                </div>

                {/* Brands Carousel with Swiper */}
                <div className="px-8 md:px-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
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
                        className="brands-swiper"
                    >
                        {brandLogos.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="h-24 md:h-32 bg-[#0A1128] border border-[#1F3A93]/30 rounded-lg shadow-md flex items-center justify-center p-4 mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#00A4FF]/20">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
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
        </div>
    );
};

export default Brands;
