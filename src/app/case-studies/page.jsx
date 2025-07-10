import CaseStudyBoxCon from '@/components/CaseStudyBoxCon/CaseStudyBoxCon'
import Footer from '@/components/Footer/Footer'
import FooterForm from '@/components/FooterForm/FooterForm'
import PageHeroSection from '@/components/PageHeroSection/PageHeroSection'
import React from 'react'

const CaseStudies = () => {
  return (
    <main>
      <article>
        <PageHeroSection title={"Case Study"}/>
        <CaseStudyBoxCon/>
        <FooterForm />
        <Footer />
      </article>
    </main>
  )
}

export default CaseStudies