import React from 'react';
import Image from 'next/image';
import getBase64 from './getBase64';

interface ImgProps {
    src: string | any;
    alt: string;
    id: string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    priority?: boolean;
    quality?: number;
}

const Img: React.FC<ImgProps> = async (
    {
        src,
        alt,
        id,
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
            src={blurData}
            alt={alt}
            id="img"
            placeholder={placeholder}
            blurDataURL={blurData}
            layout={layout}
            width={width}
            height={height}
            objectFit={objectFit}
            loading={loading}
            priority={priority}
            quality={quality}
            style={{ transition: "all ease 2s" }}
        />
    );
}

export default Img;