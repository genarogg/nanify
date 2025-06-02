'use client'
import React from 'react'
import { Img } from "@nano"
import { bluorData } from "./data"

interface pageProps {

}

const page: React.FC<pageProps> = () => {

    const img = "/img/wallpaper/demo-1.jpg";

    return (
        <>
            <Img
                src={img}
                blurDataURL={bluorData}
                width={1900}
                height={1060}
            >
                <h1 style={{ color: "#fff" }}>HolaMundo</h1>
            </Img>
            <Img
                src={img}
                width={1900}
                height={1060}
                blurDataURL={bluorData}
            />
        </>
    );
}

export default page;