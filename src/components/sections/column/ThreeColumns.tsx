'use client';
import React from 'react';

import SimpleTitle from "@secctions/simple-title";
import "./_style.scss";

interface ThreeColumnsProps {
    left: React.ReactNode;
    center: React.ReactNode;
    right: React.ReactNode;
    className?: string;
    leftClassName?: string;
    centerClassName?: string;
    rightClassName?: string;
    id?: string;
    titleSection?: string;
    titleId?: string;
    titleClassName?: string;
}

const ThreeColumns: React.FC<ThreeColumnsProps> = ({
    left,
    center,
    right,
    className = "",
    leftClassName = "",
    centerClassName = "",
    rightClassName = "",
    id = "",
    titleSection,
    titleId,
    titleClassName,
}) => {
    return (
        <div className={`column-layout three-columns ${className}`} id={id}>
            {titleSection && (
                <SimpleTitle
                    titulo={titleSection}
                    id={titleId}
                    className={`simple-title three-columns-title ${titleClassName}`}
                />
            )}
            <div className={`box left ${leftClassName}`}>
                {left}
            </div>
            <div className={`box center ${centerClassName}`}>
                {center}
            </div>
            <div className={`box right ${rightClassName}`}>
                {right}
            </div>
        </div>
    );
};

export default ThreeColumns;