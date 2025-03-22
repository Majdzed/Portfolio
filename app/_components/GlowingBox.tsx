import React from 'react';

type Props = {
    color: string;
    borderColor : string;
    boxShadow : string;
    text : string,
};

const GlowingBox = (props: Props) => {
    const glowingStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center content horizontally
        padding: '12px 24px', // Smaller padding for mobile
        gap: '10px',
        width: '100%', // Full width on mobile
        maxWidth: '307.89px', // Max width for larger screens
        height: 'auto', // Auto height for flexibility
        background: `${props.color}`,
        border: `1px solid props.borderColor`,
        boxShadow: `0px 8px 30px ${props.boxShadow}`,
        borderRadius: '4px',
        flex: 'none',
        order: 1,
        flexGrow: 0,
    };

    return (
        <div
            style={glowingStyle}
            className='text-white font-[family-name:var(--font-pixels)] text-sm md:text-base lg:text-xl p-2 md:p-4'
        >
            {props.text}
        </div>
    );
};

export default GlowingBox;