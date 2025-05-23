import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSection from '../../components/Services/SmartLighting/HeroSection'
import FeaturesSection from '../../components/Services/SmartLighting/FeaturesSection'
import ControlPanel from '../../components/Services/SmartLighting/ControlPanel'

const SmartLightingControl = () => {
  return (
    <div>
      <PageContainer>
        <HeroSection/>
        <FeaturesSection/>
        <ControlPanel/>
      </PageContainer>
    </div>
  )
}

export default SmartLightingControl
