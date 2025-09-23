'use client'
import React from 'react'
import TwoColumns from '@/OLD/sections/column/TwoColumns'

interface pageProps {

}

const page: React.FC<pageProps> = () => {

    const left = <div>Left</div>;
    const right = <div>Right</div>;
    const title = "Nanify two columns";

    return (
        <>
            <TwoColumns
                title={title}
                left={left}
                right={right}
                className="two-columns"
                leftClassName="left-column"
                rightClassName="right-column"
            />
            <TwoColumns
                reorder={true}
                left={left}
                right={right}
                className="two-columns"
                leftClassName="left-column"
                rightClassName="right-column"
            />
            <TwoColumns
                left={left}
                right={right}
                className="two-columns"
                leftClassName="left-column"
                rightClassName="right-column"
            />
        </>
    );
}

export default page;