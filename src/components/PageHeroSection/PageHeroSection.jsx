import React from 'react'
import Header from '../Header/Header'

const PageHeroSection = ({ title, subheading, img }) => {
    return (
        <section className='bg-mainBgColor w-full h-full relative bg-cover bg-center page-hero-bg-overlay'
            style={{ backgroundImage: `url(${img})` }}>
            <Header />
            <div className='flex mt-[80px] z-10 relative pb-[120px] flex-col justify-center items-center text-center'>
                <h1 className='] z-10 relative flex justify-center items-center text-headingColor text-center text-[30px] md:text-[50px]'>{title}</h1>
                <p className='z-10 text-paragraphColor relative'>{subheading}</p>
            </div>

        </section>
    )
}

export default PageHeroSection