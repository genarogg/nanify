'use client'
import React from 'react'

interface TwoColumnProps {
    left: React.ReactNode;
    right: React.ReactNode;
    className?: string;
    leftClassName?: string;
    rightClassName?: string;
    id?: string;
}

const TwoColumn: React.FC<TwoColumnProps> = ({
    left,
    right,
    className = "",
    leftClassName = "",
    rightClassName = "",
    id = ""
}) => {
    return (
        <div className={`two-column ${className}`} id={id}>
            <div className={`box left ${leftClassName}`}>
                {left}
            </div>
            <div className={`box right ${rightClassName}`}>
                {right}
            </div>
        </div>
    );
}
export default TwoColumn;