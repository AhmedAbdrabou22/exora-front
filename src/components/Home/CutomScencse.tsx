import React, { useState } from 'react';
import {
  FaBed,
  FaUtensils,
  FaCouch,
  FaBriefcase,
  FaFilm
} from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const CustomScenes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { isDarkMode } = useTheme();

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
    <div className={`py-12 md:py-20 transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-[#0A1128] via-[#1a1f3a] to-[#0A1128]' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
    }`}>
      <div className="container mx-auto px-4">
        {/* Section Heading with Gradient */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            <span className={`bg-gradient-to-r inline-block text-transparent bg-clip-text transition-all duration-500 ${
              isDarkMode 
                ? 'from-[#00A4FF] to-[#1F3A93]' 
                : 'from-[#1F3A93] to-[#00A4FF]'
            }`}>Custom Scenes & Routines</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-sm md:text-base transition-colors duration-500 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}>
            Get creative by combining multiple devices into one smart scene & activate it with a single click or voice command
          </p>
        </div>

        {/* Tabs Navigation - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-6 md:mb-10 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base border-2 transform hover:scale-105 ${
                activeTab === tab.id
                  ? isDarkMode
                    ? "bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg border-[#00A4FF] scale-105 shadow-blue-500/25"
                    : "bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg border-[#00A4FF] scale-105 shadow-blue-600/30"
                  : isDarkMode
                    ? "bg-[#0A1128] text-gray-300 border-[#1F3A93]/30 hover:border-[#00A4FF] hover:text-[#00A4FF] hover:bg-[#1a1f3a]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#00A4FF] hover:text-[#00A4FF] hover:bg-blue-50"
              }`}
            >
              <span className="text-lg md:text-xl">{tab.icon}</span>
              <span className="font-medium whitespace-nowrap">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content with Image and Overlay - Adjusted for better mobile display */}
        <div className={`relative rounded-xl overflow-hidden shadow-xl group transition-all duration-500 max-w-5xl mx-auto border ${
          isDarkMode 
            ? 'border-[#1F3A93]/30 shadow-gray-900/50' 
            : 'border-gray-300/50 shadow-gray-400/30'
        }`}>
          {/* Dark Overlay that lightens on hover */}
          <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${
            isDarkMode 
              ? 'bg-black opacity-70 group-hover:opacity-50' 
              : 'bg-black opacity-60 group-hover:opacity-40'
          }`}></div>
          
          {/* Background Image - Adjusted height for mobile */}
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-700 transform group-hover:scale-105"
          />
          
          {/* Content Overlay - Improved for mobile */}
          <div className="absolute inset-0 z-20 flex items-center justify-center p-3 sm:p-5 md:p-8">
            <div className={`p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-white transform transition-all duration-500 group-hover:scale-105 overflow-y-auto max-h-[280px] sm:max-h-[380px] md:max-h-[460px] border shadow-lg ${
              isDarkMode 
                ? 'bg-[#0A1128] bg-opacity-90 border-[#1F3A93]/30 shadow-[#00A4FF]/10' 
                : 'bg-gray-900 bg-opacity-90 border-gray-700/50 shadow-blue-900/20'
            }`}>
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 transition-colors duration-500 ${
                isDarkMode 
                  ? 'text-[#00A4FF]' 
                  : 'text-blue-300'
              }`}>
                {tabs[activeTab].content.title}
              </h3>
              <p className={`mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base transition-colors duration-500 ${
                isDarkMode 
                  ? 'text-gray-300' 
                  : 'text-gray-200'
              }`}>
                {tabs[activeTab].content.description}
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                {tabs[activeTab].content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-2 flex-shrink-0 transition-colors duration-500 ${
                      isDarkMode 
                        ? 'text-[#00A4FF]' 
                        : 'text-blue-300'
                    }`}>•</span>
                    <span className={`transition-colors duration-500 ${
                      isDarkMode 
                        ? 'text-gray-200' 
                        : 'text-gray-100'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 sm:mt-6 md:mt-8">
                <button className={`py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] hover:from-[#00A4FF] hover:to-[#1F3A93] text-white hover:shadow-[#00A4FF]/20' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white hover:shadow-blue-500/30'
                }`}>
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
