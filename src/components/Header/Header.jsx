"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Case Study", href: "/case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "/#contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    return (
        <header className={`flex ${menuOpen && "bg-black"} lg:bg-transparent justify-center items-center flex-col relative`}>
            <div className='flex justify-between items-center max-w-[1280px] w-[90%] py-[20px] lg:py-[30px]'>
                <Link href="/" className='max-w-[194px] w-full h-full max-h-[68px] flex'>
                    <Image src={'/images/logo.png'} width={194} className='object-contain object-center' height={68} alt='Data First Consultancy' />
                </Link>

                <span className='cursor-pointer lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {!menuOpen ?
                        <svg height={25} fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                        </svg>
                        :
                        <svg height={25} fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    }
                </span>
                <ul className={`absolute ${!menuOpen ? "hidden" : "block"} z-[101] left-0 top-[100%] bg-black w-full lg:w-auto lg:bg-transparent lg:static lg:flex justify-center items-center gap-[30px]`}>
                    {navLinks.map((link, index) => {
                        const isActive =
                            pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                        const commonClasses = `p-[20px] lg:p-0 border-t flex lg:block border-[#ffffff10] w-full lg:border-none lg:w-auto font-vezla transition-colors font-[400] text-[16px] ${isActive ? 'text-mainColor' : 'text-textColor hover:text-mainColor'
                            }`;

                        return (
                            <li key={index}>
                                {link.href.startsWith('/') ? (
                                    <Link href={link.href} className={commonClasses}>
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a href={link.href} className={commonClasses}>
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        );
                    })}

                </ul>
            </div>
        </header>
    )
}

export default Header