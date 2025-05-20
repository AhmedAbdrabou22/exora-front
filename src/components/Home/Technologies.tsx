import React from 'react';
import { FaHome, FaIndustry, FaLeaf } from 'react-icons/fa';

const Technologies = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Heading with Gradient */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] inline-block text-transparent bg-clip-text">Our Technologies</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our cutting-edge IoT technologies that are transforming homes, industries, and cities.
                    </p>
                </div>

                {/* Technologies Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Technology 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="h-2 bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]"></div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#1F3A93] bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <FaHome className="text-3xl text-[#1F3A93]" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4">Smart Home</h3>
                            <p className="text-gray-600 text-center">
                                Transform your living space with our intelligent home automation systems. Control lighting, climate, security, and entertainment with ease.
                            </p>
                            <div className="mt-6 text-center">
                                <a
                                    href="/technologies/smart-home"
                                    className="inline-block text-[#1F3A93] hover:text-[#00A4FF] font-medium transition-colors duration-300"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Technology 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="h-2 bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]"></div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#1F3A93] bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <FaIndustry className="text-3xl text-[#1F3A93]" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4">Industrial IoT</h3>
                            <p className="text-gray-600 text-center">
                                Optimize operations and increase efficiency with our industrial IoT solutions. Monitor equipment, analyze data, and automate processes.
                            </p>
                            <div className="mt-6 text-center">
                                <a
                                    href="/technologies/industrial-iot"
                                    className="inline-block text-[#1F3A93] hover:text-[#00A4FF] font-medium transition-colors duration-300"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Technology 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="h-2 bg-gradient-to-r from-[#1F3A93] to-[#00A4FF]"></div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#1F3A93] bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <FaLeaf className="text-3xl text-[#1F3A93]" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4">Smart Agriculture</h3>
                            <p className="text-gray-600 text-center">
                                Revolutionize farming with precision agriculture technology. Monitor soil conditions, automate irrigation, and optimize crop yields.
                            </p>
                            <div className="mt-6 text-center">
                                <a
                                    href="/technologies/smart-agriculture"
                                    className="inline-block text-[#1F3A93] hover:text-[#00A4FF] font-medium transition-colors duration-300"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
