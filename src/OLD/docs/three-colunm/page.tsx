'use client'
import React from 'react'
import ThreeColumns from '@/OLD/sections/column/ThreeColumns'

interface pageProps {

}

const page: React.FC<pageProps> = () => {

    const left = <div>Left</div>;
    const centerLeft = <div>Center Left</div>;
    const centerRight = <div>Center Right</div>;
    const right = <div>Right</div>;

    return (
        <ThreeColumns
            title="Nanify three columns"
            left={left}
            centerLeft={centerLeft}
            centerRight={centerRight}
            right={right}
            className="three-columns"
            leftClassName="left-column"
            centerLeftClassName="center-left-column"
            centerRightClassName="center-right-column"
            rightClassName="right-column"
        />
    );
}

export default page;