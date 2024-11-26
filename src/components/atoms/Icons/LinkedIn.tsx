import React from 'react';

interface LinkedInIconProps {
    size?: number;
    color?: string;
    strokeWidth?: number;
}

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    );
};

export default LinkedInIcon;

