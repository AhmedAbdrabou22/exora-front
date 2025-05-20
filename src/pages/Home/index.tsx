import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import HeroSection from '../../components/Home/HeroSection'
import Technologies from '../../components/Home/Technologies'
import Brands from '../../components/Home/Brands'
import CustomScenes from '../../components/Home/CutomScencse'
import Faqs from '../../components/Home/Faqs'

const Home = () => {
    return (
        <PageContainer>
            <HeroSection/>
            <Technologies/>
            <Brands/>
            <CustomScenes/>
            <Faqs/>
        </PageContainer>
    )
}

export default Home
