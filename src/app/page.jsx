import Footer from '@/components/Footer/Footer'
import FooterForm from '@/components/FooterForm/FooterForm'
import HomeHero from '@/components/HomeHero/HomeHero'
import LogoBanner from '@/components/LogoBanner/LogoBanner'
import RoadMap from '@/components/RoadMap/RoadMap'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import VisionMission from '@/components/VisionMission/VisionMission'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import React from 'react'

const Home = () => {
  return (
    <main>
      <article>
        <HomeHero />
        <LogoBanner/>
        <VisionMission />
        <WhyChoose />
        <ServicesSection />
        <RoadMap />
        <FooterForm />
        <Footer />
      </article>
    </main>
  )
}

export default Home