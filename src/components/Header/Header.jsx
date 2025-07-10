"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react'

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Case Study", href: "/case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "/#contact" },
];

const capabilitiesData = [
    "Cloud",
    "Customer Service", 
    "Cybersecurity",
    "Data and Artificial Intelligence",
    "Digital Engineering and Manufacturing",
    "Ecosystem Partners",
    "Emerging Technology",
    "Finance and Risk Management",
    "Infrastructure and Capital Projects",
    "Learning"
];

const servicesData = [
    "Managed Services",
    "Marketing and Experience",
    "Metaverse",
    "Sales and Commerce",
    "Strategy",
    "Supply Chain",
    "Sustainability",
    "Talent and Organization",
    "Technology Transformation"
];

const industriesData = [
    "Aerospace and Defense",
    "Automotive",
    "Banking",
    "Capital Markets",
    "Chemicals",
    "Communications and Media",
    "Consumer Goods and Services",
    "Energy",
    "Health",
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 100);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
                setMobileDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className={`flex ${menuOpen && "bg-black"} z-[101] lg:bg-transparent justify-center items-center flex-col relative`}>
            <div className='flex justify-between items-center max-w-[1280px] w-[90%] py-[20px] lg:py-[30px]'>
                <Link href="/" className='max-w-[194px] relative z-[101] w-full h-full max-h-[68px] flex'>
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
                    {/* What we do with dropdown */}
                    <li className="relative" ref={dropdownRef}>
                        <div 
                            className="p-[20px] lg:p-0 border-t flex items-center lg:block border-[#ffffff10] w-full lg:border-none lg:w-auto font-vezla transition-colors font-[400] text-[16px] text-textColor hover:text-mainColor cursor-pointer lg:flex lg:items-center lg:gap-1"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        >
                            What we do
                            <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* Desktop Dropdown */}
                        <div 
                            className={`hidden lg:block absolute left-1/2 transform -translate-x-1/3 xl:-translate-x-1/2 top-full mt-2 w-screen max-w-[800px] xl:max-w-[1200px] bg-mainBgColor border border-[#141414] rounded-lg shadow-2xl transition-all duration-300 ${
                                dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 bg-mainColor rounded flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#ffffff' height={16}>
                                            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-textColor text-xl font-semibold">What we do</h2>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-12">
                                    {/* Capabilities */}
                                    <div>
                                        <h3 className="text-headingColor text-sm font-medium mb-4 uppercase tracking-wider">Capabilities</h3>
                                        <ul className="space-y-3">
                                            {capabilitiesData.map((item, index) => (
                                                <li key={index}>
                                                    <Link href="#" className="text-paragraphColor hover:text-mainColor transition-colors text-sm leading-relaxed block">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Services */}
                                    <div>
                                        <h3 className="text-headingColor text-sm font-medium mb-4 uppercase tracking-wider">Services</h3>
                                        <ul className="space-y-3">
                                            {servicesData.map((item, index) => (
                                                <li key={index}>
                                                    <Link href="#" className="text-paragraphColor hover:text-mainColor transition-colors text-sm leading-relaxed block">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Industries */}
                                    <div>
                                        <h3 className="text-headingColor text-sm font-medium mb-4 uppercase tracking-wider">Industries</h3>
                                        <ul className="space-y-3">
                                            {industriesData.map((item, index) => (
                                                <li key={index}>
                                                    <Link href="#" className="text-paragraphColor hover:text-mainColor transition-colors text-sm leading-relaxed block">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Dropdown */}
                        <div className={`lg:hidden ${mobileDropdownOpen ? 'block' : 'hidden'} bg-[#1a1a1a] border-t border-[#333] w-full`}>
                            <div className="p-4">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-headingColor text-sm font-medium mb-3 uppercase tracking-wider">Capabilities</h3>
                                        <ul className="space-y-2">
                                            {capabilitiesData.slice(0, 5).map((item, index) => (
                                                <li key={index}>
                                                    <Link href="#" className="text-paragraphColor hover:text-mainColor transition-colors text-sm block py-1">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-headingColor text-sm font-medium mb-3 uppercase tracking-wider">Services</h3>
                                        <ul className="space-y-2">
                                            {servicesData.slice(0, 5).map((item, index) => (
                                                <li key={index}>
                                                    <Link href="#" className="text-paragraphColor hover:text-mainColor transition-colors text-sm block py-1">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-headingColor text-sm font-medium mb-3 uppercase tracking-wider">Industries</h3>
                                        <ul className="space-y-2">
                                            {industriesData.slice(0, 5).map((item, index) => (
                                                <li key={index}>
                                                    <Link href="#" className="text-paragraphColor hover:text-mainColor transition-colors text-sm block py-1">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Regular nav links */}
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