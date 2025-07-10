import React from 'react'
import Header from '../Header/Header'

const PageHeroSection = ({ title }) => {
    return (
        <section className='bg-mainBgColor w-full h-full relative bg-cover'
            style={{ backgroundImage: "url('/images/main-bg.png')" }}>
            <Header />
            <h1 className='mt-[80px] pb-[120px] flex justify-center items-center text-headingColor text-center text-[30px] md:text-[50px]'>{title}</h1>
        </section>
    )
}

export default PageHeroSection