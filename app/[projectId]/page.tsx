import React from 'react';
import Navbar from '../_components/Navbar';
import Projects from '../data/Projects.json';
import GlowingBox from '../_components/GlowingBox';
import Image from 'next/image';
import Link from 'next/link';

type Params = {
    params: Promise<{
        projectId: string;
    }>;
};

const Page = async ({ params}: Params) => {
    const projectId = await params
    const id =  parseInt(projectId.projectId);

    return (
        
        
        <div className="flex flex-col items-center justify-items-center min-h-screen pb-10 gap-10 scroll-smooth">
        <Navbar />
            <div className="flex flex-col items-center content-center justify-center mt-20 md:mt-60 space-y-8 md:space-y-16">
                <div className="flex flex-col items-center content-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white text-center">
                        {Projects[id]?.title}
                    </h1>
                    <GlowingBox color="#00977D" borderColor={'#00977D'} boxShadow={'rgb(0, 151, 125)'} text="" />
                </div>
                <div className="w-full px-4 md:px-0">
                    {Projects[id]?.available ? (
                        <Image
                            src={`/${Projects[id]?.title}.png`}
                            alt={Projects[id]?.title}
                            width={1000}
                            height={240}
                            className="w-full h-auto"
                        />
                    ) : (
                        <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-pixels)] text-center">
                            No image available for now!!!
                        </h1>
                    )}
                </div>
            </div>

            {/* About the Project */}
            <div className="flex flex-col items-center content-center justify-center gap-8 md:gap-12 w-full px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white text-center">
                    About the Project:
                </h1>
                <p className="text-white text-wrap font-[family-name:var(--font-ibm-mono)] w-full md:w-2/3 text-center md:text-left">
                    {Projects[id]?.fullDescription}
                </p>
            </div>

            {/* Technologies Used */}
            <div className="flex flex-col items-center content-center justify-center gap-8 md:gap-12 w-full px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white text-center">
                    Technologies Used:
                </h1>
                <p className="text-white font-[family-name:var(--font-pixels)] text-center">
                    {Projects[id]?.technologies?.join(', ')}
                </p>
            </div>

            {/* Project Links */}
            <div className="flex flex-col items-center content-center justify-center gap-8 md:gap-12 w-full px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white text-center">
                    Project Links:
                </h1>
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    {/* Project URL */}
                    <div className="text-2xl md:text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white border-2 border-white p-4 text-center">
                        {Projects[id]?.title} URL:{' '}
                        <a
                            className="font-[family-name:var(--font-pixels)] text-blue-400 hover:text-blue-600"
                            href={Projects[id]?.url}
                        >
                            {/* Show "Click here!" on small screens, full URL on larger screens */}
                            <span className="sm:hidden">Click here!</span>
                            <span className="hidden sm:inline">{Projects[id]?.url}</span>
                        </a>
                    </div>

                    {/* GitHub Repo URL */}
                    <div className="text-2xl md:text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white border-2 border-white p-4 text-center">
                        {Projects[id]?.title} GitHub Repo:{' '}
                        <Link
                            className="font-[family-name:var(--font-pixels)] text-blue-400 hover:text-blue-600"
                            href={Projects[id]?.repository || '#'}
                        >
                            {/* Show "Click here!" on small screens, full URL on larger screens */}
                            <span className="sm:hidden">Click here!</span>
                            <span className="hidden sm:inline">{Projects[id]?.repository}</span>
                        </Link>
                    </div>
                    <div className="flex  w-full justify-around content-center gap-4 md:gap-0 px-4 md:px-0">
                        {id > 0 && id <= Projects.length - 1 && (
                            <div className="flex items-start self-start content-center justify-center gap-4 md:gap-12 font-[family-name:var(--font-pixels)] border-2 border-white p-2">
                                <Link href={`/${id - 1}`} className="hover:text-white">
                                    {'<'} Previous Project
                                </Link>
                            </div>
                        )}
                        {id >= 0 && id < Projects.length - 1 && (
                            <div className="flex items-end self-end content-center justify-center gap-4 md:gap-12 font-[family-name:var(--font-pixels)] border-2 border-white p-2">
                                <Link href={`/${id + 1}`} className="hover:text-white">
                                    Next Project {'>'}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;