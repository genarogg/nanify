'use client';

import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { $ } from "../../functions"
import styles from './img.module.css';

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
    loading?: 'eager' | 'lazy';
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
    className = "hola",
    priority = false,
    loading = 'lazy',
    quality = 90,
}) => {

    let base64: string | undefined = blurDataURL || (typeof src === 'string' ? src : undefined);

    if (typeof src === 'string' && src.includes('http') && blurDataURL === undefined) {
        base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPwd/db1VL//+Ot/2/vMqRFx86eN2/3xg1+FnYMptauJe29M5pbFRgYAI6CEfe240IDAAAAAElFTkSuQmCC";
    }

    const handleLoadingComplete = () => {
        const monstrarElement = $(`${id}-monstrar`);
        const hiddenElement = $(`${id}-hidden`);
        if (monstrarElement && hiddenElement) {
            (monstrarElement as HTMLImageElement).src = (hiddenElement as HTMLImageElement).src;
            monstrarElement.classList.add(styles.show);
        }
    };

    return (
        <>
            <Image
                src={base64 || src}
                alt={alt}
                id={id + "-monstrar"}
                className={`${className} ${styles.fadeIn} ${styles.responsiveImage}`}
                placeholder={placeholder}
                blurDataURL={base64 === src ? undefined : base64}
                width={width}
                height={height}
                loading={loading}
                priority={priority}
                quality={quality}
                onLoad={handleLoadingComplete}
            />
            <Image
                src={src}
                alt={alt}
                id={id + "-hidden"}
                className={className}
                placeholder={placeholder}
                blurDataURL={base64 === src ? undefined : base64}
                width={width}
                height={height}
                loading={loading}
                priority={priority}
                quality={quality}
                style={{ display: "none" }}
            />

        </>
    );
};

export default Img;
