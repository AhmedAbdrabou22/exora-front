// import React, { useState } from 'react';
// import {
//     FaBed,
//     FaUtensils,
//     FaCouch,
//     FaBriefcase,
//     FaFilm
// } from 'react-icons/fa';

// const CustomScenes = () => {
//     const [activeTab, setActiveTab] = useState(0);

//     const tabs = [
//         {
//             id: 0,
//             icon: <FaBed />,
//             title: "Bedtime",
//             image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
//             content: {
//                 title: "Bedtime Scene",
//                 description: "Create the perfect environment for a good night's sleep with automated routines.",
//                 features: [
//                     "Gradually dim lights to a warm glow 30 minutes before bedtime",
//                     "Lower blinds and adjust room temperature to optimal sleeping conditions",
//                     "Play relaxing sounds or white noise through smart speakers",
//                     "Automatically turn off all TVs and non-essential devices",
//                     "Set your alarm and coffee maker for the morning"
//                 ]
//             }
//         },
//         {
//             id: 1,
//             icon: <FaUtensils />,
//             title: "Dinner Time",
//             image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop",
//             content: {
//                 title: "Dinner Time Scene",
//                 description: "Set the perfect ambiance for your evening meal with one tap.",
//                 features: [
//                     "Adjust dining area lights to a warm, inviting setting",
//                     "Start your favorite dinner playlist on the smart speakers",
//                     "Turn on kitchen appliances needed for meal preparation",
//                     "Adjust thermostat for comfortable dining temperature",
//                     "Send notifications to family members that dinner is ready"
//                 ]
//             }
//         },
//         {
//             id: 2,
//             icon: <FaCouch />,
//             title: "Movie Night",
//             image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop",
//             content: {
//                 title: "Movie Night Scene",
//                 description: "Transform your living room into the ultimate home theater experience.",
//                 features: [
//                     "Dim all living room lights to cinema mode",
//                     "Close blinds or curtains for optimal viewing",
//                     "Power on TV, sound system, and streaming device",
//                     "Adjust room temperature for comfort",
//                     "Set Do Not Disturb mode on connected devices"
//                 ]
//             }
//         },
//         {
//             id: 3,
//             icon: <FaBriefcase />,
//             title: "Work Mode",
//             image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
//             content: {
//                 title: "Work Mode Scene",
//                 description: "Optimize your home office for productivity and focus.",
//                 features: [
//                     "Adjust lighting to bright, cool tones for alertness",
//                     "Set room temperature to optimal working conditions",
//                     "Turn on white noise or focus music at low volume",
//                     "Minimize notifications on connected devices",
//                     "Schedule regular break reminders"
//                 ]
//             }
//         },
//         {
//             id: 4,
//             icon: <FaFilm />,
//             title: "Away Mode",
//             image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop",
//             content: {
//                 title: "Away Mode Scene",
//                 description: "Keep your home secure and efficient while you're gone.",
//                 features: [
//                     "Randomly turn lights on and off to simulate occupancy",
//                     "Adjust thermostat to energy-saving settings",
//                     "Arm security system and motion sensors",
//                     "Receive notifications for any unusual activity",
//                     "Turn off non-essential appliances and water heater"
//                 ]
//             }
//         }
//     ];

//     return (
//         <div className="py-20 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 {/* Section Heading with Gradient */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                          <span className="bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] inline-block text-transparent bg-clip-text">Custom Scenes & Routines</span>
//                     </h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Get creative by combining multiple devices into one smart scene & activate it with a single click or voice command
//                     </p>
//                 </div>

//                 {/* Tabs Navigation */}
//                 <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab.id}
//                             onClick={() => setActiveTab(tab.id)}
//                             className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${activeTab === tab.id
//                                     ? "bg-[#1F3A93] text-white shadow-lg border-2 border-[#1F3A93] transform scale-105"
//                                     : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#00A4FF] hover:text-[#1F3A93]"
//                                 }`}
//                         >
//                             <span className="text-xl">{tab.icon}</span>
//                             <span className="font-medium">{tab.title}</span>
//                         </button>
//                     ))}
//                 </div>

//                 {/* Tab Content with Image and Overlay */}
//                 <div className="relative rounded-xl overflow-hidden shadow-2xl group transition-all duration-500 max-w-5xl mx-auto">
//                     {/* Dark Overlay that lightens on hover */}
//                     <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>

//                     {/* Background Image */}
//                     <img
//                         src={tabs[activeTab].image}
//                         alt={tabs[activeTab].title}
//                         className="w-full h-[500px] object-cover transition-all duration-700 transform group-hover:scale-105"
//                     />

