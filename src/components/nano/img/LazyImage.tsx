import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    blurDataURL?: string | null;
    className?: string;
    width?: number;
    height?: number;
    aspectRatio?: number; // Nueva prop para relación de aspecto
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt = '',
    blurDataURL = null,
    className = '',
    width = 300,
    height,
    aspectRatio,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isInView, setIsInView] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState<string | null | any>(blurDataURL || null);
    const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
        width,
        height: height || width * (aspectRatio ? 1 / aspectRatio : 2 / 3) // Default 3:2 aspect ratio
    });
    const imgRef = useRef<HTMLDivElement>(null);

    // Función para calcular dimensiones manteniendo proporción
    const calculateDimensions = (imgWidth: number, imgHeight: number, maxWidth: number, maxHeight?: number) => {
        const imgAspectRatio = imgWidth / imgHeight;

        if (maxHeight) {
            // Si se proporciona tanto width como height, usar el que produzca una imagen más pequeña
            const widthBasedHeight = maxWidth / imgAspectRatio;
            const heightBasedWidth = maxHeight * imgAspectRatio;

            if (widthBasedHeight <= maxHeight) {
                return { width: maxWidth, height: widthBasedHeight };
            } else {
                return { width: heightBasedWidth, height: maxHeight };
            }
        } else {
            // Solo width proporcionado, calcular height basado en la proporción de la imagen
            return { width: maxWidth, height: maxWidth / imgAspectRatio };
        }
    };

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
                // Calcular dimensiones reales basadas en la imagen cargada
                const newDimensions = calculateDimensions(img.naturalWidth, img.naturalHeight, width, height);
                setDimensions(newDimensions);
                setImgSrc(src);
                setIsLoaded(true);
            };
            img.onerror = () => {
                // En caso de error, mantener dimensiones por defecto
                console.error('Error loading image:', src);
            };
            img.src = src;
        }
    }, [isInView, src, width, height]);

    // Actualizar dimensiones iniciales si cambian las props
    useEffect(() => {
        if (!isLoaded) {
            const initialHeight = height || width * (aspectRatio ? 1 / aspectRatio : 2 / 3);
            setDimensions({ width, height: initialHeight });
        }
    }, [width, height, aspectRatio, isLoaded]);

    const Skeleton: React.FC = () => (
        <div
            className="lazy-image__skeleton"
            style={{ width: dimensions.width, height: dimensions.height }}
        >
            <div className="lazy-image__skeleton-content">
                <svg
                    className="lazy-image__skeleton-icon"
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
        <>
            <style>{`
        .lazy-image {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .lazy-image__skeleton {
          background-color: #d1d5db;
          border-radius: 8px;
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .lazy-image__skeleton-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .lazy-image__skeleton-icon {
          width: 32px;
          height: 32px;
          color: #9ca3af;
        }

        .lazy-image__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 3s ease-in-out, filter 3s ease-in-out, transform 3s ease-in-out;
        }

        .lazy-image__img--loaded {
          opacity: 1;
          filter: none;
          transform: scale(1);
        }

        .lazy-image__img--blur {
          opacity: 1;
          filter: blur(4px);
          transform: scale(1.1);
        }

        .lazy-image__img--hidden {
          opacity: 0;
        }

        .lazy-image__skeleton {
          background-color: #d1d5db;
          border-radius: 8px;
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          transition: opacity 3s ease-in-out;
        }

        .lazy-image__skeleton--fade-out {
          opacity: 0;
        }

        .lazy-image__overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.1);
          transition: opacity 3s ease-in-out;
        }

        .lazy-image__overlay--fade-out {
          opacity: 0;
        }

        @keyframes skeleton-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .lazy-image__skeleton-icon {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>

            <div
                ref={imgRef}
                className={`lazy-image ${className}`}
                style={{ width: dimensions.width, height: dimensions.height }}
            >
                {/* Skeleton - solo se muestra si no hay blurDataURL */}
                {!isInView && !blurDataURL && <Skeleton />}

                {/* Skeleton que aparece incluso con imagen cargada y hace fade out */}
                {isInView && !blurDataURL && !isLoaded && <Skeleton />}

                {/* Imagen con blur o imagen real */}
                {(imgSrc || blurDataURL) && (
                    <img
                        src={imgSrc}
                        alt={alt}
                        className={`lazy-image__img ${isLoaded
                                ? 'lazy-image__img--loaded'
                                : blurDataURL
                                    ? 'lazy-image__img--blur'
                                    : 'lazy-image__img--hidden'
                            }`}
                        {...props}
                    />
                )}

                {/* Overlay para suavizar la transición del blur */}
                {blurDataURL && !isLoaded && (
                    <div className={`lazy-image__overlay ${isLoaded ? 'lazy-image__overlay--fade-out' : ''}`} />
                )}
            </div>
        </>
    );
};

export default LazyImage;