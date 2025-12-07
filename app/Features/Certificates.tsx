'use client';
import React, { useState, useEffect, useRef } from 'react';
import GlowingBox from '../_components/GlowingBox';
import Certificates from '../data/Certificates.json';

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    pdf: string;
}

const CertificatesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
    const [isVisible, setIsVisible] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleNavigate = (direction: 'next' | 'prev') => {
        if (isFlipping) return;

        setIsFlipping(true);
        setFlipDirection(direction);

        setTimeout(() => {
            if (direction === 'next') {
                setCurrentIndex((prev) => (prev + 1) % Certificates.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + Certificates.length) % Certificates.length);
            }
        }, 300);

        setTimeout(() => {
            setIsFlipping(false);
        }, 600);
    };

    // Touch/Mouse drag handlers
    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setDragOffset(0);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (Math.abs(dragOffset) > 80) {
            if (dragOffset > 0) {
                handleNavigate('prev');
            } else {
                handleNavigate('next');
            }
        }
        setDragOffset(0);
    };

    const currentCertificate = Certificates[currentIndex] as Certificate;

    return (
        <div
            ref={sectionRef}
            id="Certificates"
            className="flex flex-col items-center justify-center gap-8 w-full px-4"
        >
            {/* Section Header */}
            <div className="flex flex-col items-center content-center justify-center">
                <h1 className="text-4xl font-[family-name:var(--font-raleway)] font-semibold text-white">
                    Certificates
                </h1>
                <div className="m-6 w-[150%]">
                    <GlowingBox
                        color="#10b981"
                        borderColor={'#4782c9'}
                        boxShadow={'rgb(16, 185, 129)'}
                        text=""
                    />
                </div>
            </div>

            {/* 3D Carousel Container */}
            {isVisible && (
                <div className="perspective-container w-full max-w-3xl">
                    <div
                        ref={containerRef}
                        className={`certificate-card-wrapper ${isFlipping ? `flip-${flipDirection}` : ''}`}
                        onMouseDown={(e) => handleDragStart(e.clientX)}
                        onMouseMove={(e) => handleDragMove(e.clientX)}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                        onTouchEnd={handleDragEnd}
                        style={{
                            transform: isDragging
                                ? `rotateY(${dragOffset * 0.1}deg) translateX(${dragOffset * 0.3}px)`
                                : undefined,
                            cursor: isDragging ? 'grabbing' : 'grab'
                        }}
                    >
                        {/* Certificate Card */}
                        <div className="certificate-card">
                            <div className="certificate-card-inner">
                                {/* Image Preview Container */}
                                <div className="relative w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border-4 border-[#4782c9] shadow-2xl">
                                    {/* Certificate Image Preview */}
                                    <div className="w-full aspect-[4/3] bg-white">
                                        <img
                                            src={currentCertificate.image}
                                            alt={currentCertificate.title}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />
                                    </div>
                                    {/* Overlay with certificate info */}
                                    <div className="bg-gradient-to-t from-black/95 via-black/80 to-black/70 p-4 sm:p-6">
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-raleway)]">
                                            {currentCertificate.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-emerald-400 font-[family-name:var(--font-ibm-mono)] mt-1">
                                            {currentCertificate.issuer}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-ibm-mono)]">
                                            {currentCertificate.date}
                                        </p>
                                        {/* View Full PDF Button */}
                                        <a
                                            href={currentCertificate.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-all duration-300 text-sm font-[family-name:var(--font-ibm-mono)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                            View Full Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        {/* Previous Button */}
                        <button
                            onClick={() => handleNavigate('prev')}
                            disabled={isFlipping}
                            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/50 text-white hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous certificate"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {Certificates.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (index !== currentIndex && !isFlipping) {
                                            setFlipDirection(index > currentIndex ? 'next' : 'prev');
                                            setIsFlipping(true);
                                            setTimeout(() => setCurrentIndex(index), 300);
                                            setTimeout(() => setIsFlipping(false), 600);
                                        }
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-emerald-400 scale-125'
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`Go to certificate ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handleNavigate('next')}
                            disabled={isFlipping}
                            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/50 text-white hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next certificate"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Swipe hint */}
                    <p className="text-center text-gray-500 text-sm mt-4 font-[family-name:var(--font-ibm-mono)]">
                        Swipe or drag to navigate
                    </p>
                </div>
            )}
        </div>
    );
};

export default CertificatesSection;
