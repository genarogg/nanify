'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';
import { $ } from "../../functions"
import styles from './img.module.css';
import ImgProps from './ImgProps';

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

            setTimeout(() => {
                conteiner.style.backgroundImage = "initial";
            }, 1500);

        }
    }, []);

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

        >

            <>
                <div
                    style={{
                        backgroundImage: `url(${src.blurDataURL})`,
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
                            blurDataURL={src.blurDataURL}
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

        </div>
    );
};

export default Img;