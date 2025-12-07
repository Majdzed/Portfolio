'use client'; // Ensure this is a client component
import React, { useEffect, useRef, useState } from 'react';
import GlowingBox from '../_components/GlowingBox';
import Image from 'next/image';
import AnimatedText from '../_components/AnimatedText';

type Props = {};

const Degrees = (props: Props) => {
    const deTxt =
        "I am currently a 4th-year student (Master 1) in AI Engineering at ESTIN, Bejaia. As of now, I hold an equivalent of a bachelor's degree in Computer Science, and I'm specializing in AI. My academic journey has equipped me with a strong foundation in programming, algorithms, and software development, which I continue to build upon through hands-on projects and self-learning.";

    const deTxtRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (deTxtRef.current) {
            observer.observe(deTxtRef.current);
        }

        return () => {
            if (deTxtRef.current) {
                observer.unobserve(deTxtRef.current);
            }
        };
    }, []);

    return (

            <div className='flex flex-col items-center justify-items-center gap-8' ref={deTxtRef} id='Degrees'>
                <div className='flex flex-col items-center content-center justify-center'>
                    <h1 className='text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white'>
                        Degrees
                    </h1>
                    <div className='m-6 w-[150%]'>
                        <GlowingBox
                            color='#fff200'
                            borderColor={'#4782c9'}
                            boxShadow={'rgb(255, 254, 0)'}
                            text=''
                        />
                    </div>
                </div>
                <p className='text-white text-wrap font-[family-name:var(--font-ibm-mono)] w-2/3'>
                    {isVisible && <AnimatedText text={deTxt} />}
                </p>
            </div>
    );
};

export default Degrees;