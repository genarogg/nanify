'use client';

import React, { useState, useLayoutEffect, useInsertionEffect, useEffect } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { $ } from "../../functions"
import styles from './Img.module.css';

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
    sizes?: string;
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
    sizes = "(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px",
}) => {
    const [svgBackground, setSvgBackground] = useState<string | null | any>(null);
    const [isLoad, setIsLoad] = useState<boolean>(true);

    useInsertionEffect(() => {
        if (typeof src === 'string' && src.startsWith('http')) {
            fetch(`/api/getBase64?url=${encodeURIComponent(src)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.svg) {
                        setSvgBackground(data.svg);
                        setIsLoad(false);
                    }
                })
                .catch(error => {
                    console.error('Error fetching SVG:', error);
                });
        }
    }, [src]);

    useEffect(() => {
        const conteiner = $(id + "Conteiner");
        const img = $(id + "Img");
        const ghost = $(id + "ghost");

      
        if (img && conteiner && ghost) {
            
            conteiner.style.width = img.offsetWidth + "px";
            conteiner.style.height = img.offsetHeight + "px";
            ghost.style.width = img.offsetWidth + "px";
            ghost.style.height = img.offsetHeight + "px";

            img.style.opacity = "1";
        }
    }, [isLoad]);

    if (isLoad) {
        return <></>
    }

    return (
        <div
            style={{
                backgroundImage: `url(${svgBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width,
                height,
                position: 'relative',
            }}
            className={`${styles.responsiveImage}`}
            id={id + "Conteiner"}
        >
            <Image
                src={src}
                alt={alt}
                id={id + "Img"}
                className={`${className} ${styles.responsiveImage} ${styles.fadeIn}`}
                placeholder={placeholder}
                blurDataURL={svgBackground}
                width={width}
                height={height}
                loading={loading}
                priority={priority}
                quality={quality}
                style={{ position: 'absolute' }}
                sizes={sizes}
            />
            <div className={`${styles.responsiveImage}`} style={{ width, height }} id={id + "ghost"} ></div>
        </div>
    );
};

export default Img;