import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col'>
        <div className='max-w-[1280px] w-[90%] gap-[20px] py-[80px] flex-wrap flex flex-col md:flex-row items-start justify-between mx-auto'>
            <Image src={'/images/logo.png'} data-aos="fade" data-aos-delay={100} width={194} height={68} className='object-contain object-center'  alt='Data First Consultancy' />
            <div className='flex flex-col max-w-[350px]' data-aos="fade" data-aos-delay={200}>
                <p className='mb-[20px] text-paragraphColor font-[400] text-[16px]'>To empower businesses to harness the full potential of their data through expert-led strategy, services and products</p>
                <div className='flex items-center gap-[11px]'>
                    <a href='#' target='_blank' className='w-[35px] hover:bg-mainColor hover:border-transparent transition-all h-[35px] rounded-[50%] flex justify-center items-center border border-borderColor'>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7579 2.78284C11.7632 2.90422 11.7632 3.02009 11.7632 3.14148C11.7686 6.82165 9.06473 11.0701 4.12011 11.0701C2.66175 11.0701 1.22999 10.6342 0.000488281 9.81766C0.213389 9.84524 0.426289 9.85628 0.63919 9.85628C1.8474 9.85628 3.02368 9.43695 3.97641 8.65898C2.82674 8.63691 1.81547 7.85894 1.46418 6.72234C1.86869 6.8051 2.28385 6.78855 2.67771 6.67268C1.42692 6.41887 0.527417 5.27675 0.522095 3.94703C0.522095 3.936 0.522095 3.92496 0.522095 3.91393C0.894671 4.12911 1.31515 4.25049 1.74095 4.26153C0.564675 3.44494 0.197421 1.81727 0.910638 0.542731C2.27852 2.28626 4.29043 3.34011 6.45137 3.45597C6.23315 2.49041 6.53121 1.47519 7.22846 0.791019C8.30893 -0.262824 10.0121 -0.207649 11.0341 0.912404C11.6355 0.791019 12.2157 0.559284 12.7426 0.233751C12.5403 0.879299 12.1199 1.42553 11.561 1.77313C12.0932 1.70692 12.6148 1.55795 13.1045 1.33725C12.7426 1.90004 12.2848 2.38558 11.7579 2.78284Z" fill="white"/>
                        </svg>
                    </a>
                     <a href='#' target='_blank' className='w-[35px] hover:bg-mainColor hover:border-transparent transition-all h-[35px] rounded-[50%] flex justify-center items-center border border-borderColor'>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.56924 14.449V8.15749H7.68019L7.99689 5.70485H5.56924V4.1392C5.56924 3.42933 5.76556 2.94556 6.78467 2.94556L8.08234 2.94502V0.751298C7.85792 0.722135 7.08759 0.655273 6.191 0.655273C4.31878 0.655273 3.03703 1.79806 3.03703 3.89629V5.70485H0.919678V8.15749H3.03703V14.449H5.56924Z" fill="white"/>
                        </svg>
                     </a>
                     <a href='#' target='_blank' className='w-[35px] hover:bg-mainColor hover:border-transparent transition-all h-[35px] rounded-[50%] flex justify-center items-center border border-borderColor'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.341 14.449L14.3445 14.4484V9.38957C14.3445 6.91475 13.8117 5.00834 10.9185 5.00834C9.52762 5.00834 8.59424 5.77159 8.21319 6.49519H8.17296V5.23938H5.42973V14.4484H8.28618V9.88844C8.28618 8.68781 8.51378 7.52684 10.0006 7.52684C11.4656 7.52684 11.4875 8.89702 11.4875 9.96546V14.449H14.341ZM0.778378 5.23996H3.63827V14.449H0.778378V5.23996ZM2.20718 0.655273C1.29277 0.655273 0.550781 1.39726 0.550781 2.31167C0.550781 3.22608 1.29277 3.98358 2.20718 3.98358C3.12158 3.98358 3.86357 3.22608 3.86357 2.31167C3.86327 1.87246 3.68866 1.45132 3.37809 1.14076C3.06752 0.830188 2.64639 0.655578 2.20718 0.655273Z" fill="white"/>
                        </svg>
                     </a>
                </div>
            </div>
            <div className='flex gap-[77px] flex-wrap' data-aos="fade" data-aos-delay={300}>
                <ul className='flex flex-col gap-[20px]'>
                    <li><Link href={'/'} className='font-vezla text-[16px] text-textColor hover:text-mainColor transition-colors'>Home</Link></li>
                    <li><a href='#' className='font-vezla text-[16px] text-textColor hover:text-mainColor transition-colors'>About Us</a></li>
                    <li><Link href={'/case-studies'} className='font-vezla text-[16px] text-textColor hover:text-mainColor transition-colors'>Case Study</Link></li>
                </ul>
                <ul className='flex flex-col gap-[20px]'>
                    <li><a href='#' className='font-vezla text-[16px] text-textColor hover:text-mainColor transition-colors'>Blog</a></li>
                    <li><Link href={'/#contact'} className='font-vezla text-[16px] text-textColor hover:text-mainColor transition-colors'>Contact Us</Link></li>
                </ul>
            </div>
        </div>

        <span className='flex justify-center items-center text-center font-[400] text-[14px] text-paragraphColor opacity-75 p-[20px_10px] border-t border-[#ffffff1a]'>@2025 Copyrighted by Data First Cunsultancy. All Rights Reserved.</span>
    </footer>
  )
}

export default Footer