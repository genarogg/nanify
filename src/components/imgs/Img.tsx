import React from 'react';
import Image from 'next/image';
import getBase64 from './getBase64';

interface ImgProps {
    src: string | any;
    alt: string;
    placeholder?: any;
    blurDataURL?: string;
    layout?: string;
    width?: number;
    height?: number;
    objectFit?: string;
    loading?: "lazy" | "eager" | undefined;
    priority?: boolean;
    quality?: number;
}

const Img: React.FC<ImgProps> = async (
    {
        src,
        alt,
        placeholder = 'blur',
        blurDataURL = '',
        layout = 'responsive',
        width = 1920,
        height = 1080,
        loading = 'lazy',
        objectFit = 'cover',
        priority = false,
        quality = 90
    }
) => {
    const blurData = blurDataURL || await getBase64(src);

    return (
        <Image
            id="img"
            src={src}
            alt={alt}
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
}

export default Img;