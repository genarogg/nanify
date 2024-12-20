'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface ImgProps {
    src: string | StaticImageData;
    alt: string;
    id?: string;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    loading?: ImageProps['loading'];
    quality?: number;
}

const Img: React.FC<ImgProps> = ({
    src,
    alt,
    id = "",
    blurDataURL,
    placeholder = 'blur',
    width = 1920,
    height = 1080,
    className = "",
    priority = false,
    loading = 'lazy',
    quality = 90,
}) => {

    let base64 = blurDataURL;

    if (src.toString().includes('http') && blurDataURL === undefined) {
        base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPwd/db1VL//+Ot/2/vMqRFx86eN2/3xg1+FnYMptauJe29M5pbFRgYAI6CEfe240IDAAAAAElFTkSuQmCC"
    }

    return (
        <>
            <Image
                src={base64 || ""}
                alt={alt}
                id={id + "-monstrar"}
                className={className}
                placeholder={placeholder}
                blurDataURL={base64}
                layout="responsive"
                width={width}
                height={height}
                objectFit="cover"
                loading={loading}
                priority={priority}
                quality={quality}
            />
        </>
    );
};

export default Img;
