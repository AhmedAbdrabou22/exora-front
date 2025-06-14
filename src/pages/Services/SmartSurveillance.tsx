import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSmartSurv from '../../components/Services/SmartSurveillance/HeroSmartSurv'
import SurveillanceIntro from '../../components/Services/SmartSurveillance/SurveillanceIntro'
import InteractiveCameras from '../../components/Services/SmartSurveillance/InteractiveCameras'
import SystemComponents from '../../components/Services/SmartSurveillance/SystemComponents'
import SmartWatcherSystem from '../../components/Services/SmartSurveillance/SmartWatcherSystem'

const SmartSurveillance = () => {
  return (
    <PageContainer>
        <HeroSmartSurv/>
        <SurveillanceIntro/>
        <SmartWatcherSystem/>
        <InteractiveCameras/>
        <SystemComponents/>
    </PageContainer>
  )
}

export default SmartSurveillance
