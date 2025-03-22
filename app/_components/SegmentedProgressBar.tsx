import React from 'react';

type SegmentedProgressBarProps = {
    level: number; // Level of skill (e.g., 3 out of 5)
    totalSegments: number; // Total number of segments (e.g., 5)
    filledColor?: string; // Color for filled segments
    unfilledColor?: string; // Color for unfilled segments
};

const SegmentedProgressBar = ({
    level,
    totalSegments,
    filledColor , // Default filled color
    unfilledColor = 'bg-gray-700', // Default unfilled color
}: SegmentedProgressBarProps) => {
    return (
        <div className="flex gap-1 mx-auto">
            {[...Array(totalSegments)].map((_, index) => (
                <div
                    key={index}
                    className={`h-4 w-8 ${index < level ? filledColor : unfilledColor}`}
                />
            ))}
        </div>
    );
};

export default SegmentedProgressBar;