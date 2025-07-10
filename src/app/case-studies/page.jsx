import CaseStudyBoxCon from '@/components/CaseStudyBoxCon/CaseStudyBoxCon'
import Footer from '@/components/Footer/Footer'
import FooterForm from '@/components/FooterForm/FooterForm'
import PageHeroSection from '@/components/PageHeroSection/PageHeroSection'
import React from 'react'

const CaseStudies = () => {
  return (
    <main>
      <article>
        <PageHeroSection title={"Case Study"} subheading={"See How Our Work Transformed Businesses Like Yours"} img={'/images/case-study-bg.jpg'}/>
        <CaseStudyBoxCon/>
        <FooterForm />
        <Footer />
      </article>
    </main>
  )
}

export default CaseStudies