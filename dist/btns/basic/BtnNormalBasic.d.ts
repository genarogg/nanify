import React from 'react';

interface BtnNormalBasicProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    id?: string;
}
declare const BtnNormalBasic: React.FC<BtnNormalBasicProps>;

export { BtnNormalBasic as default };
