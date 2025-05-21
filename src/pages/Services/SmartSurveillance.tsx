import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSmartSurv from '../../components/Services/SmartSurveillance/HeroSmartSurv'
import SurveillanceIntro from '../../components/Services/SmartSurveillance/SurveillanceIntro'
import InteractiveCameras from '../../components/Services/SmartSurveillance/InteractiveCameras'
import SystemComponents from '../../components/Services/SmartSurveillance/SystemComponents'

const SmartSurveillance = () => {
  return (
    <PageContainer>
        <HeroSmartSurv/>
        <SurveillanceIntro/>
        <InteractiveCameras/>
        <SystemComponents/>
    </PageContainer>
  )
}

export default SmartSurveillance
