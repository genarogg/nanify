interface ImgProps {
    type?: 'remote' | 'local' | 'bg';
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
    style?: any
    children?: React.ReactNode;
}

export default ImgProps;