import React from 'react';
import ImgRemote from './ImgRemote';
import ImgProps from './ImgProps';

const Img: React.FC<ImgProps> = ({
    src,
    alt,
    id = "",
    type,
    blurDataURL,
    placeholder = 'blur',
    width = 1920,
    height = 1080,
    className = "",
    priority = false,
    loading = 'lazy',
    quality = 90,
    sizes
}) => {

    switch (type) {
        case 'remote':
            return (
                <ImgRemote
                    src={src}
                    alt={alt}
                    id={id}
                    width={width}
                    height={height}
                    className={className}
                    blurDataURL={blurDataURL}
                    placeholder={placeholder}
                    priority={priority}
                    loading={loading}
                    quality={quality}
                    sizes={sizes}
                />
            );
        default:
            return <>sucedio un error en img switch</>;
    }
};

export default Img;