//                     {/* Content Overlay */}
//                     <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
//                         <div className="bg-black bg-opacity-70 p-6 md:p-8 rounded-lg max-w-2xl text-white transform transition-all duration-500 group-hover:scale-105">
//                             <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#00A4FF]">
//                                 {tabs[activeTab].content.title}
//                             </h3>
//                             <p className="text-gray-200 mb-6">
//                                 {tabs[activeTab].content.description}
//                             </p>
//                             <ul className="space-y-2">
//                                 {tabs[activeTab].content.features.map((feature, index) => (
//                                     <li key={index} className="flex items-start">
//                                         <span className="text-[#00A4FF] mr-2">•</span>
//                                         <span>{feature}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <div className="mt-8">
//                                 <button className="bg-[#1F3A93] hover:bg-[#00A4FF] text-white py-2 px-6 rounded-full transition-colors duration-300">
//                                     Set Up This Scene
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomScenes;

import React, { useState } from 'react';
import {
  FaBed,
  FaUtensils,
  FaCouch,
  FaBriefcase,
  FaFilm
} from 'react-icons/fa';

const CustomScenes = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: <FaBed />,
      title: "Bedtime",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
      content: {
        title: "Bedtime Scene",
        description: "Create the perfect environment for a good night's sleep with automated routines.",
        features: [
          "Gradually dim lights to a warm glow 30 minutes before bedtime",
          "Lower blinds and adjust room temperature to optimal sleeping conditions",
          "Play relaxing sounds or white noise through smart speakers",
          "Automatically turn off all TVs and non-essential devices",
          "Set your alarm and coffee maker for the morning"
        ]
      }
    },
    {
      id: 1,
      icon: <FaUtensils />,
      title: "Dinner Time",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop",
      content: {
        title: "Dinner Time Scene",
        description: "Set the perfect ambiance for your evening meal with one tap.",
        features: [
          "Adjust dining area lights to a warm, inviting setting",
          "Start your favorite dinner playlist on the smart speakers",
          "Turn on kitchen appliances needed for meal preparation",
          "Adjust thermostat for comfortable dining temperature",
          "Send notifications to family members that dinner is ready"
        ]
      }
    },
    {
      id: 2,
      icon: <FaCouch />,
      title: "Movie Night",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop",
      content: {
        title: "Movie Night Scene",
        description: "Transform your living room into the ultimate home theater experience.",
        features: [
          "Dim all living room lights to cinema mode",
          "Close blinds or curtains for optimal viewing",
          "Power on TV, sound system, and streaming device",
          "Adjust room temperature for comfort",
          "Set Do Not Disturb mode on connected devices"
        ]
      }
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "Work Mode",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
      content: {
        title: "Work Mode Scene",
        description: "Optimize your home office for productivity and focus.",
        features: [
          "Adjust lighting to bright, cool tones for alertness",
          "Set room temperature to optimal working conditions",
          "Turn on white noise or focus music at low volume",
          "Minimize notifications on connected devices",
          "Schedule regular break reminders"
        ]
      }
    },
    {
      id: 4,
      icon: <FaFilm />,
      title: "Away Mode",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop",
      content: {
        title: "Away Mode Scene",
        description: "Keep your home secure and efficient while you're gone.",
        features: [
          "Randomly turn lights on and off to simulate occupancy",
          "Adjust thermostat to energy-saving settings",
          "Arm security system and motion sensors",
          "Receive notifications for any unusual activity",
          "Turn off non-essential appliances and water heater"
        ]
      }
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading with Gradient */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] inline-block text-transparent bg-clip-text">Custom Scenes & Routines</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Get creative by combining multiple devices into one smart scene & activate it with a single click or voice command
          </p>
        </div>

        {/* Tabs Navigation - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-6 md:mb-10 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-[#1F3A93] text-white shadow-lg border-2 border-[#1F3A93] transform scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#00A4FF] hover:text-[#1F3A93]"
              }`}
            >
              <span className="text-lg md:text-xl">{tab.icon}</span>
              <span className="font-medium whitespace-nowrap">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content with Image and Overlay - Adjusted for better mobile display */}
        <div className="relative rounded-xl overflow-hidden shadow-xl group transition-all duration-500 max-w-5xl mx-auto">
          {/* Dark Overlay that lightens on hover */}
          <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
          
          {/* Background Image - Adjusted height for mobile */}
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-700 transform group-hover:scale-105"
          />
          
          {/* Content Overlay - Improved for mobile */}
          <div className="absolute inset-0 z-20 flex items-center justify-center p-3 sm:p-5 md:p-8">
            <div className="bg-black bg-opacity-80 p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-white transform transition-all duration-500 group-hover:scale-105 overflow-y-auto max-h-[280px] sm:max-h-[380px] md:max-h-[460px]">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#00A4FF]">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-gray-200 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                {tabs[activeTab].content.description}
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                {tabs[activeTab].content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00A4FF] mr-2 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 sm:mt-6 md:mt-8">
                <button className="bg-[#1F3A93] hover:bg-[#00A4FF] text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm sm:text-base">
                  Set Up This Scene
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomScenes;
