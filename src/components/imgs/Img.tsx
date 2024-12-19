import React from 'react'
import Image from 'next/image';

interface ImgLocalProps {
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

const ImgLocal: React.FC<ImgLocalProps> = (
    {
        src,
        alt,
        placeholder = 'blur',
        blurDataURL = "",
        layout = 'responsive',
        width = 1920,
        height = 1080,
        loading = 'lazy',
        objectFit = 'cover',
        priority = false,
        quality = 90
    }
) => {
    return (
        <Image
            src={src}
            alt={alt}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
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

export default ImgLocal;