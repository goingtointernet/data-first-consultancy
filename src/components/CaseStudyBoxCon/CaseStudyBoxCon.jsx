import caseStudiesData from '@/lib/caseStudiesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const CaseStudyBoxCon = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-[60px] py-[50px] md:py-[100px]'>
      <div className="max-w-[1280px] grid md:grid-cols-2 gap-[60px] w-[90%] mx-auto">
        {caseStudiesData.map((caseStudy, index) => (
          <div
            key={index}
            data-aos="fade" data-aos-delay={100}
            className={`flex flex-col ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className='rounded-[20px] overflow-hidden w-full max-h-[400px] h-full'>
              <Image
                src={caseStudy?.image}
                alt={caseStudy?.title}
                width={1280}
                height={555}
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col mt-[15px]'>
              <Link href={`/case-studies/${caseStudy?.id}`} className='text-headingColor font-vezla font-[400] text-[24px] md:text-[30px]'>
                {caseStudy?.title}
              </Link>
              <p className='text-paragraphColor text-[16px] md:text-[18px] leading-[28px] mt-[5px]'>
                {caseStudy?.goal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudyBoxCon
