'use client';
import React from 'react';

import SimpleTitle from "@/components/OLD/sections/simple-title";
import "./_style.scss";

interface TwoColumnsProps {
    left: React.ReactNode;
    right: React.ReactNode;
    className?: string;
    leftClassName?: string;
    rightClassName?: string;
    id?: string;
    title?: string;
    titleId?: string;
    titleClassName?: string;
    reorder?: boolean;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({
    left,
    right,
    className = "",
    leftClassName = "",
    rightClassName = "",
    id = "",
    title,
    titleId,
    titleClassName,
    reorder = false,
}) => {
    return (
        <div className={`column-layout two-column ${className} ${reorder ? "reorder" : null}`} id={id}>
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

            <div className={`box right ${rightClassName}`}>
                {right}
            </div>
        </div>
    );
};

export default TwoColumns;