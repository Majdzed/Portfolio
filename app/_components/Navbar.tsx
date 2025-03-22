'use client';
import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for the mobile menu
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start', // Align to the top of the viewport
        });
    }
    if (setIsMenuOpen) {
        setIsMenuOpen(false); // Close the mobile menu after clicking a link
    }
};

const Navbar = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='w-[90%] bg-[#1B1B1B] h-16 flex items-center justify-between px-4 md:px-16 absolute top-0 rounded-b-md text-[#9C9C9C] font-[family-name:var(--font-pixels)]'>
            {/* Logo or Brand Name (Optional) */}
            <div className='text-lg font-bold'>{/* <Image src="/sans-smile.gif" alt='sans' width={240} height={240} /> */}</div>

            {/* Desktop Navigation Links */}
            <div className='hidden md:flex items-center gap-8'>
                <Link
                    href='/#home'
                    className='hover:text-white transition-colors'
                    onClick={(e) => handleSmoothScroll(e, 'home', setIsMenuOpen)}
                >
                    Home
                </Link>
                <Link
                    href='/#MyProjects'
                    className='hover:text-white transition-colors'
                    onClick={(e) => handleSmoothScroll(e, 'MyProjects', setIsMenuOpen)}
                >
                    My Projects
                </Link>
                <Link
                    href='/#MySkills'
                    className='hover:text-white transition-colors'
                    onClick={(e) => handleSmoothScroll(e, 'MySkills', setIsMenuOpen)}
                >
                    My Skills
                </Link>
                <Link
                    href='/#Degrees'
                    className='hover:text-white transition-colors'
                    onClick={(e) => handleSmoothScroll(e, 'Degrees', setIsMenuOpen)}
                >
                    Degrees
                </Link>
            </div>

            {/* Social Icons (Desktop) */}
            <div className='hidden md:flex items-center gap-4'>
                <a
                    href='https://www.linkedin.com/in/majd-takai-eddine-zeghdar-5261aa260/'
                    className='hover:text-white transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href='https://github.com/Majdzed'
                    className='hover:text-white transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <LuGithub />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button className='md:hidden text-2xl' onClick={toggleMenu}>
                {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Navigation Links (Dropdown) */}
            {isMenuOpen && (
                <div className='absolute top-16 left-0 w-full bg-[#1B1B1B] flex flex-col items-center gap-4 py-4 md:hidden'>
                    <Link
                        href='/#'
                        className='hover:text-white transition-colors'
                        onClick={(e) => handleSmoothScroll(e, 'home', setIsMenuOpen)}
                    >
                        Home
                    </Link>
                    <Link
                        href='/#MyProjects'
                        className='hover:text-white transition-colors'
                        onClick={(e) => handleSmoothScroll(e, 'MyProjects', setIsMenuOpen)}
                    >
                        My Projects
                    </Link>
                    <Link
                        href='/#MySkills'
                        className='hover:text-white transition-colors'
                        onClick={(e) => handleSmoothScroll(e, 'MySkills', setIsMenuOpen)}
                    >
                        My Skills
                    </Link>
                    <Link
                        href='/#Degrees'
                        className='hover:text-white transition-colors'
                        onClick={(e) => handleSmoothScroll(e, 'Degrees', setIsMenuOpen)}
                    >
                        Degrees
                    </Link>
                    <div className='flex items-center gap-4'>
                        <a
                            href='https://www.linkedin.com/in/majd-takai-eddine-zeghdar-5261aa260/'
                            className='hover:text-white transition-colors'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href='https://github.com/Majdzed'
                            className='hover:text-white transition-colors'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <LuGithub />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;