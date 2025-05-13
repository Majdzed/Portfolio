"use client"
import React from 'react'
import GlowingBox from '../_components/GlowingBox'
import ProjectsCarousel from '../_components/ProjectsCarousel'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div className='flex flex-col items-center justify-items-center gap-8' id='MyProjects'>
            <div className='flex flex-col items-center content-center justify-center'>
                <h1 className='text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white'>
                    My Projects
                </h1>
                <div className='m-6 w-[150%]'>
                    <GlowingBox
                        color='#fe0f0e'
                        borderColor={'#fe0f0e'}
                        boxShadow={'rgb(254, 15, 14)'}
                        text=''
                    />
                    </div>
                </div>
                <ProjectsCarousel/>
                


        </div>
    )
}

export default Projects