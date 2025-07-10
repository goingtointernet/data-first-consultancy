import Image from 'next/image'
import React from 'react'

const caseStudies = [
  {
    image: '/images/c1.png',
    title: 'Multi-Cloud Data Platform',
    description:
      'To overcome regulatory complexity and legacy system limitations, a FTSE 250 financial services firm launched a major cloud transformation. We architected a secure, cloud-native data platform across multiple regions, enabling real-time analytics, seamless data ingestion, and scalable infrastructure to future-proof their operations.',
  },
  {
    image: '/images/c2.jpg',
    title: 'Social Media Campaigns Optimization',
    description:
      'A consumer brand sought to improve ROI across its global social campaigns. By leveraging data-driven targeting, A/B testing, and real-time performance tracking, we created high-converting campaigns across Facebook, Instagram, and TikTok, resulting in a 47% increase in engagement and a 32% drop in cost-per-click.',
  },
  {
    image: '/images/c3.jpg',
    title: 'AI Model for Customer Insights',
    description:
      'A fast-growing e-commerce company needed deeper insights into customer behavior. We built a custom AI model using natural language processing and predictive analytics to segment users, forecast purchasing trends, and power personalized recommendations — boosting conversions by 22% within the first quarter.',
  },
]


const CaseStudyBoxCon = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-[60px] py-[50px] md:py-[100px]'>
      <div className="max-w-[1280px] grid md:grid-cols-2 gap-[60px] w-[90%] mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            data-aos="fade" data-aos-delay={100}
            className={`flex flex-col ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className='rounded-[20px] overflow-hidden w-full max-h-[400px] h-full'>
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={1280}
                height={555}
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col mt-[15px]'>
              <h3 className='text-headingColor font-[400] text-[24px] md:text-[30px]'>
                {caseStudy.title}
              </h3>
              <p className='text-paragraphColor text-[16px] md:text-[18px] leading-[28px] mt-[5px]'>
                {caseStudy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudyBoxCon
