// components/FallingStars.tsx
'use client'

import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
}

interface FallingStarsProps {
    starCount?: number;
    minSpeed?: number;
    maxSpeed?: number;
    minSize?: number;
    maxSize?: number;
}

const FallingStars: React.FC<FallingStarsProps> = ({
    starCount = 50,
    minSpeed = 0.1,
    maxSpeed = 0.5,
    minSize = 1,
    maxSize = 3,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full screen
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight;

            // Initialize stars
            createStars();
        };

        // Create initial stars
        const createStars = () => {
            starsRef.current = [];
            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: minSize + Math.random() * (maxSize - minSize),
                    speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
                    opacity: 0.1 + Math.random() * 0.9,
                });
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach((star) => {
                // Draw star
                ctx.fillStyle = `rgba(255, 255, 255, 255)`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Move star
                star.y += star.speed;

                // If star reaches bottom, reset to top
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [starCount, minSpeed, maxSpeed, minSize, maxSize]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'transparent',
                pointerEvents: 'none',
            }}
        />
    );
};

export default FallingStars;