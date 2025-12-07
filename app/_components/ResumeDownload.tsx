'use client';
import React, { useState, useRef, useEffect } from 'react';
import { HiDownload, HiChevronDown } from 'react-icons/hi';

const cvVersions = [
    { id: 1, label: 'Work (English)', file: '/cvs/WECV.pdf' },
    { id: 2, label: 'Work (French)', file: '/cvs/FECV.pdf' },
    { id: 3, label: 'Study (French)', file: '/cvs/CV.pdf' },
];

const ResumeDownload = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDownload = (file: string, label: string) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = `Majd_Zeghdar_Resume_${label.replace(/[^a-zA-Z]/g, '_')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/25 font-[family-name:var(--font-pixels)]"
            >
                <HiDownload className="w-5 h-5" />
                Download Resume
                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-[#1B1B1B] border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50 animate-fadeIn">
                    {cvVersions.map((cv) => (
                        <button
                            key={cv.id}
                            onClick={() => handleDownload(cv.file, cv.label)}
                            className="w-full px-4 py-3 text-left text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 font-[family-name:var(--font-ibm-mono)] text-sm"
                        >
                            <HiDownload className="w-4 h-4 opacity-60" />
                            {cv.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResumeDownload;
