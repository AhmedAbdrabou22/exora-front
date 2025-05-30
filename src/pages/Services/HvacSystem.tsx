import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSection from '../../components/Services/Hvacsystem/HeroSection'
import ComponentsSection from '../../components/Services/Hvacsystem/ComponentSection'
import FeaturesSection from '../../components/Services/Hvacsystem/FeaturesSection'

const HvacSystem = () => {
    return (
        <div>
            <PageContainer>
                <HeroSection/>
                <ComponentsSection/>
                <FeaturesSection/>
            </PageContainer>
        </div>
    )
}

export default HvacSystem
