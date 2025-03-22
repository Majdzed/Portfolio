"use client"; // Required for client-side interactivity

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Optional: For autoplay functionality
import Projects from "../data/Projects.json"; // Import your projects data
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ProjectsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        
        <div className="embla overflow-hidden relative w-[50%] mx-auto"> {/* Adjusted width */}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {Projects.map((project: Project) => (
                        
                        <div className="embla__slide flex-[0_0_100%] min-w-0" key={project.id}>
                            <Link href={`/${project.id-1}`} >
                            <div className="relative h-96">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 p-4 text-center">
                                    <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                        {project.title}
                                    </h1>
                                    <p className="mt-4 text-lg text-white opacity-80">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                className="embla__prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
                onClick={scrollPrev}
            >
                ←
            </button>
            <button
                className="embla__next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
                onClick={scrollNext}
            >
                →
            </button>
        </div>
    );
};

export default ProjectsCarousel;