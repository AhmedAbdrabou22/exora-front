import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSection from '../../components/Services/MaintenanceSupport/HeroSection'
// import HeroSection from '../../components/Services/MaintenanceSupport/HeroSection'
import FeaturesSection from '../../components/Services/MaintenanceSupport/FeaturesSection'
import SupportPlans from '../../components/Services/MaintenanceSupport/SupportPlans'
import TechnicalTeam from '../../components/Services/MaintenanceSupport/TechnicalTeam'
// import ContactSection from '../../components/Services/MaintenanceSupport/ContactSection'

const MaintenanceSupport = () => {
    return (
       <div>
            <PageContainer>
                <HeroSection/>
                <FeaturesSection/>
                {/* <SupportPlans/> */}
                <TechnicalTeam/>
                {/* <ContactSection/> */}
            </PageContainer>
        </div>
    )
}

export default MaintenanceSupport