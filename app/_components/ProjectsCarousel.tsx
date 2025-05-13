"use client"; // Required for client-side interactivity

import React, { useEffect, useState } from "react";
import Projects from "../data/Projects.json"; // Import your projects data
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/8bit/carousel"

const ProjectsCarousel = () => {
    // Add client-side only rendering to prevent hydration issues
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Return null during server-side rendering
    }

    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl mx-auto px-2 sm:px-4">
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                    slidesToScroll: 1
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Projects.map((project: Project) => (
                        <CarouselItem key={project.id} className="basis-full">
                            <Link href={`/${project.id-1}`} className="block h-full">
                                <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 bg-black border-4 border-[#4782c9] image-rendering-pixelated">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 p-2 sm:p-4 text-center">
                                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white font-[family-name:var(--font-pixels)]">
                                            {project.title}
                                        </h1>
                                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white opacity-80 font-[family-name:var(--font-pixels)]">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-white border-2 border-white font-[family-name:var(--font-pixels)] absolute left-0 sm:-left-2 md:-left-4 lg:-left-10" />
                <CarouselNext className="text-white border-2 border-white font-[family-name:var(--font-pixels)] absolute right-0 sm:-right-2 md:-right-4 lg:-right-10" />
            </Carousel>
        </div>
    );
}

export default ProjectsCarousel;