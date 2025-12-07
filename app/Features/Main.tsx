'use client'
import React from 'react';
import GlowingBox from '../_components/GlowingBox';
import ResumeDownload from '../_components/ResumeDownload';
import Image from 'next/image';
import { handleSmoothScroll } from '../_components/Navbar';

type Props = {};

const Main = (props: Props) => {
    return (
        <div className='w-full flex items-center justify-evenly bg-[#080808] mt-24 pt-36 max-md:flex-col-reverse max-md:gap-12' id='home'>
            <div className='flex flex-col text-wrap space-y-8 w-1/2'>
                <h1 className='text-white text-4xl font-[family-name:var(--font-raleway)] font-extrabold '>
                    Zeghdar Majd Takai Eddine
                </h1>
                <p className='text-wrap font-[family-name:var(--font-ibm-mono)]'>
                    Hi, I'm Majd 👋, a passionate Computer Science student at ESTIN, a junior web developer 💻, and an aspiring AI
                    engineer 🤖. With a strong foundation in programming and a keen interest in cutting-edge technologies, I'm
                    skilled in building dynamic web applications and exploring the transformative potential of artificial
                    intelligence. I'm constantly learning, innovating, and working towards becoming a leader in the tech industry,
                    where I can contribute to solving real-world problems through code and intelligent systems.
                </p>
                <div className='flex flex-wrap items-center gap-4'>
                    <a href='#MySkills' className='w-fit font-[family-name:var(--font-pixels)]' onClick={(e) => handleSmoothScroll(e, 'MySkills')}>
                        <GlowingBox color='#4782c9' borderColor={"#4782c9"} boxShadow={"rgb(110, 0, 253)"} text='Check out my skills!!!' />
                    </a>
                    <ResumeDownload />
                </div>
            </div>
            <div className='max-md:w-[50%]'>
                <Image src='/sans-smile.gif' alt='sans' width={240} height={240} />
            </div>
        </div>
    );
};

export default Main;