// app/case-studies/[id]/page.jsx
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHeroSection from '@/components/PageHeroSection/PageHeroSection'
import FooterForm from '@/components/FooterForm/FooterForm'
import Footer from '@/components/Footer/Footer'
import caseStudiesData from '@/lib/caseStudiesData'

export async function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    id: caseStudy?.id,
  }));
}

export default async function Page({ params }) {
  const caseStudy = caseStudiesData.find((cs) => cs.id === params.id);

  if (!caseStudy) return notFound();

  return (
    <main>
      <PageHeroSection
        title={caseStudy?.bannerTitle}
        subheading={caseStudy?.bannerSubheading}
        img={caseStudy?.image}
      />

       <div className='flex flex-col max-w-[1100px] w-[90%] mx-auto py-[100px]'>
        <h1 className='text-headingColor font-[400] text-[30px] md:text-[60px] leading-[40px] md:leading-[70px]'>Building a Multi-Geo, Multi-Cloud Data Platform for a FTSE 250 Organisation</h1>
        <Image
          src={caseStudy?.image}
          width={1280}
          height={650}
          alt={caseStudy?.title}
          className='w-full max-h-[400px] md:max-h-[600px] object-cover object-center rounded-[20px] my-[30px]'
        />

        <div className='grid md:grid-cols-[0.3fr_1fr] gap-[40px] my-[40px] md:my-[80px]'>
          <div className='flex justify-start items-start'>
            <h2 className='text-headingColor font-[400] text-[30px] md:text-[40px]'>Goal:</h2>
          </div>
          <div className='flex flex-col'>
            <p className='text-textColor text-[20px] font-[400]'>{caseStudy?.goal}</p>
          </div>
        </div>

        {caseStudy?.details.map((block, idx) => (
          <div key={idx}>
            {block.images.length > 1 ? (
              <div className='grid lg:grid-cols-2 gap-[20px]'>
                {block.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    width={1280}
                    height={650}
                    alt={`case image ${i + 1}`}
                    className='w-full h-full max-h-[400px] md:max-h-[500px] object-cover object-center rounded-[20px] my-[30px]'
                  />
                ))}
              </div>
            ) : (
              <Image
                src={block.images[0]}
                width={1280}
                height={650}
                alt="case image"
                className='w-full max-h-[400px] md:max-h-[500px] object-cover object-center rounded-[20px] my-[30px]'
              />
            )}

            <div className='grid md:grid-cols-[0.3fr_1fr] gap-[40px] my-[80px]'>
              <div></div>
              <div className='flex flex-col'>
                {block.text.map((para, j) => (
                  <p
                    key={j}
                    className={`text-paragraphColor font-[400] ${
                      j === block.text.length - 1
                        ? 'text-[20px] text-textColor'
                        : 'text-[18px] mb-[20px]'
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterForm />
      <Footer />
    </main>
  )
}
