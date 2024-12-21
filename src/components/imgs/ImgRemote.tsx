'use client';

import React, { useState, useInsertionEffect, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image';
import { $ } from "../../functions"
import styles from './img.module.css';
import ImgProps from './ImgProps';

import svg from "./svg"

const Img: React.FC<ImgProps> = ({
    src,
    alt,
    id,
    blurDataURL,
    placeholder,
    width,
    height,
    className,
    priority,
    loading,
    quality,
    sizes,
    style
}) => {


    const [svgBackground, setSvgBackground] = useState<string | null | any>(blurDataURL ? svg({ base64: blurDataURL }) : null);
    const [isLoad, setIsLoad] = useState<boolean>(blurDataURL ? false : true);


    useInsertionEffect(() => {

        if (typeof src === 'string' && src.startsWith('http') && !blurDataURL) {
            fetch(`/api/getBase64?url=${encodeURIComponent(src)}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.data) {
                        setSvgBackground(svg({ base64: data.data }));
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

    return (
        <div
            style={{
                width,
                height,
                position: 'relative',
                overflow: 'hidden',
                ...style
            }}
            className={`${styles.responsiveImage}`}
            id={id + "Conteiner"}
        >
            {isLoad ? (
                <Skeleton
                    width={width}
                    height={height}
                    baseColor="#f0f0f0"
                    highlightColor="#000"
                    duration={1.5}
                />
            ) : (
                <>
                    <div
                        style={{
                            backgroundImage: `url(${svgBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width,
                            height,
                            position: 'relative',
                            overflow: 'hidden',
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
                        <div
                            className={`${styles.responsiveImage}`}
                            style={{ width, height }}
                            id={id + "ghost"} >
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Img;