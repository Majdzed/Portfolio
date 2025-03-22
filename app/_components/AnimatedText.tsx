import React, { useEffect, useState } from 'react';

type AnimatedTextProps = {
    text: string;
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length-1) {
                setDisplayText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust the speed of the animation (50ms per letter)

        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
};

export default AnimatedText;