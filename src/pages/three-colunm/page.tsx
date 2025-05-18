'use client'
import React from 'react'
import ThreeColumns from '@components/sections/column/ThreeColumns'

interface pageProps {

}

const page: React.FC<pageProps> = () => {
    return (
        <ThreeColumns
            title="Nanify three columns"
            left={<div>Left</div>}
            centerLeft={<div>Center Left</div>}
            centerRight={<div>Center Right</div>}
            right={<div>Right</div>}
            className="three-columns"
            leftClassName="left-column"
            centerLeftClassName="center-left-column"
            centerRightClassName="center-right-column"
            rightClassName="right-column"
        />
    );
}

export default page;