import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSection from '../../components/Services/MediaHomeSystem/HeroSection'
import FeaturesSection from '../../components/Services/MediaHomeSystem/FeaturesSection'
import InteractiveDemo from '../../components/Services/MediaHomeSystem/InteractiveDemo'
import VoiceControlDemo from '../../components/Services/MediaHomeSystem/VoiceControlDemo'
const MediaHomeSystem = () => {
    return (
       <div>
            <PageContainer>
                <HeroSection/>
                <FeaturesSection/>
                <InteractiveDemo/>
                <VoiceControlDemo/>
            </PageContainer>
        </div>
    )
}

export default MediaHomeSystem
