import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    blurDataURL?: string | null;
    className?: string;
    width?: number;
    height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt = '',
    blurDataURL = null,
    className = '',
    width = 300,
    height = 200,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isInView, setIsInView] = useState<boolean>(false);
    const imgRef = useRef<HTMLDivElement>(null);
    const [imgSrc, setImgSrc] = useState<string | null | any>(blurDataURL || null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isInView && src) {
            const img = new Image();
            img.onload = () => {
                setImgSrc(src);
                setIsLoaded(true);
            };
            img.src = src;
        }
    }, [isInView, src]);

    const Skeleton: React.FC = () => (
        <div
            className="animate-pulse bg-gray-300 rounded"
            style={{ width, height }}
        >
            <div className="flex items-center justify-center h-full">
                <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className}`}
            style={{ width, height }}
        >
            {/* Skeleton - solo se muestra si no hay blurDataURL */}
            {!isInView && !blurDataURL && <Skeleton />}

            {/* Imagen con blur o imagen real */}
            {(imgSrc || blurDataURL) && (
                <img
                    src={imgSrc}
                    alt={alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${isLoaded
                            ? 'opacity-100 filter-none'
                            : blurDataURL
                                ? 'opacity-100 filter blur-sm scale-110'
                                : 'opacity-0'
                        }`}
                    style={{
                        transition: 'opacity 0.7s ease-in-out, filter 0.7s ease-in-out, transform 0.7s ease-in-out'
                    }}
                    {...props}
                />
            )}

            {/* Overlay para suavizar la transición del blur */}
            {blurDataURL && !isLoaded && (
                <div className="absolute inset-0 bg-white bg-opacity-10" />
            )}
        </div>
    );
};


export default LazyImage;
