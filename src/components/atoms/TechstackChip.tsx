import React from 'react'

interface TechstackChipProps {
    size: string;
    color: string;
    text: string;
}

const TechstackChip: React.FC<TechstackChipProps> = ({ size, color, text }) => {
    return (
        <div className={`text-${size} bg-${color} py-1 px-3 rounded-full inline-block`}>
            {text}
        </div>
    )
}

export default TechstackChip