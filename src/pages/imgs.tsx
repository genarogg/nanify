import React from 'react'
import Image from 'next/image';

interface imgsProps {

}

const imgs: React.FC<imgsProps> = () => {
    return (
        <>
            <Image
                src="/img.png"
                alt="img"
                fill
                // width={500} 
                // height={700} 
                placeholder="blur"
            />
        </>
    );
}

export default imgs;