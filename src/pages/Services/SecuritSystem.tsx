import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import SmartLocksSection from '../../components/Services/SecuritySystem/SmartLocksSection'
import SecurityCamerasSection from '../../components/Services/SecuritySystem/SecurityCamerasSection'
import SecurityFeaturesSection from '../../components/Services/SecuritySystem/SecurityFeaturesSection'

const SecuritySystem = () => {
    return (
        <div>
            <PageContainer>
                <SmartLocksSection />
                <SecurityCamerasSection/>
                <SecurityFeaturesSection/>
            </PageContainer>
        </div>
    )
}

export default SecuritySystem
