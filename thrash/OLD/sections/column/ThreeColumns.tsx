'use client';
import React from 'react';

import SimpleTitle from "@/OLD/sections/simple-title";
import "./_style.scss";

interface ThreeColumnsProps {
    left?: React.ReactNode;
    centerLeft?: React.ReactNode;
    centerRight?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
    leftClassName?: string;
    centerLeftClassName?: string;
    centerRightClassName?: string;
    rightClassName?: string;
    id?: string;
    title?: string;
    titleId?: string;
    titleClassName?: string;
}

const ThreeColumns: React.FC<ThreeColumnsProps> = ({
    left,

    right,
    className = "",
    leftClassName = "",
    centerLeft,
    centerLeftClassName = "",
    centerRight,
    centerRightClassName = "",
    rightClassName = "",
    id = "",
    title,
    titleId,
    titleClassName,
}) => {
    return (
        <div className={`column-layout three-column ${className}`} id={id}>
            {title && (
                <SimpleTitle
                    titulo={title}
                    id={titleId}
                    className={`simple-title ${titleClassName}`}
                />
            )}
            <div className={`box left ${leftClassName}`}>
                {left}
            </div>
            <div className={`box center-left ${centerLeftClassName}`}>
                {centerLeft}
            </div>
            <div className={`box center-right ${centerRightClassName}`}>
                {centerRight}
            </div>
            <div className={`box right ${rightClassName}`}>
                {right}
            </div>
        </div>
    );
};

export default ThreeColumns;