import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyBackgroundImageProps {
  src: string;
  blurDataURL?: string | null;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  children?: ReactNode;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  backgroundPosition?: string;
  backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
  style?: React.CSSProperties;
}

const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  src,
  blurDataURL = null,
  className = '',
  width = 300,
  height,
  aspectRatio,
  children,
  backgroundSize = 'cover',
  backgroundPosition = 'center',
  backgroundRepeat = 'no-repeat',
  style = {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [bgImage, setBgImage] = useState<string | null>(blurDataURL || null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width,
    height: height || width * (aspectRatio ? 1 / aspectRatio : 2 / 3)
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Función para calcular dimensiones manteniendo proporción
  const calculateDimensions = (imgWidth: number, imgHeight: number, maxWidth: number, maxHeight?: number) => {
    const imgAspectRatio = imgWidth / imgHeight;
    
    if (maxHeight) {
      const widthBasedHeight = maxWidth / imgAspectRatio;
      const heightBasedWidth = maxHeight * imgAspectRatio;
      
      if (widthBasedHeight <= maxHeight) {
        return { width: maxWidth, height: widthBasedHeight };
      } else {
        return { width: heightBasedWidth, height: maxHeight };
      }
    } else {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
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
        setBgImage(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        console.error('Error loading background image:', src);
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
    <div className={`lazy-bg__skeleton ${isLoaded ? 'lazy-bg__skeleton--fade-out' : ''}`}>
      <div className="lazy-bg__skeleton-content">
        <svg 
          className="lazy-bg__skeleton-icon" 
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

  const containerStyle: React.CSSProperties = {
    width: dimensions.width,
    height: dimensions.height,
    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    ...style
  };

  return (
    <>
      <style jsx>{`
        .lazy-bg {
          position: relative;
          overflow: hidden;
          display: inline-block;
          transition: background-image 3s ease-in-out;
        }

        .lazy-bg--loaded {
          filter: none;
        }

        .lazy-bg--blur {
          filter: blur(4px);
          transform: scale(1.02);
          transition: filter 3s ease-in-out, transform 3s ease-in-out;
        }

        .lazy-bg__skeleton {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #d1d5db;
          border-radius: 8px;
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          transition: opacity 3s ease-in-out;
          z-index: 1;
        }

        .lazy-bg__skeleton--fade-out {
          opacity: 0;
        }

        .lazy-bg__skeleton-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .lazy-bg__skeleton-icon {
          width: 32px;
          height: 32px;
          color: #9ca3af;
        }

        .lazy-bg__content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lazy-bg__overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.1);
          transition: opacity 3s ease-in-out;
          z-index: 1;
        }

        .lazy-bg__overlay--fade-out {
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
          .lazy-bg__skeleton-icon {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className={`lazy-bg ${className} ${
          isLoaded 
            ? 'lazy-bg--loaded' 
            : blurDataURL 
              ? 'lazy-bg--blur' 
              : ''
        }`}
        style={containerStyle}
        {...props}
      >
        {/* Skeleton - solo se muestra si no hay blurDataURL */}
        {!isInView && !blurDataURL && <Skeleton />}
        
        {/* Skeleton que aparece cuando está cargando */}
        {isInView && !blurDataURL && !isLoaded && <Skeleton />}
        
        {/* Overlay para suavizar la transición del blur */}
        {blurDataURL && !isLoaded && (
          <div className={`lazy-bg__overlay ${isLoaded ? 'lazy-bg__overlay--fade-out' : ''}`} />
        )}
        
        {/* Contenido del componente */}
        {children && (
          <div className="lazy-bg__content">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default LazyBackgroundImage;