'use client';

import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImgProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
    src: string;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
}

const Img: React.FC<ImgProps> = ({
    src,
    alt,
    blurDataURL = '',
    placeholder = 'blur',
    width = 1920,
    height = 1080,
    className = '',
    priority = false,
    loading = 'lazy',
    quality = 90,
}) => {
    const [blurData, setBlurData] = useState<string | undefined>(blurDataURL);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlurData = async () => {
            try {
                const response = await fetch(`/api/getBase64?url=${encodeURIComponent(src)}`);
                console.log(response)
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                const data = await response.json();
                setBlurData(data.base64);
            } catch (error) {
                console.error('Error fetching blur data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!blurDataURL) {
            fetchBlurData();
        } else {
            setIsLoading(false);
        }
    }, [src, blurDataURL]);


    return (
        <Image
            src={src}
            alt={alt}
            id={id + "-monstrar"}
            className={className}
            placeholder={placeholder}
            blurDataURL={blurData}
            layout={layout}
            width={width}
            height={height}
            objectFit={objectFit}
            loading={loading}
            priority={priority}
            quality={quality}
        />
    );
};

export default Img;
