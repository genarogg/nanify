interface ImgProps {
    type?: 'remote' | 'local';
    src: string | any;
    alt: string;
    id?: string;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    loading?: 'eager' | 'lazy';
    quality?: number;
    sizes?: string;
}

export default ImgProps;