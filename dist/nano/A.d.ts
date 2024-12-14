import React from 'react';

interface AProps {
    href: string;
    type?: string;
    children?: React.ReactNode;
    className?: string;
}
declare const A: React.FC<AProps>;

export { A as default };
