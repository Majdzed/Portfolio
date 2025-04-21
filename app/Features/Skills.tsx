import React from 'react'
import SkillCards from '../_components/SkillCards'
import GlowingBox from '../_components/GlowingBox'

type Props = {}

const Skills = (props: Props) => {
    const jsDescrption = "I have built interactive and dynamic web applications using Vanilla JavaScript, focusing on performance and cross-browser compatibility. My experience includes DOM manipulation, event handling, and creating reusable components without relying on frameworks(most of the projects built with it were for sake of fun and learning the language thus I've never used it on a real-life project)."
    const expressDescreption = "I have built 3 major project APIs using Express.js, including robust backend systems for web applications, as well as several smaller projects for training and skill development. My experience includes designing RESTful APIs, integrating databases(sql and noSql), implementing authentication, and optimizing performance for scalable solutions."
    const tsXp ="I have extensively used TypeScript to build type-safe and maintainable applications. My experience includes integrating TypeScript with React, Next.js, and Node.js to enhance code quality, reduce errors, and improve developer productivity."
    const nextXp = "I have developed high-performance frontend applications using Next.js, leveraging its server-side rendering (SSR) and static site generation (SSG) capabilities for fast load times and SEO optimization. My experience includes building responsive user interfaces, implementing dynamic routing, and integrating with RESTful APIs for seamless data fetching."
    const fastXP = "I have developed high-performance backend APIs using FastAPI , focusing on speed, scalability, and ease of use. My experience includes building RESTful APIs, implementing authentication, and integrating with databases like PostgreSQL and MongoDB."    
    const pyXp = "I have used Python for scripting,data-scrapping ,and backend development, including building APIs and working with data processing libraries. My experience also includes developing small-scale applications and tools to streamline workflows."
    const Docker = "I have used Docker to containerize applications, ensuring consistent environments across development and production. My experience includes creating Dockerfiles, managing multi-container applications with Docker Compose, and deploying containers to cloud platforms."
    return (
        <div className='flex flex-col gap-46 my-4 p-6' id='MySkills'>
            <h1 className='mx-auto my-12 text-4xl flex flex-col items-center justify-center'>
                My Skills
                <div className='m-6 w-[150%]'><GlowingBox  color='#4782c9' borderColor={"#4782c9"} boxShadow={"rgb(110, 0, 253)"} text=''/>
                </div>
            </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            <SkillCards level={5} name={"javaScript"} filledColor={"bg-[#4782c9]"} descreption={jsDescrption} experience={"1.5 years"} />
            <SkillCards level={4} name={"Express Js"} filledColor={"bg-[#4782c9]"} descreption={expressDescreption} experience='1.5 years'/>
            <SkillCards level={4} name={"TypeScript"} filledColor={"bg-[#4782c9]"} descreption={tsXp} experience='1.2 years'/>
            <SkillCards level={4} name={"Next JS/TS"} filledColor={"bg-[#4782c9]"} descreption={nextXp} experience='1.2 years'/>
            <SkillCards level={4} name={"React JS/TS"} filledColor={"bg-[#4782c9]"} descreption={nextXp} experience='1.2 years'/>
            <SkillCards level={3} name={"Fast API"} filledColor={"bg-[#4782c9]"} descreption={fastXP} experience='6 months'/>
            <SkillCards level={5} name={"Python"} filledColor={"bg-[#4782c9]"} descreption={pyXp} experience='2 years'/>
            <SkillCards level={4} name={"Docker"} filledColor={"bg-[#4782c9]"} descreption={Docker} experience={'6 months'}/>
        </div>
        </div>
    )
}

export default Skills